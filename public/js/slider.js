$(document).ready(function () {

  // Getting references to the name input and movie container, as well as the table body
  // const movieDate = $('#movie-date');
  const movieInput = $('#movie-description');
  const chosenbyInput = $('#chosenby-description');
  const commentsInput = $('#comments-description');

  // const movieList = $('tbody');
  const movieList = $("#moviesummary-table");
  const movieTotals = $('tfooter');
  // const movieContainer = $('.movie-container');
  const movieContainer = $('.moviesummary-container');
  // let movieRevTotal = 0;
  // let movieChangeLog = [];
  // let movieData = [];
  // let genreData = "";
  // let comedyCount = 0;
  // let actionCount = 0;
  // let scifiCount = 0;
  // let animalsCount = 0;
  // let seriesCount = 0;
  // let musicalCount = 0;
  let vertSlideVal1 = 1;
  let horizSlideVal1 = 1;
  let radiusSlideVal1 = 10;
  let vertSlideVal2 = 1;
  let horizSlideVal2 = 1;
  let radiusSlideVal2 = 10;
  let vertSlideVal3 = 1;
  let horizSlideVal3 = 1;
  let radiusSlideVal3 = 10;
  let vertSlideVal4 = 1;
  let horizSlideVal4 = 1;
  let radiusSlideVal4 = 10;
  
  let chart1Data = [{
    x: 1,
    y: 1
  }];

  // Adding event listeners to the form to create a new object, and the button to delete
  // an movie
  $(document).on('change', '.slider', handleSliderChange);

  // Getting the initial list of movies
  renderChart('#myScatterChart1', chart1Data, horizSlideVal1, vertSlideVal1, radiusSlideVal1);
  renderChart('#myScatterChart2', chart1Data, horizSlideVal2, vertSlideVal2, radiusSlideVal2);
  renderChart('#myScatterChart3', chart1Data, horizSlideVal3, vertSlideVal3, radiusSlideVal3);
  renderChart('#myScatterChart4', chart1Data, horizSlideVal4, vertSlideVal4, radiusSlideVal4);

  renderBubbleChart1('#BubbleChart1', chart1Data, horizSlideVal1, vertSlideVal1, radiusSlideVal1);



  $('#ex1').slider({
    formatter: function (value) {
      return 'Current value: ' + value;
    }
  });

  $(".ex1").slider({
    min: 1,
    max: 3,
    value: 1,
    tooltip_position: 'bottom',
    orientation: 'vertical',
    reversed: true,
    ticks: [1, 2, 3],
    ticks_labels: ['Temporary', 'Prolonged', 'Permanent'],
  });


  $("#q1-1").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [20, 40, 60, 80, 100],
    ticks_labels: ['Part of a Country/MU', 'Single Country/MU', 'Single Region', 'Multiple Regions', 'Global - All Regions'],
  });

  $("#q1-2").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    ticks: [20, 40, 60, 80, 100],
    ticks_labels: ['Temporary', 'Short Term', 'Prolonged', 'Long Term', 'Permanent'],
    tooltip_position: 'left'
  });

  $("#q1-3").slider({
    min: 0,
    max: 100,
    value: 10,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 20, 40, 60, 80, 100],
    ticks_labels: ['Unchanged', 'Evolutionary', 'Moderate', 'Significant', 'Major', 'Catastrophic'],
  });

  $("#q1-4").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    ticks: [25, 50, 75, 100],
    ticks_labels: ['Slow', 'Steady', 'Rapid', 'Sudden'],
    tooltip_position: 'left'
  });

  $("#q1-5").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 20, 40, 60, 80, 100],
    ticks_labels: ['Unchanged', 'Local Changes', 'Regional Changes', '0 -> 10%', '10 -> 25%', '>25%'],
  });

  // $("#ex3b").slider({
  //   min: 1,
  //   max: 5,
  //   value: 1,
  //   orientation: 'vertical',
  //   reversed: true,
  //   ticks: [1, 3, 5],
  //   ticks_labels: ['Unchanged', 'Modified', 'New'],
  //   tooltip_position: 'left'
  // });

  // $("#ex4a").slider({
  //   min: 1,
  //   max: 5,
  //   value: 1,
  //   tooltip_position: 'bottom',
  //   ticks: [1, 3, 5],
  //   ticks_labels: ['Unchanged', 'Modified', 'New'],
  // });

  // $("#ex4b").slider({
  //   min: 1,
  //   max: 5,
  //   value: 1,
  //   orientation: 'vertical',
  //   reversed: true,
  //   ticks: [1, 3, 5],
  //   ticks_labels: ['Unchanged', 'Modified', 'New'],
  //   tooltip_position: 'left'
  // });



  function handleSliderChange(event) {
    event.preventDefault();

    console.log('$(this): ', $(this));

    $('#q1-1').slider({
      // Shows value on the tooltip
      formatter: function (value) {
          vertSlideVal1 = value;
        return value;
      }
    });

    $('#q1-2').slider({
      formatter: function (value) {
        horizSlideVal1 = value;
        return value;
      }
    });

    $('#q1-3').slider({
      formatter: function (value) {
        radiusSlideVal1 = value;
        console.log("radiusSlideVal1: ", radiusSlideVal1);
        return value;
      }
    });


    // console.log("vertSlideVal: ", vertSlideVal);
    // console.log("horizSlideVal: ", horizSlideVal);

    // renderChart('#myScatterChart1', chart1Data, horizSlideVal1, vertSlideVal1);
    renderBubbleChart1('#BubbleChart1', chart1Data, horizSlideVal1, vertSlideVal1, radiusSlideVal1);


    // mySlider
    //   .slider('setValue', 5);
    // Call a method on the slider
    //   console.log("*** mySlider.slider('getValue'): ", mySlider.slider('getValue'), " ***");
  }

  // This creates the display object for the Revenue Bubble Chart(s)
  function renderBubbleChart1(chartId, chartData, horizSlideVal, vertSlideVal, radiusSlideVal) {

    var ctx = $(chartId);
    // console.log("ChartId", chartId);

    var BubbleChart1 = new Chart(ctx, {
      type: 'bubble',
      data: {
        "datasets": [{
          label: "Business Context",
          data: [{
            x: horizSlideVal,
            y: vertSlideVal,
            r: radiusSlideVal,

            // data: chart2Data,
            // backgroundColor: green,
          }]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Temporary    ----------   TIME FRAME   ----------    Permanent',
            },
            type: 'linear',
            position: 'bottom',
            ticks: {
              display: false,
              beginAtZero: false,
              suggestedMin: 0,
              suggestedMax: 100,
              stepSize: 50,
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Local    --------------   SCOPE   --------------    Global',
            },
            ticks: {
              // labels: ['Part of a Country', 'Single Country/MU', 'Single Region', 'Multiple Regions', 'Global'],
              // min: 'Part of a Country',
              // max: 'Global',
              display: false,
              beginAtZero: false,
              suggestedMin: 0,
              suggestedMax: 100,
              stepSize: 50,
            }
          }]
        }
      }
    });

    ctx.prepend(BubbleChart1);
  }


  function renderChart(chartId, chartData, horizSlideVal, vertSlideVal) {

    var ctx = $(chartId);
    // console.log("ChartId", chartId);
    // var ctx = $('#myScatterChart1');

    var myScatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          // label: 'Scatter Dataset',
          // backgroundColor: ['#ff6384'],
          data: [{
            x: horizSlideVal,
            y: vertSlideVal,
          }
            // ,{
            //     x: 0,
            //     y: 10
            // }, {
            //     x: 10,
            //     y: 5
            // }
          ],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              suggestedMin: 1,
              suggestedMax: 5,
              stepSize: 1,
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMin: 1,
              suggestedMax: 5,
              stepSize: 1,
            }
          }]
        }
      }

    });

    ctx.prepend(myScatterChart);
  }


});
