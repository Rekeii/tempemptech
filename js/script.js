 var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "Western Visayas"
  ],
  "datasets": [
    {
      "label": "Female",
      "backgroundColor": "#aaadff",
      "fill": true,
      "data": [
        "43.9"
      ],
      "borderColor": "#ffffff",
      "borderWidth": "1"
    },
    {
      "label": "Male",
      "backgroundColor": "#407aaa",
      "fill": true,
      "data": [
        "54.1"
      ]
    },
    {
      "label": "",
      "backgroundColor": "",
      "fill": true,
      "data": []
    }
  ]
};
    var options = {
  "title": {
    "display": true,
    "text": "Bullying Statistics in the Philippines",
    "position": "bottom",
    "fullWidth": true,
    "fontColor": "#aa7942",
    "fontSize": 16
  },
  "legend": {
    "display": true,
    "fullWidth": true,
    "position": "top"
  },
  "scales": {
    "yAxes": [
      {
        "ticks": {
          "beginAtZero": true,
          "display": true
        },
        "gridLines": {
          "display": true,
          "lineWidth": 2,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickMarkLength": 1,
          "offsetGridLines": true,
          "zeroLineColor": "#942192",
          "color": "#d6d6d6",
          "zeroLineWidth": 2
        },
        "scaleLabel": {
          "display": true,
          "labelString": "USD in Millions"
        },
        "display": true
      }
    ],
    "xAxes": {
      "0": {
        "ticks": {
          "display": true,
          "fontSize": 14,
          "fontStyle": "italic"
        },
        "display": true,
        "gridLines": {
          "display": true,
          "lineWidth": 2,
          "drawOnChartArea": false,
          "drawTicks": true,
          "tickMarkLength": 12,
          "zeroLineWidth": 2,
          "offsetGridLines": true,
          "color": "#942192",
          "zeroLineColor": "#942192"
        },
        "scaleLabel": {
          "fontSize": 16,
          "display": true,
          "fontStyle": "normal"
        }
      }
    }
  },
  "tooltips": {
    "enabled": true,
    "mode": "label",
    "caretSize": 10,
    "backgroundColor": "#00fa92"
  }
};

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
                responsive: false
            }
    });



