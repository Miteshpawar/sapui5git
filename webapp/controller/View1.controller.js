sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("Com.MiteshMyFirstDemoApp.controller.View1", {

		onPressClear: function() {
			this.getView().byId("input-a").setValue("");
			this.getView().byId("input-a1").setValue("");
			this.getView().byId("input-a2").setValue("");
		},

		onPressSummit: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"Form Submited Successfully", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},
		onPressNavigate: function() {
			var input = this.getView().byId("input-a").getValue();
			var oGlobalModelRef = this.getOwnerComponent().getModel("oGlobalModel");

			oGlobalModelRef.setProperty("/Name", input);

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RoutetoView2");
		}

	});
});