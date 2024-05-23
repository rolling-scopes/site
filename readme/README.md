## Purpose
Our landing page provides the latest information about RS School courses, introduces our amazing instructors, and explains how you can join our community.

The website serves the following user groups:
- Future Students
- Current Students
- Mentors
- Teachers and RS Activists
- School Management
- Recruters & Officials: Individuals verifying the school's accreditation and viewing certificates.

UX Research: https://drive.google.com/file/d/1mRvVT7-DcE2OMdiPj8uwfE55e8lm2xpy/view?usp=sharing

### Maintaining High Standards at RS School

As a large front-end community and a full-stack development school, RS School is committed to following best practices and standards in web development and user experience. Our website reflects this commitment by maintaining high quality in design, structure, navigation, and mobile compatibility. Adhering to these standards is crucial, and our documentation provides the necessary guidelines to ensure effective collaboration and continuous improvement of our user experience.

### Essential Files

To ensure a smooth onboarding process and understand our procedures, please review these key files:

1. [`volunteering.md`](./volunteering.md): How to contribute to the project, roles for volunteers, and their contributions.
2. [`onboarding.md`](./onboarding.md): Guide for newcomers, integration process, and community introduction.
3. [`git-pullrequest-workflow.md`](./git-pullrequest-workflow.md): Workflow guide, focusing on Git and Pull Requests.
4. [`semantic-webaccessibility.md`](./semantic-webaccessibility.md): Standards for semantic web and accessibility.
5. [`styleguide-design.md`](./styleguide-design.md): Design style guide for visual consistency.
6. [`image-optimization.md`](./image-optimization.md): Automated assets optimization.
7. [`tests.md`](./tests.md): Overview of testing procedures and standards.
8. [`end-to-end-testing.md`](./end-to-end-testing.md): Guide for end-to-end testing with Playwright.

Reviewing these documents will provide a solid understanding of our work style and expectations. All team members are expected to follow these processes and standards to uphold the high standards of our community.

## Technology Overview

### Development
- **React**: Our UI framework.
- **TypeScript**: Typed JavaScript for a better development experience.
- **Vite**: Super-fast build tool.

### Code Quality
- **ESLint**: Keeps our code clean.
- **Stylelint**: Keeps our styles consistent.
- **Prettier**: Formats our code nicely.

### Testing
- **Vitest**: For unit testing.
- **Playwright**: For end-to-end testing.

### Assets Optimization
- **Sharp**: For image processing.
- **SVGO**: For SVG optimization.

### Build Tools
- **cross-env**: Manages environment variables.
- **concurrently**: Runs multiple scripts at once.
- **husky**: Automates Git hooks.

## Launch Instructions

### Prerequisites
- Node.js (v14+) and npm (v6+).

### Installation

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/rolling-scopes/site.git
    cd site
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

### Running the Project

1. **Start the Development Server:**
    ```sh
    npm run dev
    ```

### Building for Production

1. **Build the Project:**
    ```sh
    npm run build
    ```
