export function sizeMySvg(box, svg, sH, sW) {
	var bBox = box.bbox();
	var vBox = bBox.x + " " + bBox.y + " " + bBox.width + " " + bBox.height;
	svg.viewbox(vBox); // svg.js: viewbox; d3: viewBox
	if (sH != 0) svg.height(sH);
}