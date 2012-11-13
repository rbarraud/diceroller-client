

clientApp.controller('MainCtrl', function($scope, $backend, $location, $diceJ) {
  'use strict';

  $backend.user = {email:"richard@bluetrainsoftware.com", name:"Richard Vowles", id:1728678123};
//  $backend.addGroup('pants');

  $scope.userGroups = [];

  function init() {
    $scope.user = $backend.user;
    $scope.userGroups = $backend.groups;
    $scope.addGroup = function() {
      $scope.groupPassword = '';
      $scope.groupName = '';
      $diceJ.modal('addGroup');
    };
    $scope.selectGroup = function(group) {
      $scope.group = group;
    };
    $scope.newGroupInvalid = function() {
      return !$scope.groupPassword || !$scope.groupName;
    };
  }

  if (!$backend.user) {
    $location.path('/choose');
  } else {
    init();
  }


});

clientApp.controller('chooseController', function($scope, $backend) {
  'use strict';
});

clientApp.controller('loginController', function($scope, $backend, $timeout, $location) {
  'use strict';

  $scope.login = function() {
    $backend.setUser({email:"richard@bluetrainsoftware.com", name:"Richard Vowles", id:1728678123}, []);
    $location.path('/');
  };
});

clientApp.controller('registerController', function($scope, $backend, $timeout, $location) {
  'use strict';

  // normally just redirect to well known url in backend
  $scope.register = function() {
    $backend.setUser({email:"mark@talios.com", name:"Mark Derricutt", id:1728678123}, []);
    $location.path('/');
  };
});

