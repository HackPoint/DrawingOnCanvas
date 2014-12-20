define(['raphael'], function (raphael) {
    'use strict';

    Raphael.st.draggable = function () {
        var me = this,
            lx = 0,
            ly = 0,
            ox = 0,
            oy = 0,
            moveFnc = function (dx, dy) {
                lx = dx + ox;
                ly = dy + oy;
                me.transform('t' + lx + ',' + ly);
            },
            startFnc = function () { },
            endFnc = function () {
                ox = lx;
                oy = ly;
            };

        this.drag(moveFnc, startFnc, endFnc);
    };
});