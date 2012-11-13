"use strict";

clientApp.factory('$backend', function($http) {
  var user = [];
  var groups = [];

  return {
    user: user,
    groups: groups,
    addGroup: function(name) {
      var nGroup = {name:name};
      groups.push(nGroup);
      return nGroup;
    }
  };
});

