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
p.nominalBounds = new cjs.Rectangle(0,0,600,870);


(lib.ctaButton = function() {
	this.initialize(img.ctaButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,64);


(lib.ctaText = function() {
	this.initialize(img.ctaText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,64);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.rays = function() {
	this.initialize(img.rays);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,148);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDdIAAkrMAu3AAAIAAErg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bF2IAAkMMAu3AAAIAAEMg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bIlIAAkMMAu3AAAIAAEMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:22.075}).wait(1).to({graphics:mask_graphics_1,x:150,y:37.4178}).wait(1).to({graphics:mask_graphics_2,x:150,y:54.9178}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(0,14.2,300,95.7);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDEIAAkrMAu3AAAIAAErg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bFAIAAkXMAu3AAAIAAEXg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bG9IAAksMAu3AAAIAAEsg");
	var mask_graphics_3 = new cjs.Graphics().p("A3bI/IAAksMAu3AAAIAAEsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:19.625}).wait(1).to({graphics:mask_graphics_1,x:150,y:31.9786}).wait(1).to({graphics:mask_graphics_2,x:150,y:44.525}).wait(1).to({graphics:mask_graphics_3,x:150,y:57.525}).wait(1));

	// Layer_1
	this.instance = new lib.t2();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.3,300,105.8);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDjIAAkrMAu3AAAIAAErg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bGRIAAksMAu3AAAIAAEsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:22.7}).wait(1).to({graphics:mask_graphics_1,x:150,y:40.125}).wait(1));

	// Layer_1
	this.instance = new lib.t1();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15.4,300,64.89999999999999);


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
p.nominalBounds = new cjs.Rectangle(0,0,140,32);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,435.1);


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
p.nominalBounds = new cjs.Rectangle(91,0,49,29);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:0},0).to({x:64.8},9,cjs.Ease.cubicInOut).to({x:58.8},7,cjs.Ease.quadOut).to({x:64.8},9,cjs.Ease.cubicInOut).to({x:58.8},7,cjs.Ease.quadOut).wait(4));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoRC0IAAlnIQjAAIAAFng");
	mask.setTransform(54.025,19);

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
p.nominalBounds = new cjs.Rectangle(0,0,146,32);


// stage content:
(lib.IBM_USO_PowerRankings_300x300 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,230];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		myLocalThis01 = this;
		
		//clickTAG
		this.clickTag.addEventListener("click", fl_MouseClickHandler_url);
	}
	this.frame_230 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(230).call(this.frame_230).wait(77));

	// border
	this.replayHot = new lib.hotSpot();
	this.replayHot.name = "replayHot";
	this.replayHot.setTransform(272.7,-2.1);
	this.replayHot._off = true;
	new cjs.ButtonHelper(this.replayHot, 0, 1, 2, false, new lib.hotSpot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayHot).wait(228).to({_off:false},0).to({_off:true},3).wait(76));

	// replay
	this.replay_mc = new lib.replayAni();
	this.replay_mc.name = "replay_mc";
	this.replay_mc.setTransform(285.55,11.5,1,1,0,0,0,7.2,7.5);
	this.replay_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay_mc).wait(228).to({_off:false},0).to({_off:true},3).wait(76));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3gA3RXSMAujAAAMAAAgujMgujAAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},231).wait(76));

	// clickTag
	this.clickTag = new lib.mc_square();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,150,9.3751,9.375,0,0,0,16,16);
	this.clickTag.alpha = 0.0117;
	new cjs.ButtonHelper(this.clickTag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).to({_off:true},231).wait(76));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},231).wait(76));

	// textMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("A3bDeIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:150,y:22.2}).wait(305));

	// t1_png
	this.instance_1 = new lib.t1_1("single",0);
	this.instance_1.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(44).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},162).wait(76));

	// textMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("A3bGUIAAksMAu3AAAIAAEsg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:150,y:40.4}).wait(287));

	// t1_png
	this.instance_2 = new lib.t1_1("single",1);
	this.instance_2.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(26).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},162).wait(76));

	// textMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_89 = new cjs.Graphics().p("A3bDLIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_2_graphics_89,x:150,y:20.25}).wait(218));

	// t1_png
	this.instance_3 = new lib.t2_1("single",0);
	this.instance_3.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(71).to({startPosition:0},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(76));

	// textMask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_93 = new cjs.Graphics().p("A3bFCIAAkWMAu3AAAIAAEWg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_3_graphics_93,x:150,y:32.2286}).wait(214));

	// t1_png
	this.instance_4 = new lib.t2_1("single",1);
	this.instance_4.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(67).to({startPosition:1},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(76));

	// textMask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_96 = new cjs.Graphics().p("A3bG3IAAkMMAu3AAAIAAEMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_4_graphics_96,x:150,y:43.9178}).wait(211));

	// t1_png
	this.instance_5 = new lib.t2_1("single",2);
	this.instance_5.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(64).to({startPosition:2},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},48).wait(76));

	// textMask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_100 = new cjs.Graphics().p("A3bIqIAAkMMAu3AAAIAAEMg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_5_graphics_100,x:150,y:55.4178}).wait(207));

	// t1_png
	this.instance_6 = new lib.t2_1("single",3);
	this.instance_6.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(60).to({startPosition:3},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(123));

	// textMask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_198 = new cjs.Graphics().p("A3bDYIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_6_graphics_198,x:150,y:21.575}).wait(109));

	// t1_png
	this.instance_7 = new lib.t3_1("single",0);
	this.instance_7.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(198).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},22).wait(76));

	// textMask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_202 = new cjs.Graphics().p("A3bF6IAAkQMAu3AAAIAAEQg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(202).to({graphics:mask_7_graphics_202,x:150,y:37.766}).wait(105));

	// t1_png
	this.instance_8 = new lib.t3_1("single",1);
	this.instance_8.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(202).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},18).wait(76));

	// textMask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_206 = new cjs.Graphics().p("A3bIkIAAkPMAu3AAAIAAEPg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(206).to({graphics:mask_8_graphics_206,x:150,y:54.841}).wait(101));

	// t1_png
	this.instance_9 = new lib.t3_1("single",2);
	this.instance_9.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(206).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).to({_off:true},14).wait(76));

	// textMask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_209 = new cjs.Graphics().p("A3bMlIAAmlMAu3AAAIAAGlg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_9_graphics_209,x:150,y:80.4499}).wait(98));

	// cta
	this.ctaBtn = new lib.ctaButton_1();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(96,184.9,1,1,0,0,0,79,20.9);
	this.ctaBtn._off = true;

	var maskedShapeInstanceList = [this.ctaBtn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(209).to({_off:false},0).to({y:144.9},11,cjs.Ease.cubicInOut).to({_off:true},11).wait(76));

	// rays
	this.instance_10 = new lib.raysAnim("synched",0,false);
	this.instance_10.setTransform(236.15,133.95,0.676,0.6747,0,0,0,81.6,37.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(220).to({_off:false},0).to({_off:true},11).wait(76));

	// Layer_6 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AjXDZQhahaAAh/QAAh+BahZQBZhbB+ABQB/gBBaBbQBZBZAAB+QAAB/hZBaQhaBah/AAQh+AAhZhag");
	mask_10.setTransform(235.125,172.65);

	// ballShadow
	this.instance_11 = new lib.ballShadow_1("synched",0);
	this.instance_11.setTransform(232.95,144.5,1.3391,2.2233,-20.9459,0,0,45.8,31);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},231).wait(76));

	// ballShadow
	this.instance_12 = new lib.ballShadow_1("synched",0);
	this.instance_12.setTransform(232.95,144.5,1.3391,2.2233,-20.9455,0,0,45.8,31);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},231).wait(76));

	// ballShadow
	this.instance_13 = new lib.ballShadow_1("synched",0);
	this.instance_13.setTransform(238.8,186.45,0.6731,0.6736,0,0,0,46.5,31.7);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},231).wait(76));

	// ballShadow
	this.instance_14 = new lib.ballShadow_1("synched",0);
	this.instance_14.setTransform(238.8,186.45,0.6731,0.6736,0,0,0,46.5,31.7);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},231).wait(76));

	// ballShadow
	this.instance_15 = new lib.ballShadow_1("synched",0);
	this.instance_15.setTransform(238.2,172.9,0.9431,1.1896,-5.9491,0,0,46.2,30.9);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},231).wait(76));

	// tbLines2_png
	this.instance_16 = new lib.lines2("synched",0);
	this.instance_16.setTransform(261.75,175.2,0.7267,0.6748,0,3.3809,0,76.5,40.1);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(171).to({startPosition:0},0).to({regX:76,regY:41.5,scaleX:0.6731,scaleY:0.4329,skewX:-9.3143,skewY:-4.2265,x:259.25,y:218.55},16,cjs.Ease.quadIn).to({_off:true},1).wait(10).to({_off:false,regX:77.2,regY:41.6,scaleX:0.6704,scaleY:0.4189,skewX:10.9448,skewY:-4.2315,x:259.7,y:126.2},0).to({regX:76.5,regY:40.1,scaleX:0.7267,scaleY:0.6748,skewX:3.3809,skewY:0,x:261.75,y:175.2},15,cjs.Ease.quadOut).to({_off:true},18).wait(76));

	// Layer_27
	this.instance_17 = new lib.lines3("synched",0);
	this.instance_17.setTransform(236.45,225.25,0.5723,0.5291,0,0,0,44.8,37.1);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(171).to({_off:false},0).wait(11).to({regY:36.6,scaleY:0.5556,y:122.85},0).to({regX:44.1,regY:36.1,scaleX:0.6731,scaleY:0.7539,x:236.4,y:174.75},10,cjs.Ease.quadIn).to({regX:44.8,regY:37.1,scaleX:0.5723,scaleY:0.5291,x:236.45,y:225.25},10,cjs.Ease.quadOut).to({_off:true},29).wait(76));

	// tennisBall_png
	this.instance_18 = new lib.tennisBallLight();
	this.instance_18.setTransform(204,138.65,0.6731,0.6736);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},231).wait(76));

	// tennisBall_png
	this.instance_19 = new lib.tennisBall_1("synched",0);
	this.instance_19.setTransform(257.9,208.95,0.6401,0.6403,0,0,0,164.8,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},231).wait(76));

	// bg
	this.instance_20 = new lib.bg_1("synched",0);
	this.instance_20.setTransform(150,646.6,1,1,0,0,0,150,646.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(171).to({startPosition:0},0).to({y:511.6},42,cjs.Ease.cubicInOut).to({_off:true},18).wait(76));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361.1,435.1);
// library properties:
lib.properties = {
	id: 'EA605CCB96104EAF9801A158E5C37930',
	width: 300,
	height: 300,
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