const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Función para compilar archivos Sass
function compileSass() {
  return src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css/'));
}

// Tarea para observar cambios en archivos Sass y compilar automáticamente
exports.default = function() {
  // Iniciar la tarea de compilación al ejecutar la tarea predeterminada
  compileSass();

  // Observar cambios en los archivos Sass y ejecutar la tarea de compilación
  watch('./scss/*.scss', compileSass);
}