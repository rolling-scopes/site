# Git Pull Request Workflow Guidelines

## Branch Naming

Pick a name for your branch that tells us what it's for. Use this format:

`<type of work>/<issue number>-short-description`

- `<type of work>`: This shows what you're doing in the branch. For example, 'feat' means you're adding a feature. 'fix' means you're fixing a bug. 'docs' means you're working on documentation.
- `<issue number>`: This is the number of the task or issue in Github Projects you're working on.
- `short-description`: This is a quick summary of what you're doing. Use hyphens instead of spaces.

❗Please note - the `short-description` shouldn't contain numbers.

Example: `feat/123-add-login-button`

## Commit Messages

Your commit messages should be short, but they should tell us what changes you made. Use this format:

`<type of work>: <summary>`

Your commit message will be automatically converted to the following format:

`<type of work>: <issue number> - <summary>`

- `<type of work>`: This shows what kind of changes you made.
- `<issue number>`: This is the number of the task or issue in Github Projects you're working on.
- `<summary>`: This is a quick summary of what changes you made.

❗Please note - the `summary` shouldn't contain numbers.

Example:
  your commit message `docs: add login button functionality`
  will be automatically converted to `docs: 159 - add login button functionality`


Please note that at RS School, we strive to follow the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). In case of uncertainty, feel free to refer to this source that inspired us in writing these guidelines.

## Pull Requests

When you finish your work in a branch, make a pull request against the main branch. Initially, the pull request will be named after your branch. However, be aware that once the pull request is opened, an automatic script will rename it according to a predefined template, overwriting the title you initially provided.

<issue number>-<type of work>: <Title>

If necessary, you can adjust the pull request' <Title> after PR has been created. Below is the final look of your pull request title.

Example: `123-feat: Complete addition of login button functionality`.

For the project, we use a template for pull requests that assists in correctly filling out the details of the pull request.

## Comment Resolution

If someone made comments on your pull request, that person should mark them as resolved. But if they don't respond within two days, you can mark the comments as resolved yourself.

## Language of Communication

Please use English for all discussions, pull requests, issues, and comments.

## Note

Always get the latest updates from the main branch and `npm install` before you push your own changes or make a pull request.

## Conclusion

By following these rules, everyone can understand what's happening in our project. It helps keep our work organized, which makes it easier to write good code and develop our project more quickly. Please respect these rules when you work.
