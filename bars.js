function BarGraphCTRL($scope) {

    $scope.barWidth = 160;

    $scope.add = function(){
        $scope.barWidth += Number($scope.deltaVal);
    }

    $scope.subtract = function(){
        $scope.barWidth -= $scope.deltaVal;
    }

}