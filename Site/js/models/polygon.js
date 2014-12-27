/// <reference path="../vendors/raphael/raphael.js" />
var shapes = shapes || {}

shapes.polygon = function Polygon(points, paper, scope) {
    return {
        build: function () {
            /*var start = function () {
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
            };*/
            var set = paper.set();

            var path = "";
            var pointsLength = points.length;
            path += "M " + points[0].x + " " + points[0].y;
            for (var i = 1; i < pointsLength - 1; i++) {
                path += "L" + points[i].x + " " + points[i].y;
            }
            path += "z";
            var obj = paper.path(path)
                .attr("stroke-width", 1)
                .attr("fill-opacity", .7)
                .attr("fill", "#9cf");

            set.push(obj).draggable();

            $([obj.node]).contextMenu({
                menu: 'shape',
                onShow: function (target, pos) {
                    var s = target;

                    var w = s.getBBox().width; // get current width (size)
                    $('#shape')
                        .find('a[name="style"]').removeAttr('checked')
                        .parent().removeClass('checked')
                        .end()
                        .end()
                        .find('a[name="style"][val="' + s.class + '"]').attr('checked', 'checked')
                        .parent().addClass('checked');
                },
                onSelect: function (menuitem, target, href, pos) {
                    var s = target;

                    if (menuitem.attr('name') === 'style') {
                        var val = menuitem.attr('val');

                        switch (val) {
                            case 'default':
                                s.style('base', val, { duration: 0, easing: false });
                                break;
                            case 'custom':
                                s.style('base', val, { duration: 300, easing: 'backOut' });
                                break;
                        }
                    }
                    else {
                        var c = menuitem.attr('color');
                        s.attr("fill", c);
                    }
                }
            });
            return path;
        }
    }
};