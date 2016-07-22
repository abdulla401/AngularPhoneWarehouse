;(function () {
    'use strict';
    angular.module('backuprestore-time-duration.directive', [])
        .directive('timeDuration', [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'js/components/timedurationpicker/time-duration.tpl.html',
                    require: 'ngModel',
                    transclude: true,
                    scope: {
                        label: '@',
                        ngModel: '=',
                        displayOnly: '=',
                    },
                    link: function ($scope, $ele, $attrs, $ngModel) {

                        //if (typeof $scope.ngModel.from !== 'undefined') {
                        //    var d1 = new Date();
                        //    d1.setHours($scope.ngModel.from.split(':')[0]);
                        //    d1.setMinutes($scope.ngModel.from.split(':')[1]);
                        //    $scope.fromTime = d1;
                        //    var d2 = new Date();
                        //    d2.setHours($scope.ngModel.to.split(':')[0]);
                        //    d2.setMinutes($scope.ngModel.to.split(':')[1]);
                        //    $scope.toTime = d2;
                        //
                        //    $scope.selectedDay = $scope.ngModel.day;
                        //}
                        var d = moment('2014-06-01T00:00:00Z');
                        $scope.timezones = _.map(moment.tz.names(), function(t) {return t + '--' + d.tz(t).format('ha z');})

                        $scope.exclusions = [];

                        $scope.timePeriodValueValid = false;
                        $scope.timePeriodValue = {};

                        $scope.addDuration = function () {
                            $scope.exclusions.push($scope.timePeriodValue);
                            $scope.initTimePickers();
                            $ngModel.$setViewValue($scope.exclusions);
                        }

                        $scope.remove = function(exclusion){
                            $scope.exclusions.splice(exclusion,1);
                        }
                        $ngModel.$render = function(){
                            console.log($scope.ngModel);
                            $scope.initTimePickers();
                            $scope.exclusions = $scope.ngModel || [];
                        };


                        $scope.$watch('ngModel', function() {
                             $ngModel.$render();
                        });

                        $scope.initTimePickers = function() {
                            var d = new Date();
                            d.setHours(0,0,0,0);
                            $scope.fromTime = d;
                            $scope.toTime = d;
                            $scope.selectedDay = undefined;
                            $scope.timezone = $scope.timezones[0];
                            $scope.timePeriodValueValid = true;
                            $scope.timePeriodValue = {};
                           // $ngModel.$setValidity('invalid-data', false);
                        };

                        //$scope.dayOptions = [{id: 1, label: 'Monday'}, {id: 2, label: 'Tuesday'},
                        //    {id: 3, label: 'Wednesday'}, {id: 4, label: 'Thursday'},
                        //    {id: 5, label: 'Friday'}, {id: 6, label: 'Saturday'},
                        //    {id: 0, label: 'Sunday'}, {id: 8, label: 'All Days'}];
                        $scope.dayOptions = {
                            '1' : 'Monday' ,
                            '2' : 'Tuesday',
                            '3' : 'Wednesday',
                            '4' : 'Thursday',
                            '5' : 'Friday',
                            '6' : 'Saturday',
                            '7' : 'Sunday',
                            '8' : 'All Days',

                        }

                        //$scope.timeZones = [{id:'GMT', label: 'GMT'},
                        //                    {id:'PDT', label: 'PDT'}];

                        $scope.changed = function () {
                            var fromTime = $scope.fromTime;
                            var toTime = $scope.toTime;
                            if(fromTime < toTime && typeof $scope.selectedDay !== 'undefined'){
                                $ngModel.$setValidity('invalid-data',true );
                                $scope.timePeriodValueValid = false;
                            }else{
                                $ngModel.$setValidity('invalid-data', false);
                                $scope.timePeriodValueValid = true;
                            }
                            var from = fromTime.getHours() + ':' + fromTime.getMinutes();
                            var to = toTime.getHours() + ':' + toTime.getMinutes();
                            $scope.timePeriodValue = {'day': $scope.selectedDay, from: from, to: to, timezone: $scope.timezone};

                        };
                    }

                };
            }]);
} ());
