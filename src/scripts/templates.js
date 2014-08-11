angular.module('templates-cth', ['templates/caseStudy.html', 'templates/experiments.html', 'templates/process.html', 'templates/prototype.html']);

angular.module("templates/caseStudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/caseStudy.html",
    "<section class=\"caseTop\">\n" +
    "	<div class=\"mainDiv\">\n" +
    "		<h1> User Camera Studies </h1>\n" +
    "		<p> This article will show you the museum trough the eyes of the visitor. Blablabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ratione eos laudantium, nisi porro quos dignissimos. Odio iure, in, et natus debitis laboriosam dignissimos praesentium, vero neque fugit, totam libero. </p>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section class=\"casePersons\">\n" +
    "	<div class=\"headerDiv\">\n" +
    "		<h1> Three Persons, One Museum...</h1>\n" +
    "		<p class=\"headerText\"> Here we introduce the three main actors of this essay.</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"identContainer\">\n" +
    "		<div class=\"identDiv clearfix\"> \n" +
    "			<h2> Person 1 </h2>\n" +
    "			<img src=\"./images/male-icon.png\" alt=\"\">\n" +
    "			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus et, ipsum nisi quisquam quasi quidem quia dolorem mollitia voluptatum aut aperiam nihil pariatur, quos itaque, inventore veritatis ea. Tenetur.</p>\n" +
    "		</div>\n" +
    "		<div class=\"identDiv clearfix\"> \n" +
    "			<h2> Person 2 </h2>\n" +
    "			<img src=\"./images/female-icon.png\" alt=\"\">\n" +
    "			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sequi numquam provident laudantium sunt illo, iusto! Id laborum perferendis, commodi ducimus dicta ea, animi reprehenderit placeat non veniam sunt consectetur.</p>\n" +
    "		</div>\n" +
    "		<div class=\"identDiv clearfix\"> \n" +
    "			<h2> Person 3 </h2>\n" +
    "			<img src=\"./images/male-icon.png\" alt=\"\">\n" +
    "			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iste cum enim quia dolorem. Quibusdam aut dolores facere. In itaque mollitia, sint harum obcaecati? Libero autem placeat amet, officia illum.</p>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "\n" +
    "	<p>	<br>I guess my clearfix is only partially working!!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, fugiat at similique impedit ea sed provident quam adipisci accusamus mollitia, sequi, commodi reprehenderit. Ex quibusdam maxime veritatis, eos nesciunt laudantium!</p>\n" +
    "\n" +
    "</section>\n" +
    "<section class=\"singleCaseIntro\">\n" +
    "	<h1> The mysterious mr. B </h1>\n" +
    "</section>\n" +
    "<section class=\"singleCaseTop\">\n" +
    "	<h1> and his quest </h1>\n" +
    "	<img src=\"./images/rijksdoorzicht.png\">\n" +
    "</section>\n" +
    "<section class=\"singleCaseBody\">\n" +
    "	\n" +
    "\n" +
    "</section>\n" +
    "<section class=\"singleCaseExplain\">\n" +
    "\n" +
    "\n" +
    "</section>\n" +
    "<section class=\"transitionToAllArticle\">\n" +
    "	\n" +
    "</section>\n" +
    "<section class=\"allCasesArticle\">\n" +
    "	\n" +
    "</section>	\n" +
    "");
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
    "<section class=\"centerSite\">\n" +
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
