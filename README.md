# AngularPhoneWarehouse

This is a single page application to help a company track the kinds of phones they are selling

This application uses
1. modules
2. simple controller, services, directives

Need to add
1. D3 charts for phone models shipped
2. Improve CSS
3. Inter directive communication
4. Move login form and add registration functionality into a directive 
5. Check firbasem, node, openfin


1. followed best practice in naming scope bindings as a attributes on a object.
2. Best practice of not abbrevating controllers
3. after 10 iterations digest cycle is aborted -- Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
4. {{}} are evaluated by $parse service
5. $interpolate can be used to evaluate expressions, behaves as liferay templates
5. when using filters in controller we need to append FilterName 
6. $locationWatch is present on rootScope
7. NgModel controller $setValidity method to set custom validation levels -- look at unique directive -- loginForm
8. never use watch in a controller, it hampers testing, watch returns a function to unregister it
9. watch, evelasync, watchcollection
10. adding evalAsync to do a httpRequest from watch block

Expert in AngularJs 1.4, Karma, Protractor, Grunt, Javascript


1. Centralized configuration of a angular consisting of multiple single-page pages.
2. Wrote http interceptors, custum authentication
3. Demo of parent-child, event.brodcast, emit, multiple controllers in a view
4. ng d3 directives used in sample
5. Grunt, gulp, node server deployed on aws
6. http://www.bennadel.com/blog/2635-looking-at-how-scope-evalasync-affects-performance-in-angularjs-directives.htm




How to extract out config into a external javascript file.
When you have independent single page applications


Angular interpolate to create a liferay tempalte views.


Go to page http://localhost:8000/#/clock for
1. parent -- child relation ship 
2. how a new a property is created on child scope if model object is not usedt
