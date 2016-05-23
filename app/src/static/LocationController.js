(function(){

  angular
       .module('static')
       .controller('LocationController', [
          'locationService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          LocationController
       ]);

  function LocationController( locationService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.location       = [ ];
    self.selectLocation   = selectLocation;
    self.startTimer   = startTimer;
    self.toggleList   = toggleLocationList;
    self.makeContact  = makeContact;

    // Load all registered users
      
    locationService
          .loadAllLocation()
          .then( function( location ) {
            self.location    = [].concat(location);
            self.selected = location[0];
          })
      ;
    /* ---------------------------------------------  Internal Methods  --------------------------------------------- */

    /** Hide or Show the 'left' sideNav area */
    function toggleLocationList() {
      $mdSidenav('left').toggle();
    }
      
    /**
     * Select the current avatars
     * @param menuId
     */
    function selectLocation ( location ) {
      self.selected = angular.isNumber(location) ? $scope.location[location] : location;
    }

    /** 
     * hideAllElements
     * Helper function for startTimer, that collapses all list items that are currently expanded.
     * 
     * Inputs:
     *      listLength: int. How many entris are in the list that is being displayed.
     *      category: String. 
     * */
      
    function hideAllElements(listLength, category) {
        for(var i = 0; i < listLength; i++){
            if(ind != i) {
                document.getElementById('timeleft' + category + '-' + i).innerHTML = "";
            }
        }
    }

    function startTimer ( elem, index , listLength, cat) {
        category = cat;
        ind = index;
        /** Collapses all list items when another is selected */
        hideAllElements(listLength, category);

        var weekday = new Array(7);
        weekday[0] = "mon";
        weekday[1] = "tue";
        weekday[2] = "wed";
        weekday[3] = "thu";
        weekday[4] = "fri";
        weekday[5] = "sat";
        weekday[6] = "sun";

        dayStr = weekday[now.getDay()];
        openingHour = elem[dayStr + "_open"].slice(0, 2);
        closingHour = elem[dayStr + "_close"].slice(0, 2);
        closingMinute = elem[dayStr + "_close"].slice(2, 4);
        currentHour = now.getHours();
        currentMinute = now.getMinutes();

        hoursRemaining;
        minutesRemaining;

        /** Handle collapsing an item if it is open and then selected again */
        var id = 'timeleft' + category + '-' + ind;
        if(prevInd == ind) {
            document.getElementById(id).innerHTML = "";
            prevInd = -1;
        } else {
            prevInd = ind;
            ticker = setInterval(tick, 100);
        }

        ///** Converts milliseconds to seconds */
       //ticker = setInterval(tick, 100);

    }

    function tick() {

        now = new Date();
        // if (secondsRemaining > 0) {
        //     secondsRemaining--;
        // } else {
        //     clearInterval(ticker); // stop counting at zero
        // }
        currentSecond = now.getSeconds();
        currentHour = now.getHours();
        currentMinute = now.getMinutes();

        /** Find number of hours remaining, or 0 if the location is closed
         *  TODO: Round so that negative numbers become 0 to eliminate the loop below
         */
        if (currentHour >= openingHour && currentHour <= closingHour) {
            hoursRemaining = closingHour - currentHour;
        } else {
            hoursRemaining = 0;
        }

        /** Find minutes remaining */
        if (currentMinute >= closingMinute) {
            minutesRemaining = (60 - (currentMinute - closingMinute));
            if (hoursRemaining > 0) hoursRemaining--;
        } else {
            minutesRemaining = closingMinute - currentMinute;
        }

        var secondsRemaining = parseInt((hoursRemaining * 60 * 60) +
        /** Converts milliseconds to seconds */ (minutesRemaining * 60));



        var hours = Math.floor(secondsRemaining/3600);
        secondsRemaining %= 3600;
        console.log(" seconds remaining " + secondsRemaining);
        var minutes = Math.floor(secondsRemaining/60);
        secondsRemaining %= 60

        console.log(secondsRemaining);
        if(secondsRemaining == 0) {
            clearInterval(ticker);
            return;
        }

        var result = '';
        var id = 'timeleft' + category + '-' + ind;
        if((currentHour == closingHour && currentMinute > closingMinute) || currentHour > closingHour || currentHour < openingHour) {
            document.getElementById(id).innerHTML = "Closed";
            document.getElementById(id).style.color = "#CC2D30";
        } else if (hours < 1) {
            result += ( (minutes < 10) ? "0" : "" ) + minutes + " minutes ";
            document.getElementById(id).innerHTML = "Closes in: " + result;
            document.getElementById(id).style.color = "#FFC61E";
        } else {
            result += ((hours < 10 ) ? "0" : "" ) + hours + " hours " + ( (minutes < 10) ? "0" : "" ) + minutes + " minutes ";
            document.getElementById(id).innerHTML = "Closes in: " + result;
        }

    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedLocation) {

        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './src/static/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.location = selectedLocation;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'}
          ];
          this.contactLocation = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
