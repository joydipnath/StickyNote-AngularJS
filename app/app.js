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
			
			$scope.doubleClick = function(index,newVal) {
					$scope.hideOnBlur = true;
					$scope.inputShow = true;
					$scope.item = newVal;
					$scope.index = index;
            }
			
			$scope.saveNew = function(index,note){
				//alert(index + note);
				index +=1;
				alert(index + note);
							var totalItem  = localStorage.length;
							var key   = "StickyNote_Joydip-" + index ;
							var createData = {
								id    : index,
								data  : note
							
							};
					localStorage.setItem( key, JSON.stringify(createData) );
					//totalItem = localStorage.length;	
					$scope.notes.push(createData);
			}
});
