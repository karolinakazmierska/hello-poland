const gulp = require('gulp'); // zamiast var -> const
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const handleError = function(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            // notify: false,
            // open: false, // albo true, jeśli chcę, żeby przeglądarka się otwierała sama
            open: true,
            browser: "google chrome",
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () { // 'sass' - to nasza nazwa taska
  return gulp.src('./scss/main.scss') // prawie każdy zaczyna się od return | w kalatlogu scss, wszystkie pliku z .scss (jakby było ./scss/**/*.scss') to razem z podkatalogami)
    .pipe(plumber({errorHandler: handleError})) // dodałam plumbera
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})) // potem są pipe, może być kilkanaście
    .pipe(autoprefixer({ // tutaj wklejone, bo przejeżdżamy autoprefixerem po skompilowaniu do css!
            browsers: ['last 2 versions']
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css')) // .dest - zapisz w jakimś katalogu wynik
    .pipe(browserSync.stream());
});

// obserwujemy zmiany w plikach
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});


// default, na komendę "gulp" w konsoli
gulp.task('default', function() {
    console.log('Rozpoczynam pracę');
    gulp.start(['sass','watch', 'browser-sync']);
})

// zeby watch się nie przerywał po błędach
