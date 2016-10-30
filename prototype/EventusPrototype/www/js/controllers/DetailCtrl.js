app.controller('DetailCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    $scope.showed=false;
    ionicMaterialInk.displayEffect();
    var id= $stateParams.id;
    $scope.comments={
        comment:""
    };
    $scope.id=id;
    $scope.clicked="";
    console.log(id);
    $scope.star_1="fa-star-o";
    $scope.star_2="fa-star-o";
    $scope.star_3="fa-star-o";
    $scope.star_4="fa-star-o";
    $scope.star_5="fa-star-o";
    for(var i=0;i<events.length;i++){
        if(events[i].id==id){
            var event= events[i];
            $scope.title=event.name;
            $scope.poster=event.poster;
            $scope.ratings=event.ratings;
            $scope.date=event.date;
            $scope.venue=event.venue;
            $scope.time=event.time;
            $scope.website=event.website;
            if(event.grade=="good"){
                $scope.good=true;
                $scope.medium=false;
                $scope.medium_o=false;
            }else if(event.grade=="medium" && event.ratings=="3.5"){
                $scope.good=false;
                $scope.medium=true;
                $scope.medium_o=false;
            }else{
                $scope.good=false;
                $scope.medium=false;
                $scope.medium_o=true;
            }
        }
    }
    
   $scope.rate=function(star){
       if(star==1){
            $scope.star_1="fa-star";
            $scope.star_2="fa-star-o";
            $scope.star_3="fa-star-o";
            $scope.star_4="fa-star-o";
            $scope.star_5="fa-star-o";
       }
       if(star==2){
            $scope.star_1="fa-star";
            $scope.star_2="fa-star";
            $scope.star_3="fa-star-o";
            $scope.star_4="fa-star-o";
            $scope.star_5="fa-star-o";
       }
       if(star==3){
            $scope.star_1="fa-star";
            $scope.star_2="fa-star";
            $scope.star_3="fa-star";
            $scope.star_4="fa-star-o";
            $scope.star_5="fa-star-o";
       }
       if(star==4){
            $scope.star_1="fa-star";
            $scope.star_2="fa-star";
            $scope.star_3="fa-star";
            $scope.star_4="fa-star";
            $scope.star_5="fa-star-o";
       }
       if(star==5){
            $scope.star_1="fa-star";
            $scope.star_2="fa-star";
            $scope.star_3="fa-star";
            $scope.star_4="fa-star";
            $scope.star_5="fa-star";
       }
   }
   var commentsList=[];
   if(localStorage.getItem(id)!==null){
       commentsList=JSON.parse(localStorage.getItem(id));
   }
   $scope.submitComment=function(){
       console.log($scope.comments.comment);
       if($scope.comments.comment!==""){
           var lengthCL=commentsList.length;
           var key=id+lengthCL;
           var commentObj=Object();
           commentObj[key]=$scope.comments.comment;
           commentsList.push(commentObj);
           localStorage.setItem(id,JSON.stringify(commentsList));
       }
   }
   $scope.choosed1="grey";
   $scope.choosed2="grey";
   $scope.choosed3="grey";
   $scope.options=function(status){
       if(status=="going"){
           $scope.choosed2="grey";
           $scope.choosed3="grey";
           $scope.choosed1="green";
           $scope.showed=true;
       }else if(status=="not-going"){
           $scope.choosed3="red";
           $scope.choosed1="grey";
           $scope.choosed2="grey";
           $scope.showed=true;
       }else if(status=="interested"){
           $scope.choosed2="dark-yellow"
           $scope.choosed1="grey";
           $scope.choosed3="grey";
           $scope.showed=true;
       }
   }
   
});