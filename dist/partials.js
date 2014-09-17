this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

Handlebars.registerPartial("example-component", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<a href=\"";
  if (helper = helpers.href) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.href); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			<ul>\n				<li>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n				<li>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n			</ul>\n		</a>\n		";
  return buffer;
  }

  buffer += "<!-- COMPONENT LEVEL: HTML -->\n<!-- example-component -->\n\n<!-- BEM BLOCK -->\n<section class=\"example-component\">\n\n	<!-- Demo content to be removed -->\n		<img src=\"images/primer-logo.png\" alt=\"Primer logo\" />\n		<h1>Your project has been generated!</h1>\n		<h3>Check out the <a href=\"https://code.ldschurch.org/stash/projects/PRIMER/repos/generator-primer/\" target=\"_blank\">Primer documentation</a> for more info.</h3>\n\n		<hr>\n\n		<!-- EXAMPLES -->\n		<!-- Examples with dummy data from fake api -->\n		<h2>DUMMY DATA EXAMPLES:</h2>\n\n		<h2>Header:</h2>\n		<h3>";
  if (helper = helpers.header) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.header); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n\n		<h2>Date:</h2>\n		<h5>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n\n		<h2>Sentence:</h2>\n		<p>";
  if (helper = helpers.sentence) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sentence); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n		<h2>Paragraph:</h2>\n		<p>";
  if (helper = helpers.paragraph) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.paragraph); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n		<h2>Full image:</h2>\n		<img src=\"";
  if (helper = helpers.full) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.full); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Full\" />\n\n		<h2>Thumbnail image:</h2>\n		<img src=\"";
  if (helper = helpers.thumb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Thumb\" />\n\n		<h2>Repeating items:</h2>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.links), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</section>\n";
  return buffer;
  }));

Handlebars.registerPartial("page-bottom", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n		<!-- PROJECT LEVEL: FOOTER -->\n		<!-- Instantiate and compose footer components here -->\n\n		<!-- PROJECT LEVEL: SCRIPTS -->\n		<script src=\"all.min.js\"></script>\n	</body>\n";
  }));

Handlebars.registerPartial("page-top", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n	<head>\n\n		<!-- PROJECT LEVEL: CONFIG -->\n		<title>Devmtn js fundamentals 1</title>\n		<meta name=\"description\" content=\"DevMountain teaching resources to help students learn core JavaScript principles such as variables, if statements, operators, and functions.\" />\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimal-ui\" />\n		<meta charset=\"utf-8\" />\n\n		<!-- PROJECT LEVEL: STYLES -->\n		<link rel=\"stylesheet\" href=\"all.min.css\" />\n	</head>\n\n	<body>\n\n		<!-- PROJECT LEVEL: HEADER -->\n		<!-- Instantiate and compose header components here -->\n";
  }));