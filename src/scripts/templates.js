angular.module('templates-cth', ['templates/case-study.html', 'templates/home.html', 'templates/prototype.html']);

angular.module("templates/case-study.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/case-study.html",
    "<section class=\"caseTopWrapper\">\n" +
    "	<div class=\"caseTop\">\n" +
    "		<h1><a href=\"#case-study\">U<span>SER </span>C<span>AMERA </span>S<span>TUDY </span></a></h1>\n" +
    "		<h2>“When I have a camera in my hand, I dare to walk in front of a painting. It's like having permission to crawl through the masses.” - participant UCS</h2>\n" +
    "		<h1 class=\"arrow\">&#8595; </h1>\n" +
    "	</div>\n" +
    "	<div class=\"dataVisualisation\">\n" +
    "		<div class=\"visualisation\"></div>\n" +
    "		<div class=\"textBlock1\" >\n" +
    "			<h3> How do visitors experience the Rijksmuseum?</h3>\n" +
    "			<p class=\"boldAlinea\">This case study shows how the User Camera Studies were conducted, gives visual examples and types of insights a museum can gain by using photographic means as a source of feedback from their visitors.</p>\n" +
    "\n" +
    "			<p>Augmenting Masterpieces applies visitor's photography through User Camera Studies (UCS)1 as one of the main research sources. In addition to other interview methods they give not only room to individual oral, but also to visual stories and analysis which supports the project's targeted innovation process for multi-medial and digital interfaces for museums. \n" +
    "			</p>\n" +
    "\n" +
    "			<p>The UCS helped to understand the social dimensions of a museum and map the museum experience as the participating visitors moved social aspects and rather basic preconditions for art reception back into the center of attention by addressing their interaction with the space, museum staff, other visitors and art objects. </p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"textblock2\">\n" +
    "	<p>The purpose of our study was to get qualitative input from the visitors for developing digital devices and interactive means in the Rijksmuseum. The User Camera Study consists of two phases. First the participants are given a camera with which they walk through the museum and take pictures of whatever draws their attention. They can choose themselves what they capture, for how long they want to stay in the exhibition and how many pictures they want to take.</p>\n" +
    "\n" +
    "	<p>The second phase is a qualitative interview in which they first get to talk about the photographs in a way that is comparable to someone showing their vacation pictures: descriptive and as detailed as they prefer. Later on specific questions concerning sensual experiences (what did you hear, smell, touch?) and digital devices (which devices did you use during your visit and to do what?) </p>\n" +
    "\n" +
    "	<p>This setting gives the participants freedom to talk about their own points of interest and observations during their visit in a vacation-style narrative that is familiar to most people. The pictures that the participants take also serve to remember certain situations and aspects easily. As the study provides oral and visual feedback, it reveals different kinds of information than a thematically focused survery. </p>\n" +
    "\n" +
    "	<p>The survey had twelve participants from four out of the five visitors' categories the Rijksmuseum works with on a daily basis in their education and marketing department. These four categories all concern unaccompanied visitors (Cultural Tourist, Art Lover's, Cultural Professionals and Families, whereas the fifth category consists of accompanied groups (school classes and workshop groups from the Teekenschool).</p>\n" +
    "	<p>Three Cultural Tourists, three Art Lover's, two Cultural Professionals and one Family (with three children, who each participated as well) participated in the present survey. Below there is one detailed profile and script from a participating Cultural Tourist in order to get an indepth view on the kind of feedback provided.The most revealing result of the survey were that the social dimensions of a visit to the Rijksmuseum are highly important for all visitor's types. Whereas the amount of time spent on looking at art works and written information varied largely, all participants observed other visitors, listened into their conversations or were wondering about their own – proper - behaviour at times. </p>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"returnHome\">\n" +
    "	<h4><a href=\"#home\">Return Home</a></h4>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home.html",
    "<section class=\"homeContainer\">\n" +
    "	<section class=\"homeHeader\">\n" +
    "		<div class=\"title\">\n" +
    "			<h1>A<span>UGMENTING</span><span class=\"second\">&nbsp;M</span><span>ASTERPIECES &#8594;</span> </h1>\n" +
    "			<!-- <h2>...through embedded research and human-centered design.</h2 > -->\n" +
    "\n" +
    "			<p>Augmenting Masterpieces explores visitors' experiences and the social dimensions of a visit to the Rijksmuseum. It translates the findings into an interface which lets the visitor interact with both the physical and the digital collection.\n" +
    "			   Through embedded and artistic research methods the project reduces the gap between academic research and creative production. Its results manifest in a prototype, academic articles and this multi-medial presentation.</p>\n" +
    "			<div class=\"logos\">\n" +
    "				<a href=\"https://www.rijksmuseum.nl/\"><img src=\"./images/logos/rijkswhite.png\"></a>\n" +
    "				<a href=\"http://cdh.uva.nl/\"><img src=\"./images/logos/uvalogowhite.png\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeVideo\">\n" +
    "		<div class=\"contents .glass\">\n" +
    "			<h2 class=\"quote\">\"We’ve all observed visitors taking the #museumselfie, ...<br>taking photos of object labels, and we’ve all seen families <br>struggle with the anti-social nature of audioguides.\"<br> - Seb Chan, Director of Digital & Emerging Media, Smithsonian, New York</h2>\n" +
    "			<iframe src=\"http://prezi.com/embed/vz3s0inp6iyg/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;features=undefined&amp;disabled_features=undefined\" frameBorder=\"0\" webkitAllowFullScreen mozAllowFullscreen allowfullscreen></iframe>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeButtonSection homeCaseStudy\">\n" +
    "		<h1><a href=\"#case-study\">U<span>SER </span>C<span>AMERA </span>S<span>TUDY </span></a></h1>\n" +
    "		<h2>“When I have a camera in my hand, I dare to walk in front of a painting. It's like having permission to crawl through the masses.” - participant UCS</h2>\n" +
    "		<h1 class=\"arrow\">&#8595; </h1>\n" +
    "	</section>\n" +
    "	<section class=\"homeMethods\">\n" +
    "		<div class=\"methodsList\">\n" +
    "			<h4>Methods</h4>\n" +
    "			<hr>\n" +
    "			<p>Interdisciplinary Approach</p>\n" +
    "			<p>Embedded Research</p>\n" +
    "			<p>Artistic Research</p>\n" +
    "			<p>Design Thinking</p>\n" +
    "			<p>Digital Humanities</p>\n" +
    "			<h4>References</h4>\n" +
    "			<hr>\n" +
    "			<p>Literature</p>\n" +
    "			<p>Videogallery</p>\n" +
    "			<p>References</p>\n" +
    "		</div>\n" +
    "		<div class=\"methodsContent\">\n" +
    "			<h4>Interdisciplinary Approach</h4>\n" +
    "			<p>Embedded research projects who stimulate collaborations between the creative industries and university research enable new forms of research. As do Artistic Research, Design Thinking and Digital Humanities. Each of them is a rather new discipline of itself. In order to do justice to the new goals of not only theoretically investigate, but also practically implement research results within the same project, a new set of tools and possible forms for output are necessary. The methodological combination of the above mentioned toolboxes guarantees an adequate interdisciplinary assemblage of techniques and media. Whereas Artistic Research allows to creatively and practically work with post-modern theories, the Design Thinking approach gives access to co-creation frameworks and user innovation while building a product-oriented bridge between research and prototype. The overarching question of how digitality enters musea through which technology nowadays.  </p>\n" +
    "			<h4>Embedded Research</h4>\n" +
    "			<p>As embedded research project, Augmenting Masterpieces takes a close look at social aspects and focuses on visitor interaction before exploring technological enhancements and building prototypes. Through need-oriented, user centered and creative methods from both design thinking and artistic research, gaining necessary technical expertise through collaborating with private partners and carefully documenting the process, we not only present our research, but also offer support for others who might want to investigate questions around digitality in their museums or institutions.  </p>\n" +
    "			<h4>Artistic Research</h4>\n" +
    "			<p>As embedded research project, Augmenting Masterpieces takes a close look at social aspects and focuses on visitor interaction before exploring technological enhancements and building prototypes. Through need-oriented, user centered and creative methods from both design thinking and artistic research, gaining necessary technical expertise through collaborating with private partners and carefully documenting the process, we not only present our research, but also offer support for others who might want to investigate questions around digitality in their museums or institutions.  </p>\n" +
    "			<h4>Design Thinking</h4>\n" +
    "			<p>As embedded research project, Augmenting Masterpieces takes a close look at social aspects and focuses on visitor interaction before exploring technological enhancements and building prototypes. Through need-oriented, user centered and creative methods from both design thinking and artistic research, gaining necessary technical expertise through collaborating with private partners and carefully documenting the process, we not only present our research, but also offer support for others who might want to investigate questions around digitality in their museums or institutions.  </p>\n" +
    "			<h4>Digital Humanities</h4>\n" +
    "			<p>This project approaches the collection of the Rijksmuseum primarily as data rather than artworks. This is in no way an attempt to diminish the value of the painting, but rather a shift in perspective in order to discover new ways of interacting and discovering hidden treasures in these famous artworks. This project aims at building a bridge between the practical dimensions of datavisualisation and interaction design on the one hand, and the theoretical concerns of art history and audience studies on the other. Practices of visualisation seem to be an excellent fit for the humanities.  </p>\n" +
    "			\n" +
    "			<hr>\n" +
    "\n" +
    "			<h4>Literature</h4>\n" +
    "			<ol>\n" +
    "				<li>A Touch of Code. Interactive Installations and Experiences. Ed. Robert Klanten, Sven Ehmann, and Verena Hanschke. Berlin: Gestalten, 2011. Print.</li>\n" +
    "\n" +
    "				<li>Bal, Mieke. Reading Rembrandt: Beyond the Word-Image Opposition. Amsterdam: Amsterdam University Press, 2006. Print.</li>\n" +
    "\n" +
    "				<li>Birringer, Johannes “Moveable worlds/Digital scenographies”,            International Journal of Performance Arts &amp; Digital Media, Volume 6, Number 1, 1 June 2010 , pp. 89-107(19).</li>\n" +
    "\n" +
    "				<li>Bostock, Michael, Vadim Ogievetsky, and Jeffrey Heer. “D3: Data-Driven Documents” IEEE Trans. Visualization &amp; Comp. Graphics. 2011. Online.</li>\n" +
    "\n" +
    "				<li>Bullivant, Lucy. Interactive Architecture 4D Social: Interactive Design Environments. Indianapolis: Wiley and Sons, 2007. Print.</li>\n" +
    "\n" +
    "				<li>Certeau, Michel de. “Spatial Stories.” The Practice of Everyday Life. Minneapolis: University Of Minnesota Press, 1984. 115–130. Print.</li>\n" +
    "\n" +
    "				<li>Falk, J. (2009). Identity and the Museum Visitor Experience. Walnut Creek, CA Left Coast Press.</li>\n" +
    "\n" +
    "				<li>Glogner, Patrick; Föhl, Patrick (2010) Das Kulturpublikum:             Fragestellungen und Befunde der empirischen Forschung. VS Verlag für Sozialwissenschaften.</li>\n" +
    "\n" +
    "				<li>Heer, Jeffrey, Bostock Mike. “Declarative Language Design for Interactive Visualization.” IEEE Trans. Visualization &amp; Comp. Graphics. 2010. Online.</li>\n" +
    "\n" +
    "				<li>Hermes, Joke “Audience Studies 2.0. On the theory, politics and method of qualitative audience research.” In: Interactions: Studies in       Communication &amp; Culture, Volume 1, Number 1, 1 September 2009, pp. 111-127(17).</li>\n" +
    "\n" +
    "				<li>Informotion. Animated Infographics. Ed. Tim Finke and Sebastian Manger.Berlin: Gestalten, 2012. Print.</li>\n" +
    "\n" +
    "				<li>Kirchberg, Volker (2009) Innovative Besucher- und Museumsforschung: Hintergrundbericht, http://www.kulturmanagement.net/beitraege/prm/39/v__d/ni__879/index.html</li>\n" +
    "\n" +
    "				<li>Kittler, Friedrich. “The Perspective of Print.” Configurations. 10.1 (2002): 37–50. Print. “Universities: Wet, Hard, Soft, and Harder.” Critical Inquiry 31.1 (2004): 244–255. Print.</li>\n" +
    "\n" +
    "				<li>Kossman, Herman, and Mark de Jong. Engaging Spaces: Exhibition DesignExplored. Amsterdam: Frame, 2010. Print.</li>\n" +
    "\n" +
    "				<li>Museum Informatics: People, Information, and Technology in Museums. Ed. Paul F. Marty, and Katherine Burton Burton Jones. New York: Routledge, 2009. Print.</li>\n" +
    "\n" +
    "				<li>Park, Ki-Woong, et al. “Towards Interactive Museum: Mapping Cultural</li>\n" +
    "\n" +
    "				<li> Contexts to Historical Objects.” Relation 10.1.142 (2009): 5630. Print.</li>\n" +
    "\n" +
    "				<li>Parry, Ross. Museums in a Digital Age. New York: Routledge, 2010. Print.</li>\n" +
    "\n" +
    "				<li>Reas, Casey, and Ben Fry. Processing. A Programming Handbook for Visual Designers and Artists. Cambridge MA: MIT Press, 2007. Print.</li>\n" +
    "\n" +
    "				<li>Renden, Sandra. Information Graphics. Ed. Julius Wiedemann. Cologne:</li>\n" +
    "\n" +
    "				<li>Taschen, 2012. Print.</li>\n" +
    "\n" +
    "				<li>Ronell, Avitall. “Proving Grounds: On Nietzsche and the Test Drive.” MLN.118.3 (2003): 653–669. Print.</li>\n" +
    "\n" +
    "				<li>Rowea, Anthony “Digital Creativity - Designing for engagement in mixed reality experiences that combine projection mapping and camera- based interaction.” http://www.tandfonline.com/toc/ndcr20/current#.UZOLYCvOSjw</li>\n" +
    "\n" +
    "				<li>Simon, Nina. The Participatory Museum. Santa Cruz, CA: Museum 2.0, 2010.Print. </li>\n" +
    "			\n" +
    "				<li>Smeets, Ionica &amp; Schraffenberger Hanna “OK, Glass?”, In: AR[t] – Augmented Reality, Art and Technology, 04 nov 2013, p. 42-48. http://issuu.com/arlab/docs/art4_issuu</li>\n" +
    "\n" +
    "				<li>Schraffenberger, Hanna &amp; E. van der Heide “Interaction Models for Audience-Artwork Interaction: Current State and Future Directions.” In: Arts and Technology, Second International Conference, ArtsIT 2011, Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST), 2011.</li>\n" +
    "\n" +
    "				<li>Tröndle, Martin (2011): The Entanglement of Arts and Sciences: On the Transaction Costs of Transdisciplinary Research Settings. In: Journalfor Artistic Research. Issue 1.</li>\n" +
    "\n" +
    "				<li>Tröndle, Martin / Greenwood, Steven / Kirchberg, Volker / Tschacher, Wolfgang: An Integrative and Comprehensive Methodology for Studying Aesthetic Experience in the Field: Merging Movement Tracking, Physiology and Psychological Data. Environment and Behavior. 2012. doi:10.1177/0013916512453839</li>\n" +
    "\n" +
    "				<li>Tschacher, Wolfgang (2012). Physiological correlates of aesthetic perception in a museum, In: Journal of Psychology of Aesthetics, Creativity, and the Arts, 6, 96-103. doi: 10.1037/a0023845</li>\n" +
    "\n" +
    "				<li>Tufte, Edward R. Visual Explanations: Images and Quantities, Evidence and Narrative. Chesire CT: Graphics Press, 1997. Print.</li>\n" +
    "\n" +
    "				<li>Van Hage, Willem Robert, et al. “Finding your way through the Rijksmuseum with an adaptive mobile museum guide.” The Semantic Web: Research and Applications. Berlin: Springer, 2010. 46–59. Print.</li>\n" +
    "\n" +
    "				<li>Visser, Jasper; Richardson, Jim (2013) Digital Engagement In Culture, Heritage and the Arts.http://www.digitalengagementframework.com/</li>\n" +
    "			</ol>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeButtonSection homePrototype\">\n" +
    "		<h1><a href=\"#prototypes\">P<span>ROTOTYPE</span></a></h1>\n" +
    "		<h2>We are working on it!</h2>\n" +
    "		<h1 class=\"arrow\"> &#8595; </h1>\n" +
    "	</section>\n" +
    "	<section class=\"homeAbout\">\n" +
    "		<div class=\"people clearfix\">\n" +
    "			<h4>People</h4>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"./images/persons/johanna2.jpg\" alt=\"Embedded Researcher UvA -> Rijksmuseum\">\n" +
    "				<p>Johanna Barnbeck</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"./images/persons/janHein.jpg\" alt=\"Jan Hein Hoogstad - Assistant Professor Cultural Analasis\">\n" +
    "				<p>Jan Hein Hoogstad</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"./images/persons/shailoh.jpg\" alt=\"\" class=\"none\">\n" +
    "				<p>Shailoh Phillips</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"./images/persons/patty.jpg\" alt=\"Intern and Thesis\">\n" +
    "				<p>Patty Jansen</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"./images/persons/robert.jpg\" alt=\"Intern\">\n" +
    "				<p>Robert-Jan Korteschiel</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"timeline\">\n" +
    "			<h4 class=\"timelineTitle\">Timeline</h4>\n" +
    "			<div class=\"theLine\"></div>\n" +
    "			<div class=\"left\">\n" +
    "				<div class=\"singleTimeItem date\"><h4>2014</h4></div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Understand</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Ideate</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Prototype</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Test</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Present</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem date\"><h4>2015</h4></div>\n" +
    "			</div>\n" +
    "			<div class=\"right\"> \n" +
    "				<h4>Understand</h4>\n" +
    "				<p>The first phase of the project consists of understanding how the employees run the Rijksmuseum on a daily basis, the digital engagement methods they set up, the experiences the visitors make when using the digital interfaces and the experiences the visitors make inside the museum. In order to understand what efforts are taken by the museum itself, I will interview and engage with the people working in different departments of the Rijksmuseum.\n" +
    "				Further, I try to understand the visitor's experience and modes of engagement through a Camera User Study, by interviewing visitors, by equipping visitors with helmet cameras which deliver a Point-of-View-video of the museum visit and by observing and capturing gestures and body language of the visitors.</p> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeConnect\">\n" +
    "		<div class=\"title\">\n" +
    "			<h1>A<span>UGMENTING</span><span class=\"second\">&nbsp;M</span><span>ASTERPIECES</span> </h1>\n" +
    "			<!-- <h2>...through embedded research and human-centered design.</h2 > -->\n" +
    "\n" +
    "			<p>Augmenting Masterpieces explores visitors' experiences and the social dimensions of a visit to the Rijksmuseum. It translates the findings into an interface which lets the visitor interact with both the physical and the digital collection.\n" +
    "			   Through embedded and artistic research methods the project reduces the gap between academic research and creative production. Its results manifest in a prototype, academic articles and this multi-medial presentation.</p>\n" +
    "			<div class=\"logos\">\n" +
    "				<a href=\"https://www.rijksmuseum.nl/\"><img src=\"./images/logos/rijkswhite.png\"></a>\n" +
    "				<a href=\"http://cdh.uva.nl/\"><img src=\"./images/logos/uvalogowhite.png\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("templates/prototype.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/prototype.html",
    "<section>\n" +
    "	<p> Im the Prototype Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);
