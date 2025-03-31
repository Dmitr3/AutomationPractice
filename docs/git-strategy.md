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
- At least one approved review before merging.

## Additional Guidelines
- Keep PRs small and focused.
- Regularly sync your branch with `main` to avoid conflicts.
- Write meaningful descriptions for PRs and commits.