const widgets = require("widget");
const data = require("self").data;

var widget = widgets.Widget({
  id: "dcbv-link",
  label: "DCBV website",
  contentURL: "http://www.mozilla.org/favicon.ico",
  contentScriptFile: [data.url("jquery-1.7.1.min.js")
    ,data.url("dcbv.js")
  ],
  onClick: function() {
  }
});

widget.port.on("myval", function(url) {
  require("tabs").activeTab.url="http://dochoibevui.herokuapp.com/";
});

