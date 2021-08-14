// Node & NPM packages
const del = require('del'),
	fs = require('fs'),
	merge = require('merge-stream'),
	path = require('path'),
	gulp = require('gulp'),
	gch = require('gulp-compile-handlebars'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	buffer = require('vinyl-buffer'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');

// Custom modules & config
const util = require('./lib/fsUtils'),
	helper = require('./lib/hbImgHelpers');

// Directory structure
const dir = {
	config:'./src/config.json',
	css: './src/templates/amp/css/',
	html: './src/templates/amp/html/',
	dist:'./build/phone/',
	distAmp:'./build/amp/',
	fonts: './src/fonts/',
	srcFla:'./src/stdBanners/',
	srcAmp:'./src/ampAds/',
	templates:'./src/templates/amp/'
}

const useCDN = false;

function buildAmp(crushImages=false){
	const groupFolders = util.getFolders(dir.srcAmp);

	let task = groupFolders.map(function(folder) {
		
		let _src = path.join(dir.srcAmp, folder),
			_dist2 = util.mkDirByPathSync(path.join(dir.distAmp, folder)),
			_name = path.basename(folder),
			_config = JSON.parse(fs.readFileSync(dir.config)),
			_data = _config['Amp'][_name];
				
		// console.log(`${_name}`);

		_data['name'] = _name;
		_data['global'] = _config.global;
		_data['imgPath'] = _src+'/images/';

		let option = {
			ignorePartials:false,
			batch:[_src, dir.css, dir.html, dir.templates+'svg'],
			helpers : {
				adCss: function(){	return `${this.name}.css`;},
				adHtml: function(){	return `${this.name}.html`;},
				cssCheck : function(){	return util.fileCheck(`${dir.css}${this.name}.css.hbs`)},
				getImgWidth : function(file){ return helper.getImgWidth(this.imgPath, file)},
				getImgSize : function(file, prop){ return helper.getImgSize(this.imgPath, file, prop)},
				// getImgProps : function(file, options){ return helper.getImgProps(this.imgPath, file, options)},
				getImgPath : function(){ return useCDN ? 'https://s0.2mdn.net/creatives/assets/4260222/' : 'images/'}
			}
		}

		let _html = gulp.src(dir.html+'main.html.hbs')
			.pipe(gch(_data, option))
			.pipe(rename('index.html'))
			.pipe(gulp.dest(_dist2));

		// console.log(`CRUSH EM? `,crushImages);
		if(crushImages){
			let pngs = gulp.src([/*_sharedImages+'/*.png',*/ _src+'/images/*.png'])
				.pipe(buffer())// DEV: We must buffer our stream into a Buffer for imagemin
				.pipe(imagemin([pngquant({quality: [0.2, 0.5]})]));

			let jpgs = gulp.src([/*_sharedImages+'/*.jpg',*/ _src+'/images/*.jpg']);

			let _images = merge(pngs, jpgs).pipe(gulp.dest(_dist2+'/images/'));// Copy all "images" WITH compression

			return merge(_html, _images);
		}
		return _html;
	});
	let lastStream = task[task.length-1];
	return lastStream;
}

function moveFonts(){
	const groupFolders = util.getFolders(dir.srcAmp);

	let task = groupFolders.map(function(folder) {
		let _dist = util.mkDirByPathSync(path.join(dir.distAmp, folder));

		return gulp.src(dir.fonts+'*').pipe(gulp.dest(_dist));
	});
	let lastStream = task[task.length-1];
	return lastStream;
}

// Rename Animate HTML files and copy to dist
function moveAssets(){

	let groupFolders = util.getFolders(dir.srcFla);

	let task = groupFolders.map(function(folder) {
		let _src = path.join(dir.srcFla, folder),
				_dist = path.join(dir.dist, folder);
	
		let _html = gulp.src(`${_src}/*.html`)
			.pipe(rename('index.html'))//Rename html for preview site
			.pipe(gulp.dest(_dist));
			
		// Copy js if present
		let _js = gulp.src(`${_src}/*.js`).pipe(gulp.dest(_dist));

		// Copy + compress images
		let _images = gulp.src(`${_src}/images/**`)
			.pipe(buffer())// DEV: We must buffer our stream into a Buffer for imagemin
			.pipe(imagemin([pngquant({quality: [0.3, 0.5]}) ]))
			.pipe(gulp.dest(`${_dist}/images/`));

		return merge(_html, _js, _images);

	});
	let lastStream = task[task.length-1];
	return lastStream;
};

// Compress PNGs
function pngs(){

	let groupFolders = util.getFolders(dir.dist);

	let task = groupFolders.map(function(folder) {
			let _dist = path.join(dir.dist, `${folder}/images/`)

	return gulp.src(_dist+'*')
		.pipe(buffer())// DEV: We must buffer our stream into a Buffer for imagemin
		.pipe(imagemin([pngquant({quality: [0.3, 0.5]}) ]))
		.pipe(gulp.dest(_dist));
	});
	let lastStream = task[task.length-1];
	return lastStream;
}
// Gulp Tasks
// AMP Handlebars Build
gulp.task('b', () => { return buildAmp(false)});
gulp.task('bi', () => { return buildAmp(true)});
gulp.task('clean', () => { return del([dir.distAmp+'**/*']); });
gulp.task('f', moveFonts);
// Watching
gulp.task('watch', () => { return gulp.watch([dir.srcAmp+'**/**/*', dir.templates+'**/*', dir.config], gulp.series('b'))});

// Standard Banners
gulp.task('move', moveAssets);
gulp.task('pngs', pngs);
gulp.task('clean2', () => { return del([dir.dist+'**/*']); });

// Build tasks in series
// gulp.task('build', gulp.series(moveAssets, pngs));
// gulp.task('build:all', gulp.series('backups', 'build', 'zip'));
gulp.task('default', gulp.series('b'));
