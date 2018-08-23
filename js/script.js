 var myapp = angular.module('myapp', ['ngRoute']);

    // configure our routes
    myapp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/maincontent.html',
                controller  : 'mainController'
            })

            // route for the login page
            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'logCon'
            })

            // route for the register page
            .when('/register', {
                templateUrl : 'pages/register.html',
                controller  : 'regCon'
            })
            // route for the regularcake page
            .when('/regularcakes', {
                templateUrl : 'pages/regularcake.html',
                controller  : 'regController'
            })
            // route for the regularcake page
            .when('/birthdaycakes', {
                templateUrl : 'pages/birthdaycake.html',
                controller  : 'bdayController'
            })
            // route for the weddingcake page
            .when('/weddingcakes', {
                templateUrl : 'pages/weddingcake.html',
               controller  : 'wedController'
            })
        // route for the shoppingcart page
            .when('/cart', {
                templateUrl : 'pages/cart.html'
               // controller  : 'cartController'
            })
            .otherwise({
                redirectTo: '/'
            });
            

    });




myapp.controller('regController', function($scope) {
    
  $scope.options = {
    langs1: [
      { link: 'images/reg/1.jpg',name: 'Regular1'},
      { link: 'images/reg/2.jpg',name: 'Regular2'},
      { link: 'images/reg/3.jpg',name: 'Regular3'},
      { link: 'images/reg/4.jpg',name: 'Regular4'},
      { link: 'images/reg/5.jpg',name: 'Regular5'},
      { link: 'images/reg/6.jpg',name: 'Regular6'},
      { link: 'images/reg/7.jpg',name: 'Regular7'},
	  { link: 'images/reg/8.jpg',name: 'Regular8'},
      { link: 'images/reg/9.jpg',name: 'Regular9'},
	  { link: 'images/reg/10.jpg',name: 'Regular10'},
      { link: 'images/reg/11.jpg',name: 'Regular11'},
	  { link: 'images/reg/12.jpg',name: 'Regular12'},
      
    ],
    
  };
});

myapp.controller('bdayController', function($scope) {
    
  $scope.options = {
    langs2: [
      { link: 'images/bd/1.jpg',name: 'Birthday1'},
      { link: 'images/bd/2.jpg',name: 'Birthday2'},
      { link: 'images/bd/3.jpg',name: 'Birthday3'},
      { link: 'images/bd/4.jpg',name: 'Birthday4'},
      { link: 'images/bd/5.jpg',name: 'Birthday5'},
      { link: 'images/bd/6.jpg',name: 'Birthday6'},
      { link: 'images/bd/7.jpg',name: 'Birthday7'},
      { link: 'images/bd/8.jpg',name: 'Birthday8'},
      { link: 'images/bd/9.jpg',name: 'Birthday9'},
      { link: 'images/bd/10.jpg',name: 'Birthday10'},
      
      
    ],
    
  };
});

myapp.controller('wedController', function($scope) {
    
  $scope.options = {
    langs3: [
      { link: 'images/wed/1.jpg',name: 'Wedding1'},
      { link: 'images/wed/2.jpg',name: 'Wedding2'},
      { link: 'images/wed/3.jpg',name: 'Wedding3'},
      { link: 'images/wed/4.jpg',name: 'Wedding4'},
      { link: 'images/wed/5.jpg',name: 'Wedding5'},
      { link: 'images/wed/6.jpg',name: 'Wedding6'},
      { link: 'images/wed/7.jpg',name: 'Wedding7'},
     
      
    ],
    
  };
});




