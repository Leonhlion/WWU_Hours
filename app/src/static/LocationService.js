(function(){
  'use strict';

  angular.module('static')
         .service('locationService', ['$q', LocationService]);

  /**
   * Retail DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
    
  function LocationService($q){
    var location = [
      /* -------------------------------  Retail Hours  ------------------------------- */
      {
        name: 'Retail',
        category: 'Filter',
        notes: ''
      },      
      {
        name: 'Dining',
        category: 'Filter',
        notes: ''
      },      
      {
        name: 'Academic',
        category: 'Filter',
        notes: ''
      },
      {
        name: 'VU Cafe',
        label: 'VU Cafe',
        abbreviation: 'VUC',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1900',
        tue_open: '0730', tue_close: '1900',
        wed_open: '0730', wed_close: '1900',
        thu_open: '0730', thu_close: '1900',
        fri_open: '0730', fri_close: '1900',
        sat_open: '0900', sat_close: '1300',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'VU Market',
        label: 'VU Market',
        abbreviation: 'VUM',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1900',
        tue_open: '0730', tue_close: '1900',
        wed_open: '0730', wed_close: '1900',
        thu_open: '0730', thu_close: '1900',
        fri_open: '0730', fri_close: '1900',
        sat_open: '1100', sat_close: '1900',
        sun_open: '1100', sun_close: '1900'
      },
      {
        name: 'VU Subway',
        label: 'VU Subway',
        abbreviation: 'VUS',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1900',
        tue_open: '0730', tue_close: '1900',
        wed_open: '0730', wed_close: '1900',
        thu_open: '0730', thu_close: '1900',
        fri_open: '0730', fri_close: '1900',
        sat_open: '1100', sat_close: '1900',
        sun_open: '1100', sun_close: '1900'
      },
      {
        name: 'Panda Express',
        label: 'VU Panda Express',
        abbreviation: 'VUPE',
        category: 'Retail',
        notes: '',
        mon_open: '1030', mon_close: '1900',
        tue_open: '1030', tue_close: '1900',
        wed_open: '1030', wed_close: '1900',
        thu_open: '1030', thu_close: '1900',
        fri_open: '1030', fri_close: '1900',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'The Underground',
        label: 'The Underground',
        abbreviation: 'TU',
        category: 'Retail',
        notes: '',
        mon_open: '0900', mon_close: '2200',
        tue_open: '0900', tue_close: '2200',
        wed_open: '0900', wed_close: '2200',
        thu_open: '0900', thu_close: '2200',
        fri_open: '0900', fri_close: '2000',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Miller Market',
        label: 'Miller Market',
        abbreviation: 'MM',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1800',
        tue_open: '0730', tue_close: '1800',
        wed_open: '0730', wed_close: '1800',
        thu_open: '0730', thu_close: '1800',
        fri_open: '0730', fri_close: '1700',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Zoes Bookside Bagel',
        label: 'Zoes Bookside Bagel',
        abbreviation: 'ZBB',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '2300',
        tue_open: '0730', tue_close: '2300',
        wed_open: '0730', wed_close: '2300',
        thu_open: '0730', thu_close: '2300',
        fri_open: '0900', fri_close: '1700',
        sat_open: '1100', sat_close: '1700',
        sun_open: '1200', sun_close: '2300'
      },
      {
        name: 'Rocks Edge Cafe',
        label: 'Rocks Edge Cafe',
        abbreviation: 'REC',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '2000',
        tue_open: '0730', tue_close: '2000',
        wed_open: '0730', wed_close: '2000',
        thu_open: '0730', thu_close: '2000',
        fri_open: '0730', fri_close: '1700',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Atrium POD Market',
        label: 'Atrium POD Market',
        abbreviation: 'APODM',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1800',
        tue_open: '0730', tue_close: '1800',
        wed_open: '0730', wed_close: '1800',
        thu_open: '0730', thu_close: '1800',
        fri_open: '0730', fri_close: '1630',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Starbucks',
        label: 'Atrium Starbucks',
        abbreviation: 'ASB',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1800',
        tue_open: '0730', tue_close: '1800',
        wed_open: '0730', wed_close: '1800',
        thu_open: '0730', thu_close: '1800',
        fri_open: '0730', fri_close: '1630',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Topios',
        label: 'Atrium Topios',
        abbreviation: 'AT',
        category: 'Retail',
        notes: '',
        mon_open: '1030', mon_close: '1700',
        tue_open: '1030', tue_close: '1700',
        wed_open: '1030', wed_close: '1700',
        thu_open: '1030', thu_close: '1700',
        fri_open: '1030', fri_close: '1430',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Subway',
        label: 'Atrium Subway',
        abbreviation: 'ASU',
        category: 'Retail',
        notes: '',
        mon_open: '0730', mon_close: '1700',
        tue_open: '0730', tue_close: '1700',
        wed_open: '0730', wed_close: '1700',
        thu_open: '0730', thu_close: '1700',
        fri_open: '0730', fri_close: '1430',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'BT Station',
        label: 'BT Station',
        abbreviation: 'BTS',
        category: 'Retail',
        notes: '',
        mon_open: '1100', mon_close: '2300',
        tue_open: '1100', tue_close: '2300',
        wed_open: '1100', wed_close: '2300',
        thu_open: '1100', thu_close: '2300',
        fri_open: '1100', fri_close: '1700',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Fairhaven POD Market',
        label: 'The Haven',
        abbreviation: 'TH',
        category: 'Retail',
        notes: '',
        mon_open: '1000', mon_close: '2300',
        tue_open: '1000', tue_close: '2300',
        wed_open: '1000', wed_close: '2300',
        thu_open: '1000', thu_close: '2300',
        fri_open: '1000', fri_close: '1700',
        sat_open: '1400', sat_close: '2000',
        sun_open: '1800', sun_close: '2300'
      },
      /* -------------------------------  Dining Hours  ------------------------------- */
      {
        name: 'Fairhaven: Breakfast',
        label: 'Fairhaven Commons Breakfast',
        abbreviation: 'FCBF',
        category: 'Dining',
        notes: '',
        mon_open: '0700', mon_close: '1100',
        tue_open: '0700', tue_close: '1100',
        wed_open: '0700', wed_close: '1100',
        thu_open: '0700', thu_close: '1100',
        fri_open: '0700', fri_close: '1100',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Fairhaven: Brunch',
        label: 'Fairhaven Commons Brunch',
        abbreviation: 'FCBR',
        category: 'Dining',
        notes: '',
        mon_open: 'Closed', mon_close: 'Closed',
        tue_open: 'Closed', tue_close: 'Closed',
        wed_open: 'Closed', wed_close: 'Closed',
        thu_open: 'Closed', thu_close: 'Closed',
        fri_open: 'Closed', fri_close: 'Closed',
        sat_open: '1000', sat_close: '1330',
        sun_open: '1000', sun_close: '1330'
      },
      {
        name: 'Fairhaven: Lunch',
        label: 'Fairhaven Commons Lunch',
        abbreviation: 'FCLU',
        category: 'Dining',
        notes: '',
        mon_open: '1100', mon_close: '1330',
        tue_open: '1100', tue_close: '1330',
        wed_open: '1100', wed_close: '1330',
        thu_open: '1100', thu_close: '1330',
        fri_open: '1100', fri_close: '1330',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Fairhaven: Dinner',
        label: 'Fairhaven Commons Dinner',
        abbreviation: 'FCDI',
        category: 'Dining',
        notes: '',
        mon_open: '1700', mon_close: '1900',
        tue_open: '1700', tue_close: '1900',
        wed_open: '1700', wed_close: '1900',
        thu_open: '1700', thu_close: '1900',
        fri_open: '1700', fri_close: '1830',
        sat_open: '1700', sat_close: '1830',
        sun_open: '1700', sun_close: '1830'
      },
      {
        name: 'Fairhaven: Late Night',
        label: 'Fairhaven Commons Late Night',
        abbreviation: 'FCLN',
        category: 'Dining',
        notes: '',
        mon_open: '2130', mon_close: '2300',
        tue_open: '2130', tue_close: '2300',
        wed_open: '2130', wed_close: '2300',
        thu_open: '2130', thu_close: '2300',
        fri_open: '2030', fri_close: '2200',
        sat_open: '2030', sat_close: '2200',
        sun_open: '2130', sun_close: '2300'
      },
      {
        name: 'Ridgeway: Breakfast',
        label: 'Ridgeway Commons Breakfast',
        abbreviation: 'RCBF',
        category: 'Dining',
        notes: '',
        mon_open: '0700', mon_close: '1100',
        tue_open: '0700', tue_close: '1100',
        wed_open: '0700', wed_close: '1100',
        thu_open: '0700', thu_close: '1100',
        fri_open: '0700', fri_close: '1130',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Ridgeway: Brunch',
        label: 'Ridgeway Commons Brunch',
        abbreviation: 'RCBR',
        category: 'Dining',
        notes: '',
        mon_open: 'Closed', mon_close: 'Closed',
        tue_open: 'Closed', tue_close: 'Closed',
        wed_open: 'Closed', wed_close: 'Closed',
        thu_open: 'Closed', thu_close: 'Closed',
        fri_open: 'Closed', fri_close: 'Closed',
        sat_open: '1000', sat_close: '1330',
        sun_open: '1000', sun_close: '1330'
      },
      {
        name: 'Ridgeway: Lunch',
        label: 'Ridgeway Commons Lunch',
        abbreviation: 'RCLU',
        category: 'Dining',
        notes: '',
        mon_open: '1100', mon_close: '1330',
        tue_open: '1100', tue_close: '1330',
        wed_open: '1100', wed_close: '1330',
        thu_open: '1100', thu_close: '1330',
        fri_open: '1100', fri_close: '1330',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Ridgeway:Dinner',
        label: 'Ridgeway Commons Dinner',
        abbreviation: 'RCDI',
        category: 'Dining',
        notes: '',
        mon_open: '1700', mon_close: '1900',
        tue_open: '1700', tue_close: '1900',
        wed_open: '1700', wed_close: '1900',
        thu_open: '1700', thu_close: '1900',
        fri_open: '1700', fri_close: '1830',
        sat_open: '1700', sat_close: '1830',
        sun_open: '1700', sun_close: '1830'
      },
      {
        name: 'Ridgeway: Late Night',
        label: 'Ridgeway Commons Late Night',
        abbreviation: 'RCLN',
        category: 'Dining',
        notes: '',
        mon_open: '2130', mon_close: '2300',
        tue_open: '2130', tue_close: '2300',
        wed_open: '2130', wed_close: '2300',
        thu_open: '2130', thu_close: '2300',
        fri_open: '2030', fri_close: '2200',
        sat_open: '2030', sat_close: '2200',
        sun_open: '2130', sun_close: '2300'
      },
      {
        name: 'Viking Commons: Breakfast',
        label: 'Viking Commons Breakfast',
        abbreviation: 'VCBF',
        category: 'Dining',
        notes: '',
        mon_open: '0700', mon_close: '1100',
        tue_open: '0700', tue_close: '1100',
        wed_open: '0700', wed_close: '1100',
        thu_open: '0700', thu_close: '1100',
        fri_open: '0700', fri_close: '1100',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Viking Commons: Brunch',
        label: 'Viking Commons Brunch',
        abbreviation: 'VCBR',
        category: 'Dining',
        notes: '',
        mon_open: 'Closed', mon_close: 'Closed',
        tue_open: 'Closed', tue_close: 'Closed',
        wed_open: 'Closed', wed_close: 'Closed',
        thu_open: 'Closed', thu_close: 'Closed',
        fri_open: 'Closed', fri_close: 'Closed',
        sat_open: '1000', sat_close: '1330',
        sun_open: '1000', sun_close: '1330'
      },
      {
        name: 'Viking Commons: Lunch',
        label: 'Viking Commons Lunch',
        abbreviation: 'VCLU',
        category: 'Dining',
        notes: '',
        mon_open: '1100', mon_close: '1330',
        tue_open: '1100', tue_close: '1330',
        wed_open: '1100', wed_close: '1330',
        thu_open: '1100', thu_close: '1330',
        fri_open: '1100', fri_close: '1330',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
      {
        name: 'Viking Commons: Dinner',
        label: 'Viking Commons Dinner',
        abbreviation: 'VCDI',
        category: 'Dining',
        notes: '',
        mon_open: '1700', mon_close: '1900',
        tue_open: '1700', tue_close: '1900',
        wed_open: '1700', wed_close: '1900',
        thu_open: '1700', thu_close: '1900',
        fri_open: '1700', fri_close: '1830',
        sat_open: '1700', sat_close: '1830',
        sun_open: '1700', sun_close: '1830'
      },
      {
        name: 'Viking Commons: Late Night',
        label: 'Viking Commons Late Night',
        abbreviation: 'VCLN',
        category: 'Dining',
        notes: '',
        mon_open: '2100', mon_close: '2230',
        tue_open: '2100', tue_close: '2230',
        wed_open: '2100', wed_close: '2230',
        thu_open: '2100', thu_close: '2230',
        fri_open: '2030', fri_close: '2200',
        sat_open: '2030', sat_close: '2200',
        sun_open: '2100', sun_close: '2230'
      },
      /* -------------------------------  Academic Hours  ------------------------------- */
      {
        name: 'Communications Facility',
        label: 'Communications Facility',
        abbreviation: 'CF',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0700', sat_close: '2300',
        sun_open: '0700', sun_close: '1700'
      },

     {
        name: 'Art Annex',
        label: 'Art Annex',
        abbreviation: 'AA',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0800', sat_close: '1700',
        sun_open: '0800', sun_close: '2300'
      },


     {
        name: 'Artzen Hall',
        label: 'Artzen Hall',
        abbreviation: 'AH',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0700', sat_close: '2300',
        sun_open: '0700', sun_close: '2300'
      },

     {
        name: 'Academic Instruction East',
        label: 'Academic East',
        abbreviation: 'AE',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2000',
        tue_open: '0700', tue_close: '2000',
        wed_open: '0700', wed_close: '2000',
        thu_open: '0700', thu_close: '2000',
        fri_open: '0700', fri_close: '2000',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

     {
        name: 'Academic Instruction West',
        label: 'Academic West',
        abbreviation: 'AW',
        category: 'Academic',
        notes: 'North door open until 2300',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '1700',
        sat_open: '0800', sat_close: '1700',
        sun_open: '0800', sun_close: '1700'
      },

     {
        name: 'Bond Hall',
        label: 'Bond Hall',
        abbreviation: 'BH',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0700', sat_close: '2300',
        sun_open: '0700', sun_close: '2300'
      },

     {
        name: 'Biology Building',
        label: 'Biology Building',
        abbreviation: 'BH',
        category: 'Academic',
        notes: 'East Doors',
        mon_open: '0700', mon_close: '2100',
        tue_open: '0700', tue_close: '2100',
        wed_open: '0700', wed_close: '2100',
        thu_open: '0700', thu_close: '2100',
        fri_open: '0700', fri_close: '1800',
        sat_open: '0800', sat_close: '2000',
        sun_open: '0800', sun_close: '2000'
      },

     {
        name: 'Canada House',
        label: 'Canada House',
        abbreviation: 'CH',
        category: 'Academic',
        notes: '',
        mon_open: '0800', mon_close: '1700',
        tue_open: '0800', tue_close: '1700',
        wed_open: '0800', wed_close: '1700',
        thu_open: '0800', thu_close: '1700',
        fri_open: '0700', fri_close: '1800',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },
        /* This is actually Morse Hall tbh*/
     {
        name: 'Chemistry Building',
        label: 'Chemistry Building',
        abbreviation: 'CB',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2100',
        tue_open: '0700', tue_close: '2100',
        wed_open: '0700', wed_close: '2100',
        thu_open: '0700', thu_close: '2100',
        fri_open: '0700', fri_close: '1700',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

        /* What is category label for Carver Gym */
     {
        name: 'Carver Gym',
        label: 'Carver Gym',
        abbreviation: 'CG',
        category: 'Academic',
        notes: 'Closed for renovation',
        mon_open: 'Closed', mon_close: 'Closed',
        tue_open: 'Closed', tue_close: 'Closed',
        wed_open: 'Closed', wed_close: 'Closed',
        thu_open: 'Closed', thu_close: 'Closed',
        fri_open: 'Closed', fri_close: 'Closed',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

     {
        name: 'Environmental Science Center',
        label: 'Environmental Science Center',
        abbreviation: 'ES',
        category: 'Academic',
        notes: 'North & South doors',
        mon_open: '0700', mon_close: '2130',
        tue_open: '0700', tue_close: '2130',
        wed_open: '0700', wed_close: '2130',
        thu_open: '0700', thu_close: '2130',
        fri_open: '0700', fri_close: '2130',
        sat_open: '0700', sat_close: '1800',
        sun_open: '0730', sun_close: '2300'
      },

     {
        name: 'Engineering Technology',
        label: 'Engineering Technology',
        abbreviation: 'ET',
        category: 'Academic',
        notes: 'Including East gate',
        mon_open: '0700', mon_close: '2100',
        tue_open: '0700', tue_close: '2100',
        wed_open: '0700', wed_close: '2100',
        thu_open: '0700', thu_close: '2100',
        fri_open: '0700', fri_close: '1800',
        sat_open: '0700', sat_close: '1800',
        sun_open: '0700', sun_close: '1800'
      },

    {
        name: 'Fine Arts',
        label: 'Fine Arts',
        abbreviation: 'FA',
        category: 'Academic',
        notes: 'Main West doors',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0800', sat_close: '1700',
        sun_open: '0800', sun_close: '1700'
      },

    {
        name: 'Fraser Hall',
        label: 'Fraser Hall',
        abbreviation: 'FH',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '1900',
        tue_open: '0700', tue_close: '1900',
        wed_open: '0700', wed_close: '1900',
        thu_open: '0700', thu_close: '1900',
        fri_open: '0700', fri_close: '1900',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

    {
        name: 'Humanities Building',
        label: 'Humanities Building',
        abbreviation: 'HB',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '1900',
        tue_open: '0700', tue_close: '1900',
        wed_open: '0700', wed_close: '1900',
        thu_open: '0700', thu_close: '1900',
        fri_open: '0700', fri_close: '1900',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

    {
        name: 'Miller Hall',
        label: 'Miller Hall',
        abbreviation: 'MH',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2100',
        tue_open: '0700', tue_close: '2100',
        wed_open: '0700', wed_close: '2100',
        thu_open: '0700', thu_close: '2100',
        fri_open: '0700', fri_close: '2100',
        sat_open: '0700', sat_close: '1700',
        sun_open: '0730', sun_close: '2300'
      },

    {
        name: 'Old Main',
        label: 'Old Main',
        abbreviation: 'OM',
        category: 'Academic',
        notes: '',
        mon_open: '0630', mon_close: '1800',
        tue_open: '0630', tue_close: '1800',
        wed_open: '0630', wed_close: '1800',
        thu_open: '0630', thu_close: '1800',
        fri_open: '0630', fri_close: '1800',
        sat_open: 'Closed', sat_close: 'Closed',
        sun_open: 'Closed', sun_close: 'Closed'
      },

    {
        name: 'Performing Arts Center',
        label: 'Performing Arts Center',
        abbreviation: 'PAC',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '2300',
        sat_open: '0700', sat_close: '2300',
        sun_open: '0700', sun_close: '2300'
      },
    {
        name: 'Parks Hall',
        label: 'Parks Hall',
        abbreviation: 'PH',
        category: 'Academic',
        notes: '',
        mon_open: '0700', mon_close: '2300',
        tue_open: '0700', tue_close: '2300',
        wed_open: '0700', wed_close: '2300',
        thu_open: '0700', thu_close: '2300',
        fri_open: '0700', fri_close: '1830',
        sat_open: '0800', sat_close: '2100',
        sun_open: '0800', sun_close: '2100'
      },

    {
        name: 'SMATE',
        label: 'SMATE',
        abbreviation: 'SMATE',
        category: 'Academic',
        notes: '',
        mon_open: '0630', mon_close: '1800',
        tue_open: '0630', tue_close: '1800',
        wed_open: '0630', wed_close: '1800',
        thu_open: '0630', thu_close: '1800',
        fri_open: '0630', fri_close: '1800',
        sat_open: '1000', sat_close: '1500',
        sun_open: 'Closed', sun_close: 'Closed'
      },

    {
        name: 'Wilson Library',
        label: 'Wilson Library',
        abbreviation: 'WL',
        category: 'Academic',
        notes: '',
        mon_open: '0730', mon_close: '2400',
        tue_open: '0730', tue_close: '2400',
        wed_open: '0730', wed_close: '2400',
        thu_open: '0730', thu_close: '2400',
        fri_open: '0730', fri_close: '2400',
        sat_open: '1000', sat_close: '1800',
        sun_open: '1200', sun_close: '2400'
      },

      /* -------------------------------  Rec Hours  ------------------------------- */
      {
        name: 'Gym',
        label: 'Rec Gym',
        abbreviation: 'RG',
        category: 'Rec',
        notes: '',
        mon_open: '0600', mon_close: '2400',
        tue_open: '0600', tue_close: '2400',
        wed_open: '0600', wed_close: '2400',
        thu_open: '0600', thu_close: '2400',
        fri_open: '0600', fri_close: '2200',
        sat_open: '0600', sat_close: '2000',
        sun_open: '1000', sun_close: '2100'
      },
      {
        name: 'Pool',
        label: 'Rec Pool',
        abbreviation: 'RP',
        category: 'Rec',
        notes: '',
        mon_open: '0600', mon_close: '2200',
        tue_open: '0600', tue_close: '2200',
        wed_open: '0600', wed_close: '2200',
        thu_open: '0600', thu_close: '2200',
        fri_open: '0630', fri_close: '2100',
        sat_open: '0630', sat_close: '1900',
        sun_open: '1030', sun_close: '2000'
      },
      {
        name: 'Climbing Wall',
        label: 'Rec Climbing Wall',
        abbreviation: 'RCW',
        category: 'Rec',
        notes: '',
        mon_open: '1100', mon_close: '2200',
        tue_open: '1100', tue_close: '2200',
        wed_open: '1100', wed_close: '2200',
        thu_open: '1100', thu_close: '2200',
        fri_open: '1100', fri_close: '2100',
        sat_open: '1100', sat_close: '1900',
        sun_open: '1100', sun_close: '2000'
      }
    ];

    // Promise-based API
    return {
      loadAllLocation : function() {
        return $q.when(location);
      }
    };
  }

})();
