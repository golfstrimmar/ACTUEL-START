"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import fonter  from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

gulp.task("fonts", () => {
    return gulp
      .src(paths.fonts.src)
      .pipe(
        fonter({
          formats: ["woff", "ttf"],
        })
      )
      .pipe(gulp.src("./src/fonts/**/*.ttf"))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(paths.fonts.dist))
      .pipe(
        debug({
          title: "Fonts",
        })
      );
});