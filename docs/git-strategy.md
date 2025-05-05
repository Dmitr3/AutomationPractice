## Branching Strategy

- **main** – Stable production-ready code.
- **feature/featureName** – Active development branch.

## Rules for Working with Branches

- **main**: Updated only via Pull Requests (PRs) from `feature/featureName`.
- **feature/featureName**: Active development happens here before merging into `main`.

## Commit Rules

- Keep commits atomic and meaningful.
- Write clear and descriptive commit messages.

## Code Review and Merging

- All changes require a **Pull Request (PR)**.
- No direct commits are allowed to the main branch.
- At least one approver required to merge.
- Allow only squash merges.

## Additional Guidelines

- Keep PRs small and focused.
- Regularly sync your branch with `main` to avoid conflicts.
- Write meaningful descriptions for PRs and commits.
