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
p.nominalBounds = new cjs.Rectangle(0,0,600,2586);


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
p.nominalBounds = new cjs.Rectangle(0,0,254,116);


(lib.logoSh = function() {
	this.initialize(img.logoSh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.rays = function() {
	this.initialize(img.rays);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,148);


(lib.sh1 = function() {
	this.initialize(img.sh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sh2 = function() {
	this.initialize(img.sh2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sh3 = function() {
	this.initialize(img.sh3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDeIAAk1MAu3AAAIAAE1g");
	var mask_graphics_1 = new cjs.Graphics().p("A3bFuIAAkYMAu3AAAIAAEYg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bH1IAAkYMAu3AAAIAAEYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:22.1751}).wait(1).to({graphics:mask_graphics_1,x:150,y:36.65}).wait(1).to({graphics:mask_graphics_2,x:150,y:50.15}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(0,13.4,300,86.89999999999999);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDcIAAkrMAu3AAAIAAErg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bFxIAAkiMAu3AAAIAAEig");
	var mask_graphics_2 = new cjs.Graphics().p("A3bIFIAAkiMAu3AAAIAAEig");
	var mask_graphics_3 = new cjs.Graphics().p("A3bKUIAAkiMAu3AAAIAAEig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:21.975}).wait(1).to({graphics:mask_graphics_1,x:150,y:36.925}).wait(1).to({graphics:mask_graphics_2,x:150,y:51.65}).wait(1).to({graphics:mask_graphics_3,x:150,y:66}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(0,14,300,118);


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
	var mask_graphics_0 = new cjs.Graphics().p("A3bDSIAAkiMAu3AAAIAAEig");
	var mask_graphics_1 = new cjs.Graphics().p("A3bFsIAAkiMAu3AAAIAAEig");
	var mask_graphics_2 = new cjs.Graphics().p("A3bIJIAAkiMAu3AAAIAAEig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:20.95}).wait(1).to({graphics:mask_graphics_1,x:150,y:36.375}).wait(1).to({graphics:mask_graphics_2,x:150,y:52.075}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(0,12.9,300,91.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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


(lib.logoSh_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logoSh();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,1293.1);


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
(lib.IBM_USO_PowerRankings_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.replayHot.setTransform(272.7,-2.1);
	this.replayHot._off = true;
	new cjs.ButtonHelper(this.replayHot, 0, 1, 2, false, new lib.hotSpot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayHot).wait(217).to({_off:false},0).wait(3));

	// replay
	this.replay_mc = new lib.replayAni();
	this.replay_mc.name = "replay_mc";
	this.replay_mc.setTransform(285.55,11.5,1,1,0,0,0,7.2,7.5);
	this.replay_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay_mc).wait(217).to({_off:false},0).wait(3));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgXRAuuMAujAAAMAAAhdbMgujAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// clickTag
	this.clickTag = new lib.mc_square();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,300,9.3751,18.7501,0,0,0,16,16);
	this.clickTag.alpha = 0.0117;
	new cjs.ButtonHelper(this.clickTag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(220));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(9,535,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// textMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("A3bDPIAAkhMAu3AAAIAAEhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:150,y:20.7}).wait(218));

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
	var mask_1_graphics_6 = new cjs.Graphics().p("A3bFkIAAkiMAu3AAAIAAEig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:150,y:35.65}).wait(214));

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
	var mask_2_graphics_9 = new cjs.Graphics().p("A3bINIAAksMAu3AAAIAAEsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:150,y:52.5}).wait(211));

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
	var mask_3_graphics_89 = new cjs.Graphics().p("A3bDZIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_3_graphics_89,x:150,y:21.725}).wait(131));

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
	var mask_4_graphics_93 = new cjs.Graphics().p("A3bFxIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_4_graphics_93,x:150,y:36.95}).wait(127));

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
	var mask_5_graphics_96 = new cjs.Graphics().p("A3bH+IAAkiMAu3AAAIAAEig");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_5_graphics_96,x:150,y:51.05}).wait(124));

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
	var mask_6_graphics_99 = new cjs.Graphics().p("A3bKSIAAkiMAu3AAAIAAEig");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_6_graphics_99,x:150,y:65.85}).wait(121));

	// t1_png
	this.instance_7 = new lib.t2_1("single",3);
	this.instance_7.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(50).to({startPosition:3},0).to({y:273,alpha:0},12,cjs.Ease.cubicIn).wait(48));

	// textMask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_187 = new cjs.Graphics().p("A3bDbIAAkrMAu3AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_7_graphics_187,x:150,y:21.925}).wait(33));

	// t1_png
	this.instance_8 = new lib.t3_1("single",0);
	this.instance_8.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(187).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(22));

	// textMask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_191 = new cjs.Graphics().p("A3bFlIAAkEMAu3AAAIAAEEg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_8_graphics_191,x:150,y:35.6749}).wait(29));

	// t1_png
	this.instance_9 = new lib.t3_1("single",1);
	this.instance_9.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(18));

	// textMask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_195 = new cjs.Graphics().p("A3bHuIAAkEMAu3AAAIAAEEg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(195).to({graphics:mask_9_graphics_195,x:150,y:49.4249}).wait(25));

	// t1_png
	this.instance_10 = new lib.t3_1("single",2);
	this.instance_10.setTransform(150,344.1,1,1,0,0,0,150,300);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(195).to({_off:false},0).to({y:300},11,cjs.Ease.quartOut).wait(14));

	// textMask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_198 = new cjs.Graphics().p("A3bLzIAAmWMAu3AAAIAAGWg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_10_graphics_198,x:150,y:75.4999}).wait(22));

	// cta
	this.ctaBtn = new lib.ctaButton_1();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(91,173.5,1,1,0,0,0,74,19);
	this.ctaBtn.alpha = 0;
	this.ctaBtn._off = true;

	var maskedShapeInstanceList = [this.ctaBtn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(198).to({_off:false},0).to({y:131.5,alpha:1},11,cjs.Ease.cubicOut).wait(11));

	// rays
	this.instance_11 = new lib.raysAnim("synched",0,false);
	this.instance_11.setTransform(192.5,216,1,1,0,0,0,81.5,37);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(206).to({_off:false},0).wait(14));

	// sh1_png
	this.instance_12 = new lib.sh1_1("synched",0);
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({alpha:1},17).wait(37).to({startPosition:0},0).to({alpha:0},12).wait(151));

	// sh2_png
	this.instance_13 = new lib.sh2_1("synched",0);
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).to({alpha:1},21).wait(50).to({startPosition:0},0).to({alpha:0},12).wait(48));

	// sh3_png
	this.instance_14 = new lib.sh3_1("synched",0);
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(187).to({_off:false},0).to({alpha:1},19).wait(14));

	// Layer_1
	this.instance_15 = new lib.logoSh_1("synched",0);
	this.instance_15.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(57).to({_off:false},0).to({alpha:1},42).wait(121));

	// Layer_6 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("AlAFBQiGiFAAi8QAAi8CGiFQCEiFC8AAQC9AACFCFQCFCFAAC8QAAC8iFCFQiFCGi9AAQi8AAiEiGg");
	mask_11.setTransform(190.15,276.3);

	// ballShadow
	this.instance_16 = new lib.ballShadow_1("synched",0);
	this.instance_16.setTransform(185.65,233,1.9888,3.3,-20.9646,0,0,45.4,30.4);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(220));

	// ballShadow
	this.instance_17 = new lib.ballShadow_1("synched",0);
	this.instance_17.setTransform(185.65,233,1.9888,3.3,-20.9644,0,0,45.4,30.4);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(220));

	// ballShadow
	this.instance_18 = new lib.ballShadow_1("synched",0);
	this.instance_18.setTransform(194,295,1,1,0,0,0,45,30);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(220));

	// ballShadow
	this.instance_19 = new lib.ballShadow_1("synched",0);
	this.instance_19.setTransform(194,295,1,1,0,0,0,45,30);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(220));

	// ballShadow
	this.instance_20 = new lib.ballShadow_1("synched",0);
	this.instance_20.setTransform(192.9,275.15,1.4009,1.7657,-5.9659,0,0,45.1,30.2);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(220));

	// tbLines2_png
	this.instance_21 = new lib.lines2("synched",0);
	this.instance_21.setTransform(227.8,278.2,1,1,0,0,0,74.6,38.2);

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(57).to({regX:74.8,scaleX:1.0797,scaleY:1.0018,skewX:3.4065,x:228.05},0).to({regY:38.3,scaleX:1,scaleY:0.643,skewX:-9.3452,skewY:-4.259,x:224.45,y:342.6},16,cjs.Ease.quadIn).to({_off:true},1).wait(10).to({_off:false,regX:75.5,regY:39.2,scaleX:0.9961,scaleY:0.6222,skewX:10.9831,skewY:-4.2581,x:225.1,y:205.9},0).to({regX:74.8,regY:38.2,scaleX:1.0797,scaleY:1.0018,skewX:3.4065,skewY:0,x:228.05,y:278.2},15,cjs.Ease.quadOut).wait(121));

	// Layer_27
	this.instance_22 = new lib.lines3("synched",0);
	this.instance_22.setTransform(190.25,352.35,0.8503,0.7856,0,0,0,42.7,34.7);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(57).to({_off:false},0).wait(11).to({regY:34.6,scaleY:0.8249,y:200.75},0).to({regY:34.5,scaleX:1,scaleY:1.1192,y:277.6},10,cjs.Ease.quadIn).to({regY:34.7,scaleX:0.8503,scaleY:0.7856,y:352.35},10,cjs.Ease.quadOut).wait(132));

	// tennisBall_png
	this.instance_23 = new lib.tennisBallLight();
	this.instance_23.setTransform(144,226);

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(220));

	// tennisBall_png
	this.instance_24 = new lib.tennisBall_1("synched",0);
	this.instance_24.setTransform(222.25,328.35,0.9509,0.9506,0,0,0,163.1,164.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(220));

	// bg
	this.instance_25 = new lib.bg_1("synched",0);
	this.instance_25.setTransform(150,466.6,1,1,0,0,0,150,646.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(57).to({startPosition:0},0).to({y:-46.4},42,cjs.Ease.cubicInOut).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-677,-393,1814,1506.1);
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
		{src:"images/logoSh.png", id:"logoSh"},
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