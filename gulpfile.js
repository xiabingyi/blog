var gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'); 

// Html
gulp.task('html',function(){
    return gulp.src('./public/**/*.html')
      .pipe(htmlmin({
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true,//压缩页面CSS
      }))
      .pipe(gulp.dest('./public'))
      .pipe(notify({message:'Html task complete'}));
});
htmlmin = require('gulp-htmlmin')
// Styles
gulp.task('styles',function(){
  return gulp.src('./public/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('./public'))
    .pipe(notify({message:'Styles task complete'}));
});
// Scripts
gulp.task('scripts',function(){
  return gulp.src('./public/**/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./public'))
    .pipe(notify({message:'Scripts task complete'}));
});
// Images
gulp.task('images',function(){
  return gulp.src('./public/**/*.{png,jpg,gif,svg,JPG}')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      multipass: true
     }))
    .pipe(gulp.dest('./public'))
    .pipe(notify({ message: 'Images task complete' }));
});
