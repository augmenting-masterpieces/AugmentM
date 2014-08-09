angular.module('templates-cth', ['templates/caseStudy.html', 'templates/experiments.html', 'templates/process.html', 'templates/prototype.html']);

angular.module("templates/caseStudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/caseStudy.html",
    "<section ui-sref-active=\"active\">\n" +
    "	<p> Im the case study Template </p>\n" +
    "</section>");
}]);

angular.module("templates/experiments.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/experiments.html",
    "<section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos1\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg2 pos2\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg3 pos3\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "<section>\n" +
    "	<section class=\"fullScreenBox fbg2 pos4\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg1 pos5\">\n" +
    "\n" +
    "		<h1>Augmenting Masterpieces</h1>\n" +
    "\n" +
    "		<p class=\"thought t1\"> What can I do? </p>\n" +
    "		<p class=\"thought t2\"> What do I see? </p>\n" +
    "		<p class=\"thought t3\"> What do they see? </p>\n" +
    "\n" +
    "\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg2 pos6\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "<section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos7\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg3 pos8\">\n" +
    "		<video src=\"../video/big_buck_bunny.webm\" controls class=\"vid\"></video>\n" +
    "		<div class=\"vidOverlay\"></div>\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos9\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("templates/process.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/process.html",
    "<section>\n" +
    "	<p> Im the process Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);

angular.module("templates/prototype.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/prototype.html",
    "<section>\n" +
    "	<p> Im the Prototype Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);
