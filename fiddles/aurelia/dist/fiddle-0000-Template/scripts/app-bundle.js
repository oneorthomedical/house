define("app",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.App=function e(){t(this,e),this.message="Hello World!"}}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["exports","./environment"],function(e,t){"use strict";function n(e){var t={fiddleHeader:"fiddle-0000-Template",urls:{github:"https://github.com/bradyhouse/house/tree/master/fiddles/aurelia/fiddle-0000-Template"},consoleTag:"H O U S E ~ f i d d l e s"};e.use.standardConfiguration().feature("resources"),o.default.debug&&e.use.developmentLogging(),o.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()}),console.log("%c"+t.consoleTag,"font-style: italic; font-size: 20px;"),console.log("%c"+t.urls.github,"color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;"),console.group()}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=n;var o=function(e){return e&&e.__esModule?e:{default:e}}(t)}),define("resources/index",["exports"],function(e){"use strict";function t(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=t}),define("text!app.html",["module"],function(e){e.exports="<template>\n  <h1>${message}</h1>\n</template>\n"});