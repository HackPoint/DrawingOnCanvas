var shapes = shapes || {}

shapes.polygon = function Polygon(points, paper) {
    return {
        build: function () {
            var start = function () {
                this.ox = this.attr("cx");
                this.oy = this.attr("cy");
                this.animate({ "fill-opacity": 0.2 }, 500);
            },
                move = function (dx, dy) {
                    this.translate(dx - this.odx, dy - this.ody);
                    this.odx = dx;
                    this.ody = dy;
                },
                up = function () {
                    this.animate({ "fill-opacity": 1 }, 500);
                };

            var path = "";
            var pointsLength = points.length;
            for (var i = 0; i < pointsLength; i++) {
                if (i === 0)
                    path += "M " + points[i].x + " " + points[i].y;
                else
                    path += " " + points[i].x + " " + points[i].y;

                if (i === pointsLength) {
                    path += "z";
                }
            }
            var obj = paper.path(path).attr("fill", "#9cf");
            obj.drag(move, start, up);
        }
    }
};