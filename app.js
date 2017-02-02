(function(){
'use strict'

  var shoppingList1=["milk","peanut","cookies"];

  var shoppingList2=[
    {
      name:"Milk",
      quantity:"2"
    },
    {
      name="peanut",
      quantity="3"
    }

  ];
  anguler.module('shoppingListApp',[])
  .controller('ShoppingListController',ShoppingListController);
  ShoppingListController.$inject=['$scope'];

    function ShoppingListController($scope)
    {
      $scope.shoppingList1=shoppingList1;
      $scope.shoppingList2=shoppingList2;
    }

})
