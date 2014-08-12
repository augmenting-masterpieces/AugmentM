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
    "	<div class=\"identContainer clearfix\">\n" +
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
    "</section>\n" +
    "<section class=\"singleCaseIntro\">\n" +
    "	<h1> Their Routes </h1>\n" +
    "</section>\n" +
    "<section class=\"singleCaseTop\">\n" +
    "	<img src=\"./images/rijksdoorzicht.png\">\n" +
    "</section>\n" +
    "<section class=\"singleCaseBody\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 firstSq\">\n" +
    "			<h1>\"Interesting Quote about something\"</h1>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-5 thirdSq\">\n" +
    "			<div class=\"conversation\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-7 fourthSq clearfix\">\n" +
    "		<ul>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00112.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00117.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00120.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00122.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00127.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00129.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00137.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00141.JPG\">\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "			</li>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section class=\"transitionToArticle\">\n" +
    "	<h1> The Story</h1>\n" +
    "</section>\n" +
    "<section class=\"singleCaseExplain\">\n" +
    "	<h1> The main text </h1>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate </p>\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. \n" +
    "\n" +
    "	<img src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "\n" +
    "	Numquam totam illum atque molestiae tempore sed, recusandae minima exercitationem non quibusdam est amet Repellendus ut nemo velit, explicabo. Perspiciatis ratione soluta nihil nam ab voluptatem quos eos excepturi expedita molestiae accusamus delectus dolorum dicta, aspernatur fuga nulla quas, saepe, consectetur odio maiores esse cumque! Vel eaque, expedita doloribus, voluptates rerum molestiae nulla architecto dignissimos, esse porro voluptatibus omnis explicabo? Mollitia, provident sequi eligendi quia temporibus hic ex magnam aliquam nobis, earum omnis porro odit illo dolorum. Nemo esse officiis dolorum distinctio aperiam fugit optio eum non obcaecati, sapiente rem sit tempore facilis, saepe a eaque, totam neque. </p>\n" +
    "\n" +
    "	\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "</section>\n" +
    "<section class=\"transitionToArticle\">\n" +
    "	<p> Im a real pretty footer </p>\n" +
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
