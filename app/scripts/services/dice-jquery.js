

clientApp.factory('$diceJ', function() {
  return {
    modal: function(id) {
      $('#'+id).modal('show');
      $('#'+id).focus();
    }
  };
});



