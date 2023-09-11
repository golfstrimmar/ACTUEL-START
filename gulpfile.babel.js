"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: ["./src/views/*.pug"],
      dist: "./dist/",
      watch: ["./src/**/*.pug"],
    },
    styles: {
      src: ["./src/styles/main.{scss,sass}"],
      dist: "./dist/styles/",
      watch: ["./src/**/*.{scss,sass}"],
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./dist/js/",
      watch: ["./src/**/*.vue", "./src/**/*.js"],
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      ],
      dist: "./dist/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,tiff}",
    },
    sprites: {
      src: ["./src/img/svg/*.svg", "!./src/img/svg/sprite.svg"],
      dist: "./src/img/svg/",
      watch: ["./src/img/svg/*.svg", "!./src/img/svg/sprite.svg"],
    },
    fonts: {
      src: "./src/fonts/**/*",
      dist: "./dist/fonts/",
      watch: "./src/fonts/**/*",
    },
    video: {
      src: "./src/video/*",
      dist: "./dist/video/",
      watch: "./src/video/*",
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      dist: "./dist/img/favicons/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/",
    },
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
  "clean",
  gulp.parallel([
    "sprites",
    "styles",
    "scripts",
    "images",
    "webp",
    "fonts",
    "video",
    "favicons",
    "views",
  ]),

  gulp.parallel("serve")
);

export const prod = gulp.series(
  "clean",
  gulp.parallel([
    "sprites",
    "styles",
    "scripts",
    "images",
    "webp",
    "fonts",
    "video",
    "favicons",
    "views",
    "gzip",
  ])
);

export default development;
