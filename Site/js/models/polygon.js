/// <reference path="../vendors/raphael/raphael.js" />
var shapes = shapes || {}

shapes.polygon = function Polygon(points, paper, scope) {
    return {
        build: function () {
            var start = function () {
                this.ox = this.attr("cx");
                this.oy = this.attr("cy");
                this.animate({ "fill-opacity": 0.2 }, 500);
                scope.isDragging = true;
            },
            move = function (dx, dy) {
                this.translate(dx - this.odx, dy - this.ody);
                this.odx = dx;
                this.ody = dy;
            },
            up = function (e) {
                this.animate({ "fill-opacity": 1 }, 500);
                scope.isDragging = false;
            };

            var path = "";
            var pointsLength = points.length;
            path += "M " + points[0].x + " " + points[0].y;
            for (var i = 1; i < pointsLength - 1; i++) {
                path += "L" + points[i].x + " " + points[i].y;
            }
            path += "z"; 
            var obj = paper.path(path)
                .attr("stroke-width", 0)
                .attr("fill", "#9cf");
            obj.drag(move, start, up);
        }
    }
};