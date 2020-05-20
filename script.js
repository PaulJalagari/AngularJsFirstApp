var app = angular.module('myApp', ['isteven-multi-select']);

app.controller('myController', ['$scope', function ($scope) {
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
  $scope.states1 = [];
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
  $scope.finalStatesArray = [];
  $scope.newRegions = [];
  $scope.regions = [
    {
      regionId: "1",
      regionName: "NORTHERN",
      ticked: false,
      serviceUnits: [
        {
          serviceUnitId: "1",
          serviceUnitName: "GREAT LAKES",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "TRENTON",
              subDivisionId: "78",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CLINTON",
              subDivisionId: "100",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/6/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "2",
          serviceUnitName: "CHICAGO",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "13",
          serviceUnitName: "GREAT PLAINS",
          subDivisions: [
            {
              subDivisionName: "KEARNEY",
              subDivisionId: "210",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/6/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "17",
          serviceUnitName: "ROCKY MOUNTAIN",
          subDivisions: [
            {
              subDivisionName: "LARAMIE",
              subDivisionId: "255",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "18",
          serviceUnitName: "PACIFIC NORTHWEST",
          subDivisions: [
            {
              subDivisionName: "NAMPA",
              subDivisionId: "807",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "STODDARD LEAD",
              subDivisionId: "808",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "19",
          serviceUnitName: "NORTHERN CALIFORNIA",
          subDivisions: [
            {
              subDivisionName: "WINNEMUCCA",
              subDivisionId: "779",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "6/4/2019",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "23",
          serviceUnitName: "COMMUTER OPERATIONS",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        }
      ]
    },
    {
      regionId: "2",
      regionName: "SOUTHERN",
      ticked: false,
      serviceUnits: [
        {
          serviceUnitId: "5",
          serviceUnitName: "HEARTLAND",
          subDivisions: [
            {
              subDivisionName: "JEFFERSON CITY",
              subDivisionId: "65",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "3/5/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "6",
          serviceUnitName: "MID AMERICA",
          subDivisions: [
            {
              subDivisionName: "MONTEREY",
              subDivisionId: "22",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "8",
          serviceUnitName: "GULF COAST",
          subDivisions: [
            {
              subDivisionName: "MONROE",
              subDivisionId: "450",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/24/2019",
              ldrCutoverDate: "6/18/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "CAMP BEAUREGARD IND LD",
              subDivisionId: "452",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "9",
          serviceUnitName: "HOUSTON",
          subDivisions: [
            {
              subDivisionName: "PALESTINE",
              subDivisionId: "520",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "11",
          serviceUnitName: "TEXOMA",
          subDivisions: [
            {
              subDivisionName: "ENID",
              subDivisionId: "325",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "7/2/2019",
              ldrCutoverDate: "4/16/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "DUNCAN",
              subDivisionId: "326",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "LAWTON",
              subDivisionId: "327",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "WAGONER",
              subDivisionId: "345",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/25/2019",
              ldrCutoverDate: "9/25/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "BLACK FOX POWER PLANT",
              subDivisionId: "346",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CHEROKEE-NORTHERN",
              subDivisionId: "350",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "12",
          serviceUnitName: "SOUTH TEXAS",
          subDivisions: [
            {
              subDivisionName: "GIDDINGS",
              subDivisionId: "517",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "HEARNE",
              subDivisionId: "527",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "10/8/2019",
              ldrCutoverDate: "10/8/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "AUSTIN",
              subDivisionId: "528",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "10/8/2019",
              ldrCutoverDate: "10/8/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "GEORGETOWN IND LD",
              subDivisionId: "529",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "16",
          serviceUnitName: "SUNSET",
          subDivisions: [
            {
              subDivisionName: "TOYAH",
              subDivisionId: "515",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "5/7/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "VALENTINE",
              subDivisionId: "648",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "5/7/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "INTERNATIONAL IND LD",
              subDivisionId: "649",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "20",
          serviceUnitName: "LOS ANGELES",
          subDivisions: [
            {
              subDivisionName: "GILA",
              subDivisionId: "675",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "CIMA",
              subDivisionId: "760",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "MOJAVE",
              subDivisionId: "940",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "24",
          serviceUnitName: "ALTON & SOUTHERN",
          subDivisions: [
            {
              subDivisionName: "ALTON & SOUTHERN GATEWAY",
              subDivisionId: "45",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CAHOKIA IND LD (A)",
              subDivisionId: "4240",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        }
      ]
    }
  ]
  $scope.selected = '';
  
  $scope.generateArray = function () {
    $scope.finalStatesArray = [];
    if ($scope.statesNewArray && $scope.statesNewArray.length) {
      angular.forEach($scope.statesNewArray, function (item, index) {
        if (item.states && item.states.length) {
          var i = 0;
          angular.forEach(item.states, function (data, i) {
            if ($scope.finalStatesArray.findIndex(x => x.name == data.name)) {
              $scope.finalStatesArray.push(data);
            }
            i++;
          });
        }
        else {
          $scope.finalStatesArray = [];
        }
      });
    } else {
      $scope.finalStatesArray = [];
    }

  }
  $scope.generateArray1 = function (val) {
    $scope.finalStatesArray = [];
    if (!val) {
      $scope.fillArray($scope.statesNewArray);
    } else {
      $scope.fillArray($scope.statesList);
    }
  }

  $scope.fillArray = function (inputArray) {
    if (inputArray && inputArray.length) {
      angular.forEach(inputArray, function (item, index) {
        if (item.states && item.states.length) {
          var i = 0;
          angular.forEach(item.states, function (data, i) {
            if ($scope.finalStatesArray.findIndex(x => x.name == data.name)) {
              $scope.finalStatesArray.push(data);
            }
            i++;
          });
        }
        else {
          $scope.finalStatesArray = [];
        }
      });
    } else {
      $scope.finalStatesArray = [];
    }
  }

  $scope.checkIfEmpty = function () {
    return $scope.statesNewArray.length === 0;
    $scope.finalStatesArray = [];
  }

  $scope.emptyArray = function () {
    $scope.finalStatesArray = [];
  }
  $scope.emptyNewRegions = function () {
    $scope.newRegions = [];
    $scope.selectedServiceUnitsArray = [];
    $scope.finalServiceUnitsArray = [];
    $scope.selectedSubdivisionArray = [];
    $scope.finalSubDivisionsArray = [];
    //uncheck radio buttons
    $scope.uncheckAllRadioButtons();
  }
  $scope.uncheckAllRadioButtons = function () {
    angular.forEach($scope.regions, function (val, l) {
      document.getElementById(val.regionId).checked = false;
    });
    document.getElementById("4321").checked = false;
  }
  $scope.emptySelectedServiceUnitsArray = function () {
    $scope.selectedServiceUnitsArray = [];
    $scope.finalSubDivisionsArray = [];
    $scope.selectedSubdivisionArray = [];
  }
  $scope.emptySelectedSubdivisionArray = function () {
    $scope.selectedSubdivisionArray = [];
  }
  // angular.extend(this, $controller('myCalendarCtrl', {$scope: $scope}));
  $scope.model1 = {
    startDate: new Date(),
    endDate: new Date()
  }
  //radio button
  $scope.radioChanged = function (item) {

    if (item && item.regionName) {
      //disable other things
      angular.forEach($scope.regions, function (value, index) {
        if (value) {
          if (value.regionName && value.regionName === item.regionName) {
            $scope.newRegions = [];
            value.ticked = true;
            $scope.newRegions.push(value);
            $scope.generateServiceUnits(false);
          }
          value.ticked = false;
        }
      });
      item.ticked = true;
    } else if (item && item.toLowerCase() == 'all') {
      angular.forEach($scope.regions, function (value, index) {
        if (value) {
          $scope.newRegions = [];
          value.ticked = true;
          $scope.newRegions.push(value);
          $scope.generateServiceUnits(true);
        }
      });
    }
  };

  //Service UNits
  $scope.finalServiceUnitsArray = [];
  $scope.selectedServiceUnitsArray = [];
  $scope.selectedSubdivisionsArray = [];

  $scope.generateServiceUnits = function (val) {
    $scope.finalServiceUnitsArray=[];
    $scope.selectedServiceUnitsArray=[];
    $scope.finalSubDivisionsArray=[];
    $scope.selectedSubdivisionArray=[];
    $scope.emptySelectedServiceUnitsArray();
    if (!val) {
      $scope.fillServiceUnitsArray($scope.newRegions);
    } else {
      $scope.fillServiceUnitsArray($scope.regions);
    }
  }

  $scope.fillServiceUnitsArray = function (inputArray) {
    var isRadioSelected = false;
    if (inputArray && inputArray.length) {
      //check 'all' radio button
      if (inputArray.length === $scope.regions.length) {
        document.getElementById("4321").checked = true;
        isRadioSelected = true;
      }
      angular.forEach(inputArray, function (item, index) {
        //item.selected=item.regionName;//set radio button
        if (!isRadioSelected) {
          document.getElementById(item.regionId).checked = true;
        }
        if (item.serviceUnits && item.serviceUnits.length) {
          var i = 0;
          angular.forEach(item.serviceUnits, function (data, i) {
            if (!$scope.finalServiceUnitsArray.some(x => x.serviceUnitName === data.serviceUnitName)) {
              $scope.finalServiceUnitsArray.push(data);
            }
            i++;
          });
        }
        else {
          $scope.uncheckRadioButtons();
          $scope.finalServiceUnitsArray = [];
        }
      });
    } else {
      //uncheck radio butons
      $scope.uncheckRadioButtons();
      $scope.finalServiceUnitsArray = [];
    }
    if($scope.finalServiceUnitsArray && $scope.finalServiceUnitsArray.length){
      angular.forEach($scope.finalServiceUnitsArray,function(item ,j){
       item.ticked=false;
      })
    }
  }
  $scope.uncheckRadioButtons = function () {
    angular.forEach($scope.regions, function (reg, j) {
      document.getElementById(reg.regionId).checked = false;
    })
  }
  //sub divisions
  $scope.finalSubDivisionsArray = [];
  $scope.generateSubdivisions = function (val) {
   // $scope.finalSubDivisionsArray = [];
    if (!val) {
      $scope.fillSubdivisonArray($scope.selectedServiceUnitsArray);
    } else {
      $scope.fillSubdivisonArray($scope.finalServiceUnitsArray);
    }
  }
  $scope.fillSubdivisonArray = function (inputArray) {
    if (inputArray && inputArray.length) {
      angular.forEach(inputArray, function (item, index) {
        if (item.subDivisions && item.subDivisions.length) {
          var i = 0;
          angular.forEach(item.subDivisions, function (data, i) {
            if (!$scope.finalSubDivisionsArray.some(x => x.subDivisionName == data.subDivisionName)) {
              $scope.finalSubDivisionsArray.push(data);
            }
            i++;
          });
        }
        else {
          $scope.finalSubDivisionsArray = [];
        }
      });
    } else {
      $scope.finalSubDivisionsArray = [];
    }

  }


  $scope.finalData = {
    startDate: $scope.model1.startDate,
    endDate: $scope.model1.endDate,
    regionIds: [],
    serviceUnitIds: [],
    subDivisionIds: []
  }
  $scope.insertData = function () {
    // $scope.finalData.startDate=$scope.model1.startDate;
    // $scope.finalData.endDateDate=$scope.model1.endDate;
    if ($scope.newRegions && $scope.newRegions.length) {
      angular.forEach($scope.newRegions, function (reg, l) {
        if (reg.ticked) {
          if (!$scope.finalData.regionIds.length || !$scope.finalData.regionIds.includes(reg.regionId))
            $scope.finalData.regionIds.push(reg.regionId);
        }
      })
    }
    if ($scope.selectedServiceUnitsArray && $scope.selectedServiceUnitsArray.length) {
      angular.forEach($scope.selectedServiceUnitsArray, function (reg, l) {
        if (reg.ticked) {
          if (!$scope.finalData.serviceUnitIds.length || !$scope.finalData.serviceUnitIds.includes(reg.serviceUnitId))
            $scope.finalData.serviceUnitIds.push(reg.serviceUnitId);
        }
      })
    }
    if ($scope.selectedSubdivisionArray && $scope.selectedSubdivisionArray.length) {
      angular.forEach($scope.selectedSubdivisionArray, function (reg, l) {
        if (reg.ticked) {
          if (!$scope.finalData.subDivisionIds.length || !$scope.finalData.subDivisionIds.includes(reg.subDivisionId))
            $scope.finalData.subDivisionIds.push(reg.subDivisionId);
        }
      })
    }
    console.log($scope.finalData);
  }
  $scope.resetForm = function () {

    $scope.newRegions = [];
    $scope.selectedServiceUnitsArray = [];
    $scope.finalServiceUnitsArray = [];
    $scope.selectedSubdivisionArray = [];
    $scope.finalSubDivisionsArray = [];
    $scope.model1.startDate = new Date();
    $scope.model1.endDate = new Date();
    $scope.finalData = {
      startDate: new Date(),
      endDate: new Date(),
      regionIds: [],
      serviceUnitIds: [],
      subDivisionIds: []
    }
    // $scope.$broadcast('md-calendar-change', new Date());
    //uncheck radio buttons
    $scope.uncheckAllRadioButtons();
    angular.forEach($scope.regions, function (val, l) {
      if (val && val.ticked) {
        val.ticked = false;
      }
    })
  }

  $scope.isDisabled=function(){
    if(!$scope.newRegions || !$scope.newRegions.length)
    return true;
  }
}]);
