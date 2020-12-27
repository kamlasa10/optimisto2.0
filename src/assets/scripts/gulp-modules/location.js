@@include('./libs.js');

(function ($) {
  (function () {
    const screanHeight = document.documentElement.clientHeight
    $('.location__map').css('height', (screanHeight - 140 - $('.location__content').height() - 68) + 'px')
    let map = new google.maps.Map(document.querySelector(".location__map"), {
      center: { lat: 50.3614947, lng: 30.4100788 },
      zoom: 12,
      styles: [
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#6600ff"
            },
            {
              "saturation": -11
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "33"
            },
            {
              "hue": "#6600ff"
            },
            {
              "lightness": "2"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.medical",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-58"
            },
            {
              "lightness": "28"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#5e00ff"
            },
            {
              "saturation": -79
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "lightness": 30
            },
            {
              "weight": 1.3
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "hue": "#5e00ff"
            },
            {
              "saturation": -16
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -72
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -65
            },
            {
              "hue": "#1900ff"
            },
            {
              "lightness": 8
            }
          ]
        }
      ],
      disableDefaultUI: false
    })

    new google.maps.Marker({
      position: { lat: 50.345980, lng: 30.421371 },
      map,
      icon: './assets/images/marker-building.svg'
    });
  })()

  if(document.documentElement.clientWidth <= 480) {
    $('.location__content').append($('.location__btn'))
  }
})(jQuery);