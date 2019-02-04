angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				var r = $http.get('/api/todos/');
				//r.body.key = 123456789;
				return r;
				//return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos/', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos//' + id);
			}
		}
	}]);