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
                        fun: function() {
                            alert('i am add button')
                        }
                    }, {
                        name: 'Drag&Drop',
                        title: 'Drag&Drop',
                        fun: function() {
                            alert('i am update button')
                        }
                    }, {
                        name: 'Delete',
                        title: 'create button',
                        fun: function() {
                            alert('i am add button')
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
