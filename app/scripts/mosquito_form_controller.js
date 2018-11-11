mainApp.controller('StudentController', function($rootScope, $scope, $http, NgMap, $location) {
      console.log($rootScope.user);

      if($rootScope.user == null){
        $location.path('/');
      }

      $scope.appName = "¡Gracias por tu ayuda " + $rootScope.user.getName() + "!";
      $scope.center = [20.61839, -100.41068];
      $scope.latlng = [20.61839, -100.41068];

      $scope.type = "";
      $scope.avistamiento = "";
      $scope.comments = "";
      $scope.weatherInfo = "";
      $scope.tmp = "";

      $scope.getpos = function (event) {
          $scope.lat = event.latLng.lat();
          $scope.lng = event.latLng.lng();
          $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
      };

      $scope.debug = function(){
        var jsn = {
          "coordenadas" : $scope.latlng,
          "type" : $scope.type,
          "seen" : $scope.avistamiento,
          "comments" : $scope.comments,
          "temp" : $scope.tmp
        }

        var str = JSON.stringify(jsn);
        console.log(str);

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var u = 'http://127.0.0.1:8080/seen/postAdd';

        $http({
          method: 'POST',
          url: u,
          headers: {'Content-Type' : 'text/plain'},
          data: str
        }).then(function successCallback(data) {
                  $scope.PostDataResponse = data;
                  console.log(data);
              }, function errorCallback(response) {
                  console.log(response);
              });

        console.log(jsn);
      }


      $scope.placeMarker = function(){
          console.log(this.getPlace());
          var loc = this.getPlace().geometry.location;
          $scope.latlng = [loc.lat(), loc.lng()];
          $scope.center = [loc.lat(), loc.lng()];
      }

      $scope.openModal = function(i){
          var modal = "#portfolio-modal-" + i;
          $(modal).modal('show');
      }

      $scope.getWeather = function(){

        var u = 'http://api.openweathermap.org/data/2.5/weather?lat=' + $scope.latlng[0] + '&lon=' + $scope.latlng[1] + '&appid=ecb1f756686518281c429bf5b7498d70';

        $http({
          method: 'GET',
          url: u,
        }).then(function successCallback(response) {
            $scope.weatherInfo = response.data;
            $scope.tmp = $scope.weatherInfo.main.temp - 273.15;
            console.log($scope.weatherInfo);
          }, function errorCallback(response) {
            console.log(response);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

      }


      var x = document.getElementById("demo");

      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              x.innerHTML = "Geolocation is not supported by this browser.";
          }
      }

      function showPosition(position) {
          $scope.center = [position.coords.latitude, position.coords.longitude];
          $scope.latlng = [position.coords.latitude, position.coords.longitude];
          console.log($scope.latlng);
          $scope.$apply();

      }



      getLocation();

});
