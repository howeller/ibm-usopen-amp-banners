<img src="preview/assets/images/ibm-logo.png" alt="IBM" width="100"/>

## US Open Standard & AMP Banners

[Preview site >>](https://www.campaign.hogarthww.digital/ctus-ibm/ibm-h214878/preview/)

[JIRA >>](https://hogarthdigital.atlassian.net/browse/CTUS-388)

## Build Notes
- The AMP ads and Phone banners use [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) tasks to automate the workflow.
- To install the packages needed to run the Gulp tasks open the command line and run `npm install`. That will download `node_modules` (not included in this repo).

## AMP Story Ads
- The Story Ads are compiled us Handlebars.js modules/templates using the [gulp-compile-handlebars](https://www.npmjs.com/package/gulp-compile-handlebars) package.
- The `<amp-img>` tags support `srcset`, so there's @1x, @2x, and @3x versions of each image. See the StoryAd PSD for the Adobe Generate setup to automatically export all image versions.

Task Name    | What it Does
-------------|-----------
`build` | Compiles HTML templates for all **AMP** ads.
`build:img` | Compiles HTML templates then copies & all images. Compresses all PNG files.
`clean` | Deletes all directories & files inside the `/build/amp/` folder.
`watch` | Automatically runs the `build` task (or whichever task you designate) each time there's a saved change to any files in `src/templates/`.

## Standard (Phone) Banners Build Task
- There's a custom Animate template located at `src/templates/Animate/`. It has the border and click through function baked into it. Just import into your FLA and not worry about overwriting the HTML.
- Use [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) tasks to rename and move the auto generated Animate HTML into the build folder. It also compresses PNGs.

Task Name    | What it Does
-------------|-----------
`move` | Renames the Animate HMTL as `index.html` and compresses all PNGs. Places these files into the `build` folder.
`pngs` | Compresses all PNGs inside the `build` folder. Only need to run this once as it overwrites all PNG files.
`clean:phone` | Deletes all directories & files inside the `/build/phone/` folder. 