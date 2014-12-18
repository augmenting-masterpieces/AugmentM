angular.module('templates-augm', ['../templates/content/about.html', '../templates/content/assumptions.html', '../templates/content/demo.html', '../templates/content/evaluation.html', '../templates/content/header.html', '../templates/content/literature.html', '../templates/content/masonryviewer.html', '../templates/content/survey.html', '../templates/content/theory.html', '../templates/content/usercamerastudy.html', '../templates/displayorder.html', '../templates/functional/footer.html', '../templates/functional/nav.html', '../templates/old/case-study.html', '../templates/old/home.html', '../templates/old/homepageold.html']);

angular.module("../templates/content/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/about.html",
    "<div class=\"col-lg-24 col-lg-offset-2 col-md-24 col-md-offset-2 col-sm-24 col-sm-offset-2 col-xs-24 col-xs-offset-0\">\n" +
    "	<h1>About</h1>\n" +
    "	<h4>People</h4>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-2 col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xs-24 col-xs-offset-0\">\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<img src=\"./images/persons/johanna2.jpg\" alt=\"Embedded Researcher UvA -> Rijksmuseum\">\n" +
    "		<p>Johanna Barnbeck</p>\n" +
    "	</div>\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<img src=\"./images/persons/janHein.jpg\" alt=\"Jan Hein Hoogstad - Assistant Professor Cultural Analysis\">\n" +
    "		<p>Jan Hein Hoogstad</p>\n" +
    "		<p>Assistant Professor Cultural Analysis</p>\n" +
    "	</div>\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<img src=\"./images/persons/shailoh.jpg\" alt=\"\" class=\"none\">\n" +
    "		<p>Shailoh Phillips</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\" >\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<img src=\"./images/persons/patty.jpg\" alt=\"Intern and Thesis\">\n" +
    "		<p>Patty Jansen</p>\n" +
    "	</div>\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<img src=\"./images/persons/robert.jpg\" alt=\"Intern\">\n" +
    "		<p>Robert-Jan Korteschiel</p>\n" +
    "	</div>\n" +
    "	<div class=\"person clearfix\">\n" +
    "		<p>CONTACT</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("../templates/content/assumptions.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/assumptions.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2> Assumptions...</h2>\n" +
    "	<h3>“That's what we think they want.”</h3>\n" +
    "	<p>An initial interdisciplinary expert meeting, with all parties involved, included a discussion and brainstorm about what kind of digital interfaces the museum uses already, what is in the planning and what people from the different departments might want in the future in order to cater to the visitor's needs and to match their goals of engaging visitors with the exhibition.<br>\n" +
    "\n" +
    "	Soon we found ourselves in the middle of a discussion about what the visitors of the museum actually wanted, seen from different academic and professional perspectives. The discussion culminated in someone provocatively asking: “Do visitors actually want a different experience? Everything that we have discussed is just what we think they want.”</p>\n" +
    "\n" +
    "	<p>This sentence beautifully sums up what kind of reflection one first needs to get out there and subsequently rid off: assumptions about user experiences. Accordingly, I designed my research process with a strong focus on input from the museum visitors, based on how the employees run the Rijksmuseum on a daily basis and on the digital engagement methods they set up for their visitors.</p>\n" +
    "</div>\n" +
    "<div class=\"col-lg-14 col-lg-offset-0 col-md-14 col-md-offset-0 col-sm-14 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<img class=\"child\" src=\"images/webimages/visitors_aussumptions.jpg\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/demo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/demo.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>It doesn't matter how much 'cultural capital' you bring.</h2>\n" +
    "	<h3>Social features for visitor's engagement</h3>\n" +
    "	<p>The visitor's experience of the Rijksmuseum and the interaction of visitors with artworks are necessarily embedded in a strong social framework. As the museum adheres to a large number of social rules it is often thought of as a rather intimidating place, than a place for learning and curiosity and as a visitor, one cannot get anywhere close to knowing everything about the collection.<br>\n" +
    "\n" +
    "	The vast amount of knowledge that is bundled in and around the museum often reminds visitors of their insufficient knowledge, which therefore lets them feel slightly awkward when walking through the exhibition.<br>\n" +
    "\n" +
    "	<p>Rather than trying to attempt to engage people with in-depth (art) historical background information about art works, we set up three ways of social interaction on a broader range with the museum and the other visitors.</p>\n" +
    "\n" +
    "	<p>Through engaging on more general terms with the surrounding, people will be more likely to find their own access to the museum and ultimately to the artworks in it.</p>\n" +
    "\n" +
    "	<p>Visitors can contribute and share their observations and knowledge, no matter what their <i>cultural capital</i> is, which creates a feeling of being valuable.</p></a>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<div class='embed-container'>\n" +
    "		<iframe src='http://player.vimeo.com/video/112958657' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/evaluation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/evaluation.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>Process Evaluation</h2>\n" +
    "	<p>We prototyped and tested three features, which tried to provide answers to the human-centered design question: “How we might engage museum visitors more with their surrounding without indicating a distinction by putting value into the aspect they choose to engage with?”<br>\n" +
    "\n" +
    "	Even stronger, by letting them emphasizing their own aspects in order to find their own approach to the exhibition.</p>\n" +
    "\n" +
    "	<p>The ambition was to take away their feeling of 'social awkwardness' or felt lack of knowledge through letting them contribute their own impressions and observations about the museum and the artworks in it, and through encountering random stories or trivia questions at at random pieces of art by other visitors.<br>\n" +
    "\n" +
    "	The critical feedback we received matched our hypothesis that visitors of the 'cultural professional'-group, who already know how they can personally interact with the museum setting, required and appreciated the informal quality of the stories less than visitors of the other categories. However, all of the visitors said that it made their museum visit more interactive and brought in different perspectives they wouldn't have thought of themselves.</p>\n" +
    "</div>\n" +
    "<div class=\"col-lg-14 col-lg-offset-0 col-md-14 col-md-offset-0 col-sm-14 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h1>Concluding Remarks</h1>\n" +
    "	<p>Visitors largely appreciated the possibility of submitting own stories and trivia questions, and were tempted to do so.<br>\n" +
    "\n" +
    "	The majority of the test persons indicated that they would use the app throughout the museum if it was available, that they would recommend it to their friends or family and like the idea to contribute to the app content themselves. In that regard, the first prototyped versions of design features are ready to develop further and to be tested with extended functionality.</p>\n" +
    "\n" +
    "	<p>On general terms, the human-centered design approach in combination with creative and visual research methods has proven to\n" +
    "\n" +
    "	be incredibly fruitful when researching the different aspects that visitors deal with when visiting the Rijksmuseum. And to carefully compare those to the assumptions made by museum professional (including ourselves).</p>\n" +
    "\n" +
    "	<p>To take museum visitors serious in their needs and different levels of cultural capital, allowed us to <i>socially</i> augment the masterpieces of the Rijksmuseum.</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/header.html",
    "<div class=\"col-lg-12 col-lg-offset-7 col-md-14 col-md-offset-7 col-sm-18 col-sm-offset-6 col-xs-24 col-xs-offset-0\">\n" +
    "	<div class=\"title\">\n" +
    "		<h1><span>AUGMENTING</span>&nbsp;<span> MASTERPIECES</span></h1>\n" +
    "		<p>Augmenting Masterpieces explores visitors' experiences and the social dimensions of a visit to the Rijksmuseum. It translates the findings into an interface which lets the visitor interact with both the physical and the digital collection. Through embedded and artistic research methods the project reduces the gap between academic research and creative production. Its results manifest in a prototype, academic articles and this multi-medial presentation.</p>\n" +
    "		<div class=\"logos\">\n" +
    "			<a href=\"https://www.rijksmuseum.nl/\"><img src=\"./images/logos/rijkswhite.png\"></a>\n" +
    "			\n" +
    "			<a href=\"http://cdh.uva.nl/\"><img src=\"./images/logos/uvalogowhite.png\"></a>\n" +
    "		</div>\n" +
    "	</div> \n" +
    "</div>\n" +
    "<h1 id=\"understand\" class=\"subtitle\">Understand and Observe</h1>");
}]);

angular.module("../templates/content/literature.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/literature.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>Literature</h2>\n" +
    "	<ul>\n" +
    "		<li>A Touch of Code. Interactive Installations and Experiences. Ed. Robert Klanten, Sven Ehmann, and Verena Hanschke. Berlin: Gestalten, 2011. Print.</li>\n" +
    "\n" +
    "		<li>Bal, Mieke. Reading Rembrandt: Beyond the Word-Image Opposition. Amsterdam: Amsterdam University Press, 2006. Print.</li>\n" +
    "\n" +
    "		<li>Birringer, Johannes “Moveable worlds/Digital scenographies”,            International Journal of Performance Arts &amp; Digital Media, Volume 6, Number 1, 1 June 2010 , pp. 89-107(19).</li>\n" +
    "\n" +
    "		<li>Bostock, Michael, Vadim Ogievetsky, and Jeffrey Heer. “D3: Data-Driven Documents” IEEE Trans. Visualization &amp; Comp. Graphics. 2011. Online.</li>\n" +
    "\n" +
    "		<li>Bullivant, Lucy. Interactive Architecture 4D Social: Interactive Design Environments. Indianapolis: Wiley and Sons, 2007. Print.</li>\n" +
    "\n" +
    "		<li>Certeau, Michel de. “Spatial Stories.” The Practice of Everyday Life. Minneapolis: University Of Minnesota Press, 1984. 115–130. Print.</li>\n" +
    "\n" +
    "		<li>Falk, J. (2009). Identity and the Museum Visitor Experience. Walnut Creek, CA Left Coast Press.</li>\n" +
    "\n" +
    "		<li>Glogner, Patrick; Föhl, Patrick (2010) Das Kulturpublikum:             Fragestellungen und Befunde der empirischen Forschung. VS Verlag für Sozialwissenschaften.</li>\n" +
    "\n" +
    "		<li>Heer, Jeffrey, Bostock Mike. “Declarative Language Design for Interactive Visualization.” IEEE Trans. Visualization &amp; Comp. Graphics. 2010. Online.</li>\n" +
    "\n" +
    "		<li>Hermes, Joke “Audience Studies 2.0. On the theory, politics and method of qualitative audience research.” In: Interactions: Studies in       Communication &amp; Culture, Volume 1, Number 1, 1 September 2009, pp. 111-127(17).</li>\n" +
    "\n" +
    "		<li>Informotion. Animated Infographics. Ed. Tim Finke and Sebastian Manger.Berlin: Gestalten, 2012. Print.</li>\n" +
    "\n" +
    "		<li>Kirchberg, Volker (2009) Innovative Besucher- und Museumsforschung: Hintergrundbericht, \n" +
    "		<a href=\"http://www.kulturmanagement.net/beitraege/prm/39/v__d/ni__879/index.html\">website</a></li>\n" +
    "\n" +
    "		<li>Kittler, Friedrich. “The Perspective of Print.” Configurations. 10.1 (2002): 37–50. Print. “Universities: Wet, Hard, Soft, and Harder.” Critical Inquiry 31.1 (2004): 244–255. Print.</li>\n" +
    "\n" +
    "		<li>Kossman, Herman, and Mark de Jong. Engaging Spaces: Exhibition DesignExplored. Amsterdam: Frame, 2010. Print.</li>\n" +
    "\n" +
    "		<li>Museum Informatics: People, Information, and Technology in Museums. Ed. Paul F. Marty, and Katherine Burton Burton Jones. New York: Routledge, 2009. Print.</li>\n" +
    "\n" +
    "		<li>Park, Ki-Woong, et al. “Towards Interactive Museum: Mapping Cultural\n" +
    "		Contexts to Historical Objects.” Relation 10.1.142 (2009): 5630. Print.</li>\n" +
    "\n" +
    "	</ul>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "    <ul>\n" +
    "		<li>Parry, Ross. Museums in a Digital Age. New York: Routledge, 2010. Print.</li>\n" +
    "\n" +
    "		<li>Reas, Casey, and Ben Fry. Processing. A Programming Handbook for Visual Designers and Artists. Cambridge MA: MIT Press, 2007. Print.</li>\n" +
    "\n" +
    "		<li>Renden, Sandra. Information Graphics. Ed. Julius Wiedemann. Cologne, Taschen, 2012. Print.</li>\n" +
    "\n" +
    "		<li>Ronell, Avitall. “Proving Grounds: On Nietzsche and the Test Drive.” MLN.118.3 (2003): 653–669. Print.</li>\n" +
    "\n" +
    "		<li>Rowea, Anthony “Digital Creativity - Designing for engagement in mixed reality experiences that combine projection mapping and camera- based interaction.” http://www.tandfonline.com/toc/ndcr20/current#.UZOLYCvOSjw</li>\n" +
    "\n" +
    "		<li>Simon, Nina. The Participatory Museum. Santa Cruz, CA: Museum 2.0, 2010.Print. </li>\n" +
    "	\n" +
    "		<li>Smeets, Ionica &amp; Schraffenberger Hanna “OK, Glass?”, In: AR[t] – Augmented Reality, Art and Technology, 04 nov 2013, p. 42-48. http://issuu.com/arlab/docs/art4_issuu</li>\n" +
    "\n" +
    "		<li>Schraffenberger, Hanna &amp; E. van der Heide “Interaction Models for Audience-Artwork Interaction: Current State and Future Directions.” In: Arts and Technology, Second International Conference, ArtsIT 2011, Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST), 2011.</li>\n" +
    "\n" +
    "		<li>Tröndle, Martin (2011): The Entanglement of Arts and Sciences: On the Transaction Costs of Transdisciplinary Research Settings. In: Journalfor Artistic Research. Issue 1.</li>\n" +
    "\n" +
    "		<li>Tröndle, Martin / Greenwood, Steven / Kirchberg, Volker / Tschacher, Wolfgang: An Integrative and Comprehensive Methodology for Studying Aesthetic Experience in the Field: Merging Movement Tracking, Physiology and Psychological Data. Environment and Behavior. 2012. doi:10.1177/0013916512453839</li>\n" +
    "\n" +
    "		<li>Tschacher, Wolfgang (2012). Physiological correlates of aesthetic perception in a museum, In: Journal of Psychology of Aesthetics, Creativity, and the Arts, 6, 96-103. doi: 10.1037/a0023845</li>\n" +
    "\n" +
    "		<li>Tufte, Edward R. Visual Explanations: Images and Quantities, Evidence and Narrative. Chesire CT: Graphics Press, 1997. Print.</li>\n" +
    "\n" +
    "		<li>Van Hage, Willem Robert, et al. “Finding your way through the Rijksmuseum with an adaptive mobile museum guide.” The Semantic Web: Research and Applications. Berlin: Springer, 2010. 46–59. Print.</li>\n" +
    "\n" +
    "		<li>Visser, Jasper; Richardson, Jim (2013) Digital Engagement In Culture, Heritage and the Arts.http://www.digitalengagementframework.com/</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/masonryviewer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/masonryviewer.html",
    "<div class=\"col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<blockquote>A detailed profile and script from a participating Cultural Tourist illustrating collected input from museum visitors.</blockquote>\n" +
    "	<div id=\"photoPiece\">\n" +
    "		<div class=\"grid-sizer\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<p>\n" +
    "	However, Chris described in detail the other pictures that he took, the observed situations and he told stories that he overheard from other visitors. He seemed more relaxed and engaged with his surrounding.<br>\n" +
    "\n" +
    "	Whereas the amount of time spent on looking at art works and written information varied largely between different visitors, all participants carefully observed other visitors, listened into their conversations or were wondering about their own – proper - behaviour at times.<br>\n" +
    "\n" +
    "	So people don't leave their social consciousness in the wardrobe with their bags, but on the contrary move silently and with a high level of awareness for social interaction, through the museum.<br>\n" +
    "\n" +
    "	Thus, social dimensions are highly important for all types of visitors, and are often accompanied by a feeling of social awkwardness. The degree of feeling engaged or addressed by the museum surrounding seems to be connected to the degree of how much visitors can relate to other situations in their daily life. Listening into other people's conversations and re-telling those stories, often served as a bridge to connect with the museum setting in general.</p>\n" +
    "\n" +
    "	<br><br>\n" +
    "	<h5>Photo transcript:</h5>\n" +
    "	<h1 id=\"transcriptHeader\"></h1>\n" +
    "	<p id=\"transcriptSnippet\"></p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/survey.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/survey.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>No comment on the Masterpieces.</h2>\n" +
    "	<h3>“I know they are important.”</h3>\n" +
    "	<p>The qualitative survey had twelve participants who belong to four of the five  visitors' categories the Rijksmuseum works with on a daily basis in education and marketing. The focus lies on the unaccompanied visitors: Three Cultural Tourists, three Art Lover's, two Cultural Professionals and one Family (with three children, who each participated as well) participated in the survey.<br> \n" +
    "As an example the photographs show one profile of a 'cultural tourist'. About 70% of the museum visitors belong to the group of cultural tourists, as the Rijksmuseum calls people who don't visit museums more than three times a year and is probably found in the Rijksmuseum, because it is part of what you do when you visit Amsterdam. <br>\n" +
    "In the example, the participant Chris gave 'no comment' on seven out of the 42 pictures. From those seven, five were photographs of paintings, one of an object and one photograph of the building. When being asked later on, why he took those pictures, he said: “I know they are important, so I took a picture of them.”</p>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<img class=\"infographic\" src=\"images/webimages/infographic_new.jpg\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/theory.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/theory.html",
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>Social augmentation vs. technological masterpieces?</h2>\n" +
    "	<h3>Project objectives</h3>\n" +
    "	<p>'Augmentation' is currently often brought up in relation to 'augmented reality' which uses a virtual layer over what we conceive as our real life. Often the use of the word goes hand in hand with a supposed technological innovation, and also our project title suggests that a superimposed “computer-generated image on a user's view of the real world, thus providing a composite view”1 will be in the centre of attention.<br> \n" +
    "	However, the research at stake is not implying an augmented reality but much rather the process of augmentation of artworks in the Rijksmuseum by means of technology.<br> \n" +
    "	When the literal meaning of 'augmentation' simply describes it as 'make something greater by adding to it', 'to increase' or the 'act of making greater'2, the questions arise of (a) what aspects of the artworks should be highlighted, (b) for whom, (c) how does the interface between the object and the viewer look like and (d) through which digital device and software will the work of art be enhanced? </p>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h1>Interdisciplinary approach</h1>\n" +
    "	<p>In order to tackle the first two questions, the design thinking method was used for structuring the whole process of the project, substituted by Visual Feedback Methods which are partly taken from the design thinking toolbox3 and partly developed in my artistic research practice throughout the past years.<br> \n" +
    "	Embedded research projects stimulate collaborations between cultural institutions, the creative industries and universities.<br> \n" +
    "	In order to do justice to not only theoretically investigate, but also practically implement research results within the same project, this new form of research within the humanities, also needs a revised set of tools and possible forms for output.<br> \n" +
    "	The methodological combination of the above mentioned toolboxes from design thinking and artistic research, guaranteed an adequate interdisciplinary assemblage of techniques and media. Whereas Artistic Research allows to creatively and practically work with post-modern theories, the Design Thinking approach gives access to co-creation frameworks and user innovation while building a product-oriented bridge between academic research, creative output and technological prototype.</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/content/usercamerastudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/content/usercamerastudy.html",
    "<div class=\"col-lg-14 col-lg-offset-0 col-md-14 col-md-offset-0 col-sm-14 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<div class='embed-container'>\n" +
    "		<iframe src='http://player.vimeo.com/video/112510250' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n" +
    "	</div>\n" +
    "	<blockquote>For the User Video Study, I asked children to wear a camera during their museum visit as their perspective is not only physically different, but their view and span of attention is less trained yet compared to adults.</blockquote>\n" +
    "</div>\n" +
    "<div class=\"col-lg-10 col-lg-offset-0 col-md-10 col-md-offset-0 col-sm-10 col-sm-offset-0 col-xs-24 col-xs-offset-0\">\n" +
    "	<h2>...and how to get rid of them.</h2>\n" +
    "	<h3>Visual Feedback Methods</h3>\n" +
    "	<p>I use Visual User Feedback methods to understand different perspectives and gain insights from the museum visitors. Those methods not only give room to individual oral feedback, but also to visual stories and experiences. Therefore the oral and visual feedback from the user, reveals different kinds of information than a thematically focused survey.<br> \n" +
    "	The Photographic User Camera Study consists of two phases. First, the participants are given a camera with which they walk through the museum and take pictures of anything drawing their attention. They can choose themselves what they capture, for how long they want to stay in the exhibition and how many pictures they take.<br>\n" +
    "	The collecting phase is followed by a qualitative interview in which the participant first gets to talk about the photographs in a way that is comparable to someone showing their vacation pictures: descriptive and as detailed as they prefer. Later on specific questions concerning sensual experiences (what did you hear, smell, touch?) and digital devices (which devices did you use during your visit and to do what?) are asked.</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/displayorder.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/displayorder.html",
    "<section ui-view=\"header\" id=\"main\" class=\"row block maintro\"></section>\n" +
    "<section ui-view=\"assumptions\" class=\"row block assumptions\"></section>\n" +
    "<section ui-view=\"usercamerastudy\" class=\"row block\"></section>\n" +
    "<section class=\"row block intermezzo Analyse\">\n" +
    "	<h1 id=\"analyse\">Analyse and Ideate </h1>\n" +
    "</section>\n" +
    "<section ui-view=\"survey\" class=\"row block\"></section>\n" +
    "<section ui-view=\"masonryviewer\" class=\"row block masonry\"></section>\n" +
    "<section class=\"row block intermezzo proto\">\n" +
    "	<h1 id=\"prototype\">Prototype and Test</h1>\n" +
    "</section>\n" +
    "<section ui-view=\"demo\" class=\"row block\"></section>\n" +
    "<section class=\"row block intermezzo evaluate\">\n" +
    "	<h1 id=\"evaluate\">Evaluate and Outlook</h1>\n" +
    "</section>\n" +
    "<section ui-view=\"evaluation\" class=\"row block\"></section>\n" +
    "<section class=\"row block intermezzo theory\">\n" +
    "	<h1 id=\"theory\">Theory and Methods</h1>\n" +
    "</section>\n" +
    "<section ui-view=\"theory\" class=\"row block\"></section>\n" +
    "<section ui-view=\"literature\" class=\"row block literature\"></section>\n" +
    "<section class=\"row block intermezzo about\">\n" +
    "	<h1 id=\"about\">About</h1>\n" +
    "</section>\n" +
    "<section ui-view=\"about\" class=\"row block people\"></section>");
}]);

angular.module("../templates/functional/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/functional/footer.html",
    "<hr>\n" +
    "<p>Last update: Thursday 27 Oktober 2014 - Augmenting Masterpieces</p>\n" +
    "<div class=\"footer\">\n" +
    "<a> Home </a> &nbsp;\n" +
    "<a> Understand and Obeserve</a>&nbsp;\n" +
    "<a> Analyse and Ideate </a>&nbsp;\n" +
    "<a> Prototype and Test </a>&nbsp;\n" +
    "<a> Evaluate and Outlook </a>&nbsp;\n" +
    "<a> Theory and Methods </a>&nbsp;\n" +
    "<a> About </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../templates/functional/nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/functional/nav.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" bs-collapse bs-scrollspy-list role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" bs-collapse-toggle>\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" bs-scrollspy href=\"#main\">Augmenting Masterpieces</a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"navbarcontents\" bs-collapse-target>\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li bs-scrollspy data-target=\"#understand\"><a href=\"#understand\">Understand and Observe</a></li>\n" +
    "        <li bs-scrollspy data-target=\"#analyse\"><a href=\"#analyse\">Analyse and Ideate</a></li>\n" +
    "        <li bs-scrollspy data-target=\"#prototype\"><a href=\"#prototype\">Prototype and test</a></li>\n" +
    "        <li bs-scrollspy data-target=\"#evaluate\"><a href=\"#evaluate\">Evaluate and Outlook</a></li>\n" +
    "        <li bs-scrollspy data-target=\"#theory\"><a href=\"#theory\">Theory and Methods</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li bs-scrollspy data-target=\"#about\"><a href=\"#about\">About</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>");
}]);

angular.module("../templates/old/case-study.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/old/case-study.html",
    "<section class=\"caseTopWrapper\">\n" +
    "	<div class=\"caseTop\">\n" +
    "		<hgroup>\n" +
    "			<h1><a href=\"#case-study\">U<span>SER </span>C<span>AMERA </span>S<span>TUDY </span></a></h1>\n" +
    "			<h2>“When I have a camera in my hand, I dare to walk in front of a painting. It's like having permission to crawl through the masses.” - participant UCS</h2>\n" +
    "			<h1 class=\"arrow\">&#8595; </h1>\n" +
    "		</hgroup>\n" +
    "	</div>\n" +
    "	<div class=\"dataVisualisation clearfix\">\n" +
    "		<div class=\"visualisation \"></div>\n" +
    "		<div class=\"textcontainer clearfix\">\n" +
    "			<h3 class=\"scrollTo\"> How do visitors experience the Rijksmuseum?</h3>\n" +
    "			<div class=\"textBlock1 clearfix\">\n" +
    "				<p>This case study shows how the User Camera Studies were conducted, gives visual examples and types of insights a museum can gain by using photographic means as a source of feedback from their visitors.</p>\n" +
    "\n" +
    "				<p>Augmenting Masterpieces applies visitor's photography through User Camera Studies (UCS)1 as one of the main research sources. In addition to other interview methods they give not only room to individual oral, but also to visual stories and analysis which supports the project's targeted innovation process for multi-medial and digital interfaces for museums. \n" +
    "				</p>\n" +
    "\n" +
    "				<p>The UCS helped to understand the social dimensions of a museum and map the museum experience as the participating visitors moved social aspects and rather basic preconditions for art reception back into the center of attention by addressing their interaction with the space, museum staff, other visitors and art objects. </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<section class=\"middlepiece\">\n" +
    "		<div class=\"textblock2\">\n" +
    "			<p>The purpose of our study was to get qualitative input from the visitors for developing digital devices and interactive means in the Rijksmuseum. The User Camera Study consists of two phases. First the participants are given a camera with which they walk through the museum and take pictures of whatever draws their attention. They can choose themselves what they capture, for how long they want to stay in the exhibition and how many pictures they want to take.</p>\n" +
    "\n" +
    "			<p>The second phase is a qualitative interview in which they first get to talk about the photographs in a way that is comparable to someone showing their vacation pictures: descriptive and as detailed as they prefer. Later on specific questions concerning sensual experiences (what did you hear, smell, touch?) and digital devices (which devices did you use during your visit and to do what?) </p>\n" +
    "\n" +
    "			<p>This setting gives the participants freedom to talk about their own points of interest and observations during their visit in a vacation-style narrative that is familiar to most people. The pictures that the participants take also serve to remember certain situations and aspects easily. As the study provides oral and visual feedback, it reveals different kinds of information than a thematically focused survery. </p>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"photoSection\">\n" +
    "	<div id=\"photoPiece\">\n" +
    "		<div class=\"grid-sizer\"></div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"bottomPiece\">\n" +
    "	<div class=\"textblock3\">\n" +
    "		<p>The survey had twelve participants from four out of the five visitors' categories the Rijksmuseum works with on a daily basis in their education and marketing department. These four categories all concern unaccompanied visitors (Cultural Tourist, Art Lover's, Cultural Professionals and Families, whereas the fifth category consists of accompanied groups (school classes and workshop groups from the Teekenschool).</p>\n" +
    "		<p>Three Cultural Tourists, three Art Lover's, two Cultural Professionals and one Family (with three children, who each participated as well) participated in the present survey. Below there is one detailed profile and script from a participating Cultural Tourist in order to get an indepth view on the kind of feedback provided.The most revealing result of the survey were that the social dimensions of a visit to the Rijksmuseum are highly important for all visitor's types. Whereas the amount of time spent on looking at art works and written information varied largely, all participants observed other visitors, listened into their conversations or were wondering about their own – proper - behaviour at times. </p>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"returnHome\">\n" +
    "	<a href=\"#home\"><h4>H<span>OME</span></h4></a>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("../templates/old/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/old/home.html",
    "<section class=\"homeContainer\">\n" +
    "	<section class=\"homeHeader\">\n" +
    "		<div class=\"title\">\n" +
    "			<a href=\"#case-study\"><h1>A<span>UGMENTING</span><span class=\"second\">&nbsp;M</span><span>ASTERPIECES</span> </h1>\n" +
    "			<!-- <h2>...through embedded research and human-centered design.</h2 > -->\n" +
    "\n" +
    "			<p>Augmenting Masterpieces explores visitors' experiences and the social dimensions of a visit to the Rijksmuseum. It translates the findings into an interface which lets the visitor interact with both the physical and the digital collection.\n" +
    "		    Through embedded and artistic research methods the project reduces the gap between academic research and creative production. Its results manifest in a prototype, academic articles and this multi-medial presentation.</p></a>\n" +
    "			<div class=\"logos\">\n" +
    "				<a href=\"https://www.rijksmuseum.nl/\"><img src=\"./images/logos/rijkswhite.png\"></a>\n" +
    "				<a href=\"http://cdh.uva.nl/\"><img src=\"./images/logos/uvalogowhite.png\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeVideo\">\n" +
    "		<div class=\"contents\">\n" +
    "			<h2 class=\"quote\">\"We’ve all observed visitors taking the #museumselfie, ...<br>taking photos of object labels, and we’ve all seen families <br>struggle with the anti-social nature of audioguides.\"<br> - Seb Chan, Director of Digital & Emerging Media, Smithsonian, New York</h2>\n" +
    "			<iframe src=\"http://prezi.com/embed/vz3s0inp6iyg/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;features=undefined&amp;disabled_features=undefined\" frameBorder=\"0\" webkitAllowFullScreen mozAllowFullscreen allowfullscreen></iframe>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeButtonSection homeCaseStudy\">\n" +
    "		<a href=\"#case-study\"><h1>U<span>SER </span>C<span>AMERA </span>S<span>TUDY </span></h1>\n" +
    "		<h2>“When I have a camera in my hand, I dare to walk in front of a painting. It's like having permission to crawl through the masses.” - participant UCS</h2>\n" +
    "		<h1 class=\"arrow\">&#8595; </h1></a>\n" +
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
    "		<div class=\"contents\">\n" +
    "			<div class=\"people clearfix\">\n" +
    "				<h4>People</h4>\n" +
    "				<div class=\"person clearfix\">\n" +
    "					<img src=\"./images/persons/johanna2.jpg\" alt=\"Embedded Researcher UvA -> Rijksmuseum\">\n" +
    "					<p>Johanna Barnbeck</p>\n" +
    "				</div>\n" +
    "				<div class=\"person clearfix\">\n" +
    "					<img src=\"./images/persons/janHein.jpg\" alt=\"Jan Hein Hoogstad - Assistant Professor Cultural Analasis\">\n" +
    "					<p>Jan Hein Hoogstad</p>\n" +
    "				</div>\n" +
    "				<div class=\"person clearfix\">\n" +
    "					<img src=\"./images/persons/shailoh.jpg\" alt=\"\" class=\"none\">\n" +
    "					<p>Shailoh Phillips</p>\n" +
    "				</div>\n" +
    "				<div class=\"person clearfix\">\n" +
    "					<img src=\"./images/persons/patty.jpg\" alt=\"Intern and Thesis\">\n" +
    "					<p>Patty Jansen</p>\n" +
    "				</div>\n" +
    "				<div class=\"person clearfix\">\n" +
    "					<img src=\"./images/persons/robert.jpg\" alt=\"Intern\">\n" +
    "					<p>Robert-Jan Korteschiel</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"timeline\">\n" +
    "				<h4 class=\"timelineTitle\">Timeline</h4>\n" +
    "				<div class=\"theLine\"></div>\n" +
    "				<div class=\"left\">\n" +
    "					<div class=\"singleTimeItem date\"><h4>2014</h4></div>\n" +
    "					<div class=\"singleTimeItem\">\n" +
    "						<div class=\"timePoint\"></div>\n" +
    "						<p>Understand</p>\n" +
    "					</div>\n" +
    "					<div class=\"singleTimeItem\">\n" +
    "						<div class=\"timePoint\"></div>\n" +
    "						<p>Ideate</p>\n" +
    "					</div>\n" +
    "					<div class=\"singleTimeItem\">\n" +
    "						<div class=\"timePoint\"></div>\n" +
    "						<p>Prototype</p>\n" +
    "					</div>\n" +
    "					<div class=\"singleTimeItem\">\n" +
    "						<div class=\"timePoint\"></div>\n" +
    "						<p>Test</p>\n" +
    "					</div>\n" +
    "					<div class=\"singleTimeItem\">\n" +
    "						<div class=\"timePoint\"></div>\n" +
    "						<p>Present</p>\n" +
    "					</div>\n" +
    "					<div class=\"singleTimeItem date\"><h4>2015</h4></div>\n" +
    "				</div>\n" +
    "				<div class=\"right\"> \n" +
    "					<!-- Begin MailChimp Signup Form -->\n" +
    "					<div id=\"mc_embed_signup\">\n" +
    "						<form action=\"//wix.us3.list-manage.com/subscribe/post?u=441ffe1b780f94da8bfedb43c&amp;id=ec4ca8f48f\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n" +
    "						    <div id=\"mc_embed_signup_scroll\">\n" +
    "								<h4>Subscribe to our mailing list</h4>\n" +
    "							<div class=\"mc-field-group\">\n" +
    "								<label for=\"mce-EMAIL\">Email Address</label>\n" +
    "								<input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n" +
    "							</div>\n" +
    "\n" +
    "							<div id=\"mce-responses\" class=\"clear\">\n" +
    "								<div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n" +
    "								<div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n" +
    "							</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "						    <div style=\"position: absolute; left: -5000px;\">\n" +
    "						    	<input type=\"text\" name=\"b_441ffe1b780f94da8bfedb43c_ec4ca8f48f\" tabindex=\"-1\" value=\"\">\n" +
    "						    </div>\n" +
    "						    <div class=\"clear\">\n" +
    "						    	<input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "						    </div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "					<!--End mc_embed_signup--> \n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeConnect\">\n" +
    "		\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("../templates/old/homepageold.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/old/homepageold.html",
    "<section >\n" +
    "	\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section >\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"block\">\n" +
    "	\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section id=\"analyse\" class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<hr>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<h1> Hello </h1>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<hr>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section id=\"prototype\" class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section id=\"evaluate\" class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"container-fluid block\">\n" +
    "	<div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni veniam quas fuga quisquam quaerat voluptates, molestias, labore inventore ullam. Sit porro consectetur ipsa nostrum cupiditate, unde. Voluptatibus voluptate minima ullam voluptatum iure beatae, ut eligendi est, ad eum repellat, laudantium, iusto magni quaerat saepe. A doloribus unde, modi, quo minus deserunt, eum dolor accusantium illum aspernatur quasi, maxime distinctio obcaecati itaque iste. Facere aperiam, placeat. Quos quas nemo, in deleniti, excepturi, a totam nobis quo, suscipit cumque nostrum error similique. Natus, labore, repellat. Vero, vitae itaque molestias nisi, magnam obcaecati distinctio molestiae adipisci in, iste repudiandae provident eius laboriosam pariatur quidem modi ipsum aut! Modi ipsam quaerat amet voluptatem eligendi consequuntur quis qui, sunt repellat enim debitis doloribus dolore sint perspiciatis corporis rem veniam. Id aut accusamus delectus hic officiis et facilis corrupti necessitatibus voluptatem at cum deleniti distinctio fuga quia dolorem totam doloremque tenetur nobis, possimus dolor, velit a sequi minus voluptate nam. Corporis similique facilis iste reprehenderit.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-md-5 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1 block\">\n" +
    "		<div class=\"contents\">\n" +
    "			<div class=\"vAlign\">\n" +
    "				<img class=\"child\" src=\"#\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);
