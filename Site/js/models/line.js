var shapes = shapes || {}

shapes.line = function Line(startX, startY, endX, endY, raphael) {
    var start = {
        x: startX,
        y: startY
    };
    var end = {
        x: endX,
        y: endY
    };
    var getPath = function () {
        return "M" + start.x + " " + start.y + " L" + end.x + " " + end.y;
    };

    var redraw = function () {
        node.attr({ stroke: '#fff', 'stroke-width': 1, 'path': getPath() });
    }

    var node = raphael.path(getPath());

    return {
        getPath: function () {
            return getPath();
        },
        updateStart: function (x, y) {
            start.x = x;
            start.y = y;
            redraw();
            return this;
        },
        updateEnd: function (x, y) {
            end.x = x;
            end.y = y;
            redraw();
            return this;
        }
    };
};