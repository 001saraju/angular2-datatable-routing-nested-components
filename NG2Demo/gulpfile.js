"use strict";
var gulp = require("gulp");
var del = require("del");
var replace = require("gulp-replace");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/* copy the app core files to the build folder */
gulp.task("app", function () {
    return gulp.src(["src/demoapp.html", "src/app/**", "!src/app/**/*.ts"])
        .pipe(replace('src/app/', '/build/app/'))
        .pipe(gulp.dest("build/app"));
});

/* styles and other assets */
gulp.task("systemjs", function () {
    return gulp.src(["systemjs.config.js"])
        .pipe(replace('node_modules', '/build/lib/'))
        .pipe(replace('src/app', '/build/app'))
        .pipe(gulp.dest("build"));
});


/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    var lib = "build/lib/";

    gulp.src('node_modules/' + "@angular/**/*.js",
                { base: 'node_modules/' + "@angular/" })
                .pipe(gulp.dest(lib + "@angular/"));

    gulp.src('node_modules/' + "angular2-in-memory-web-api/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "core-js/client/shim*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "zone.js/dist/zone*.js",
           { base: 'node_modules/' })
           .pipe(gulp.dest(lib));


    gulp.src('node_modules/' + "systemjs/dist/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "rxjs/**/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "bootstrap/dist/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "lodash/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "angular2-datatable/**/*",
             { base: 'node_modules/' })
             .pipe(gulp.dest(lib));
});
/**
 * Build the project.
 */
gulp.task("default", ['app', 'systemjs', 'libs'], function () {
    console.log("Building the project ...");
});