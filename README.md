# strip-app

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Conventional Commits][conventional-commits-src]][conventional-commits-href]
[![License][license-src]][license-href]

Create your app from a clean starting point.

<!--

TODO: Create a small list of package features:

- 🤔 &nbsp;A useful feature;
- 🥴 &nbsp;Another useful feature;
- 🙃 &nbsp;A final useful feature.

Non-breaking space: &nbsp; are here on purpose to fix emoji rendering on certain systems.

-->

## Usage

Run `strip-app` immediately after creating a new app.

```bash
npx strip-app@latest
```

For [Next.js](https://nextjs.org/) apps:

```bash
npx create-next-app@latest
cd your-project
npx strip-app@latest
```

For [Gatsby](https://www.gatsbyjs.com/) apps:

```bash
npm init gatsby
cd your-project
npx strip-app@latest
```

### Supported starters

| Starter                                                      | Command                                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [**Next.js**](https://nextjs.org/)                           | `npx create-next-app` ([Docs](https://nextjs.org/docs/api-reference/create-next-app)) |
| [**Gatsby**](https://www.gatsbyjs.com/)                      | `npm init gatsby` ([Docs](https://www.gatsbyjs.com/docs/quick-start/))                |
| [**Create React App**](https://create-react-app.dev/) (soon) | `npx create-react-app` ([Docs](https://create-react-app.dev/docs/getting-started))    |
| [**Vite**](https://vitejs.dev/) (soon)                       | `npm init vite@latest` ([Docs](https://vitejs.dev/guide/))                            |

## Documentation

To discover what's new on this package check out [the changelog][changelog]. For full documentation, visit the [official Prismic documentation][prismic-docs].

## Contributing

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the Prismic developer community!

**Asking a question**: [Open a new topic][forum-question] on our community forum explaining what you want to achieve / your question. Our support team will get back to you shortly.

**Reporting a bug**: [Open an issue][repo-bug-report] explaining your application's setup and the bug you're encountering.

**Suggesting an improvement**: [Open an issue][repo-feature-request] explaining your improvement or feature so we can discuss and learn more.

**Submitting code changes**: For small fixes, feel free to [open a pull request][repo-pull-requests] with a description of your changes. For large changes, please first [open an issue][repo-feature-request] so we can discuss if and how the changes should be implemented.

For more clarity on this project and its structure you can also check out the detailed [CONTRIBUTING.md][contributing] document.

## License

```
   Copyright 2013-2021 Prismic <contact@prismic.io> (https://prismic.io)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

<!-- Links -->

[prismic]: https://prismic.io

<!-- TODO: Replace link with a more useful one if available -->

[prismic-docs]: https://prismic.io/docs
[changelog]: ./CHANGELOG.md
[contributing]: ./CONTRIBUTING.md

<!-- TODO: Replace link with a more useful one if available -->

[forum-question]: https://community.prismic.io
[repo-bug-report]: https://github.com/prismicio-community/strip-app/issues/new?assignees=&labels=bug&template=bug_report.md&title=
[repo-feature-request]: https://github.com/prismicio-community/strip-app/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=
[repo-pull-requests]: https://github.com/prismicio-community/strip-app/pulls

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/strip-app/latest.svg
[npm-version-href]: https://npmjs.com/package/strip-app
[npm-downloads-src]: https://img.shields.io/npm/dm/strip-app.svg
[npm-downloads-href]: https://npmjs.com/package/strip-app
[github-actions-ci-src]: https://github.com/prismicio-community/strip-app/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/prismicio-community/strip-app/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/prismicio-community/strip-app.svg
[codecov-href]: https://codecov.io/gh/prismicio-community/strip-app
[conventional-commits-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-href]: https://conventionalcommits.org
[license-src]: https://img.shields.io/npm/l/strip-app.svg
[license-href]: https://npmjs.com/package/strip-app
