# HNG Stage 1 – Profile Card

A simple, accessible, and responsive **Profile Card, About Page and Contact Page** built using **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.

This project was created as part of **HNG Stage 1**, demonstrating understanding of accessibility, semantic markup, and responsiveness — all without using frontend frameworks.

---

## Features

- Semantic HTML structure (`article`, `header`, `figure`, `nav`, `section`, etc.)
- Accessible markup (keyboard focusable, `alt` text, `aria-labels`)
- Responsive layout (mobile, tablet, and desktop friendly)
- Real-time current time display using `Date.now()` in milliseconds
- Avatar display (default image, can be changed via URL or upload)
- Social media links open in new tabs (`target="_blank"`, `rel="noopener noreferrer"`)
- Lists for hobbies and dislikes

---

## Required Elements

Each visible element includes a `data-testid` for automated testing:

| Element                | Description                    | data-testid              |
| ---------------------- | ------------------------------ | ------------------------ |
| Profile card container | Wrapper element                | `test-profile-card`      |
| Name                   | User’s full name               | `test-user-name`         |
| Biography              | Short text about the user      | `test-user-bio`          |
| Current time           | Milliseconds from `Date.now()` | `test-user-time`         |
| Avatar                 | User photo                     | `test-user-avatar`       |
| Social links container | All social links               | `test-user-social-links` |
| Hobbies list           | List of hobbies                | `test-user-hobbies`      |
| Dislikes list          | List of dislikes               | `test-user-dislikes`     |

---

## About Me Page

An **About Me** page has been added to introduce the developer and showcase personal goals, areas for improvement, and reflections.

### Sections Included

| Section Name            | Description                                   | data-testid              |
| ----------------------- | --------------------------------------------- | ------------------------ |
| Bio                     | A short introduction about the developer      | `test-about-bio`         |
| Goals in This Program   | Developer goals and learning objectives       | `test-about-goals`       |
| Areas of Low Confidence | Topics where improvement is needed            | `test-about-confidence`  |
| Note to Future Self     | A motivational note to the developer’s future | `test-about-future-note` |
| Extra Thoughts          | Additional reflections or insights            | `test-about-extra`       |

The About page uses the same design theme, color scheme, and typography as the Profile Card, ensuring visual consistency across the project.

---

## Contact Page

A **Contact Us** page has been added to allow users to submit feedback or inquiries.  
The form includes validation handled with **vanilla JavaScript** — no external libraries.

### Validation Features

- Prevents native HTML validation using the `novalidate` attribute.
- Validates empty fields, invalid emails, and messages shorter than 10 characters.
- Uses regular expressions to validate email addresses.
- Displays error messages dynamically with inline styling.
- Shows a success message when all fields pass validation.

### Contact Form Elements

| Field Name | Description            | data-test-id           |
| ---------- | ---------------------- | ---------------------- |
| Name       | User’s name            | `test-contact-name`    |
| Email      | User’s email address   | `test-contact-email`   |
| Subject    | Message subject line   | `test-contact-subject` |
| Message    | Message content        | `test-contact-message` |
| Submit Btn | Form submission button | `test-contact-submit`  |

---

## Technologies Used

- **HTML5** – For semantic structure
- **CSS3 (Flexbox)** – For layout and responsiveness
- **JavaScript (Vanilla)** – For dynamic time display and form validation

---

## How to Run Locally

### 1. **Clone or download** this repository.

```bash
git clone https://github.com/lexizuchena/hng-frontend-1.git
```

### 2. Navigate into the project folder.

```bash
cd hng-frontend-1
```

### 3. Navigate into the project folder.

Open with live server or double click `index.html`

## Accessibility & Semantics

- All images include **descriptive `alt` attributes** for screen readers.
- **Keyboard navigation** is fully supported for all interactive elements.
- **Links** have visible focus styles and open safely in new tabs (`target="_blank"` with `rel="noopener noreferrer"`).
- Proper **HTML5 semantic tags** ensure clear document structure for assistive technologies.

## Author

**Alexander**  
Built for the [HNG Internship](https://hng.tech/internship)

---

## License

This project is open-source and available under the **MIT License**.
