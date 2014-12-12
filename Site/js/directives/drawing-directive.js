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

                $(id).on('click', function (e) {
                    var x = e.offsetX;
                    var y = e.offsetY;

                    var line = new shapes.line(x, y, x, y, scope.paper);

                    $(id).on('mousemove', function (e) {
                        x = e.offsetX;
                        y = e.offsetY;
                        line.updateEnd(x, y);
                    });
                    scope.points.push({ x: x, y: y });
                });

                $(id).mouseup(function (e) {
                    var point = scope.paper.circle(e.offsetX, e.offsetY, 5);
                    point.attr("fill", "blue").node.onmouseover = function () {
                        this.style.cursor = 'pointer';
                    };
                    $(id).off('mousemove');
                });

                $(id).dblclick(function (e) {
                    scope.points.pop();
                    $(id).off('mousemove');
                    var polygon = new shapes.polygon(scope.points, scope.paper);
                    polygon.build();
                    scope.points = [];
                });
            }
        }
    }]);
});
