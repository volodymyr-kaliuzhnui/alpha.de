'use strict';
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    imagemin = require('gulp-imagemin');

const paths = {
    styles: {
        src: 'assets/scss/*.scss',
        dest: './assets/css'
    },
    images:{
        src: 'assets/img/**/*.+(png|jpg|svg)',
        dest: './assets/images'
    }
}

function scss() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed',sourceMap:false}))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest));
}

exports.scss = scss


function imageMinify() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))

}

exports.imageMinify = imageMinify




function watch() {
    scss()
    gulp.watch(paths.styles.src, scss);
    gulp.watch(paths.images.src, imageMinify);
}

exports.watch = watch