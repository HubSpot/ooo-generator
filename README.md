# Out of Office Email Generator

> [!WARNING]  
> This project is archived as of 7 February 2024. The most recent version of the code remains deployed at https://github.hubspot.com/ooo-generator/

> Generate Out of Office Email messages.

## Contributing

### Installation & Setup

- Install Gatsby CLI: `npm install --global gatsby-cli`
- Install project packages: `make install`

### Routine

- Run locally: `make develop`
- Push: if you're reading this, you already have access to the repo, so PR away!
- Deploy: `make deploy` after your PR is merged into `master`
  - If anyone wants to setup CI integration or auto-deploys that is 💯
  - To learn more about this setup, checkout the [gatsby docs on using with GH pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

### Project layout

- `public`: this is the build dir. you mostly can ignore
- `src/components/screens`: there are multiple main "screens" which are full-width by full-height, so each of those is setup as a page in this directory
- `src/components/style`: components which are mainly just styled-components CSS wrappers
- `src/components/*.js`: general purpose reusable components
- `src/layouts`: only one layout, used to fetch static metadata to feed to other compoennts, and to configure things like the `<head />` config and attributes
- `src/pages`: since this only has one "page" in the classical sense, there is one main page: `index.js` which imports all other page components and lays them out
- `static/`: files to be included in output untouched by webpack. See [docs](https://www.gatsbyjs.org/docs/adding-images-fonts-files/#using-the-code-classlanguage-textstaticcode-folder).

---

## Miscellany

### Technology / Packages used

- [Gatsby.js](https://www.gatsbyjs.org)
- [Styled Components](https://www.styled-components.com/docs/api)
- [Material UI](https://material-ui.com/)
- [Rebass](http://jxnblk.com/rebass/components/Heading)
- [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/api.md#default-theme) spacing helpers (e.g. `my={4}`)

### Fonts used

- [Material Icons](https://fonts.googleapis.com/icon?family=Material+Icons)

### Styled components
