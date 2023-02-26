angular.module('market', []).controller('indexController', function ($scope, $http) {
    console.log(123)
    //$scope.fillTable = function () {
        //$http.get('http://localhost:8189/winter/api/v1/products')
            //.then(function (response) {
                //$scope.productsList = response.data;
                ///console.log(response.data);
            //});
    //}

    $scope.loadProducts = function () {
      $http.get('http://localhost:8189/winter/api/v1/products')
        .then(function (response) {
          $scope.productsList = response.data;
        console.log(response.data);
      });
    }

    $scope.showProductInfo = function (productId) {
        $http.get('http://localhost:8189/winter/api/v1/products/' + productId).then(function (response) {
            alert(response.data.title);
        });
    }

    $scope.deleteProductById = function (productId) {
        $http.delete('http://localhost:8189/winter/api/v1/products/' + productId)
            .then(function (response) {
                $scope.loadProducts()
            });
    }

    $scope.createNewProduct = function () {
        // console.log($scope.newProduct);
        $http.post('http://localhost:8189/winter/api/v1/products/', $scope.newProduct)
            .then(function (response) {
                $scope.newProduct = null;
                $scope.loadProducts();
            });
    }

    $scope.loadProducts();
});