angular.module('squeeders').controller('ListController', function ($scope) {
  $scope.$meteorSubscribe('squeeders');
  $scope.squeeders = $scope.$meteorCollection(Squeeders, false);
});
