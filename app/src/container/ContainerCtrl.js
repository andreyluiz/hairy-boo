angular.module('hairy-boo')
  .controller('ContainerCtrl', function($scope, $mdSidenav, $state) {
    $scope.selectedMenu = 0;
    $scope.changeRoute = function(menu) {
      $scope.selectedMenu = menu.index;
      $scope.toggleMenu();
      $state.go(menu.route);
    };
    $scope.menus = [
      {index: 0, name: 'Mapa', icon: 'mapa', route: 'mapa'}, 
      {index: 1, name: 'Caçambas', icon: 'cacambas', route: 'cacambas'},
      {index: 2, name: 'Clientes', icon: 'clientes', route: 'clientes'},
      {index: 3, name: 'Caminhões', icon: 'caminhoes', route: 'caminhoes'},
      {index: 4, name: 'Endereços', icon: 'enderecos', route: 'enderecos'},
      {index: 5, name: 'Histórico', icon: 'historico', route: 'historico'}
    ];
  
    $scope.toggleMenu = function() {
      $mdSidenav('left').toggle();
    };
  })