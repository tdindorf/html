import {sizeMySvg} from './sizeMe.js';

function myFun2(me) {
	var svg = SVG(me);
	var box = svg.group();
	var defs = svg.defs();

	box.circle(4).center(0, 0).fill("red");
	
	sizeMySvg(box, svg);
}

/*
//********** RESIZE ************
function sizeMySvg(box, svg, sH, sW) {
	var bBox = box.bbox();
	var vBox = bBox.x + " " + bBox.y + " " + bBox.width + " " + bBox.height;
	svg.viewbox(vBox); // svg.js: viewbox; d3: viewBox
	if (sH != 0) svg.height(sH);
}
*/
