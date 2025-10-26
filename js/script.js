// Form validation and functionality for Courtroom Assistance Program

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact_form');
    if (!form) return;
    
    const firstName = document.getElementById('First_Name');
    const lastName = document.getElementById('Last_Name');
    const phone = document.getElementById('Phone');
    const email = document.getElementById('Email');
    const situation = document.getElementById('Situation');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const charCount = document.getElementById('char-count');
    
    // Validation state
    let validationState = {
        firstName: false,
        lastName: false,
        phone: false,
        email: true, // Email is optional
        situation: false
    };
    
    // Phone number formatting
    function formatPhoneNumber(value) {
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;
        
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    
    // Phone number validation
    phone.addEventListener('input', function(e) {
        e.target.value = formatPhoneNumber(e.target.value);
        validatePhone();
    });
    
    function validatePhone() {
        const phoneNumber = phone.value.replace(/\D/g, '');
        const errorEl = document.getElementById('phone-error');
        
        if (phoneNumber.length === 10) {
            phone.classList.remove('error');
            phone.classList.add('valid');
            errorEl.classList.add('hidden');
            validationState.phone = true;
        } else {
            phone.classList.remove('valid');
            phone.classList.add('error');
            errorEl.textContent = 'Please enter a valid 10-digit US phone number';
            errorEl.classList.remove('hidden');
            validationState.phone = false;
        }
        updateSubmitButton();
    }
    
    // Name validation (at least 1 letter)
    function validateName(input, fieldName) {
        const errorEl = document.getElementById('name-error');
        const value = input.value.trim();
        
        if (value.length >= 1 && /[a-zA-Z]/.test(value)) {
            input.classList.remove('error');
            input.classList.add('valid');
            errorEl.classList.add('hidden');
            validationState[fieldName] = true;
        } else {
            input.classList.remove('valid');
            input.classList.add('error');
            errorEl.textContent = 'First and last name must contain at least 1 letter';
            errorEl.classList.remove('hidden');
            validationState[fieldName] = false;
        }
        updateSubmitButton();
    }
    
    firstName.addEventListener('input', function() {
        validateName(firstName, 'firstName');
    });
    
    lastName.addEventListener('input', function() {
        validateName(lastName, 'lastName');
    });
    
    // Email validation
    email.addEventListener('input', function() {
        const errorEl = document.getElementById('email-error');
        const value = email.value.trim();
        
        // Email is optional, but if provided must be valid
        if (value === '') {
            email.classList.remove('error', 'valid');
            errorEl.classList.add('hidden');
            validationState.email = true;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                email.classList.remove('error');
                email.classList.add('valid');
                errorEl.classList.add('hidden');
                validationState.email = true;
            } else {
                email.classList.remove('valid');
                email.classList.add('error');
                errorEl.textContent = 'Please enter a valid email address';
                errorEl.classList.remove('hidden');
                validationState.email = false;
            }
        }
        updateSubmitButton();
    });
    
    // Situation validation (30-500 characters)
    situation.addEventListener('input', function() {
        const errorEl = document.getElementById('situation-error');
        const value = situation.value.trim();
        const length = value.length;
        
        // Update character count
        charCount.textContent = `${length}/500`;
        
        // Enforce max length
        if (length > 500) {
            situation.value = situation.value.substring(0, 500);
            return;
        }
        
        if (length >= 30 && length <= 500) {
            situation.classList.remove('error');
            situation.classList.add('valid');
            errorEl.classList.add('hidden');
            validationState.situation = true;
        } else {
            situation.classList.remove('valid');
            situation.classList.add('error');
            if (length < 30) {
                errorEl.textContent = `Please enter at least 30 characters (${30 - length} more needed)`;
            }
            errorEl.classList.remove('hidden');
            validationState.situation = false;
        }
        updateSubmitButton();
    });
    
    // Update submit button state
    function updateSubmitButton() {
        const allValid = Object.values(validationState).every(v => v === true);
        submitBtn.disabled = !allValid;
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Double check validation
        const allValid = Object.values(validationState).every(v => v === true);
        if (!allValid) {
            return;
        }
        
        // Hide form and show success message
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Reset form after 5 seconds
        setTimeout(function() {
            form.reset();
            form.classList.remove('hidden');
            successMessage.classList.add('hidden');
            
            // Reset validation classes
            [firstName, lastName, phone, email, situation].forEach(input => {
                input.classList.remove('valid', 'error');
            });
            
            // Reset validation state
            validationState = {
                firstName: false,
                lastName: false,
                phone: false,
                email: true,
                situation: false
            };
            
            charCount.textContent = '0/500';
            updateSubmitButton();
        }, 5000);
    });
});
