angular
  .module('starterApp', ['ngMaterial', 'static'])
  .config(function($mdThemingProvider, $mdIconProvider){

      $mdIconProvider
          .defaultIconSet("./assets/svg/avatars.svg", 128)
          .icon("menu"       , "./assets/svg/menu.svg"        , 24)
          .icon("share"      , "./assets/svg/share.svg"       , 24)
          .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
          .icon("phone"      , "./assets/svg/phone.svg"       , 512);

            var customPrimary = {
                '50': '#077bff',
                '100': '#006fed',
                '200': '#0063d3',
                '300': '#0057ba',
                '400': '#004ba0',
                '500': '#003F87',
                '600': '#00336d',
                '700': '#002754',
                '800': '#001b3a',
                '900': '#000f21',
                'A100': '#2189ff',
                'A200': '#3a96ff',
                'A400': '#54a4ff',
                'A700': '#000307'
            };
            $mdThemingProvider
                .definePalette('customPrimary',
                                customPrimary);

            var customAccent = {
                '50': '#00253d',
                '100': '#003556',
                '200': '#004570',
                '300': '#005489',
                '400': '#0064a3',
                '500': '#0073bc',
                '600': '#0093ef',
                '700': '#0aa0ff',
                '800': '#23aaff',
                '900': '#3db4ff',
                'A100': '#0093ef',
                'A200': '#0083D6',
                'A400': '#0073bc',
                'A700': '#56beff'
            };
            $mdThemingProvider
                .definePalette('customAccent',
                                customAccent);

            var customWarn = {
                '50': '#e79293',
                '100': '#e27d7f',
                '200': '#de686a',
                '300': '#d95355',
                '400': '#d43e41',
                '500': '#CC2D30',
                '600': '#b7282b',
                '700': '#a22426',
                '800': '#8d1f21',
                '900': '#781b1c',
                'A100': '#eba7a8',
                'A200': '#f0bbbc',
                'A400': '#f5d0d1',
                'A700': '#641617'
            };
            $mdThemingProvider
                .definePalette('customWarn',
                                customWarn);

            var customBackground = {
                '50': '#737373',
                '100': '#666666',
                '200': '#595959',
                '300': '#4d4d4d',
                '400': '#404040',
                '500': '#333',
                '600': '#262626',
                '700': '#1a1a1a',
                '800': '#0d0d0d',
                '900': '#000000',
                'A100': '#808080',
                'A200': '#8c8c8c',
                'A400': '#999999',
                'A700': '#000000'
            };
            $mdThemingProvider
                .definePalette('customBackground',
                                customBackground);

          $mdThemingProvider.theme('default')
              .primaryPalette('customPrimary')
              .accentPalette('customAccent');
  });
