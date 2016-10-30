app.controller('HomeCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    
    
    $scope.$on('$ionicView.enter',function(event,data){
        $scope.presentState="home";
        console.log($scope.presentState);
        ionicMaterialInk.displayEffect();
        for (var i=0;i<events.length;i++){
            events[i]["bookmarked"]="";
        }
        $scope.events= events;
        if(localStorage.getItem("bookmark")!==null){
            var bookmarks= JSON.parse(localStorage.getItem("bookmark"));
            for (var i=0;i<events.length;i++){
                if(bookmarks.hasOwnProperty(""+i) && bookmarks[""+i]==true){
                    events[i]["bookmarked"]="clicked";
                }
            }
        }
    });
    
    
    
    $scope.bookmarked=function(index){
        console.log(index);
        if (localStorage.getItem("bookmark")!==null){
            console.log("bookmark stored");
            var bookmarks= JSON.parse(localStorage.getItem("bookmark"));
            if(!bookmarks.hasOwnProperty(""+index) || bookmarks[index]==false){
                events[index]["bookmarked"]="clicked";
                bookmarks[index]=true;
            }else{
                events[index]["bookmarked"]="";
                bookmarks[index]=false;
                
            }
            localStorage.setItem("bookmark",JSON.stringify(bookmarks));
        }else{
            bookmark[index]=true;
            events[index]["bookmarked"]="clicked";
            localStorage.setItem("bookmark",JSON.stringify(bookmark));
        }
        
    }
    // Toggle Code Wrapper
    // var code = document.getElementsByClassName('code-wrapper');
    // for (var i = 0; i < code.length; i++) {
    //     code[i].addEventListener('click', function() {
    //         this.classList.toggle('active');
    //     });
    // }
});