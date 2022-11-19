/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["org/starj/Books/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
