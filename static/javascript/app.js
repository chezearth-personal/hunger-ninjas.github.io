var Results = function() {
  var self = this;

  self.init = function() {
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  $('#calculate').on("click", self.get_results);

  };

  self.get_results = function (e) {
    var group = $('input[name=group]:checked').val();
    var drought = $('input[name=drought]:checked').val();
    var income = $('input[name=income]:checked').val();
    var price = $('input[name=price]:checked').val();
    var work = $('input[name=work]:checked').val();
    var grant = $('input[name=grant]:checked').val();

    var results = TEST_DATA[group][drought]['income-1'][price][work][grant].results
    var population = POPULATION[group][drought];
    self.showResults(results, population);
  }

  self.showResults = function (results, population) {
    $('#results').css('display', 'block');
    $('#deficit').empty();
    var result = results.fd.nom;

    if (result != 0.00) {
      result = Math.round(result / 12, 0);
      $('.calc-result').css("color", "red");
    }
    else {
      $('.calc-result').css("color", "green");
    }

    $('#deficit').html('R ' + result + '.00');

    $('#population').html(population);
    $('#gov-exp').html('R ' + population * result + '.00');

  }
};


// jQuery(window).ready(function ($) {
//   $('#select').on("click", )
// });

var TEST_DATA = {
  'group-1': {
    'drought':{
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 6,
                  'nom': 75.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 12,
                  'nom': 232.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 23,
                  'nom': 437.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 22,
                  'nom': 496.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 31,
                  'nom': 701.00
                },
              },
            },
          },
        },
      },
      'income-2': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 2,
                  'nom': 340.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 1,
                  'nom': 243.00
                },
              },
            },
          },
        },
      },
    },
    'non-drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 3,
                  'nom': 60.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 14,
                  'nom': 265.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 13,
                  'nom': 304.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 22,
                  'nom': 509.00
                },
              },
            },
          },
        },
      },
    },
  },
  'group-2': {
    'drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 51,
                  'nom': 900.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 61,
                  'nom': 1063.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 18,
                  'nom': 322.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 93,
                  'nom': 1622.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 102,
                  'nom': 1784.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 52,
                  'nom': 1102.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 60,
                  'nom': 1263.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 25,
                  'nom': 530.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 86,
                  'nom': 1830.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 94,
                  'nom': 1992.00
                },
              },
            },
          },
        },
      },
    },
    'non-drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 45,
                  'nom': 794.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 55,
                  'nom': 957.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 13,
                  'nom': 225.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 87,
                  'nom': 1525.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 97,
                  'nom': 1687.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 45,
                  'nom': 953.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 53,
                  'nom': 1116.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 18,
                  'nom': 384.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 79,
                  'nom': 1684.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 87,
                  'nom': 1846.00
                },
              },
            },
          },
        },
      },
    },
  },
  'group-3': {
    'drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
              },
          },
        },
      'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 4,
                  'nom': 48.00
                },
              },
            },
          },
        },
      },
    },
    'non-drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
      },
    },
  },
  'group-4': {
    'drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1079.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1439.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1484.00
                },
              },
              },
          },
        },
        'price-2':{
            'work-1': {
              'grant-1': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 0.00
                  },
                },
              },
              'grant-2': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 0.00
                  },
                },
              },
              'grant-3': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 0.00
                  },
                },
              },
            },
            'work-2': {
              'grant-1': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 1814.00
                  },
                },
              },
              'grant-2': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 1274.00
                  },
                },
              },
              'grant-3': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 2219.00
                  },
                },
              },
            },
          },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2350.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2710.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2755.00
                },
              },
            },
          },
        },
      },
    },
    'non-drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
      },
    },
  },
  'group-5': {
    'drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 444.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1329.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1521.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 1545.00
                },
              },
              },
          },
        },
        'price-2':{
            'work-1': {
              'grant-1': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 0.00
                  },
                },
              },
              'grant-2': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 10.00
                  },
                },
              },
              'grant-3': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 34.00
                  },
                },
              },
            },
            'work-2': {
              'grant-1': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 1891.00
                  },
                },
              },
              'grant-2': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 2083.00
                  },
                },
              },
              'grant-3': {
                'results': {
                  'fd': {
                    'perc': 0,
                    'nom': 2107.00
                  },
                },
              },
            },
          },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 228.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 420.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 444.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2301.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2493.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 2517.00
                },
              },
            },
          },
        },
      },
    },
    'non-drought': {
      'income-1': {
        'price-1':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-2':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
        'price-3':{
          'work-1': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
          'work-2': {
            'grant-1': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-2': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
            'grant-3': {
              'results': {
                'fd': {
                  'perc': 0,
                  'nom': 0.00
                },
              },
            },
          },
        },
      },
    },
  }
};

var POPULATION = {
  'group-1': {
    'drought': 1079027,
    'non-drought': 898227
  },
  'group-2': {
    'drought': 163637,
    'non-drought': 214818
  },
  'group-3': {
    'drought': 1440983,
    'non-drought': 2913300
  },
  'group-4': {
    'drought': 0,
    'non-drought': 854390
  },
  'group-5': {
    'drought': 0,
    'non-drought': 3158981
  }
}

var results = new Results();
results.init();
