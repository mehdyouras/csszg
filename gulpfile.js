var gulp = require("gulp"),
    image = require("gulp-image"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso");

// --- Task for images
gulp.task("images", function() {
    gulp.src("src/img/**", !"src/img/*.db")
        .pipe(image())
        .pipe(gulp.dest("/img"));
} );
// --- Task for styles
gulp.task("css", function() {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest(""));
}
);
// --- Watch tasks
gulp.task("watch", function() {
    gulp.watch("src/img/**", ["images"]);
    gulp.watch("src/sass/**", ["css"]);
}
);
// --- Aliases
gulp.task("default", ["images", "css"]);
gulp.task("work", ["default", "watch"]);