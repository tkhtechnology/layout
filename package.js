Package.describe({
  documentation: "README.md",
  git: "https://github.com/tkhtechnology/layout.git",
  name: "cctech:layout",
  summary: "Polymer Layout renderer",
  version: "1.1.24-dev.1"
});

Package.onUse(function(api) {
  api.versionsFrom("1.6");
  api.use('ecmascript');
  api.use('cctech:synthesis');

  api.addFiles("PolymerLayout.js", ["client"]);
  api.addFiles("mwc_layout.html", ["client"]);

  api.export("mwcLayout",["client"]);
});
