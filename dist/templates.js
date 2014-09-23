this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

this["Handlebars"]["Templates"]["index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  stack1 = self.invokePartial(partials['page-top'], 'page-top', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<!-- PAGE LEVEL: HTML  -->\n	<!-- index -->\n	<!-- Built with revealjs -->\n	<!-- https://github.com/hakimel/reveal.js/ -->\n	<div class=\"reveal index\">\n		<div class=\"slides\">\n\n\n\n			<!-- ================================================ -->\n			<!-- INTRO -->\n			<!-- ================================================ -->\n\n			<!-- SLIDE: MAIN TITLE -->\n			<section class=\"slide slide--section-title slide--main-title\" data-background=\"#5dc4c6\">\n				<h1>JavaScript Fundamentals</h1>\n				<h2>Part 1</h2>\n			</section>\n\n			<!-- SLIDE: ABOUT -->\n			<section class=\"slide slide--section-title slide--about\" data-background=\"#5dc4c6\">\n				<img class=\"trevordmiller-avatar\" src=\"images/trevor.jpg\" alt=\"Trevor D. Miller\" />\n				<h1>Hi there!</h1>\n				<h2 class=\"fragment roll-in\">My name is Trevor.</h2>\n			</section>\n\n			<!-- SLIDE: SO EXCITED -->\n			<section class=\"slide slide--section-title\" data-background=\"#5dc4c6\">\n				<h1>How I feel...</h1>\n				<img class=\"fragment roll-in\" src=\"images/excited-baby.jpg\" alt=\"Excited baby\" />\n			</section>\n\n			<!-- SLIDE: OVERVIEW -->\n			<section class=\"slide slide--section-title slide--overview\" data-background=\"#5dc4c6\">\n				<h1>Lesson Outline</h1>\n				<ul>\n					<li class=\"fragment roll-in\"><span class=\"time\">6:00 - 6:30:</span> Background.</li>\n					<li class=\"fragment roll-in\"><span class=\"time\">6:30 - 7:00:</span> Fundamental JS Concepts.</li>\n					<li class=\"fragment roll-in\"><span class=\"time\">7:00 - 9:00:</span> Project.</li>\n				</ul>\n			</section>\n\n			<!-- SLIDE: WARNING -->\n			<section class=\"slide slide--warning\" data-background=\"#f96a5c\">\n				<h1>Warning!</h1>\n				<h2 class=\"fragment roll-in\">This is a <em>flipped</em> classroom.</h2>\n				<ul>\n					<li class=\"fragment roll-in\">Fast paced.</li>\n					<li class=\"fragment roll-in\">Hands on.</li>\n					<li class=\"fragment roll-in\">Ask questions.</li>\n					<li class=\"fragment roll-in\">I'll call on you.</li>\n					<li class=\"fragment roll-in\">Don't feel dumb.</li>\n					<li class=\"fragment roll-in\">Follow along at: <a href=\"temp-ip-address:3000\">temp-ip-address:3000</a></li>\n				</ul>\n			</section>\n\n				<!-- QUIZ -->\n				<section class=\"slide slide--quiz\">\n					<h1>Quiz</h1>\n					<ul>\n						<li class=\"fragment roll-in\">What does a flipped classroom mean?</li>\n						<li class=\"fragment roll-in\">When should you ask questions?</li>\n					</ul>\n					<div class=\"fragment roll-in\">\n						<p>Say hello:</p>\n						<textarea></textarea>\n					</div>\n				</section>\n\n\n\n			<!-- ================================================ -->\n			<!-- SECTION -->\n			<!-- ================================================ -->\n\n			<section class=\"slide slide--section-title\" data-background=\"#5dc4c6\" data-transition=\"zoom\">\n				<h1>Background</h1>\n				<ul>\n					<li class=\"fragment roll-in\">What is JS?</li>\n					<li class=\"fragment roll-in\">Why do you need JS?</li>\n					<li class=\"fragment roll-in\">How does JS fit in with HTML &amp; CSS?</li>\n					<li class=\"fragment roll-in\">How the web works.</li>\n					<li class=\"fragment roll-in\">Client vs Server.</li>\n				</ul>\n			</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>What is JavaScript?</h1>\n					<ul>\n						<li class=\"fragment roll-in\"><em>Nothing</em> to do with Java.</li>\n						<li class=\"fragment roll-in\"><em>THE</em> most important language of the web.</li>\n						<li class=\"fragment roll-in\">Used everywhere! Websites, apps, client side, server side, even machines.</li>\n						<li class=\"fragment roll-in\">Provides <em>functionality</em>.</li>\n					</ul>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">How does Java fit in with JavaScript?</li>\n							<li class=\"fragment roll-in\">What is JavaScript?</li>\n						</ul>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>Why do you need JS?</h1>\n					<ul>\n						<li class=\"fragment roll-in\">Disable JS on <a href=\"http://twitter.com\" target=\"_blank\">Twitter</a>.</li>\n						<li class=\"fragment roll-in\">Interact with the DOM.</li>\n						<li class=\"fragment roll-in\">Events.</li>\n						<li class=\"fragment roll-in\">Async goodness.</li>\n						<li class=\"fragment roll-in\">Database layer.</li>\n					</ul>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">Why do you need JavaScript?</li>\n							<li class=\"fragment roll-in\">What does JavaScript do?</li>\n						</ul>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>How does JS fit with HTML &amp; CSS?</h1>\n					<ul>\n						<li class=\"fragment roll-in\">Script tags.</li>\n						<li class=\"fragment roll-in\">External links.</li>\n						<li class=\"fragment roll-in\">Inspect <a href=\"http://google.com\" target=\"_blank\">www.google.com</a>.</li>\n					</ul>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<div class=\"fragment roll-in\">\n							<p>How do you include JavaScript in your HTML?</p>\n							<textarea>\n								// Code here\n							</textarea>\n						</div>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>How the web works.</h1>\n					<a class=\"button\" href=\"http://alpha.ideavis.co/529cc5f/?utm_content=bufferd15ac&utm_source=buffer&utm_medium=twitter&utm_campaign=Buffer\" target=\"_blank\">Sweet diagram</a>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">What do \"front-end\" and \"back-end\" mean?</li>\n							<li class=\"fragment roll-in\">What is the difference between the client and the server?</li>\n							<li class=\"fragment roll-in\">When does JavaScript run?</li>\n							<li class=\"fragment roll-in\">What is the difference between JavaScript and jQuery?</li>\n							<li class=\"fragment roll-in\">How does Angular fit in?</li>\n							<li class=\"fragment roll-in\">...Node?</li>\n							<li class=\"fragment roll-in\">What is <em>\"BaaS\"</em>?</li>\n							<li class=\"fragment roll-in\">What is a database?</li>\n							<li class=\"fragment roll-in\">What would happen to a tweet if Twitter didn't have a database?</li>\n						</ul>\n					</section>\n\n\n\n			<!-- ================================================ -->\n			<!-- SECTION -->\n			<!-- ================================================ -->\n\n			<section class=\"slide slide--section-title\" data-background=\"#5dc4c6\" data-transition=\"zoom\">\n				<h1>Fundamental JS Concepts</h1>\n				<ul>\n					<li class=\"fragment roll-in\">Comments.</li>\n					<li class=\"fragment roll-in\">Variables.</li>\n					<li class=\"fragment roll-in\">Conditional statements.</li>\n					<li class=\"fragment roll-in\">Operators.</li>\n					<li class=\"fragment roll-in\">Functions.</li>\n					<li class=\"fragment roll-in\">The Principles of TDD.</li>\n				</ul>\n			</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>Comments</h1>\n					<pre class=\"fragment roll-in\">\n						<code>\n							// This is a single line comment.\n\n							/*\n							 * This is a multi line comment. Careful!\n							 */\n						</code>\n					</pre>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<div class=\"fragment roll-in\">\n							<p>Write a single line comment:</p>\n							<textarea></textarea>\n						</div>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>Operators</h1>\n					<ul>\n						<li><code>=</code> | Assignment.</li>\n						<li><code>==</code> | Compares values.</li>\n						<li><code>===</code> | Compares values and types.</li>\n						<li><code><</code> | Less than.</li>\n						<li><code>></code> | Greater than.</li>\n						<li><code><=</code> | Less than or equal to.</li>\n						<li><code>>=</code> | Greater than or equal to.</li>\n						<li>Truthy vs Falsy.</li>\n					</ul>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">What is the difference between <code>=</code>, <code>==</code>, and <code>===</code>?</li>\n						</ul>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>Variables</h1>\n					<pre class=\"fragment roll-in\">\n						<code>\n\n							// Declare a variable.\n							var variableName;\n\n							// Initialize the variable.\n							variableName = 42;\n\n							// Declare and initialize at the same time.\n							var variableName = 42;\n						</code>\n					</pre>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<div class=\"fragment roll-in\">\n							<p>Declare and initialize a variable:</p>\n							<textarea></textarea>\n						</div>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>If Statements</h1>\n					<pre class=\"fragment roll-in\">\n						<code>\n							// Template\n							if (condition) {\n								// code\n							}\n\n							// Example\n							var hoursPerDay = 24;\n							if (hoursPerDay === 24) {\n								alert(\"If only there were more...\");\n							}\n						</code>\n					</pre>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<div class=\"fragment roll-in\">\n							<p>Write an if statement:</p>\n							<textarea></textarea>\n						</div>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>Functions</h1>\n					<p class=\"fragment roll-in\">Functons: re-usable chunks of code.</p>\n					<pre class=\"fragment roll-in\">\n						<code>\n							// Template\n							function functionName(optional parameter1, parameter2 etc) {\n								// Code\n\n								// Optional return statement\n							}\n\n							// Function declaration\n							function getGreeting(name) {\n								return \"Hello \" + name + \"!\";\n							}\n\n							// Store a name\n							var myName = \"Bob\";\n\n							// Call the function, passing in a name, and store the return value\n							var greeting = functionName(myName);\n\n							// What is \"greeting\"?\n						</code>\n					</pre>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">What is a function?</li>\n							<li class=\"fragment roll-in\">What does a <code>return</code> statement do?</li>\n							<li class=\"fragment roll-in\">What is a parameter?</li>\n						</ul>\n						<div class=\"fragment roll-in\">\n							<p>Write a function to alert a day of the week:</p>\n							<textarea></textarea>\n						</div>\n					</section>\n\n				<section class=\"slide\">\n					<h1>Functions Continued</h1>\n					<ul>\n						<li class=\"fragment roll-in\"><code>functionName</code> vs <code>functionName()</code></li>\n						<li class=\"fragment roll-in\">Function expression vs declaration.</li>\n					</ul>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">What's the difference between <code>toggleMenu</code> and <code>toggleMenu()</code>?</li>\n							<li class=\"fragment roll-in\">What's the difference between function expression and declaration?</li>\n						</ul>\n					</section>\n\n				<!-- SLIDE -->\n				<section class=\"slide\">\n					<h1>The Principles of TDD.</h1>\n					<p><small>TDD = Test Driven Development.</small></p>\n					<p>Start with a goal in mind.</p>\n					<ol>\n						<li class=\"fragment roll-in\">Write a test.</li>\n						<li class=\"fragment roll-in\">Make the test pass.</li>\n						<li class=\"fragment roll-in\">Refactor.</li>\n					</ol>\n				</section>\n\n					<!-- QUIZ -->\n					<section class=\"slide slide--quiz\">\n						<h1>Quiz</h1>\n						<ul>\n							<li class=\"fragment roll-in\">What is TDD?</li>\n						</ul>\n					</section>\n\n\n\n			<!-- ================================================ -->\n			<!-- SECTION -->\n			<!-- ================================================ -->\n\n			<!-- SLIDE -->\n			<section class=\"slide slide--section-title slide--end\" data-background=\"#5dc4c6\">\n				<h1>Project</h1>\n				<ol>\n					<li class=\"fragment roll-in\">Clone the JS Koans repo: <a href=\"https://github.com/devmountain/js-koans\">github.com/devmountain/js-koans</a></li>\n					<li class=\"fragment roll-in\">Follow the instructions in the repo's README.</li>\n					<li class=\"fragment roll-in\">Make the tests pass in each file up until \"AboutArrays.js\"</li>\n					<li class=\"fragment roll-in\">Really try to understand the code.</li>\n					<li class=\"fragment roll-in\">If you need help, try Google, Stack Overflow, me or a classmate.</li>\n					<li class=\"fragment roll-in\">If you finish early, please help others ;)</li>\n				</ol>\n			</section>\n\n\n\n			<!-- ================================================ -->\n			<!-- END -->\n			<!-- ================================================ -->\n\n			<!-- SLIDE -->\n			<section class=\"slide slide--section-title slide--end\" data-background=\"#5dc4c6\">\n				<h1>For review...</h1>\n 				<a href=\"http://trevordmiller.github.io/devmtn-js-fundamentals-1/dist/\">http://trevordmiller.github.io/devmtn-js-fundamentals-1/dist</a>\n			</section>\n\n			<!-- SLIDE -->\n			<section class=\"slide slide--section-title slide--end\" data-background=\"#5dc4c6\">\n				<h1>Next lesson</h1>\n				<h2>JavaScript Fundamentals: Part 2</h2>\n				<ul>\n					<li class=\"fragment roll-in\">For loops.</li>\n					<li class=\"fragment roll-in\">While loops.</li>\n					<li class=\"fragment roll-in\">Arrays.</li>\n					<li class=\"fragment roll-in\">Array methods.</li>\n					<li class=\"fragment roll-in\">Project.</li>\n				</ul>\n			</section>\n\n			<!-- SLIDE -->\n			<!-- SLIDE -->\n			<section class=\"slide slide--section-title slide--end\" data-background=\"#5dc4c6\">\n				<h1>Thanks!</h1>\n				";
  stack1 = self.invokePartial(partials['trevordmiller-follow'], 'trevordmiller-follow', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</section>\n		</div>\n	</div>\n\n";
  stack1 = self.invokePartial(partials['page-bottom'], 'page-bottom', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });