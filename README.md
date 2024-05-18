**Version 1**
## Introduction

The RS School (Rolling Scopes School) platform is an educational initiative that offers free courses in software development. It is designed to help aspiring developers acquire essential skills and knowledge to build a successful career in the IT industry. The RS School platform is highly regarded for its community-driven approach, comprehensive curriculum, and hands-on learning experiences.


**Version 2**
## Welcome to the RS School

This project is designed to streamline the development process for students and contributors at [RS School](https://rs.school/), an educational platform offering free courses in software development.
This is not only a platform for learning programs but also serves as a community for students, mentors, and industry professionals to exchange ideas, projects, and resources.

## Purpose
**Version 1**

We strive to provide a fast, efficient, and modern development application, the purpose of which is not only to facilitate successful collaboration among participants but also to serve as an example of well-organized and well-written code. It aims to be a source of inspiration for many people who have dedicated their lives to web development.

## Purpose
**Version 2**

The RS School platform is dedicated to empowering individuals through quality education, practical experience, and a supportive community. Whether you're a beginner looking to start a career in web development or an experienced developer seeking to expand your skill set, RS School offers a structured and engaging learning environment to help you achieve your goals.


### Key Features

**Comprehensive Curriculum**:
   - **Frontend Development**: Courses on HTML, CSS, JavaScript, and popular frameworks like React and Angular.
   - **Backend Development**: Training in server-side technologies, databases, and backend frameworks.
   - **Full-Stack Development**: Combined courses covering both frontend and backend development.

**Interactive Learning Environment**:
   - **Assignments and Projects**: Practical tasks and real-world projects to apply the learned concepts.
   - **Quizzes and Tests**: Regular assessments to gauge understanding and progress.
   - **Code Reviews**: Peer reviews and mentor feedback to improve code quality and development skills.

**Community and Collaboration**:
   - **Mentorship Programs**: Experienced developers guide students through their learning journey.
   - **Study Groups**: Collaborative learning with peers to foster teamwork and knowledge sharing.
   - **Networking Opportunities**: Events, meetups, and online forums to connect with other learners and professionals in the field.

**Flexible Learning Paths**:
   - **Self-Paced Learning**: Students can progress through the courses at their own pace.
   - **Scheduled Classes**: Structured timelines for those who prefer a more organized learning schedule.

**Resource Library**:
   - **Documentation and Guides**: Extensive resources to support the learning process.
   - **Video Lectures**: Recorded sessions from industry experts.
   - **Sample Projects**: Examples of completed projects to serve as references and inspiration.

**Certification and Recognition**:
   - **Course Completion Certificates**: Recognition of the skills and knowledge acquired.
   - **Career Services**: Support with job placements, resume building, and interview preparation.

**Open Source Contributions**:
   - **Community Projects**: Opportunities to contribute to open source projects and gain practical experience.
   - **Hackathons and Competitions**: Events to challenge skills and collaborate on innovative solutions.
  
---
## Technology Overview

#### Programming and Development

- **React**: Provides the framework for building and managing UI components.
- **TypeScript**: Adds static typing to JavaScript, helping to catch errors early and improve the development experience.
- **Vite**: Offers a lightning-fast development environment with instant feedback and optimized builds.

#### Code Quality and Formatting

- **ESLint**: Enforces coding standards and helps in identifying and fixing issues in the codebase.
- **Stylelint**: Ensures consistent and error-free styles by checking your CSS and SCSS code against a set of predefined rules.
- **Prettier**: Automatically formats your code to ensure a consistent style across the entire project.

#### Testing

- **Vitest**: A Vite-native unit testing framework that provides a fast and easy way to test your code.
- **renderWithRouter**: A utility for testing React components that are wrapped with React Router.
- **Playwright**: A framework for end-to-end testing that allows for browser automation to test your application's UI and functionality.

#### Automated Assets Optimization

- **Sharp**: A high-performance image processing library for resizing, cropping, and converting images.
- **SVGO**: A tool for optimizing SVG files, reducing their size without losing quality.

---
## Launch Instructions

Follow these steps to set up, configure, and run the project locally.

### Prerequisites
- Node.js (v14 or higher) and npm (v6 or higher) installed on your machine.

### Installation

1. **Clone the Repository:**
    ```
    git clone https://github.com/rolling-scopes/site.git
    cd site
    ```

2. **Install Dependencies:**
    ```
    npm install
    ```

### Running the Project

1. **Start the Development Server:**
    ```
    npm run dev
    ```

    This will start the Vite development server and open your project in the default browser with HMR enabled.

### Building for Production

1. **Build the Project:**
    ```
    npm run build
    ```

    This will create an optimized production build in the `build` directory.

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

    ```js
    export default {
      // other rules...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

---
## Community Engagement

We encourage you to join our development community to collaborate and contribute to the project. Follow the guidelines in the [RS School Website Documentation](readme/__rs_school_website_documentation.md) to learn how to get involved.

### Join the Community
- **Contribute**: Follow our contribution guidelines to submit issues and pull requests.

- **Stay Updated**: Follow us on [LinkedIn](https://www.linkedin.com/company/the-rolling-scopes-school/),  [Instagram RU](https://www.instagram.com/rsschool_news/),  [Instagram EN](https://www.instagram.com/rsschool_en/), [YouTube RU](https://www.youtube.com/c/RollingScopesSchool/), [YouTube EN](https://www.youtube.com/c/RSschool), [Telegram RU](https://t.me/AfishaRSSchool), [Telegram RU](https://t.me/AfishaRSSchool), [Facebook RU](https://www.facebook.com/RollingScopesSchool),  [Facebook EN](https://www.facebook.com/rsschoolEN), [Facebook EN](https://www.facebook.com/rsschoolEN) or [Facebook Group RU & EN](https://www.facebook.com/groups/TheRollingScopes), for the latest news and updates.
