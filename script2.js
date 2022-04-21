import * from './sizeMe.js';

function myFun2(me) {
	var svg = SVG(me);
	var box = svg.group();
	var defs = svg.defs();

	box.circle(4).center(0, 0).fill("green");
	
	sizeMySvg(box, svg);
}

// expose myFun2 to all
window.myFun2 = myFun2;
