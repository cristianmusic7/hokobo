app.factory('DataService', function() {
    return {
        getString: function(input){
            if (!input)
                return [];
            
            return input.split(" ");
        }
    }
});