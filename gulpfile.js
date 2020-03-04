var gulp = require('gulp'),
    sass = require('gulp-sass');

    function  styles() {
	
        // Where should gulp look for the sass files?
        // My .sass files are stored in the styles folder
        // (If you want to use scss files, simply look for *.scss files instead)
        
        return (
        
            gulp.src("sass/*.scss")
                // Use sass with the files found, and log any errors
                .pipe(sass())
                .on("error", sass.logError)
                // What is the destination for the compiled file?
                .pipe(gulp.dest("css/"))
        
        );
        
    }

    function watch(){
	
        // gulp.watch takes in the location of the files to watch for changes
        // and the name of the function we want to run on change
        
        gulp.watch('sass/*.scss', styles)
        
    }

    // Expose the task by exporting it
    // This allows you to run it from the commandline using
    // $ gulp style
        
    exports.styles = styles;
    exports.watch = watch;


// gulp.task('sass', function(){ // Создаем таск "sass"
//     return gulp.src('sass/Site.scss') // Берем источник
//         .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(gulp.dest('css/')); // Выгружаем результата в папку app/css
// });

// gulp.task('watch', function () {
//     gulp.watch('sass/*.scss',sass);
//   });