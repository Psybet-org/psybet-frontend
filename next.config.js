// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const _preLayer0Export = withFonts({
  enableSvg: true,
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
});;

module.exports = () =>
  withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,

      // Set the following to `true` to disable the Layer0 dev tools.
      disableLayer0DevTools: false,

      ..._preLayer0Export
    })
  )
