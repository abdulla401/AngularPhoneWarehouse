# AngularPhoneWarehouse

This is a single page application to help a company track the kinds of phones they are selling

This application uses
1. modules
2. simple controller, services, directives

Need to add
1. D3 charts for phone models shipped
2. Improve CSS
3. Inter directive communication


1. followed best practice in naming scope bindings as a attributes on a object.
2. Best practice of not abbrevating controllers
3. after 10 iterations digest cycle is aborted -- Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
4. {{}} are evaluated by $parse service
5. $interpolate can be used to evaluate expressions, behaves as liferay templates
5. when using filters in controller we need to append FilterName 
6. $locationWatch is present on rootScope
7. NgModel controller $setValidity method to set custom validation levels -- look at unique directive -- loginForm




How to extract out config into a external javascript file.
When you have independent single page applications


Angular interpolate to create a liferay tempalte views.


Go to page http://localhost:8000/#/clock for
1. parent -- child relation ship 
2. how a new a property is created on child scope if model object is not used
