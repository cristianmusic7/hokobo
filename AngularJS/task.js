//debounce function
debounce = (fn, time) => {
    let timeout;        
    return function() {
        const functionCall = () => {
            fn.apply(this, arguments)
        };        
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

let app = angular
    .module("myModule", [])
    .controller("taskController",function($scope, DataService) {
        $scope.processed = "";

        //countWords time complexity: O(n). Being n the length of the 'words' array using hash table
        countWords = (words) => {  
            let counts = {};
            for (var i = 0; i < words.length; i++) {
                counts[words[i]] = 1 + (counts[words[i]] || 0);  
            }
            return counts;
        }

        $scope.callService = debounce(input => {
            let words = DataService.getString(input);
            let count = countWords(words);
            console.log(Object.keys(count).length ? count : "no words") ;
        }, 450);
    });