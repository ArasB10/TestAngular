var app = angular.module("app", []);

app.controller('controllerCreate', function ($http) {
    var self = this;

    self.isShown = false;

    self.hi = function(){
    	self.isShown = !self.isShown;
    }
});