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
  let colRef = "";
  let vertSlideVal1 = 1;
  let horizSlideVal1 = 1;
  let radiusSlideVal1 = 0;
  let vertSlideVal2 = 1;
  let horizSlideVal2 = 1;
  let radiusSlideVal2 = 10;
  let vertSlideVal3 = 1;
  let horizSlideVal3 = 1;
  let radiusSlideVal3 = 25;
  let vertSlideVal4 = 1;
  let horizSlideVal4 = 1;
  let radiusSlideVal4 = 25;
  let paceSlideVal1 = 0;
  let goalsSlideVal1 = 0;
  let pace1Notes = '';
  let goals1Notes = '';
  let buscontextScore = '';
  let buscontextNotes = [];
  let audalignScore = '';
  let audalignNotes = [];
  let camparchScore = '';
  let camparchNotes = [];
  let alignexecScore = '';
  let alignexecNotes = [];
  let bubbleColor = 'rgba(255,255,0,0.6)';

  let chart1Data = [{
    x: 1,
    y: 1
  }];

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Adding event listeners to the form to create a new object, and the button to delete
  // an movie
  $(document).on('change', '.slider', handleSliderChange);

  renderBubbleChart(
    '#BubbleChart1',
    chart1Data,
    horizSlideVal1,
    vertSlideVal1,
    radiusSlideVal1,
    'Business Context',
    'Temporary    ----------   TIME FRAME   ----------    Permanent',
    'Local    --------------   SCOPE   --------------    Global',
    0,
    100,
    50
  );

  renderBubbleChart(
    '#BubbleChart2',
    chart1Data,
    horizSlideVal2,
    vertSlideVal2,
    radiusSlideVal2,
    'Audience Alignment',
    'Unchanged    ----------   BUYERS   ----------    New',
    'Unchanged    --------------   MARKETS   --------------    New',
    0,
    100,
    50
  );

  renderBubbleChart(
    '#BubbleChart3',
    chart1Data,
    horizSlideVal3,
    vertSlideVal3,
    radiusSlideVal3,
    'Campaign Architecture',
    'Unchanged    ----   PROGRAM CONSTRAINTS   ----    Changed',
    'Unchanged    ------   BUDGET / RESOURCES   ------    Changed',
    -100,
    100,
    100
  );

  renderBubbleChart(
    '#BubbleChart4',
    chart1Data,
    horizSlideVal4,
    vertSlideVal4,
    radiusSlideVal4,
    'Aligned Execution',
    '-----------------------   TIME FRAME   ---------------------->',
    '-----------------   CAMPAIGN PERFORMANCE   ---------------->',
    -100,
    100,
    100
  );

  $("#q1-1").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 25, 50, 75, 100],
    ticks_labels: ['Part of a Country/MU', 'Single Country/MU', 'Single Region', 'Multiple Regions', 'Global - All Regions'],
  });

  $("#q1-1").attr("class", "q1");

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
    // orientation: 'vertical',
    // reversed: true,
    ticks: [25, 50, 75, 100],
    ticks_labels: ['Slow', 'Steady', 'Rapid', 'Sudden'],
    tooltip_position: 'left'
  });

  $("#q1-5").slider({
    min: 0,
    max: 100,
    value: 0,
    // orientation: 'vertical',
    // reversed: true,
    tooltip_position: 'bottom',
    ticks: [0, 50, 100],
    ticks_labels: ['Unchanged', 'Minor', 'Major'],
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

  $("#q3-1").slider({
    min: -100,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [-100, -50, 0, 50, 100],
    ticks_labels: ['Big Reduction', 'Moderate Reduction', "No Change", "Moderate Increase", "Big Increase"],
  });

  $("#q3-2").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    ticks: [0, 50, 100],
    ticks_labels: ["No Change", "Moderate Change", "Significant Change"],
    tooltip_position: 'left'
  });

  $("#q4-1").slider({
    min: -100,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    tooltip_position: 'bottom',
    ticks: [-100, -50, 0, 50, 100],
    ticks_labels: ['Big Reduction', 'Moderate Reduction', "No Change", "Moderate Increase", "Big Increase"],
  });

  $("#q4-2").slider({
    min: 0,
    max: 100,
    value: 0,
    orientation: 'vertical',
    reversed: true,
    ticks: [0, 50, 100],
    ticks_labels: ["No Change", "Moderate Change", "Significant Change"],
    tooltip_position: 'left'
  });

  $(".slider").each(function (e) {
    $(e).slider({
      // value: 50,
      // orientation: 'vertical',
      // animate: true,
      // range: 'min',
      slide: function (e) {
        console.log("this.id: ", this.id); //new scope
      }
    });
  });

  function handleSliderChange(event) {
    event.preventDefault();

    // console.log($(this)[0].parentNode.childNodes[2].id);
    colRef = ($(this)[0].parentNode.childNodes[2].id).substr(0, 2);
    console.log("colRef: ", colRef);

    //Toggle from aircraft instruments to 2x2 graphics
    // switch(colRef){
    //   case "q1":
    //     $('#BubbleChart1').removeClass('BubbleChart1');
    //     $('#BubbleChart1').addClass('BubbleChart1new');
    //   break;

    //   case "q2":
    //     $('#BubbleChart2').removeClass('BubbleChart2');
    //     $('#BubbleChart2').addClass('BubbleChart2new');
    //   break;

    //   case "q3":
    //     $('#BubbleChart3').removeClass('BubbleChart3');
    //     $('#BubbleChart3').addClass('BubbleChart3new');
    //   break;

    //   case "q4":
    //     $('#BubbleChart4').removeClass('BubbleChart4');
    //     $('#BubbleChart4').addClass('BubbleChart4new');
    //   break;
    // };

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

    $('#q3-1').slider({
      // Shows value on the tooltip
      formatter: function (value) {
        vertSlideVal3 = value;

        // Expand magnitude bubble
        if (radiusSlideVal3 == 0) {
          radiusSlideVal3 = 25;
        };

        return value;
      }
    });

    $('#q3-2').slider({
      formatter: function (value) {
        horizSlideVal3 = value;

        // Expand magnitude bubble
        if (radiusSlideVal3 == 0) {
          radiusSlideVal3 = 25;
        };

        return value;
      }
    });

    $('#q4-1').slider({
      // Shows value on the tooltip
      formatter: function (value) {
        vertSlideVal4 = value;

        // Expand magnitude bubble
        if (radiusSlideVal4 == 0) {
          radiusSlideVal4 = 25;
        };

        return value;
      }
    });

    $('#q4-2').slider({
      formatter: function (value) {
        horizSlideVal4 = value;

        // Expand magnitude bubble
        if (radiusSlideVal4 == 0) {
          radiusSlideVal4 = 25;
        };

        return value;
      }
    });

    switch (colRef) {

      case ('q1'):
        renderBubbleChart(
          '#BubbleChart1',
          chart1Data,
          horizSlideVal1,
          vertSlideVal1,
          radiusSlideVal1,
          'Business Context',
          'Temporary    ----------   TIME FRAME   ----------    Permanent',
          'Local    --------------   SCOPE   --------------    Global',
          0,
          100,
          50
        );

        // Render notes for graph 1    
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
        // console.log("buscontextNotes:", buscontextNotes);

        break;

      case ('q2'):
        renderBubbleChart(
          '#BubbleChart2',
          chart1Data,
          horizSlideVal2,
          vertSlideVal2,
          radiusSlideVal2,
          'Audience Alignment',
          'Unchanged    ----------   BUYERS   ----------    New',
          'Unchanged    --------------   MARKETS   --------------    New',
          0,
          100,
          50
        );

        // Render notes for graph 2  
        if (horizSlideVal2 > 50) {
          const horizSlideScore = "H";
          audalignScore = horizSlideScore;
        } else {
          const horizSlideScore = "L";
          audalignScore = horizSlideScore;
        };

        if (vertSlideVal2 < 50) {
          const vertSlideScore = "L";
          audalignScore = audalignScore + vertSlideScore;
        } else {
          const vertSlideScore = "H";
          audalignScore = audalignScore + vertSlideScore;
        };

        console.log("audalignScore: ", audalignScore)
        switch (audalignScore) {
          case "LL":
            audalignNotes.push("<p>&#9713 No major change to key markets or sources of revenue.</p>");
            audalignNotes.push("<p>&#9713 No major change to key buyer audiences.</p>");
            break;

          case "LH":
            audalignNotes.push("<p>&#9712 New markets and/or sources of revenue have emerged, as a result of the disruption.</p>");
            audalignNotes.push("<p>&#9712 Core buyers and decision makers remain largely unchanged.</p>");
            break;

          case "HL":
            audalignNotes.push("<p>&#9714 No major change to key markets or sources of revenue.</p>");
            audalignNotes.push("<p>&#9714 New buyers / decision makers have come into focus.</p>");
            break;

          case "HH":
            audalignNotes.push("<p>&#9715 New markets and/or sources of revenue have emerged, as a result of the disruption.</p>");
            audalignNotes.push("<p>&#9715 New buyers / decision makers have come into focus.</p>");
            break;
        };

        // const audNotes = audalignNotes[audalignNotes.length - 1];
        // console.log("audNotes: ", audNotes);

        //Populate div
        $('#aud-align-notes1').empty();
        $('#aud-align-notes1').append(audalignNotes[0]);

        $('#aud-align-notes2').empty();
        $('#aud-align-notes2').append(audalignNotes[1]);

        $('#aud-align-notes3').empty();
        $('#aud-align-notes3').append(audalignNotes[2]);

        audalignNotes.length = 0;
        // console.log("audalignNotes:", audalignNotes);

        break;

      case ('q3'):
        renderBubbleChart(
          '#BubbleChart3',
          chart1Data,
          horizSlideVal3,
          vertSlideVal3,
          radiusSlideVal3,
          'Campaign Architecture',
          'Unchanged    ----   PROGRAM CONSTRAINTS   ----    Changed',
          'Unchanged    ------   BUDGET / RESOURCES   ------    Changed',
          -100,
          100,
          100
        );

        // Render notes for graph 3  
        if (horizSlideVal3 > 50) {
          const horizSlideScore = "H";
          camparchScore = horizSlideScore;
        } else {
          const horizSlideScore = "L";
          camparchScore = horizSlideScore;
        };

        if (vertSlideVal3 < 0) {
          const vertSlideScore = "L";
          camparchScore = camparchScore + vertSlideScore;
        } else {
          const vertSlideScore = "H";
          camparchScore = camparchScore + vertSlideScore;
        };

        console.log("camparchScore: ", camparchScore)
        switch (camparchScore) {
          case "LL":
            camparchNotes.push("<p>&#9713 Reduction in resources/budget available.</p>");
            camparchNotes.push("<p>&#9713 No major change in program fit or execution constraints.</p>");
            break;

          case "HL":
            camparchNotes.push("<p>&#9714 Reduction in resources/budget available.</p>");
            camparchNotes.push("<p>&#9714 Program fit for key buyers, or viability of programs planned, has shifted.</p>");
            break;

          case "LH":
            camparchNotes.push("<p>&#9712 More resources or budget now available to expand activities.</p>");
            camparchNotes.push("<p>&#9712 No major change in program fit or execution constraints.</p>");
            break;

          case "HH":
            camparchNotes.push("<p>&#9715 More resources or budget now available to expand activities.</p>");
            camparchNotes.push("<p>&#9715 Program fit for key buyers, or viability of programs planned, has shifted.</p>");
            break;
        };

        // const campNotes = camparchNotes[camparchNotes.length - 1];
        // console.log("campNotes: ", campNotes);

        //Populate div
        $('#camp-arch-notes1').empty();
        $('#camp-arch-notes1').append(camparchNotes[0]);

        $('#camp-arch-notes2').empty();
        $('#camp-arch-notes2').append(camparchNotes[1]);

        $('#camp-arch-notes3').empty();
        $('#camp-arch-notes3').append(camparchNotes[2]);

        camparchNotes.length = 0;
        // console.log("camparchNotes:", camparchNotes);

        break;

      case ('q4'):
        renderBubbleChart(
          '#BubbleChart4',
          chart1Data,
          horizSlideVal4,
          vertSlideVal4,
          radiusSlideVal4,
          'Aligned Execution',
          '-----------------------   TIME FRAME   ---------------------->',
          '-----------------   CAMPAIGN PERFORMANCE   ---------------->',
          -100,
          100,
          100
        );
        break;
    };

    // Render notes for graph 4   
    if (horizSlideVal4 > 50) {
      const horizSlideScore = "H";
      alignexecScore = horizSlideScore;
    } else {
      const horizSlideScore = "L";
      alignexecScore = horizSlideScore;
    };

    if (vertSlideVal4 < 0) {
      const vertSlideScore = "L";
      alignexecScore = alignexecScore + vertSlideScore;
    } else {
      const vertSlideScore = "H";
      alignexecScore = alignexecScore + vertSlideScore;
    };

    console.log("alignexecScore: ", alignexecScore)
    switch (alignexecScore) {
      case "LL":
        alignexecNotes.push("<p>&#9713 aaa.</p>");
        break;

      case "LH":
        alignexecNotes.push("<p>&#9712 bbb.</p>");
        break;

      case "HL":
        alignexecNotes.push("<p>&#9714 ccc.</p>");
        break;

      case "HH":
        alignexecNotes.push("<p>&#9715 ddd.</p>");
        break;
    };

    // const notes = alignexecNotes[alignexecNotes.length - 1];
    // console.log("notes: ", notes);

    //Populate div
    $('#align-exec-notes1').empty();
    $('#align-exec-notes1').append(alignexecNotes[0]);

    $('#align-exec-notes2').empty();
    $('#align-exec-notes2').append(alignexecNotes[1]);

    $('#align-exec-notes3').empty();
    $('#align-exec-notes3').append(alignexecNotes[2]);

    alignexecNotes.length = 0;
    // console.log("buscontextNotes:", buscontextNotes);


  };

  // function renderNotes(horizSlideVal, vertSlideVal, sliderScore, note1, note2, note3){
  //   // Render notes for graph 1    
  //   if (horizSlideVal > 50) {
  //     const horizSlideScore = "H";
  //     buscontextScore = horizSlideScore;
  //   } else {
  //     const horizSlideScore = "L";
  //     buscontextScore = horizSlideScore;
  //   };

  //   if (vertSlideVal1 < 50) {
  //     const vertSlideScore = "L";
  //     buscontextScore = buscontextScore + vertSlideScore;
  //   } else {
  //     const vertSlideScore = "H";
  //     buscontextScore = buscontextScore + vertSlideScore;
  //   };

  //   console.log("buscontextScore: ", buscontextScore)
  //   switch (buscontextScore) {
  //     case "LL":
  //       buscontextNotes.push("<p>&#9713 Localized disruption + temporary time frame. Campaign likely still sound; Local level response sufficient.</p>");
  //       break;

  //     case "LH":
  //       buscontextNotes.push("<p>&#9712 Widespread disruption + temporary time frame. Overall campaign likely still sound; Programmatic response required to address market disruption.</p>");
  //       break;

  //     case "HL":
  //       buscontextNotes.push("<p>&#9714 Localized disruption + prolonged time frame. Campaign in some markets may require attention; Consider regional adjustments.</p>");
  //       break;

  //     case "HH":
  //       buscontextNotes.push("<p>&#9715 Widespread disruption + prolonged time frame. Campaign likely misaligned from market needs; Conduct full campaign review.</p>");
  //       break;
  //   };

  //   //Load comment for pace slider
  //   if (paceSlideVal1 == 0) {
  //     pace1Notes = "<p></p>"
  //   } else if (paceSlideVal1 < 50) {
  //     pace1Notes = "<p> &#9655 Slow to steady pace of change. Gradual adaptation / evolution of campaign advisable. </p>"
  //   } else if (paceSlideVal1 > 49) {
  //     pace1Notes = "<p> &#9655 &#9655 Rapid change in the campaign environment. Immediate changes to campaign focus required. </p>"
  //   };

  //   //Load comment for pace slider
  //   if (goalsSlideVal1 == 0) {
  //     goals1Notes = "<p></p>"
  //   } else if (goalsSlideVal1 > 0 && goalsSlideVal1 < 25) {
  //     goals1Notes = "<p> &#9678 Limited impact on business goals. Minor adjustments to campaign may suffice, depending on other criteria. </p>"
  //   } else {
  //     goals1Notes = "<p> &#9651 Business goals have changed. Campaign goals will also be impacted, along with other campaign elements. </p>"
  //   };


  //   const notes = buscontextNotes[buscontextNotes.length - 1];
  //   console.log("notes: ", notes);

  //   //Populate div
  //   $('#bus-context-notes1').empty();
  //   $('#bus-context-notes1').append(notes);

  //   $('#bus-context-notes2').empty();
  //   $('#bus-context-notes2').append(pace1Notes);

  //   $('#bus-context-notes3').empty();
  //   $('#bus-context-notes3').append(goals1Notes);

  //   buscontextNotes.length = 0;
  //   // console.log("buscontextNotes:", buscontextNotes);

  // };


  // This creates the display object for the Revenue Bubble Chart(s)
  function renderBubbleChart(
    chartId,
    chartData,
    horizSlideVal,
    vertSlideVal,
    radiusSlideVal,
    graphTitle,
    xlabelString,
    ylabelString,
    suggMin,
    suggMax,
    stepSize) {

    if(radiusSlideVal > 65){
      bubbleColor = 'rgba(255,0,0,0.6)'
    } else if(radiusSlideVal > 35) {
      bubbleColor = 'rgba(255,165,0,0.6)'
    }

    var ctx = $(chartId);
    // console.log("ChartId", chartId);

    var BubbleChart1 = new Chart(ctx, {
      type: 'bubble',
      data: {
        "datasets": [{
          label: graphTitle,
          data: [{
            x: horizSlideVal,
            y: vertSlideVal,
            r: radiusSlideVal
          }],
          // data: chart2Data,
          backgroundColor: bubbleColor,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: false,
              labelString: xlabelString,
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
              display: false,
              labelString: ylabelString,
            },
            ticks: {
              // labels: ['Part of a Country', 'Single Country/MU', 'Single Region', 'Multiple Regions', 'Global'],
              // min: 'Part of a Country',
              // max: 'Global',
              display: false,
              beginAtZero: false,
              suggestedMin: suggMin,
              suggestedMax: suggMax,
              stepSize: stepSize,
            }
          }]
        }
      }
    });

    ctx.prepend(BubbleChart1);
    bubbleColor = 'rgba(255,255,0,0.6)';

  }

});
