angular.module('hairy-boo')
  .config(function($mdIconProvider) {
    $mdIconProvider
      .icon('menu', 'assets/svg/ic_menu_24px.svg')
      .icon('mapa', 'assets/svg/ic_map_24px.svg')
      .icon('cacambas', 'assets/svg/ic_list_24px.svg')
      .icon('clientes', 'assets/svg/ic_face_24px.svg')
      .icon('caminhoes', 'assets/svg/ic_local_shipping_24px.svg')
      .icon('enderecos', 'assets/svg/ic_pin_drop_24px.svg')
      .icon('historico', 'assets/svg/ic_history_24px.svg')
      .icon('app-icon', 'assets/svg/app-icon.svg')
  });