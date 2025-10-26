# Texas Courtroom Assistance Program Website

## Project Overview
Modern, responsive website for the Texas Courtroom Assistance Program (CAP), built using Tailwind CSS and Swiper.js. This site provides free legal assistance information to parents and guardians in Texas.

## Technology Stack
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Swiper.js v11** - Modern carousel/slider
- **JavaScript** - Custom form validation
- **Fonts**: Google Fonts (Roboto, Montserrat, Raleway)

## Color Scheme (from original txcap.org)
- Primary Navigation: `#152744` (Dark blue)
- Secondary: `#135280` (Medium blue)
- Hover/Accent: `#113a58` (Darker blue)
- Background: `#EEE` (Light gray)
- Text: `#444`

## Project Structure
```
txcap-website/
├── index.html                 ✅ COMPLETE - Home page with carousel and contact form
├── about.html                 ✅ COMPLETE - About CAP program
├── blog.html                  ❌ TO DO - Blog listing page
├── faq.html                   ❌ TO DO - Frequently Asked Questions
├── topics.html                ❌ TO DO - Topics page
├── privacy-policy.html        ❌ TO DO - Privacy Policy
├── terms-of-use.html          ❌ TO DO - Terms of Use
├── district-clerk-offices-near-houston-texas.html  ❌ TO DO
├── robots.txt                 ✅ COMPLETE
├── sitemap.xml                ✅ COMPLETE
├── tailwind.config.js         ✅ COMPLETE
├── assets/
│   ├── css/
│   │   └── style.css          ✅ COMPLETE - Custom styles
│   └── js/
│       └── script.js          ✅ COMPLETE - Form validation
└── images/                    ✅ COMPLETE - All logos and blog images copied
    ├── logo.png
    ├── favicon.png
    ├── favicon-32x32.png
    ├── slider_pic_1.png
    └── [subdirectories with blog images]
```

## Completed Features ✅

### 1. Base Structure
- Responsive header with logo and tagline
- Navigation bar with dropdown support
- Footer with disclaimers and copyright
- Consistent layout across pages

### 2. Contact Form (on all pages)
**Full validation implemented:**
- ✅ First & Last Name: Minimum 1 character, letters only
- ✅ Phone Number: 10-digit US format with auto-formatting `(555) 123-4567`
- ✅ Email: Optional but validated if provided
- ✅ Message: 30-500 character limit with live counter
- ✅ Submit button disabled until all validation passes
- ✅ Fake submission with success message (displays 5 seconds, then resets)
- ✅ No reCAPTCHA or external dependencies

### 3. Carousel
- Swiper.js implementation
- Auto-play (7-second intervals)
- Navigation arrows and pagination dots
- Responsive design

### 4. Assets
- ✅ All images copied from source (logo, favicon, slider, blog images)
- ✅ Custom CSS with txcap color scheme
- ✅ Form validation JavaScript
- ✅ Tailwind configuration

### 5. SEO
- ✅ robots.txt configured
- ✅ sitemap.xml with all pages
- ✅ Meta descriptions on pages
- ✅ Semantic HTML5

## Remaining Tasks ❌

### High Priority Pages
1. **faq.html** - Extract FAQ content from txcap-website-wpengine/txcap.org/faq/
2. **blog.html** - Create blog listing page
3. **topics.html** - Topics page with content from source

### Blog Post Pages (9 total)
Content to extract from `txcap-website-wpengine/txcap.org/`:
1. **determining-child-custody-texas.html**
2. **understanding-fathers-rights-texas.html**
3. **get-custody-children-texas.html**
4. **establish-visitation-texas-children.html**
5. **child-custody-texas-parent-wants-move-child-state.html**
6. **child-custody-types-conservatorship-texas.html**
7. **valid-reasons-deny-visitation.html**
8. **abbott-signs-sweeping-child-welfare-overhaul-law.html**
9. **district-clerk-offices-near-houston-texas.html**

### Legal Pages
1. **privacy-policy.html** - Replace "Child Custody Legal Aid" with "Texas Courtroom Assistance Program"
2. **terms-of-use.html** - Same replacement

## Content Extraction Notes

### Source Files Location
Original content is in: `c:\Users\bobla\VisualStudioProjects\txcap-website-wpengine\txcap.org\`

### Content Cleanup Required
- ✅ Remove all phone numbers
- ✅ Remove Spanish language content/links
- ✅ Remove GTranslate widget
- ✅ Remove Google reCAPTCHA
- ✅ Remove AFCA Analytics
- ✅ Remove Count Per Day plugin references
- ✅ Keep Adobe Edge Web Fonts (Raleway, Montserrat)
- ✅ Use Roboto as primary font

### English Blog Posts Identified
Located in `/category/en-post/` and individual folders:
- All posts are child custody/visitation related
- Images are in `wp-content/uploads/2017/` (already copied)
- Content needs HTML extraction and reformatting

## Development Commands

### Local Development
Simply open HTML files in a browser. No build process required (using CDN for Tailwind and Swiper).

### Git Commands
```bash
cd c:\Users\bobla\VisualStudioProjects\txcap-website
git add .
git commit -m "Your message"
git push origin main
```

## Form Validation Details

### JavaScript Functions (in assets/js/script.js)
- `formatPhoneNumber()` - Auto-formats as user types
- `validatePhone()` - Ensures 10 digits
- `validateName()` - Ensures 1+ character
- `validateEmail()` - RFC 5322 compliant regex
- `updateSubmitButton()` - Enables/disables submit based on validation state

### Validation Rules
| Field | Required | Min | Max | Format |
|-------|----------|-----|-----|--------|
| First Name | Yes | 1 char | - | Letters only |
| Last Name | Yes | 1 char | - | Letters only |
| Phone | Yes | 10 digits | 10 digits | (###) ###-#### |
| Email | No | - | - | Valid email format |
| Message | Yes | 30 chars | 500 chars | Plain text |

## Design Specifications

### Typography
- **Body**: Roboto (400, 500, 700)
- **Headings**: Montserrat (400, 500, 700)
- **Accent**: Raleway (400, 500, 700)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Layout
- Container max-width: 960px
- Sidebar: 33% (4/12 columns on desktop)
- Main content: 67% (8/12 columns on desktop)

## Next Steps

1. **Create FAQ page** - Extract 20+ questions from source FAQ
2. **Create Blog listing** - Card layout with excerpts and images
3. **Create Topics page** - Simple content page
4. **Create blog post pages** - Extract content from 9 source files
5. **Create legal pages** - Privacy Policy and Terms of Use
6. **Final review** - Test all links, forms, responsive design
7. **Update sitemap** - Add any new pages
8. **Final commit and push to GitHub**

## Repository
- **GitHub**: https://github.com/apitrox/txcap-website
- **Branch**: main
- **Last Commit**: e7f8282 - "Initial implementation: Base structure with index, about, assets, images, sitemap, and robots.txt"

## Notes
- No external analytics or tracking
- No phone numbers displayed
- English-only content
- 501(c)(3) nonprofit disclaimers included
- All dependencies loaded via CDN (no npm/build process)
- Form submissions are fake (no backend integration)

---

**Created**: October 25, 2025  
**Last Updated**: October 25, 2025  
**Status**: 60% Complete - Core structure done, content pages in progress
