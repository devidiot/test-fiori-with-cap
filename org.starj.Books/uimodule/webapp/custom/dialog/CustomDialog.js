sap.ui.define([
    "sap/m/Dialog",
    "sap/m/DialogRenderer",
    "sap/m/VBox",
    "sap/m/DatePicker",
    "sap/m/Button",
    "sap/m/MessageBox"
], function (Parent, ParentRenderer, VBox, DatePicker, Button, MessageBox){
    "use strict";

    const CustomDialog = Parent.extend("dialog.CustomDialog", {

        renderer: ParentRenderer,

        constructor: function(){
            Parent.apply(this, arguments);

            const oBox = new VBox({
                items: [
                    new DatePicker({
                        value: {
                            type: "sap.ui.model.type.Date",
                            path: "custom>/date",
                            format: "yyyy-MM-dd"
                        },
                        displayFormat: "yyyy-MM-dd"
                    })
                ]
            });
            oBox.addStyleClass("sapUiMediumMargin");
            this.addContent(oBox);

            this.setTitle("가격기준일 입력");
            this.setBeginButton(new Button({
                type: "Emphasized",
                text: "Apply",
                press: this.handleApplyPress.bind(this)
            }));
            this.setEndButton(new Button({
                type: "Transparent",
                text: "Cancel",
                press: this.handleCancelPress.bind(this)
            }));

        },

        handleApplyPress: function(){
            const oDate = this.getModel("custom").getProperty("/date");
            MessageBox.alert(oDate.toDateString());
            this.close();
        },

        handleCancelPress: function(){
            this.close();
        }

    });

    return CustomDialog;
});
