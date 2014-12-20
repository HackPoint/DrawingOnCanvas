define(['directives-module'], function (directives) {
    'use strict';
    // http://wesleytodd.com/2013/4/drag-n-drop-in-raphael-js.html
    directives.directive('contextMenu', function() {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, element) {
                var contextMenu = [
                    {
                        name: 'Draw Line',
                        title: 'Draw Line',
                        fun: function () {
                            scope.$emit('drawline', this);
                            // alert('i am add button')
                        }
                    }, {
                        name: 'Drag&Drop',
                        title: 'Drag&Drop',
                        fun: function() {
                            scope.$emit('drag', this);
                        }
                    }, {
                        name: 'Delete',
                        title: 'create button',
                        fun: function() {
                            scope.$emit('delete', this);
                        }
                    }
                ];


                $(element).contextMenu(contextMenu, {
                    triggerOn: 'click',
                    mouseClick: 'right'
                });
            }
        }
    });
});
