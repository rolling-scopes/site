## Reasons for Implementation

The project ensures that each new feature, once approved, is merged into the main branch and deployed to production. However, visual bugs (missing elements, shifted images) couldn't always be quickly detected manually. To address this, end-to-end testing with Playwright was implemented.

## How it works (briefly)

Before pushing changes to GitHub, developers can run end-to-end tests with `npx playwright test`. Playwright starts a server with the modified code, takes full-page screenshots, and compares them with reference images. Discrepancies result in test failures, with comparison results saved in the `src/__tests__/visualTesting/results` folder, helping identify and fix issues.

## Installation, configuring and preparing

- `npm install`: make sure that all dependencies are installed;
- `npx playwright install`: if you use Playwright for the first time, installing browser's engines is required;
- make sure Vite develop server is able to use `localhost:5173` port. Before testing Playwright runs dev server automatically and then goes to the http://localhost:5173 page.

There are no any other configurations and preparations for testing.

## Typical Use Cases for Beginners

### Detecting Visual Bugs Using User Interface

- run `npx playwright test --ui`;
- choose browsers for testing and run any test you need separately or all the tests at once

<img src="./assets/end-to-end-testing/UI.jpg" alt="image">

- if there are any problems whith screenshots comparison, go to `src/__tests__/visualTesting/results` and watch the results like this:

<img src="./assets/end-to-end-testing/origin-diff.png" alt="image">

### Detecting Visual Bugs Using Terminal

- run `npx playwright test` and wait for the results;
- if there are any problems whith screenshots comparison, go to `src/__tests__/visualTesting/results` and watch the results.

### Update screenshots

When intentional design changes cause test failures, to create new references use one of the following ways:

- `npx playwright test --update-snapshots`: updates all the screenshots across the project;
- to update one or several screenshots only, please delete outdated reference images from the according folder (`src/__tests__/visualTesting/[NAME_OF_THE_TEST].spec.ts-snapshots`) and rerun tests again. On testing without samples, Playwright firstly will create them from your code.

## Troubleshooting

### Timeout errors

When you get `Timeout [number]ms exceeded` error, it makes sence to rerun tests again or run falling test separately using UI. In most cases running the only test prevents appearing such an error.
