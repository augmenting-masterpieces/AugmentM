angular.module('templates-cth', ['templates/caseStudy.html', 'templates/experiments.html', 'templates/process.html', 'templates/prototype.html']);

angular.module("templates/caseStudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/caseStudy.html",
    "<section class=\"caseTop\">\n" +
    "	<div class=\"mainDiv\">\n" +
    "		<h1> User Camera Studies </h1>\n" +
    "	</div>\n" +
    "<!-- 	<div class=\"collaborationDiv\">\n" +
    "		<p> A collaboration between:</p>\n" +
    "		<img src=\"./images/uvalogo.png\">\n" +
    "		<img src=\"./images/rijks.png\">\n" +
    "		\n" +
    "	</div> -->\n" +
    "</section>\n" +
    "<section class=\"grayTransition small\">\n" +
    "	<p> A collaboration between:</p>\n" +
    "	<img src=\"./images/uvalogo.png\">\n" +
    "	<img src=\"./images/rijks.png\">\n" +
    "	\n" +
    "</section>\n" +
    "<article >\n" +
    "	<h1> The intro text </h1>\n" +
    "	<p>By Johanna Barnbeck</p>\n" +
    "	<p class=\"boldAlinea\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate \n" +
    "	<img class=\"clearfix\" src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "	</p>\n" +
    "\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. </p>\n" +
    "</article>\n" +
    "\n" +
    "<section class=\"casePersons\">\n" +
    "	<div class=\"identContainer clearfix\">\n" +
    "\n" +
    "		<div class=\"nameDiv clearfix\"> \n" +
    "			<img src=\"./images/male-icon.png\" alt=\"\">\n" +
    "			<h2> Mister Bernard </h2>\n" +
    "			<p> Age: 25 </p>\n" +
    "			\n" +
    "			<p> Accompanied by:</p>\n" +
    "			<p> Friend </p>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"statsDiv clearfix\">	\n" +
    "			<div class=\"pictureStats clearfix\">\n" +
    "				<div class=\"mainPicture clearfix\">\n" +
    "					<h1>42</h1>\n" +
    "					<img src=\"./images/icons/camera.png\" alt=\"\">\n" +
    "				</div>\n" +
    "				<div class=\"threeCatogoryPicture clearfix\">\n" +
    "					<div class=\"paintings clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/picture.png\" alt=\"\">\n" +
    "						<div class=\"statBar bar1 clearfix\"></div>\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/sculpture.png\" alt=\"\">\n" +
    "					</div>\n" +
    "					<div class=\"building clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/building.svg\" alt=\"\">\n" +
    "						<div class=\"statBar bar2 clearfix\"></div>\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/brandblusser.png\" alt=\"\">\n" +
    "					</div>\n" +
    "					<div class=\"people clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/people.png\" alt=\"\">\n" +
    "						<div class=\"statBar bar3 clearfix\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"timeStats clearfix\">\n" +
    "				<div class=\"time clearfix\">\n" +
    "					<p>Visit:</p>\n" +
    "					<img src=\"./images/clock.png\" alt=\"\" class=\"clearfix\">\n" +
    "					<div class=\"timeBar clearfix\">\n" +
    "						<p>90 min</p>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "				<div class=\"time clearfix\">\n" +
    "					<p>Interview:</p>\n" +
    "					<img src=\"./images/clock.png\" alt=\"\" class=\"clearfix\">\n" +
    "					<div class=\"timeBar timeBarSmall clearfix\">\n" +
    "						<p>45 min</p>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<article>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate </p>\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. Numquam totam illum atque molestiae tempore sed, recusandae minima exercitationem non quibusdam est amet Repellendus ut nemo velit, explicabo. Perspiciatis ratione soluta nihil nam ab voluptatem quos eos excepturi expedita molestiae accusamus delectus dolorum dicta, aspernatur fuga nulla quas, saepe, consectetur odio maiores esse cumque! Vel eaque, expedita doloribus, voluptates rerum molestiae nulla architecto dignissimos, esse porro voluptatibus omnis explicabo? Mollitia, provident sequi eligendi quia temporibus hic ex magnam aliquam nobis, earum omnis porro odit illo dolorum. Nemo esse officiis dolorum distinctio aperiam fugit optio eum non obcaecati, sapiente rem sit tempore facilis, saepe a eaque, totam neque. </p>\n" +
    "\n" +
    "	\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "</article>\n" +
    "\n" +
    "<!-- <section class=\"singleCaseTop\">\n" +
    "	<img src=\"./images/rijksdoorzicht.png\">\n" +
    "</section> -->\n" +
    "\n" +
    "<section class=\"singleCaseBody\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 firstSq clearfix\">\n" +
    "			<h1>\"Interesting Quote about something\"</h1>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-5 thirdSq clearfix\">\n" +
    "			<div class=\"conversation clearfix\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-7 fourthSq clearfix\">\n" +
    "		<ul class=\"clearfix\">\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00112.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00117.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00120.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00122.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00127.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00129.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00137.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00141.JPG\">\n" +
    "			</li>\n" +
    "			<li class=\"clearfix\">\n" +
    "				<img src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "			</li>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<article>\n" +
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
    "</article>\n" +
    "\n" +
    "<section class=\"grayTransition small\">\n" +
    "	<p> The End</p>\n" +
    "</section>\n" +
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
