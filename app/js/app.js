/*jshint -W097 */
/*jshint -W117 */
'use strict';
var gdgApp = angular.module('gdgApp', []);

gdgApp.controller('GDGData', ['$scope', '$sce', '$http', function ($scope, $sce, $http) {

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

    $scope.gdgData = {'id': PLUS_ID};

    $http.get('gdg-info.json').then(function(res){
          $scope.gdgData = res.data;
          $scope.gdgData.id = PLUS_ID;
          $scope.gdgData.calendarEmbedUrl = $sce.trustAsResourceUrl($scope.gdgData.calendarUrl);

          $http.get('https://www.googleapis.com/plus/v1/people/' + PLUS_ID + '/activities/public?alt=json&key=' + API_KEY)
          .success(function(data) {
            $scope.posts = data['items'];
            // $scope.posts = data.items;
          })
          .error(function(data) {
            console.error(data);
          });              
    });
 
}]);