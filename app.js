var app = angular.module('plunker', ['ngStorage']);
app.controller("editor", function($scope, $localStorage) {
            $scope.editorText = $localStorage.message;
            $scope.save = function(value) {
                $localStorage.message = value;
            }

            $scope.load = function() {
                $scope.editorText = $localStorage.message;
            }

        });
