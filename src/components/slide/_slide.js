// ================================================================================
// COMPONENT LEVEL: JS
// slide
// Only contains JS for this component.
// ================================================================================



// ------------------------------------------------------------------------------
// COMPONENT LEVEL: JS MODULE
// ------------------------------------------------------------------------------

var slide = (function () {
	'use strict';

	// PROPERTIES
	// Example: private property
	var privateVar = 'Hello world! Called from the "_slide.js" component.';

	// METHODS
	// Example: private method
	var privateMethod = function(input) {
		console.log(input);
	};

	// PUBLIC API
	return {

		// Example: making a private property publicly available
		publicVar: privateVar,

		// Example: making a private method publicly available
		publicMethod: privateMethod
	};
})();



// ------------------------------------------------------------------------------
// ON LOAD
// ------------------------------------------------------------------------------

// Example: using a module's methods and properties
window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	slide.publicMethod(slide.publicVar);
});
