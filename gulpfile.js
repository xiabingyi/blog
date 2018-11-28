var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");

gulp.task('testhtmlmin', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
});

var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
    pngquant = require("imagemin-pngquant");

gulp.task('testimagemin',function(){
    var options = {
        optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            multipass: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
    };
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin(options))
        .pipe(gulp.dest('dist/img'));
});

var gulp = require("gulp"),
var cssmin = require("gulp-clean-css");

gulp.task('testcssmin',function(){
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false,
            compatibility: 'ie7',
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('dist/css'));
});
