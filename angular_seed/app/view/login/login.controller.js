(function (){
    'use strict';
    angular.module('faver.login').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$state','LoginService','$sessionStorage'];

    function LoginController($scope,$state,LoginService,$sessionStorage){
        var vm = this;
        vm.login = {};
        vm.login.email = "";
        vm.login.password = "";
        
        $scope.formSubmit = function() { 
            var email = vm.login.email;
            var password = vm.login.password;
            LoginService.validate(email,password)
                .then(function(userID){
                    console.log("valid credentials, singing in");
                    $sessionStorage.userID = userID;
                    $state.go("home");
                },
                function(err){
                    alert("error retrieving events");
                });
        }
        
    }
})();