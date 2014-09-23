this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

Handlebars.registerPartial("js-logo", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- COMPONENT LEVEL: HTML -->\n<!-- js-logo -->\n\n<!-- BEM BLOCK -->\n<section class=\"js-logo\">\n\n	<!-- BEM ELEMENTS -->\n	<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 630 630\">\n		<g id=\"logo\">\n			<rect id=\"background\" x=\"0\" y=\"0\" width=\"630\" height=\"630\" fill=\"#f7df1e\" />\n			<path id=\"j\" d=\"m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13\" />\n			<path id=\"s\" d=\"m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375\" />\n		</g>\n	</svg>\n\n</section>\n";
  }));

Handlebars.registerPartial("page-bottom", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n		<!-- PROJECT LEVEL: FOOTER -->\n\n		<!-- PROJECT LEVEL: SCRIPTS -->\n		<script src=\"all.min.js\"></script>\n	</body>\n";
  }));

Handlebars.registerPartial("page-top", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n	<head>\n\n		<!-- PROJECT LEVEL: CONFIG -->\n		<title>DevMountain | JavaScript Fundamentals: Part 1</title>\n		<meta name=\"description\" content=\"An HTML slide deck to help teach the DevMountain lesson.\" />\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimal-ui\" />\n		<meta charset=\"utf-8\" />\n\n		<!-- REVEALJS STYLE DEPENDENCIES -->\n		<link rel=\"stylesheet\" href=\"reveal.js/css/reveal.min.css\">\n		<link rel=\"stylesheet\" href=\"reveal.js/css/theme/simple.css\" id=\"theme\">\n\n		<!-- FONTS -->\n		<link href='http://fonts.googleapis.com/css?family=Raleway:400,100' rel='stylesheet' type='text/css'>\n\n		<!-- PROJECT LEVEL: STYLES -->\n		<link rel=\"stylesheet\" href=\"all.min.css\" />\n	</head>\n\n	<body>\n\n		<!-- PROJECT LEVEL: HEADER -->\n";
  }));

Handlebars.registerPartial("progress-bar", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- COMPONENT LEVEL: HTML -->\n<!-- progress-bar -->\n\n<!-- BEM BLOCK -->\n<section class=\"progress-bar\">\n\n	<!-- BEM ELEMENTS -->\n\n	<section class=\"progress-bar__example-element\">\n		<h1>Hello world! This is a progress-bar component.</h1>\n	</section>\n\n</section>\n";
  }));

Handlebars.registerPartial("slide", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- COMPONENT LEVEL: HTML -->\n<!-- slide -->\n\n<!-- BEM BLOCK -->\n<section class=\"slide\">\n\n	<!-- BEM ELEMENTS -->\n\n	<section class=\"slide__example-element\">\n		<h1>Hello world! This is a slide component.</h1>\n	</section>\n\n</section>\n";
  }));

Handlebars.registerPartial("github", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\">\n<g id=\"icomoon-ignore\">\n	<line stroke-width=\"1\" x1=\"\" y1=\"\" x2=\"\" y2=\"\" stroke=\"#449FDB\" opacity=\"\"></line>\n</g>\n	<path d=\"M43.75 6.25c24.219 0 43.75 20.117 43.75 44.922 0 19.727-12.5 36.719-29.883 42.578h-0.781c-1.563 0-2.344-1.367-2.344-2.344 0-1.563 0.195-6.055 0.195-12.109 0-4.102-1.563-7.031-3.125-8.398 9.766-1.172 20.117-4.883 20.117-22.070 0-4.883-1.758-8.984-4.492-12.109 0.391-1.172 1.953-5.664-0.391-11.914h-0.977c-1.563 0-5.273 0.586-11.133 4.688-3.516-0.977-7.227-1.563-10.938-1.563s-7.422 0.586-10.938 1.563c-5.859-4.102-9.57-4.688-11.133-4.688h-0.977c-2.344 6.25-0.781 10.742-0.391 11.914-2.734 3.125-4.492 7.227-4.492 12.109 0 17.188 10.156 20.898 19.922 22.070-1.172 1.172-2.344 3.125-2.734 6.055-1.172 0.586-3.125 1.172-5.078 1.172-2.539 0-5.469-0.977-7.617-4.883 0 0-2.539-4.297-6.836-4.688v0c-0.391 0-4.102 0-0.195 2.734 0 0 2.93 1.563 4.883 6.641 0 0 1.953 6.445 10.352 6.445 1.367 0 2.734 0 4.297-0.391v7.617c0 0.977-0.586 2.148-2.148 2.148h-0.781c-17.383-5.859-29.883-22.656-29.883-42.578 0-24.805 19.531-44.922 43.75-44.922zM28.516 87.5c-2.93 0-5.469-0.781-7.422-1.758 2.734 1.953 5.469 3.32 8.594 4.492v-2.734h-1.172zM30.664 73.242c-3.125-0.781-6.836-1.953-10.156-4.688 1.172 1.172 2.148 2.148 2.539 3.125 1.367 2.344 2.734 3.32 4.883 3.32 0.781 0 1.758-0.195 2.344-0.391 0.195-0.391 0.195-0.977 0.391-1.367zM67.773 84.766c3.32-2.539 6.25-5.469 8.789-8.984 5.078-7.227 7.813-15.625 7.813-24.609 0-5.664-0.977-11.328-3.125-16.406-1.953-4.883-5.078-9.375-8.789-13.281s-8.008-6.641-12.891-8.789c-5.078-2.148-10.352-3.32-15.82-3.32s-10.742 1.172-15.82 3.32c-4.883 2.148-9.18 4.883-12.891 8.789s-6.836 8.203-8.789 13.281c-2.148 5.078-3.125 10.742-3.125 16.406 0 8.984 2.734 17.383 7.813 24.609 1.953 2.734 4.297 5.273 6.836 7.422-1.367-1.563-2.148-3.125-2.539-4.297-1.367-3.516-2.93-4.688-3.32-4.883h-0.391v-0.195c-0.977-0.586-3.906-2.539-2.93-5.469 0.586-1.758 2.344-2.93 4.883-2.93h0.195c2.539 0.195 4.688 1.172 6.25 2.539-4.102-3.711-7.227-9.375-7.227-19.141 0-4.688 1.367-9.18 4.102-12.891-0.586-2.539-1.172-6.641 0.977-12.109l0.586-1.563 1.367-0.391c0.391 0 0.977-0.195 1.953-0.195 2.344 0 6.055 0.586 11.719 4.297 3.32-0.781 6.836-1.172 10.352-1.172v0 0c3.516 0 7.031 0.391 10.352 1.172 5.664-3.711 9.375-4.297 11.719-4.297 0.977 0 1.563 0.195 1.953 0.195l1.367 0.391 0.586 1.367c2.148 5.273 1.563 9.766 0.977 12.305 2.734 3.711 4.102 8.008 4.102 12.891 0 17.969-10.742 22.852-17.969 24.414 0.586 1.563 0.977 3.516 0.977 5.859v11.133c3.516-1.367 6.836-3.125 9.961-5.469z\" fill=\"#000000\"></path>\n</svg>\n";
  }));

Handlebars.registerPartial("trevordmiller-follow", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<!-- COMPONENT LEVEL: HTML -->\n<!-- trevordmiller-icon -->\n\n<!-- BEM BLOCK -->\n<section class=\"trevordmiller-icon\">\n\n	<!-- BEM ELEMENTS -->\n	";
  stack1 = self.invokePartial(partials.github, 'github', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = self.invokePartial(partials.twitter, 'twitter', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = self.invokePartial(partials.website, 'website', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	@trevordmiller\n\n</section>\n";
  return buffer;
  }));

Handlebars.registerPartial("twitter", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"92\" height=\"100\" viewBox=\"0 0 92 100\">\n<g id=\"icomoon-ignore\">\n	<line stroke-width=\"1\" x1=\"\" y1=\"\" x2=\"\" y2=\"\" stroke=\"#449FDB\" opacity=\"\"></line>\n</g>\n	<path d=\"M92.188 21.484c-2.539 3.906-5.664 7.031-9.375 9.766v2.344c0 25-19.141 53.906-53.906 53.906-10.742 0-20.508-3.125-28.906-8.594 1.563 0.195 2.93 0.391 4.492 0.391 8.789 0 16.992-3.125 23.438-8.203-8.203-0.195-15.234-5.664-17.578-13.086 1.172 0.195 2.344 0.391 3.516 0.391 1.758 0 3.516-0.391 5.078-0.781-8.594-1.758-15.234-9.375-15.234-18.555v-0.195c2.539 1.367 5.469 2.344 8.594 2.344-5.078-3.32-8.398-9.18-8.398-15.82 0-3.516 0.977-6.641 2.539-9.375 9.375 11.523 23.242 18.945 38.867 19.727-0.391-1.367-0.391-2.734-0.391-4.297 0-10.547 8.398-18.945 18.945-18.945 5.469 0 10.156 2.344 13.672 6.055 4.297-0.781 8.398-2.539 12.109-4.688-1.367 4.492-4.492 8.203-8.398 10.547 3.906-0.391 7.617-1.367 10.938-2.93zM80.859 28.711c0.586-0.391 1.563-1.172 2.148-1.563-0.391 0-2.148 0.391-3.711 0.195s-4.102-0.977-4.102-0.977 2.734-2.539 3.516-3.32l2.148-2.148c-0.781 0.195-1.953 0.391-2.734 0.586l-1.563 0.391-1.172-1.172c-2.93-3.125-7.227-5.078-11.523-5.078-8.789 0-15.82 7.227-15.82 15.82 0 1.172 0.195 2.344 0.391 3.516l0.977 4.102-4.297-0.195c-8.203-0.391-15.82-2.539-23.047-6.25-5.469-2.734-10.352-6.641-14.648-10.938-0.195 1.172-0.391 2.539-0.391 3.711 0 5.273 2.734 10.352 7.031 13.281 0 0 6.445 4.492 8.984 5.664-4.688 0.391-10.938 0-10.938 0-1.563 0-3.125-0.195-4.688-0.586 1.563 5.469 6.25 9.766 12.109 10.938l11.914 1.953-11.914 4.102c-1.367 0.391-2.734 0.586-4.102 0.586 2.93 3.906 7.422 6.641 12.5 6.641l8.789 0.195-6.836 5.469c-3.516 2.734-7.422 4.883-11.719 6.445-1.953 0.586-3.711 1.172-5.664 1.563 5.273 1.758 10.742 2.734 16.406 2.734 7.813 0 15.234-1.563 21.875-4.688 6.055-2.734 11.328-6.641 15.82-11.719 4.297-4.688 7.422-10.352 9.766-16.406 2.148-5.859 3.32-12.109 3.32-17.969v-2.344l-0.195-1.563z\" fill=\"#000000\"></path>\n</svg>\n";
  }));

Handlebars.registerPartial("website", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"81\" height=\"100\" viewBox=\"0 0 81 100\">\n<g id=\"icomoon-ignore\">\n	<line stroke-width=\"1\" x1=\"\" y1=\"\" x2=\"\" y2=\"\" stroke=\"#449FDB\" opacity=\"\"></line>\n</g>\n	<path d=\"M40.625 9.375c22.461 0 40.625 18.164 40.625 40.625s-18.164 40.625-40.625 40.625v0 0 0c-22.461 0-40.625-18.164-40.625-40.625s18.164-40.625 40.625-40.625v0 0 0zM42.188 33.594v14.844h14.648c-0.195-6.055-0.977-11.719-2.148-16.406-4.102 0.977-8.203 1.367-12.5 1.563zM42.188 30.469c3.906-0.195 8.008-0.586 11.719-1.563-2.734-8.984-7.422-14.844-11.719-16.016v17.578zM39.063 12.891c-4.492 1.172-8.789 7.031-11.719 16.016 3.711 0.977 7.617 1.367 11.719 1.563v-17.578zM39.063 33.594c-4.297-0.195-8.594-0.586-12.695-1.563-1.172 4.688-1.953 10.352-2.148 16.406h14.844v-14.844zM21.094 48.438c0.195-6.25 0.781-12.109 2.148-17.188-4.102-1.172-8.008-2.93-11.523-4.883-5.078 6.055-8.008 13.672-8.398 22.070h17.773zM21.094 51.563h-17.773c0.391 8.398 3.32 16.016 8.398 22.070 3.711-1.953 7.422-3.711 11.523-4.883-1.367-5.078-1.953-10.938-2.148-17.188zM24.219 51.563c0.195 6.055 0.977 11.719 2.148 16.406 4.102-0.977 8.398-1.563 12.695-1.758v-14.648h-14.844zM39.063 69.531c-4.102 0.195-8.008 0.586-11.719 1.563 2.93 8.984 7.227 14.844 11.719 16.016v-17.578zM42.188 87.109c4.297-1.172 8.984-7.031 11.719-16.016-3.711-0.977-7.813-1.367-11.719-1.563v17.578zM42.188 66.211c4.297 0.195 8.398 0.781 12.5 1.758 1.172-4.688 1.953-10.352 2.148-16.406h-14.648v14.648zM60.156 51.563c-0.195 6.25-0.977 12.109-2.344 17.188 4.102 1.172 8.008 2.93 11.719 4.883 5.078-6.055 8.008-13.672 8.398-22.070h-17.773zM60.156 48.438v0h17.773c-0.391-8.398-3.32-16.016-8.398-22.070-3.711 1.953-7.422 3.711-11.523 4.883 1.367 5.078 1.953 10.938 2.148 17.188zM67.188 23.828c-4.883-4.883-10.938-8.594-17.773-10.156 3.125 3.32 5.664 8.398 7.617 14.453 3.516-1.172 6.836-2.539 10.156-4.297zM31.836 13.672c-6.836 1.563-13.086 5.273-17.773 10.156 3.125 1.758 6.641 2.93 10.156 4.102 1.953-6.055 4.492-10.938 7.617-14.258zM14.063 76.172c4.883 4.883 10.938 8.594 17.773 10.156-3.125-3.32-5.859-8.398-7.813-14.453-3.516 1.172-6.836 2.539-9.961 4.297zM49.414 86.328c6.836-1.563 12.891-5.273 17.773-10.156-3.32-1.758-6.641-3.125-10.156-4.297-1.953 6.055-4.492 11.133-7.617 14.453z\" fill=\"#000000\"></path>\n</svg>\n";
  }));