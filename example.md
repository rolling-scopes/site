src/
├── app/
│   ├── App.tsx
│   └── index.tsx
├── features/
│   ├── about/
│   │   ├── ui/
│   │   │   ├── About.tsx
│   │   │   └── index.tsx
│   │   └── model/      # Business Logic, state management, etc.
│   │       └── index.ts
│   ├── courses/
│   │   ├── ui/
│   │   │   ├── Courses.tsx
│   │   │   └── index.tsx
│   │   └── model/
│   │       └── coursesData.ts
│   └── ...             # Other sections like events, community, etc.
├── shared/
│   ├── ui/             # Shared UI components across features
│   │   ├── Button/     # Shared Button Component
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Card/       # Shared Card Component
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   └── ...         # Other shared components
│   ├── lib/
│   └── hooks/          # Shared custom hooks
│       └── useWindowSize.ts
├── pages/              # Page components that compose features together into routes
│   ├── HomePage.tsx    # Home page that imports and renders features/components
│   ├── CoursesPage.tsx # Courses page, might reuse the 'courses' feature and other components
│   └── ...             # Other pages
├── entities/
├── assets/
│   ├── icons/
│   │   ├── AWS.svg
│   │   └── ...
│   └── images/
│       ├── NodejsTrainer.png
│       └── ...
├── index.scss
└── index.tsx