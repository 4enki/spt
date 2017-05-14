/*
   Пути к файлам, с котороыми работаем:
   сборка, исходники и файлы для watch
*/
const src  = 'app/';
const dist = 'dist/';


module.exports = {
	// Исходники
    source: {
        templates:       [src + 'templates/pages/'],
		scripts:         [src + 'scripts/**/*.js', src + 'templates/**/*.js', src + '!scripts/vendor/**/*.js'],
		scriptsvendor:   [src + 'scripts/vendor/**/*.js'],
        styles:          [src + 'styles/'],
        images:          [src + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
		imagesblocks:    [src + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
        resources:       [src + 'resources/**/*']
    },
	// Для вотчеров
    watch: {
        templates:       [src + 'templates/**/*.html'],
		scripts:         [src + 'scripts/**/*.js', src + 'templates/**/*.js', src + '!scripts/vendor/**/*.js'],
		scriptsvendor:   [src + 'scripts/vendor/**/*.js'],
        styles:          [src + 'styles/**/*.pcss', src + 'templates/**/*.pcss'],
        images:          [src + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
		imagesblocks:    [src + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
        resources:       [src + 'resources/**/*.*']
    },
	// Куда всё собирать-то?
	build: {
		html:            dist,
		scripts:         dist + 'assets/scripts',
		styles:          dist + 'assets/styles',
		images:          dist + 'assets/images',
		resources:       dist
	}
};
