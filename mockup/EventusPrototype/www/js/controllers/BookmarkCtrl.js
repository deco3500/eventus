app.controller('BookmarkCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk) {
   $scope.$on('$ionicView.enter',function(event,data){
       
   
       var temp=[];
       if(localStorage.getItem("bookmark")!==null){
            var bookmarks= JSON.parse(localStorage.getItem("bookmark"));
            for (var i=0;i<events.length;i++){
                if(bookmarks.hasOwnProperty(""+i) && bookmarks[""+i]==true){
                    temp.push(events[i]);
                    events[i]["bookmarked"]="clicked";
                }
            }
        }

        $scope.bookmarked=function(index,id){

            if (localStorage.getItem("bookmark")!==null){
                var bookmarks= JSON.parse(localStorage.getItem("bookmark"));
                if(bookmarks.hasOwnProperty(""+index)){
    //                events[index]["bookmarked"]="clicked";
                    for (var i=0;i<events.length;i++){
                        if(events[i].id==id){
                            bookmarks[i]=false;
                        }
                    }

                    temp.splice(index,1);
                }
                localStorage.setItem("bookmark",JSON.stringify(bookmarks));
            }

        }



       $scope.events=temp;
   });
});