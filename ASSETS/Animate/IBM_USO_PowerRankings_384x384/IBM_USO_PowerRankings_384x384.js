(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.ballShadow = function() {
	this.initialize(img.ballShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,60);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,1600);


(lib.ctaButton = function() {
	this.initialize(img.ctaButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,76);


(lib.ctaText = function() {
	this.initialize(img.ctaText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,36);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,183);


(lib.rays = function() {
	this.initialize(img.rays);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,148);


(lib.sh1 = function() {
	this.initialize(img.sh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,384);


(lib.sh2 = function() {
	this.initialize(img.sh2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,384);


(lib.sh3 = function() {
	this.initialize(img.sh3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,384);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,768);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,768);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,768);


(lib.tbLines1 = function() {
	this.initialize(img.tbLines1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,76);


(lib.tbLines3 = function() {
	this.initialize(img.tbLines3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,15);


(lib.tennisBall = function() {
	this.initialize(img.tennisBall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,328);


(lib.tennisBallLight = function() {
	this.initialize(img.tennisBallLight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,98);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tennisBall_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tennisBall();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326,328);


(lib.t3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/PEhIAAl7MA+fAAAIAAF7g");
	var mask_graphics_1 = new cjs.Graphics().p("A/PG8IAAlAMA+fAAAIAAFAg");
	var mask_graphics_2 = new cjs.Graphics().p("A/PJfIAAlBMA+fAAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:200,y:28.95}).wait(1).to({graphics:mask_graphics_1,x:200,y:44.3999}).wait(1).to({graphics:mask_graphics_2,x:200,y:60.6499}).wait(1));

	// Layer_1
	this.instance = new lib.t3();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.9,384,101.4);


(lib.t2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/PEgIAAl7MA+fAAAIAAF7g");
	var mask_graphics_1 = new cjs.Graphics().p("A/PHDIAAlTMA+fAAAIAAFTg");
	var mask_graphics_2 = new cjs.Graphics().p("A/PJ/IAAl8MA+fAAAIAAF8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:200,y:28.75}).wait(1).to({graphics:mask_graphics_1,x:200,y:45.1499}).wait(1).to({graphics:mask_graphics_2,x:200,y:63.9}).wait(1));

	// Layer_1
	this.instance = new lib.t2();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.5,384,108.3);


(lib.t1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/PEQIAAl7MA+fAAAIAAF7g");
	var mask_graphics_1 = new cjs.Graphics().p("A/PG5IAAleMA+fAAAIAAFeg");
	var mask_graphics_2 = new cjs.Graphics().p("A/PJ8IAAl8MA+fAAAIAAF8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:200,y:27.2}).wait(1).to({graphics:mask_graphics_1,x:200,y:44.1}).wait(1).to({graphics:mask_graphics_2,x:200,y:63.575}).wait(1));

	// Layer_1
	this.instance = new lib.t1();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.4,384,110.80000000000001);


(lib.sh3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sh3();
	this.instance.setTransform(0,0,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.9,294.9);


(lib.sh2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sh2();
	this.instance.setTransform(0,0,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.9,294.9);


(lib.sh1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sh1();
	this.instance.setTransform(0,0,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.9,294.9);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// replaySvg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBAzQgVgVgBgeQABgdAVgVQAWgWAeAAQAeAAAVAVQAVAUAAAgIAcAAIgnAnIgognIAcAAQAAgYgPgOQgNgNgWAAQgUAAgPAPQgOAPAAAUQAAAUAOAPQAPAPAUAAQAOAAAGgFIAMAUQgPAIgQAAQgeAAgWgWg");
	this.shape.setTransform(8.75,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replay, new cjs.Rectangle(0,0,17.5,14.6), null);


(lib.rayd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rays();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,74);


(lib.mc_square = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F8F8").s().p("AifCgIAAk/IE/AAIAAE/g");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_square, new cjs.Rectangle(0,0,32,32), null);


(lib.lines2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tbLines1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,76);


(lib.line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tbLines3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,15);


(lib.hotSpot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("AiGCHIAAkNIENAAIAAENg");
	this.shape.setTransform(13.5,13.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.ctaText_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ctaText();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.5,18);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384,800.1);


(lib.ballShadow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ballShadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,60);


(lib.replayAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer_1
	this.instance = new lib.replay();
	this.instance.setTransform(7.2,7.4,1,1,0,0,0,7.2,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:341.9997,x:7.25,y:7.45},14,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.8,22.2,20.5);


(lib.ray1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiNDzIAAnkIEbAAIAAHkg");
	mask.setTransform(-2.25,-53.25);

	// Layer_1
	this.instance = new lib.rayd("synched",0);
	this.instance.setTransform(-2,-38,1,0.0495,0,0,0,79.5,28.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.5,scaleY:1,y:-45.5},4,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-74,28.5,45);


(lib.lines3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1("synched",0);
	this.instance.setTransform(5.05,62.5,1,0.6476,0,180,0,4.6,9.8);

	this.instance_1 = new lib.line1("synched",0);
	this.instance_1.setTransform(4.6,6.35,1,0.6476,0,0,0,4.6,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.5,68.9);


(lib.ctaArrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5C0IAAlnIHzAAIAAFng");
	mask.setTransform(116,11);

	// Layer_1
	this.instance = new lib.ctaText_1("synched",0);
	this.instance.setTransform(58.8,9,1,1,0,0,0,58.8,9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,0,26.5,18);


(lib.tennisBallAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiwCyQhKhKAAhoQAAhnBKhJQBJhKBnAAQBoAABJBKQBKBJAABnQAABohKBKQhJBJhoAAQhnAAhJhJg");
	var mask_graphics_99 = new cjs.Graphics().p("AiwCyQhKhKAAhoQAAhnBKhJQBJhKBnAAQBoAABJBKQBKBJAABnQAABohKBKQhJBJhoAAQhnAAhJhJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:82.075,y:18.35}).wait(99).to({graphics:mask_graphics_99,x:82.075,y:18.35}).wait(1).to({graphics:null,x:0,y:0}).wait(105));

	// ballShadow
	this.instance = new lib.ballShadow_1("synched",0);
	this.instance.setTransform(80.7,-3.75,1.0964,1.8212,-20.9352,0,0,46,31.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({rotation:-20.9353},0).to({_off:true},1).wait(105));

	// ballShadow
	this.instance_1 = new lib.ballShadow_1("synched",0);
	this.instance_1.setTransform(80.7,-3.75,1.0964,1.8212,-20.9344,0,0,46,31.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({startPosition:0},0).to({_off:true},1).wait(105));

	// ballShadow
	this.instance_2 = new lib.ballShadow_1("synched",0);
	this.instance_2.setTransform(85.4,30.6,0.551,0.5517,0,0,0,47.2,32.7);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({startPosition:0},0).to({_off:true},1).wait(105));

	// ballShadow
	this.instance_3 = new lib.ballShadow_1("synched",0);
	this.instance_3.setTransform(85.4,30.6,0.551,0.5517,0,0,0,47.2,32.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({startPosition:0},0).to({_off:true},1).wait(105));

	// ballShadow
	this.instance_4 = new lib.ballShadow_1("synched",0);
	this.instance_4.setTransform(84.75,19.5,0.7722,0.9744,-5.9417,0,0,46.5,31.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({startPosition:0},0).to({_off:true},1).wait(105));

	// tbLines2_png
	this.instance_5 = new lib.lines2("synched",0);
	this.instance_5.setTransform(104.25,21.4,0.595,0.5527,0,3.3697,0,77.2,41.2);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({startPosition:0},0).to({regX:76.5,regY:42.9,scaleX:0.551,scaleY:0.3545,skewX:-9.301,skewY:-4.2115,x:102.15,y:56.75},16,cjs.Ease.quadIn).to({_off:true},1).wait(10).to({_off:false,regX:78.1,regY:43.2,scaleX:0.5489,scaleY:0.343,skewX:10.9265,skewY:-4.2202,x:102.55,y:-18.8},0).to({regX:77.2,regY:41.2,scaleX:0.595,scaleY:0.5527,skewX:3.3697,skewY:0,x:104.25,y:21.4},15,cjs.Ease.quadOut).to({_off:true},1).wait(105));

	// Layer_9
	this.instance_6 = new lib.lines3("synched",0);
	this.instance_6.setTransform(83.45,62.3,0.4685,0.4333,0,0,0,45.6,38.4);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).wait(11).to({regY:37.8,scaleY:0.455,y:-21.5},0).to({regX:44.6,regY:37.1,scaleX:0.551,scaleY:0.6175,y:21},10,cjs.Ease.quadIn).to({regX:45.6,regY:38.4,scaleX:0.4685,scaleY:0.4333,y:62.3},10,cjs.Ease.quadOut).wait(11).to({startPosition:0},0).to({_off:true},1).wait(105));

	// tennisBall_png
	this.instance_7 = new lib.tennisBallLight();
	this.instance_7.setTransform(56.55,-9.15,0.551,0.5517);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:true},1).wait(105));

	// tennisBall_png
	this.instance_8 = new lib.tennisBall_1("synched",0);
	this.instance_8.setTransform(101,48.8,0.524,0.5244,0,0,0,165.5,166.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({startPosition:0},0).to({_off:true},1).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,-38.6,170.89999999999998,172);


(lib.raysAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.ray1("synched",0,false);
	this.instance.setTransform(79,26,1,1,0,0,0,-2.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_6
	this.instance_1 = new lib.ray1("synched",0,false);
	this.instance_1.setTransform(48.3,34.25,1,1,0,-29.4456,150.5544,-2.4,-48);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(8));

	// Layer_5
	this.instance_2 = new lib.ray1("synched",0,false);
	this.instance_2.setTransform(110.05,34.25,1,1,29.4456,0,0,-2.4,-48);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(8));

	// Layer_4
	this.instance_3 = new lib.ray1("synched",0,false);
	this.instance_3.setTransform(25.5,56.7,1,1,0,-60.1354,119.8646,-2.4,-48.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(7));

	// Layer_3
	this.instance_4 = new lib.ray1("synched",0,false);
	this.instance_4.setTransform(133.35,56.7,1,1,60.1354,0,0,-2.4,-48.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,0,173.29999999999998,78.7);


(lib.ctaButton_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// Layer_4
	this.instance = new lib.ctaArrow("synched",0);
	this.instance.setTransform(75.8,18.8,1,1,0,0,0,58.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:0},0).to({x:87.8},9,cjs.Ease.cubicInOut).to({x:75.8},7,cjs.Ease.quadOut).to({x:87.8},9,cjs.Ease.cubicInOut).to({x:75.8},7,cjs.Ease.quadOut).wait(4));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoRC0IAAlnIQjAAIAAFng");
	mask.setTransform(54.025,19);

	// Layer_2
	this.instance_1 = new lib.ctaText_1("synched",0);
	this.instance_1.setTransform(75.8,18.8,1,1,0,0,0,58.8,9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49));

	// Layer_1
	this.instance_2 = new lib.ctaButton();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,38);


// stage content:
(lib.IBM_USO_PowerRankings_384x384 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,219];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		myLocalThis01 = this;
		
		//clickTAG
		this.clickTag.addEventListener("click", fl_MouseClickHandler_url);
	}
	this.frame_219 = function() {
		var tl = this;
		this.stop();
		
		this.replayHot.addEventListener("click", onReplayClick );
		this.replayHot.addEventListener("mouseover", onReplayOver );
		this.replayHot.addEventListener("mouseout", onReplayOut );
		
		function onReplayClick() {
			tl.gotoAndPlay(1);
		}
		function onReplayOver() {
			tl.replay_mc.gotoAndPlay(1);
		}
		function onReplayOut() {
			tl.replay_mc.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(219).call(this.frame_219).wait(1));

	// border
	this.replayHot = new lib.hotSpot();
	this.replayHot.name = "replayHot";
	this.replayHot.setTransform(357,-2.1);
	this.replayHot._off = true;
	new cjs.ButtonHelper(this.replayHot, 0, 1, 2, false, new lib.hotSpot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayHot).wait(217).to({_off:false},0).wait(3));

	// replay
	this.replay_mc = new lib.replayAni();
	this.replay_mc.name = "replay_mc";
	this.replay_mc.setTransform(369.85,11.5,1,1,0,0,0,7.2,7.5);
	this.replay_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay_mc).wait(217).to({_off:false},0).wait(3));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A9/eAMAAAg7/MA7/AAAMAAAA7/gA91d2MA7rAAAMAAAg7rMg7rAAAg");
	this.shape.setTransform(192,192);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// clickTag
	this.clickTag = new lib.mc_square();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(192,192,12.0001,11.9999,0,0,0,16,16);
	this.clickTag.alpha = 0.0117;
	new cjs.ButtonHelper(this.clickTag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(220));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0,267,0.6383,0.6382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// textMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("A/PELIAAl7MA+fAAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:200,y:26.7}).wait(218));

	// t1_png
	this.instance_1 = new lib.t1_1("single",0);
	this.instance_1.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(44).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(151));

	// textMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("A/PG5IAAloMA+fAAAIAAFog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:200,y:44.1501}).wait(214));

	// t1_png
	this.instance_2 = new lib.t1_1("single",1);
	this.instance_2.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(40).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(151));

	// textMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("A/PJ2IAAl7MA+fAAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:200,y:63.05}).wait(211));

	// t1_png
	this.instance_3 = new lib.t1_1("single",2);
	this.instance_3.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(37).to({startPosition:2},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(151));

	// textMask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_89 = new cjs.Graphics().p("A/PEbIAAl7MA+fAAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_3_graphics_89,x:200,y:28.25}).wait(131));

	// t1_png
	this.instance_4 = new lib.t2_1("single",0);
	this.instance_4.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(60).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(48));

	// textMask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_93 = new cjs.Graphics().p("A/PHCIAAlUMA+fAAAIAAFUg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_4_graphics_93,x:200,y:44.9499}).wait(127));

	// t1_png
	this.instance_5 = new lib.t2_1("single",1);
	this.instance_5.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(56).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(48));

	// textMask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_96 = new cjs.Graphics().p("A/PJiIAAk/MA+fAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_5_graphics_96,x:200,y:61.0496}).wait(124));

	// t1_png
	this.instance_6 = new lib.t2_1("single",2);
	this.instance_6.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(53).to({startPosition:2},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(48));

	// textMask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_187 = new cjs.Graphics().p("A/PEfIAAl7MA+fAAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_6_graphics_187,x:200,y:28.7}).wait(33));

	// t1_png
	this.instance_7 = new lib.t3_1("single",0);
	this.instance_7.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(22));

	// textMask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_191 = new cjs.Graphics().p("A/PG8IAAk2MA+fAAAIAAE2g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_7_graphics_191,x:200,y:44.4248}).wait(29));

	// t1_png
	this.instance_8 = new lib.t3_1("single",1);
	this.instance_8.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(18));

	// textMask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_195 = new cjs.Graphics().p("A/PJXIAAk2MA+fAAAIAAE2g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(195).to({graphics:mask_8_graphics_195,x:200,y:59.9248}).wait(25));

	// t1_png
	this.instance_9 = new lib.t3_1("single",2);
	this.instance_9.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(195).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(14));

	// textMask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_198 = new cjs.Graphics().p("A/POTIAAoUMA+fAAAIAAIUg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_9_graphics_198,x:200,y:91.5499}).wait(22));

	// cta
	this.instance_10 = new lib.ctaButton_1();
	this.instance_10.setTransform(103.55,209.4,1,1,0,0,0,79,19.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(198).to({_off:false},0).to({y:159.4,alpha:1},11,cjs.Ease.cubicOut).wait(11));

	// rays
	this.instance_11 = new lib.raysAnim("synched",0,false);
	this.instance_11.setTransform(301.25,172.35,0.8677,0.8627,0,0,0,82.1,37.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(206).to({_off:false},0).wait(14));

	// sh1_png
	this.instance_12 = new lib.sh1_1("synched",0);
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({alpha:1},17).wait(38).to({startPosition:0},0).to({alpha:0},12).wait(151));

	// sh2_png
	this.instance_13 = new lib.sh2_1("synched",0);
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).to({alpha:1},18).wait(53).to({startPosition:0},0).to({alpha:0},12).wait(48));

	// sh3_png
	this.instance_14 = new lib.sh3_1("synched",0);
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(187).to({_off:false},0).to({alpha:1},18).wait(15));

	// tennisBall_png
	this.instance_15 = new lib.tennisBallAnim("synched",0,false);
	this.instance_15.setTransform(324.7,191.15,1.5217,1.5209,0,0,0,85.5,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(57).to({scaleX:1.5218,startPosition:57},0).to({scaleX:1.5217,x:305.7,y:325.15,mode:"single",startPosition:99},42,cjs.Ease.cubicInOut).wait(121));

	// bg
	this.instance_16 = new lib.bg_1("synched",0);
	this.instance_16.setTransform(150,646.6,1,1,0,0,0,150,646.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(57).to({startPosition:0},0).to({y:278.6},42,cjs.Ease.cubicInOut).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(192,-176,284.3,976.1);
// library properties:
lib.properties = {
	id: 'EA605CCB96104EAF9801A158E5C37930',
	width: 384,
	height: 384,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ballShadow.png", id:"ballShadow"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/ctaButton.jpg", id:"ctaButton"},
		{src:"images/ctaText.png", id:"ctaText"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/rays.png", id:"rays"},
		{src:"images/sh1.png", id:"sh1"},
		{src:"images/sh2.png", id:"sh2"},
		{src:"images/sh3.png", id:"sh3"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"},
		{src:"images/tbLines1.png", id:"tbLines1"},
		{src:"images/tbLines3.png", id:"tbLines3"},
		{src:"images/tennisBall.png", id:"tennisBall"},
		{src:"images/tennisBallLight.png", id:"tennisBallLight"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA605CCB96104EAF9801A158E5C37930'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;