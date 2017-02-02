(function(){
'use strict'

  var shoppingList1=["milk","peanut","cookies"];

  var shoppingList2 =[
    {
      name:"Milk",
      quantity:"2"
    },
    {
      name:"peanut",
      quantity:"3"
    },
    {
      name:"Milk",
      quantity:"2"
    }

  ];
  angular.module('ShoppingListApp',[])
  .controller('ShopingListController',ShopingListController);
  ShopingListController.$inject=['$scope'];

    function ShopingListController($scope)

    {
      $scope.shoppingList1=shoppingList1;
      $scope.shoppingList2=shoppingList2;

    $scope.addToList = function(){
      var newItem=
      {
        name: $scope.newItemName,
        quantity:$scope.newItemQuantity
      };
      $scope.shoppingList2.push(newItem);
    };
}
})();
