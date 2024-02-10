---
pageClass: release-timeline
head:
  - - meta
    - name: og:site_name
      content: Release timeline - visual component displaying GitHub release timeline
  - - meta
    - name: og:image
      content: /images/vue-faq-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-faq-logo.png
---

# Getting release, commit and pull requests data

## Retrieving data

There are three ways to get data from releases, pull request and commits from GitHub

1. Dynamic. Direct request to GitHub REST API during page opening.
2. Request to GitHub REST API through a proxy
3. Request to GitHub REST API during project build, optimise and save data locally on the site.

Currently the first and second option are directly implemented, there is an option to specify `url` for release requests, pull requests and commits.

The first option is used by default.

The second option is needed to reduce the size of the downloaded file, as 95% of the data in GitHub responses is not used in the application.

The data format should be the same as GitHub's, but may contain only the required fields.

The third option can also optimise data flows, but it makes a snapshot of releases and a pull requests at a certain point in time. When a new release comes out, the documentation will need to be rebuilt. In this case you also need to provide the correct url. The logic of the third option (receiving, filtering, saving data) should be implemented by the package user.
