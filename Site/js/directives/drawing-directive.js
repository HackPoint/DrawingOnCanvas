define(['directives-module'], function (directives) {
    'use strict';

    directives.directive('drawing', ['$document', '$log', function ($document, $log) {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, element, attrs) {
                var id = "#" + attrs.id;
                scope.paper = Raphael(attrs.id, '100%', '100%');
                scope.points = [];
                scope.polygons = [];
                scope.canvas = $(id);
                scope.isDragging = false;

                scope.canvas.mouseup(function (e) {
                    scope.canvas.off('mousemove');
                });

                scope.canvas.dblclick(function (e) {
                    e.stopPropagation();
                    var polygon = new shapes.polygon(scope.points, scope.paper, scope);
                    scope.polygons.push({ polygon: polygon.build() });
                    scope.points = [];
                    // remove click: reason to not create more than on line
                    scope.canvas.off('mousemove');

                    if (!!scope.isDragging) {
                        scope.canvas.off('on');
                    }
                });

                var clickHandler = function (e) {
                    if (scope.isDragging) return;

                    var x = e.offsetX;
                    var y = e.offsetY;
                    var line = new shapes.line(x, y, x, y, scope.paper);

                    scope.canvas.on('mousemove', function (e) {
                        x = e.offsetX;
                        y = e.offsetY;
                        line.updateEnd(x, y);
                    });
                    scope.points.push({ x: e.offsetX, y: e.offsetY });
                }
                scope.canvas.on('click', clickHandler);
            },
            controller: function ($scope, $element, $attrs) {

            }
        }
    }]);
});
