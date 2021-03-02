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
  let movieRevTotal = 0;
  let movieChangeLog = [];
  let movieData = [];
  let genreData = "";
  let comedyCount = 0;
  let actionCount = 0;
  let scifiCount = 0;
  let animalsCount = 0;
  let seriesCount = 0;
  let musicalCount = 0;
  let vertSlideVal1 = 1;
  let horizSlideVal1 = 1;
  let vertSlideVal2 = 1;
  let horizSlideVal2 = 1;
  let vertSlideVal3 = 1;
  let horizSlideVal3 = 1;
  let vertSlideVal4 = 1;
  let horizSlideVal4 = 1;

  let chart1Data = [{
    x: 1,
    y: 1
  }];

  // Adding event listeners to the form to create a new object, and the button to delete
  // an movie
  $(document).on('change', '.slider', handleSliderChange);

  // Getting the initial list of movies
  renderChart('#myScatterChart1',chart1Data, horizSlideVal1, vertSlideVal1);
  renderChart('#myScatterChart2',chart1Data, horizSlideVal2, vertSlideVal2);
  renderChart('#myScatterChart3',chart1Data, horizSlideVal3, vertSlideVal3);
  renderChart('#myScatterChart4',chart1Data, horizSlideVal4, vertSlideVal4);


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
    ticks_labels: ['Temp', 'Prolonged', 'Permanent'],
  });


  $("#ex1a").slider({
    min: 1,
    max: 3,
    value: 1,
    tooltip_position: 'bottom',
    ticks: [1, 2, 3],
    ticks_labels: ['Temp', 'Prolonged', 'Permanent'],
  });

  $("#ex1b").slider({
    min: 1,
    max: 3,
    value: 1,
    orientation: 'vertical',
    reversed: true,
    ticks: [1, 2, 3],
    ticks_labels: ['Local', 'Regional', 'Global'],
    tooltip_position: 'left'
  });

  $("#ex2a").slider({
    min: 1,
    max: 5,
    value: 1,
    tooltip_position: 'bottom',
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
  });

  $("#ex2b").slider({
    min: 1,
    max: 5,
    value: 1,
    orientation: 'vertical',
    reversed: true,
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
    tooltip_position: 'left'
  });

  $("#ex3a").slider({
    min: 1,
    max: 5,
    value: 1,
    tooltip_position: 'bottom',
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
  });

  $("#ex3b").slider({
    min: 1,
    max: 5,
    value: 1,
    orientation: 'vertical',
    reversed: true,
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
    tooltip_position: 'left'
  });

  $("#ex4a").slider({
    min: 1,
    max: 5,
    value: 1,
    tooltip_position: 'bottom',
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
  });

  $("#ex4b").slider({
    min: 1,
    max: 5,
    value: 1,
    orientation: 'vertical',
    reversed: true,
    ticks: [1, 3, 5],
    ticks_labels: ['Unchanged', 'Modified', 'New'],
    tooltip_position: 'left'
  });



  function handleSliderChange(event) {
    event.preventDefault();

    $('#ex1a').slider({
      formatter: function (value) {
        horizSlideVal = value;
        return 'Current value: ' + value;
      }
    });

    $('#ex1b').slider({
      formatter: function (value) {
        vertSlideVal = value;
        return 'Current value: ' + value;
      }
    });

    // console.log("vertSlideVal: ", vertSlideVal);
    // console.log("horizSlideVal: ", horizSlideVal);

    renderChart('#myScatterChart1',chart1Data, horizSlideVal, vertSlideVal);


    // mySlider
    //   .slider('setValue', 5);
    // Call a method on the slider
    //   console.log("*** mySlider.slider('getValue'): ", mySlider.slider('getValue'), " ***");
  }

  function renderChart(chartId, chartData, horizSlideVal, vertSlideVal) {

    var ctx = $(chartId);
    console.log("ChartId", chartId);
    // var ctx = $('#myScatterChart1');

    var myScatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          // label: 'Scatter Dataset',
          // backgroundColor: ['#ff6384'],
          data: [{
            x: horizSlideVal,
            y: vertSlideVal
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
