const { src, series, dest, watch } = require('gulp')
const uglifyes = require('uglify-es')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const composer = require('gulp-uglify/composer')
const uglify = composer(uglifyes, console)

const watcher = () => {
  watch('index.js', minify)
}

const minify = () => {
    return src('index.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('lib'))
}

exports.default = series(minify, watcher)
exports.build = minify
