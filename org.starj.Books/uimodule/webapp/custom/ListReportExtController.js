sap.ui.define([
    "./dialog/CustomDialog"
], function (CustomDialog){
    "use strict";



    return {

        doCustomAction1: function() {
            alert('doCustomAction1');
        },

        onTableCustomActionButtonPress: function(oBindingContext, aSelectedContexts) {
            // const oContext = aSelectedContexts[0],
            //     oModel = oContext.getModel(),
            //     sPath = oContext.getPath();

            this.getModel("custom").setProperty("/date", new Date());
            
            const oDialog = new CustomDialog();
            oDialog.setModel(this.getModel("custom"), "custom");
            oDialog.open();
        }

    };
});
