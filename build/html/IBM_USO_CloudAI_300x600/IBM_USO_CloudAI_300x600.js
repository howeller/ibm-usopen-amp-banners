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
p.nominalBounds = new cjs.Rectangle(0,0,600,1780);


(lib.ctaButton = function() {
	this.initialize(img.ctaButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,72);


(lib.ctaText = function() {
	this.initialize(img.ctaText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,72);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.rays = function() {
	this.initialize(img.rays);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,148);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
	var mask_graphics_0 = new cjs.Graphics().p("Egu3AEgIAAmqMBdvAAAIAAGqg");
	var mask_graphics_1 = new cjs.Graphics().p("Egu3AHzIAAmCMBdvAAAIAAGCg");
	var mask_graphics_2 = new cjs.Graphics().p("Egu3ALhIAAmCMBdvAAAIAAGCg");
	var mask_graphics_3 = new cjs.Graphics().p("Egu3AP2IAAmCMBdvAAAIAAGCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:300,y:28.8268}).wait(1).to({graphics:mask_graphics_1,x:300,y:49.9241}).wait(1).to({graphics:mask_graphics_2,x:300,y:73.6741}).wait(1).to({graphics:mask_graphics_3,x:300,y:101.4241}).wait(1));

	// Layer_1
	this.instance = new lib.t3();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14.9,300,188);


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
	var mask_graphics_0 = new cjs.Graphics().p("Egu3AEHIAAmdMBdvAAAIAAGdg");
	var mask_graphics_1 = new cjs.Graphics().p("Egu3AHqIAAmkMBdvAAAIAAGkg");
	var mask_graphics_2 = new cjs.Graphics().p("Egu3ALhIAAnCMBdvAAAIAAHCg");
	var mask_graphics_3 = new cjs.Graphics().p("Egu3APSIAAnCMBdvAAAIAAHCg");
	var mask_graphics_4 = new cjs.Graphics().p("Egu3AS4IAAnMMBdvAAAIAAHMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:300,y:26.2509}).wait(1).to({graphics:mask_graphics_1,x:300,y:49.011}).wait(1).to({graphics:mask_graphics_2,x:300,y:73.6853}).wait(1).to({graphics:mask_graphics_3,x:300,y:97.8466}).wait(1).to({graphics:mask_graphics_4,x:300,y:120.7573}).wait(1));

	// Layer_1
	this.instance = new lib.t2();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.1,300,230.4);


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
	var mask_graphics_0 = new cjs.Graphics().p("Egu3AECIAAmPMBdvAAAIAAGPg");
	var mask_graphics_1 = new cjs.Graphics().p("Egu3AHyIAAmQMBdvAAAIAAGQg");
	var mask_graphics_2 = new cjs.Graphics().p("Egu3APZIAAmQMBdvAAAIAAGQg");
	var mask_graphics_3 = new cjs.Graphics().p("Egu3ATOIAAmQMBdvAAAIAAGQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:300,y:25.85}).wait(1).to({graphics:mask_graphics_1,x:300,y:49.775}).wait(1).to({graphics:mask_graphics_2,x:300,y:98.475}).wait(1).to({graphics:mask_graphics_3,x:300,y:122.975}).wait(1));

	// Layer_1
	this.instance = new lib.t1();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.7,300,234.3);


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
p.nominalBounds = new cjs.Rectangle(0,0,160,36);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,890.1);


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
	mask.setTransform(134,18);

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
p.nominalBounds = new cjs.Rectangle(109,0,50,36);


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
	this.instance.setTransform(58.8,9,1,1,0,0,0,58.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:0},0).to({x:66.8},9,cjs.Ease.cubicInOut).to({x:58.8},7,cjs.Ease.quadOut).to({x:66.8},9,cjs.Ease.cubicInOut).to({x:58.8},7,cjs.Ease.quadOut).wait(4));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoRC0IAAlnIQjAAIAAFng");
	mask.setTransform(53.025,18);

	// Layer_2
	this.instance_1 = new lib.ctaText_1("synched",0);
	this.instance_1.setTransform(58.8,9,1,1,0,0,0,58.8,9);

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
p.nominalBounds = new cjs.Rectangle(0,0,167,36);


// stage content:
(lib.IBM_USO_CloudAI_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(219).call(this.frame_219).wait(158));

	// border
	this.replayHot = new lib.hotSpot();
	this.replayHot.name = "replayHot";
	this.replayHot.setTransform(272.7,-2.1);
	this.replayHot._off = true;
	new cjs.ButtonHelper(this.replayHot, 0, 1, 2, false, new lib.hotSpot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayHot).wait(217).to({_off:false},0).to({_off:true},3).wait(157));

	// replay
	this.replay_mc = new lib.replayAni();
	this.replay_mc.name = "replay_mc";
	this.replay_mc.setTransform(285.55,11.5,1,1,0,0,0,7.2,7.5);
	this.replay_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay_mc).wait(217).to({_off:false},0).to({_off:true},3).wait(157));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgXRAuuMAujAAAMAAAhdbMgujAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},220).wait(157));

	// clickTag
	this.clickTag = new lib.mc_square();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,300,9.3751,18.7501,0,0,0,16,16);
	this.clickTag.alpha = 0.0117;
	new cjs.ButtonHelper(this.clickTag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).to({_off:true},220).wait(157));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},220).wait(157));

	// textMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("Egu3AEFIAAmPMBdvAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:300,y:26.1}).wait(375));

	// t1_png
	this.instance_1 = new lib.t1_1("single",0);
	this.instance_1.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(44).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},151).wait(157));

	// textMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("Egu3AH0IAAmPMBdvAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:300,y:50.05}).wait(371));

	// t1_png
	this.instance_2 = new lib.t1_1("single",1);
	this.instance_2.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(40).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},151).wait(157));

	// textMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_23 = new cjs.Graphics().p("Egu3APcIAAmeMBdvAAAIAAGeg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_2_graphics_23,x:300,y:98.7759}).wait(354));

	// t1_png
	this.instance_3 = new lib.t1_1("single",2);
	this.instance_3.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(23).to({startPosition:2},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},151).wait(157));

	// textMask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_27 = new cjs.Graphics().p("Egu3ATRIAAmeMBdvAAAIAAGeg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_3_graphics_27,x:300,y:123.2759}).wait(350));

	// t1_png
	this.instance_4 = new lib.t1_1("single",3);
	this.instance_4.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(19).to({startPosition:3},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(307));

	// textMask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_89 = new cjs.Graphics().p("Egu3AECIAAmdMBdvAAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_4_graphics_89,x:300,y:25.7509}).wait(288));

	// t1_png
	this.instance_5 = new lib.t2_1("single",0);
	this.instance_5.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(60).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(157));

	// textMask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_93 = new cjs.Graphics().p("Egu3AHiIAAmQMBdvAAAIAAGQg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_5_graphics_93,x:300,y:48.2091}).wait(284));

	// t1_png
	this.instance_6 = new lib.t2_1("single",1);
	this.instance_6.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(56).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(157));

	// textMask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_96 = new cjs.Graphics().p("Egu3ALNIAAmQMBdvAAAIAAGQg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_6_graphics_96,x:300,y:71.7}).wait(281));

	// t1_png
	this.instance_7 = new lib.t2_1("single",2);
	this.instance_7.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(53).to({startPosition:2},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(157));

	// textMask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_99 = new cjs.Graphics().p("Egu3APQIAAnCMBdvAAAIAAHCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_7_graphics_99,x:300,y:97.6125}).wait(278));

	// t1_png
	this.instance_8 = new lib.t2_1("single",3);
	this.instance_8.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(50).to({startPosition:3},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(157));

	// textMask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_102 = new cjs.Graphics().p("Egu3AS7IAAnCMBdvAAAIAAHCg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_8_graphics_102,x:300,y:121.0875}).wait(275));

	// t1_png
	this.instance_9 = new lib.t2_1("single",4);
	this.instance_9.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(47).to({startPosition:4},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(204));

	// textMask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_187 = new cjs.Graphics().p("Egu3AEdIAAmdMBdvAAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_9_graphics_187,x:300,y:28.4509}).wait(190));

	// t1_png
	this.instance_10 = new lib.t3_1("single",0);
	this.instance_10.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(187).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},22).wait(157));

	// textMask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_191 = new cjs.Graphics().p("Egu3AHkIAAlmMBdvAAAIAAFmg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_10_graphics_191,x:300,y:48.4473}).wait(186));

	// t1_png
	this.instance_11 = new lib.t3_1("single",1);
	this.instance_11.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(191).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},18).wait(157));

	// textMask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_194 = new cjs.Graphics().p("Egu3ALXIAAlnMBdvAAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_11_graphics_194,x:300,y:72.6973}).wait(183));

	// t1_png
	this.instance_12 = new lib.t3_1("single",2);
	this.instance_12.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(194).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},15).wait(157));

	// textMask (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_198 = new cjs.Graphics().p("Egu3APsIAAlmMBdvAAAIAAFmg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_12_graphics_198,x:300,y:100.4473}).wait(179));

	// t1_png
	this.instance_13 = new lib.t3_1("single",3);
	this.instance_13.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(198).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},14).wait(154));

	// textMask (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_201 = new cjs.Graphics().p("Egu3ATlIAApQMBdvAAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(201).to({graphics:mask_13_graphics_201,x:300,y:125.3228}).wait(176));

	// cta
	this.ctaBtn = new lib.ctaButton_1();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(95,270.4,1,1,0,0,0,79,19.4);
	this.ctaBtn._off = true;

	var maskedShapeInstanceList = [this.ctaBtn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(201).to({_off:false},0).to({y:229.4},11,cjs.Ease.cubicInOut).to({_off:true},8).wait(157));

	// rays
	this.instance_14 = new lib.raysAnim("synched",0,false);
	this.instance_14.setTransform(189.9,319.45,1.2864,1.2856,0,0,0,82.2,37.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(206).to({_off:false},0).to({_off:true},14).wait(157));

	// Layer_6 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	mask_14.graphics.p("AHLeqQh1h0AAikQAAilB1h0QB0h0ClAAQCkAAB0B0QB1B0AAClQAACkh1B0Qh0B1ikAAQilAAh0h1g");
	mask_14.setTransform(113.6792,207.8918);

	// ballShadow
	this.instance_15 = new lib.ballShadow_1("synched",0);
	this.instance_15.setTransform(184.4,338.85,1.7361,2.8804,-20.9673,0,0,45.5,30.6);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},220).wait(157));

	// ballShadow
	this.instance_16 = new lib.ballShadow_1("synched",0);
	this.instance_16.setTransform(184.4,338.85,1.7361,2.8804,-20.967,0,0,45.5,30.6);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},220).wait(157));

	// ballShadow
	this.instance_17 = new lib.ballShadow_1("synched",0);
	this.instance_17.setTransform(191.9,393.1,0.8729,0.8727,0,0,0,45.8,30.6);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},220).wait(157));

	// ballShadow
	this.instance_18 = new lib.ballShadow_1("synched",0);
	this.instance_18.setTransform(191.9,393.1,0.8729,0.8727,0,0,0,45.8,30.6);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},220).wait(157));

	// ballShadow
	this.instance_19 = new lib.ballShadow_1("synched",0);
	this.instance_19.setTransform(190.75,375.8,1.223,1.5411,-5.9617,0,0,45.6,30.7);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},220).wait(157));

	// tbLines2_png
	this.instance_20 = new lib.lines2("synched",0);
	this.instance_20.setTransform(221.2,378.4,0.8729,0.8727,0,0,0,75.2,38.9);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(159).to({regX:75.5,scaleX:0.9425,scaleY:0.8742,skewX:3.3961,x:221.5},0).to({regX:75.2,regY:39.8,scaleX:0.8729,scaleY:0.5611,skewX:-9.3414,skewY:-4.2434,x:218.3,y:434.8},16,cjs.Ease.quadIn).to({_off:true},1).wait(10).to({_off:false,regX:76.4,regY:40.5,scaleX:0.8695,scaleY:0.5429,skewX:10.9777,skewY:-4.2442,x:218.95,y:315.4},0).to({regX:75.5,regY:38.9,scaleX:0.9425,scaleY:0.8742,skewX:3.3961,skewY:0,x:221.5,y:378.4},15,cjs.Ease.quadOut).to({_off:true},19).wait(157));

	// Layer_27
	this.instance_21 = new lib.lines3("synched",0);
	this.instance_21.setTransform(188.25,443.3,0.7422,0.6855,0,0,0,43.2,35.8);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(159).to({_off:false},0).wait(11).to({regY:35.4,scaleY:0.7199,y:310.8},0).to({regY:35.1,scaleX:0.8729,scaleY:0.9767,x:188.3,y:377.85},10,cjs.Ease.quadIn).to({regY:35.8,scaleX:0.7422,scaleY:0.6855,x:188.25,y:443.3},10,cjs.Ease.quadOut).to({_off:true},30).wait(157));

	// tennisBall_png
	this.instance_22 = new lib.tennisBallLight();
	this.instance_22.setTransform(147.65,332.2,0.8729,0.8727);

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(159).to({_off:true},61).wait(157));

	// tennisBall_png
	this.instance_23 = new lib.tennisBall_1("synched",0);
	this.instance_23.setTransform(216.2,422.15,0.8301,0.8296,0,0,0,163.5,164.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(159).to({startPosition:0},0).to({_off:true},61).wait(157));

	// bg
	this.instance_24 = new lib.bg_1("synched",0);
	this.instance_24.setTransform(150,646.6,1,1,0,0,0,150,646.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(159).to({startPosition:0},0).to({y:357.6},42,cjs.Ease.cubicInOut).to({_off:true},19).wait(157));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-677,0,1814,890.1);
// library properties:
lib.properties = {
	id: 'EA605CCB96104EAF9801A158E5C37930',
	width: 300,
	height: 600,
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