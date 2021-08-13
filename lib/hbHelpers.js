/*
*	@version: 0.1.1
*	@author: 	howeller, eric@howellstudio.com
*	@desc: 		Helpful Handlebars helpers
*/
const	sizeOf = require('image-size'),
	path = require('path');

module.exports = { if_eq, ifIsTxtId, int, getImgSize, getImgProp, propCheck, times };

/*
*	Check to see if obj property matches a value
*
*	{{if_eq color red}}{{log 'Show the red!'}}{{/if_eq}}
*/
function if_eq(a, b, options){
	if (a == b) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
}

/*
*	Adds 1 to loop index number. 
*
*	{{#each array}}
*		{{int @index}} // 1, 2, 3..
*	{{/each}}
*/
function int (value, options) { 
	return parseInt(value) + 1; 
}

/*
*	Helper that returns retina image property (width or height)
	background-size:{{getImgProp 't1.png' 'width'}}px {{getImgProp 't1.png' 'height'}}px;
*/
function getImgProp(imgPath='./images/', img, prop) {
	let _img = imgPath+img,// CHANGE imgPATH TO ARRAY THEN TEST IF FILE IS AT CORRECT PATH
		dimensions = sizeOf(_img),
		// name =  path.parse(img).name,
		is2x = true;//name.endsWith('2x'), // Check to see if name indicates @2x image.

	return is2x ? Math.ceil(dimensions[prop]/2) : dimensions[prop];
}

/*
*	Blocker helper that returns image width & height
*	{{#getImgSize}}{{log this.width this.height}}{{/getImgSize}}
*/
function getImgSize(imgPath='./images/', img, options) {
	let _img = imgPath+img,// CHANGE imgPATH TO ARRAY THEN TEST IF FILE IS AT CORRECT PATH
		dimensions = sizeOf(_img),
		// name =  path.parse(img).name,
		is2x = true,//name.endsWith('2x'), // Check to see if name indicates @2x image.
		obj = {
			'file' : img,
			'width' : is2x ? Math.ceil(dimensions.width/2) : dimensions.width,
			'height': is2x ? Math.ceil(dimensions.height/2) : dimensions.height,
			'ext' : dimensions.type
		};
	return options.fn(obj);
}

/*
*	Locate file names that begins with a "t" and is followed by numbers. (t1, t11, ect)
*	^[t] means starts with "t" [0-9]{1,2} means next 1 to 2 letters are numeric
*
*	{{#ifIsTxtId name}} {{log name}} {{/ifIsTxtId}}
*/
function ifIsTxtId (string, options) {
	return /^[t][0-9]{1,2}/i.test(string) ? options.fn(this) : options.inverse(this); 
}

/*
*	Check to see if a property exists in json object
*/
function propCheck(obj, prop){
	// console.log('propCheck : '+obj._name+' ? '+obj[prop]);
	return (obj[prop]) ? true:false;
}

/*
*	Create a for loop based on number value
*
*	{{#times 10}}
*		<span> {{@first}} {{@index}} {{@last}}</span>
*	{{/times}}
*/
function times(num, block) {
	let accum = '';
	for(let i = 0; i < num; ++i) {
		block.data.index = i;
		block.data.first = i === 0;
		block.data.last = i === (num - 1);
		accum += block.fn(this);
	}
	return accum;
}


