var app = angular.module('plunker', ['ngStorage']);
app.controller("editor", function($scope, $localStorage) {
			$scope.notes = [];	
			for(item in localStorage) {
				var item1 = JSON.parse( localStorage[item] );
				$scope.notes.push(item1);
				
			}	
			$scope.save   = function(value) {	
							//var showStored = document.getElementById('showStored');
							var totalItem  = localStorage.length;
							var key   = "StickyNote_Joydip-" + totalItem ;
							var createData = {
								id    : localStorage.length,
								data  : value
							
							};
					localStorage.setItem( key, JSON.stringify(createData) );
					totalItem = localStorage.length;	
					$scope.notes.push(createData);
				}

            $scope.remove = function(index,note) {
				//alert(note.id);
				localStorage.removeItem("StickyNote_Joydip-"+note.id);
				$scope.notes.splice(index,1);
            }
});
