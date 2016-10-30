app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout,ngFB,$firebaseAuth) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.presentState="menu";
    console.log($scope.presentState);
    $scope.fbLogin = function () {
//        ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
//            function (response) {
//                if (response.status === 'connected') {
//                    console.log('Facebook login succeeded');
//                    $scope.closeLogin();
//                } else {
//                    alert('Facebook login failed');
//                }
//            });
//        var ref= new Firebase("https://eventus-bb765.firebaseapp.com");
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
          'display': 'popup'
        });
//        var authObject=$firebaseAuth(ref);
        firebase.auth().signInWithPopup(provider).then(function(result){
           var token = result.credential.accessToken;
           // The signed-in user info.
           var user = result.user;
            console.log(token);
        }).catch(function(error){
            console.error(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
        
    };
    // $scope.hide= function($text){
    //     console.log($text);
    //     if($text=="maps"){
    //         $scope.value=true;
    //     }else{
    //         $scope.value=true;
    //     }
    // $scope.state="app.maps";


    // }

    // var navIcons = document.getElementsByClassName('ion-navicon');
    // for (var i = 0; i < navIcons.length; i++) {
    //     navIcons.addEventListener('click', function () {
    //         this.classList.toggle('active');
    //     });
    // }

    // var fab = document.getElementById('fab');
    // fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        // window.open('https://twitter.com/satish_vr2011', '_blank');
    // });

    // .fromTemplate() method
    // var template = '<ion-popover-view>' +
    //                 '   <ion-header-bar>' +
    //                 '       <h1 class="title">My Popover Title</h1>' +
    //                 '   </ion-header-bar>' +
    //                 '   <ion-content class="padding">' +
    //                 '       My Popover Contents' +
    //                 '   </ion-content>' +
    //                 '</ion-popover-view>';

    // $scope.popover = $ionicPopover.fromTemplate(template, {
    //     scope: $scope
    // });
    // $scope.closePopover = function () {
    //     $scope.popover.hide();
    // };
    //Cleanup the popover when we're done with it!
    // $scope.$on('$destroy', function () {
    //     $scope.popover.remove();
    // });
});