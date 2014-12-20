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

                scope.$on('drawline', function(e) {
                    alert('line');
                    $log.info(e);
                });

                scope.$on('drag', function (e) {
                    alert('drag');
                    $log.info(e);
                });

                scope.$on('delete', function (e) {
                    alert('delete');
                    $log.info(e);
                });
/*

                $(id).on('click', function (e) {
                    var x = e.offsetX;
                    var y = e.offsetY;
                    var line = new shapes.line(x, y, x, y, scope.paper);

                    $(id).on('mousemove', function (e) {
                        x = e.offsetX;
                        y = e.offsetY;
                        line.updateEnd(x, y);
                    });
                    scope.points.push({ x: e.offsetX, y: e.offsetY });
                });

                $(id).mouseup(function (e) {
                    if (!scope.isDragging) {
                        //var point = scope.paper.circle(e.offsetX, e.offsetY, 5);

                        // point.attr("fill", "blue").node.onmouseover = function() {
                        //     this.style.cursor = 'pointer';
                        // };
                    }
                    $(id).off('mousemove');
                });

                $(id).dblclick(function (e) {
                    
                    //scope.points.pop();
                    $(id).off('mousemove click');
                    var polygon = new shapes.polygon(scope.points, scope.paper, scope);
                    polygon.build();
                });
*/

                /* scope.paper = Raphael(attrs.id, '100%', '100%');
                 scope.points = [];
 
                 $(id).on('click', function (e) {
                     
                     var x = e.offsetX;
                     var y = e.offsetY;
 
                     var line = new shapes.line(x, y, x, y, scope.paper);
 
                     $(id).on('mousemove', function (e) {
                         e.stopPropagation();
                         x = e.offsetX;
                         y = e.offsetY;
                         line.updateEnd(x, y);
                     });
                     scope.points.push({ x: e.offsetX, y: e.offsetY });
                 });
 
                 $(id).mouseup(function (e) {
                     if (!scope.isDragging) {
                         //var point = scope.paper.circle(e.offsetX, e.offsetY, 5);
 
                        // point.attr("fill", "blue").node.onmouseover = function() {
                        //     this.style.cursor = 'pointer';
                        // };
                     }
                     $(id).off('mousemove');
                 });
 
                 $(id).dblclick(function (e) {
                     e.stopPropagation();
                     scope.points.pop();
                     $(id).off('mousemove click');
                     var polygon = new shapes.polygon(scope.points, scope.paper, scope);
                     polygon.build();
                 });*/
            }
        }
    }]);
});
