var app = angular.module('myApp', ['isteven-multi-select']);

app.controller('myController', function ($scope) {
  $scope.myArray = [
    { name: 'item1' },
    { name: 'item2' }
  ];

  $scope.myArray2 = [
    { name: 'item1' },
    { name: 'item2' }
  ];
  $scope.countryList = [
    { name: "USA", ticked: false },
    { name: "India", ticked: false },
    { name: "Australia", ticked: false },
    { name: "Canada", ticked: false },
    { name: "Russia", ticked: false }
  ];
  $scope.statesList = [
    {
      name: "USA",
      states: [
        { name: "Alabama", ticked: false },
        { name: "California", ticked: false },
        { name: "Illinois", ticked: false }
      ],
      ticked: false
    },
    {
      name: "India",
      states: [
        { name: "Maharashtra", ticked: false },
        { name: "Madhya Pradesh", ticked: false },
        { name: "Rajasthan", ticked: false }
      ],
      ticked: false
    },
    {
      name: "Australia",
      states: [
        { name: "New South Wales", ticked: false },
        { name: "Victoria", ticked: false }
      ],
      ticked: false
    }
  ];

  $scope.newArray3 = {};
  $scope.newArray3.blah = [];

  $scope.newArray = [];
  $scope.statesNewArray = [];
  $scope.states1=[];
  $scope.groupArray = [
    {
      groupName: "blah1",
      suites: [{
        name: "suite1"
      }, {
        name: "suite2"
      }]
    }, {
      groupName: "blah2",
      suites: [{
        name: "suite1blah2"
      }, {
        name: "suite2blah2"
      }]
    }
  ]
  $scope.finalStatesArray=[];

  //$scope.groupArray = [
  //    {
  //        groupName:"blah1",
  //        suites:[{
  //            name:"suite1"
  //        },{
  //            name:"suite2"
  //        }]
  //    }
  //]
  $scope.generateArray=function(){
    $scope.finalStatesArray=[];
    if($scope.statesNewArray && $scope.statesNewArray.length){
      angular.forEach($scope.statesNewArray,function(item,index) {
          if(item.states && item.states.length){
           var i=0;
            angular.forEach(item.states,function(data,i){
              if($scope.finalStatesArray.findIndex(x => x.name==data.name)){
              $scope.finalStatesArray.push(data);
            }
              i++;
            });
          }
          else{
            $scope.finalStatesArray=[];
          }
      });
    }else{
      $scope.finalStatesArray=[];
    }
    
  }
  $scope.generateArray1=function(val){
    $scope.finalStatesArray=[];
    if(!val){
    // if($scope.statesNewArray && $scope.statesNewArray.length){
    //   var i=0;
    //   angular.forEach($scope.statesNewArray,function(item,index) {
    //       if(item.states && item.states.length){
          
    //         angular.forEach(item.states,function(data,i){
    //           if($scope.finalStatesArray.findIndex(x => x.name==data.name)){
    //           $scope.finalStatesArray.push(data);
    //         }
    //           i++;
    //         });
    //       }
    //   });
    // }
    $scope.fillArray($scope.statesNewArray);
  }else{
     $scope.fillArray($scope.statesList);
    }
  }

  $scope.fillArray=function(inputArray){
    if(inputArray && inputArray.length){
      angular.forEach(inputArray,function(item,index) {
          if(item.states && item.states.length){
           var i=0;
            angular.forEach(item.states,function(data,i){
              if($scope.finalStatesArray.findIndex(x => x.name==data.name)){
              $scope.finalStatesArray.push(data);
            }
              i++;
            });
          }
          else{
            $scope.finalStatesArray=[];
          }
      });
    }else{
      $scope.finalStatesArray=[];
    }
  }

  $scope.checkIfEmpty=function(){
    return $scope.statesNewArray.length===0;
    $scope.finalStatesArray=[];
  }

  $scope.emptyArray=function(){
    $scope.finalStatesArray=[];
  }

 
});