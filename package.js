Package.describe({
  documentation: "README.md",
  git: "https://github.com/tkhtechnology/layout.git",
  name: "cctech:layout",
  summary: "Polymer Layout renderer",
  version: "2.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("1.6");
  api.use('ecmascript');
  api.use('cctech:synthesis@1.3.17');

  api.addFiles("PolymerLayout.js", ["client"]);
  api.addFiles("mwc_layout.html", ["client"]);

  api.export("mwcLayout",["client"]);
});
