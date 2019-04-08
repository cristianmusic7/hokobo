let app = angular
    .module("myModule", [])
    .controller("taskController",function($scope, stringService) {
        $scope.message = "test message";

        $scope.callService = function(strings) {
            alert(stringService.proccessArray(strings));            
        }
    });

app.factory('stringService', function() {
    return {
        proccessArray: function(strings){
            if (!strings)
                return [];
            
            return strings.split(" ");
        }
    }
});