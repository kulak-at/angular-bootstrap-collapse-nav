angular.module('kulak.bootstrap.collapse-nav', [])
.directive('collapseOnClick', function() {
  return {
    link: function(scope, element) {
      $(element).find('a').not('.dropdown-toggle').on('click', function() {
        $(element).find('.navbar-toggle:visible').trigger('click');
      });
    }
  };
});
