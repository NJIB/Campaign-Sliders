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
  let radiusSlideVal1 = 0;
  let vertSlideVal2 = 1;
  let horizSlideVal2 = 1;
  let radiusSlideVal2 = 10;
  let vertSlideVal3 = 1;
  let horizSlideVal3 = 1;
  let radiusSlideVal3 = 10;
  let vertSlideVal4 = 1;
  let horizSlideVal4 = 1;
  let radiusSlideVal4 = 10;
  let paceSlideVal1 = 0;
  let goalsSlideVal1 = 0;
  let pace1Notes = '';
  let goals1Notes = '';
  let buscontextScore = '';
  let buscontextNotes = [];

  let chart1Data = [{
    x: 1,
    y: 1
  }];

  // Adding event listeners to the form to create a new object, and the button to delete
  // an movie
  $(document).on('change', '.slider', handleSliderChange);

  renderBubbleChart1('#BubbleChart1', chart1Data, horizSlideVal1, vertSlideVal1, radiusSlideVal1);

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
    value: 0,
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

  $("#q2-1").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 34, 67, 100],
    ticks_labels: ['No Change', 'Moderate', 'Significant', 'Major'],
  });

  $("#q2-2").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    ticks: [0, 34, 67, 100],
    ticks_labels: ['No Change', 'New Influencers', 'New Decision Makers', 'New Buying Groups'],
    tooltip_position: 'left'
  });

  $("#q2-3").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 34, 67, 100],
    ticks_labels: ['No Change', 'Moderate', 'Significant', 'Major'],
  });


  function handleSliderChange(event) {
    event.preventDefault();

    // console.log('$(this): ', $(this));

    $('#q1-1').slider({
      // Shows value on the tooltip
      formatter: function (value) {
        vertSlideVal1 = value;

        // Expand magnitude bubble
        if (radiusSlideVal1 == 0) {
          radiusSlideVal1 = 10;
        };

        return value;
      }
    });

    $('#q1-2').slider({
      formatter: function (value) {
        horizSlideVal1 = value;

        // Expand magnitude bubble
        if (radiusSlideVal1 == 0) {
          radiusSlideVal1 = 10;
        };

        return value;
      }
    });

    $('#q1-3').slider({
      formatter: function (value) {
        radiusSlideVal1 = value;
        // console.log("radiusSlideVal1: ", radiusSlideVal1);
        return value;
      }
    });

    $('#q1-4').slider({
      formatter: function (value) {
        paceSlideVal1 = value;
        // console.log("radiusSlideVal1: ", radiusSlideVal1);
        return value;
      }
    });

    $('#q1-5').slider({
      formatter: function (value) {
        goalsSlideVal1 = value;
        // console.log("radiusSlideVal1: ", radiusSlideVal1);
        return value;
      }
    });

    $('#q2-1').slider({
      // Shows value on the tooltip
      formatter: function (value) {
        vertSlideVal2 = value;

        // Expand magnitude bubble
        if (radiusSlideVal2 == 0) {
          radiusSlideVal2 = 10;
        };

        return value;
      }
    });

    $('#q2-2').slider({
      formatter: function (value) {
        horizSlideVal2 = value;

        // Expand magnitude bubble
        if (radiusSlideVal2 == 0) {
          radiusSlideVal2 = 10;
        };

        return value;
      }
    });

    $('#q2-3').slider({
      formatter: function (value) {
        radiusSlideVal2 = value;
        // console.log("radiusSlideVal2: ", radiusSlideVal2);
        return value;
      }
    });


    renderBubbleChart1('#BubbleChart1', chart1Data, horizSlideVal1, vertSlideVal1, radiusSlideVal1);

    if (horizSlideVal1 > 50) {
      const horizSlideScore = "H";
      buscontextScore = horizSlideScore;
    } else {
      const horizSlideScore = "L";
      buscontextScore = horizSlideScore;
    };

    if (vertSlideVal1 < 50) {
      const vertSlideScore = "L";
      buscontextScore = buscontextScore + vertSlideScore;
    } else {
      const vertSlideScore = "H";
      buscontextScore = buscontextScore + vertSlideScore;
    };

    console.log("buscontextScore: ", buscontextScore)
    switch (buscontextScore) {
      case "LL":
        buscontextNotes.push("<p>&#9713 Localized disruption + temporary time frame. Campaign likely still sound; Local level response sufficient.</p>");
        break;

      case "LH":
        buscontextNotes.push("<p>&#9712 Widespread disruption + temporary time frame. Overall campaign likely still sound; Programmatic response required to address market disruption.</p>");
        break;

      case "HL":
        buscontextNotes.push("<p>&#9714 Localized disruption + prolonged time frame. Campaign in some markets may require attention; Consider regional adjustments.</p>");
        break;

      case "HH":
        buscontextNotes.push("<p>&#9715 Widespread disruption + prolonged time frame. Campaign likely misaligned from market needs; Conduct full campaign review.</p>");
        break;
    };

    //Load comment for pace slider
    if (paceSlideVal1 == 0) {
      pace1Notes = "<p></p>"
    } else if (paceSlideVal1 < 50) {
      pace1Notes = "<p> &#9655 Slow to steady pace of change. Gradual adaptation / evolution of campaign advisable. </p>"
    } else if (paceSlideVal1 > 49) {
      pace1Notes = "<p> &#9655 &#9655 Rapid change in the campaign environment. Immediate changes to campaign focus required. </p>"
    };

    //Load comment for pace slider
    if (goalsSlideVal1 == 0) {
      goals1Notes = "<p></p>"
    } else if (goalsSlideVal1 > 0 && goalsSlideVal1 < 25) {
      goals1Notes = "<p> &#9678 Limited impact on business goals. Minor adjustments to campaign may suffice, depending on other criteria. </p>"
    } else {
      goals1Notes = "<p> &#9651 Business goals have changed. Campaign goals will also be impacted, along with other campaign elements. </p>"
    };


    const notes = buscontextNotes[buscontextNotes.length - 1];
    console.log("notes: ", notes);

    //Populate div
    $('#bus-context-notes1').empty();
    $('#bus-context-notes1').append(notes);

    $('#bus-context-notes2').empty();
    $('#bus-context-notes2').append(pace1Notes);

    $('#bus-context-notes3').empty();
    $('#bus-context-notes3').append(goals1Notes);

    buscontextNotes.length = 0;
    console.log("buscontextNotes:", buscontextNotes);
  };

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
