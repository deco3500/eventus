
app.controller('ListsCtrl', function ($scope, $stateParams, ionicMaterialMotion) {
//    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(-27.4697707, 153.0251235);
        var locations=[
            ['Aidi Fauzan', -27.4970855, 153.0117108, 1],
            ['Joseph Teo', -27.4964988, 153.0120203, 2],
            ['Henry Zhou', -27.5032552, 153.0048497, 3],
            ['UQ Musical Wednesday', -27.4970409, 153.0157368, "event"],
//            ['Maroubra Beach', -33.950198, 151.259302, 1]
        ]
        var infowindow = new google.maps.InfoWindow();
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker;
        for (var i=0;i<locations.length;i++){
            if (locations[i][3]!=="event"){
                marker=new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1],locations[i][2]),
                    map:map,
                    icon:"img/person.png"
                });
            }else{
                 marker=new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1],locations[i][2]),
                    map:map,
                    icon:"img/location-blue.png"
                });
            }
            google.maps.event.addListener(marker,'click',(function(marker,i){
                return function(){
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map,marker);
                }  
            })(marker,i));
        }
        
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    
    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();

});