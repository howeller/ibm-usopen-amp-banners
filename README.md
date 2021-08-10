<img src="preview/assets/images/ibm-logo.png" alt="IBM" width="100"/>

## US Open Standard & AMP Banners

[Preview site >>](https://www.campaign.hogarthww.digital/ctus-ibm/ibm-h214878/preview/)

[JIRA >>](https://hogarthdigital.atlassian.net/browse/CTUS-388)

## Build Notes

- You can use [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) tasks to rename and move the auto generated Animate HTML into the build folder. 
- To install the packages needed to run the gulp tasks open the command line and run `npm install`. That will download `node_modules` (not included in this repo).

### Gulp Tasks

Task Name    | What it Does
-------------|-----------
`move` | Renames the Animate HMTL as `index.html` and compresses all PNGs. Places these files into the `build` folder.
`pngs` | Compresses all PNGs inside the `build` folder. Only need to run this once as it overwrites all PNG files.