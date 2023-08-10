"use strict";

import { paths } from "../gulpfile.babel";
const { src, dest } = require("gulp");
import gulp from "gulp";
const concat = require("gulp-concat");
import yargs from "yargs";
import gulpif from "gulp-if";
// import sourcemaps from "gulp-sourcemaps";


const argv = yargs.argv,
production = !!argv.production;


gulp.task("concatCss", () => {
  return src([
    "./dist/styles/*.css",
    "./src/styles/css/*.*",
    // "./dist/styles/maps/main.css.map",
  ])
    // .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(concat("main.css"))
    // .pipe(gulpif(!production, sourcemaps.write("./maps")))
    .pipe(dest("dist/styles"));
});
