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

  // const chart1Area = $('#myBubbleChart1');
  // const chart2Area = $('#myBubbleChart2');
  // var ctx = $('#myBubbleChart');
  let chart1Data = [{}];

  // Adding event listeners to the form to create a new object, and the button to delete
  // an movie
  $(document).on('submit', '#movieinput-form', handleMovieFormSubmit);
  $(document).on('click', '.delete-movie', handleDeleteButtonPress);
  $(document).on('click', '.form-check-input', handleCheckboxClick);

  // Getting the initial list of movies
  getmovies();

  // A function to handle what happens when the form is submitted to create a new movie
  function handleMovieFormSubmit(event) {
    event.preventDefault();

    // Don't do anything if the name fields hasn't been filled out
    if (!movieInput.val().trim().trim()) {
      return;
    }

    // // Make OMDB api call
    // call_omdb(movieInput.val().trim());
    // movieSearch.omdb(movieInput);

    console.log("movieInput: ", movieInput.val().trim());

    for (let i = 0; i < movieChangeLog.length; i++) {
      // console.log("movieChangeLog: ", movieChangeLog);
      if (genreData.length == 0) {
        genreData = movieChangeLog[i].id.substr(0, (movieChangeLog[i].id.indexOf('_')));
        console.log("genreData: ", genreData);
      } else {
        genreData = genreData + ", " + movieChangeLog[i].id.substr(0, (movieChangeLog[i].id.indexOf('_')));
        console.log("genreData: ", genreData);
      };
    };

    const movieData = {
      //   date: movieDate
      //     .val(),
      movie: movieInput
        .val()
        .trim(),
      genre: genreData,
      chosenby: chosenbyInput
        .val()
        .trim(),
      comments: commentsInput
        .val()
        .trim()
    }

    // console.log("movieData object: ", movieData)

    upsertmovie(movieData);

    location.reload();
  }

  // A function for creating an movie. Calls getmovies upon completion
  function upsertmovie(movieData) {
    $.post('/api/movies', movieData)
      .then(getmovies);
  }

  // Function for creating a new list row for movies
  function createmovieRow(movieData) {

    console.log('movieData: ', movieData);

    const newTr = $('<tr>');
    newTr.data('movie', movieData);
    // newTr.append('<td>' + movieData.date + '</td>');
    newTr.append('<td>' + movieData.movie + '</td>');
    newTr.append('<td>' + movieData.genre + '</td>');
    newTr.append('<td>' + movieData.chosenby + '</td>');
    newTr.append('<td>' + movieData.comments + '</td>');

    // newTr.append('<td> <button class="btn btn-success"><a style=\'cursor:pointer;color:white;\' href=\'/submovie?movie_id=' + movieData.id + '\' /a> >> </button></td>');

    // newTr.append('<td><a style=\'cursor:pointer;color:green;font-size:24px\' href=\'/submovie?movie_id=' + movieData.id + '\'>...</a></td>');
    newTr.append('<td><a style=\'cursor:pointer;color:red\' class=\'delete-movie\'>X</a></td>');

    // buildChartObject(movieData);

    return newTr;
  }


  // Function for retrieving movies and getting them ready to be rendered to the page
  function getmovies() {

    chart1Data = [{}];

    $.get('/api/movies', function (data) {

      console.log('data: ', data);
      let movieSort = data;
      console.log('movieSort: ', movieSort);

      const rowsToAdd = [];

      // for (let i = 0; i < data.length; i++) {
      for (let i = 0; i < movieSort.length; i++) {
        movieSort.sort(compare);
      }

      console.log('movieSort (sorted): ', movieSort);

      for (let i = 0; i < data.length; i++) {
        console.log("data[i].genre: ", data[i].genre);
        //Count genres

        if (data[i].genre.includes('comedy')) {
          comedyCount++;
          console.log("comedyCount: ", comedyCount);
        }

        if (data[i].genre.includes('action')) {
          actionCount++;
          console.log("actionCount: ", actionCount);
        }

        if (data[i].genre.includes('scifi')) {
          scifiCount++;
          console.log("scifiCount: ", scifiCount);
        }

        if (data[i].genre.includes('animals')) {
          animalsCount++;
          console.log("animalsCount: ", animalsCount);
        }

        if (data[i].genre.includes('series')) {
          seriesCount++;
          console.log("seriesCount: ", seriesCount);
        }

        if (data[i].genre.includes('musical')) {
          musicalCount++;
          console.log("musicalCount: ", musicalCount);
        }

        // switch (data[i].genre) {
        //   case "comedy":
        //     comedyCount++;
        //     break;
        //   case "action":
        //     actionCount++;
        //     break;
        //   case "scifi":
        //     scifiCount++;
        //     break;
        //   case "animals":
        //     animalsCount++;
        //     break;
        //   case "series":
        //     seriesCount++;
        //     break;
        //   case "musical":
        //     musicalCount++;
        //     break;
        // }

        //Build table rows
        rowsToAdd.push(createmovieRow(data[i], i));
        if ((i + 1) == data.length) {
          rowsToAdd.push(data[i]);
        }
      }
      console.log("comedyCount: ", comedyCount);
      console.log("actionCount: ", actionCount);
      console.log("scifiCount: ", scifiCount);
      console.log("animalsCount: ", animalsCount);
      console.log("seriesCount: ", comedyCount);
      console.log("musicalCount: ", musicalCount);

      chart1Data.push({ x: "comedy", y: comedyCount });
      chart1Data.push({ x: actionCount, y: "action" });
      chart1Data.push({ x: scifiCount, y: "scifi" });
      chart1Data.push({ x: animalsCount, y: "animals" });
      chart1Data.push({ x: seriesCount, y: "series" });
      chart1Data.push({ x: musicalCount, y: "musical" });

      console.log("rowsToAdd: ", rowsToAdd);

      rendermovieList(rowsToAdd);
      renderChart1(chart1Data);

      movieInput.val('');
    });

  }

  // A function for rendering the list of movies to the page
  function rendermovieList(rows) {
    movieList.children().not(':last').remove();
    movieContainer.children('.alert').remove();
    if (rows.length) {
      movieList
        // .find('thead')
        // .find('tbody')
        .append(rows);
    }
    //   else {
    //     renderEmpty();
    //   }  
  }

  // This populates the object for the Revenue Bubble Chart(s)
  // function buildChartObject(movieData) {
  //   renderChart1(chart1Data);
  // }

  // This creates the display object for the Revenue Bubble Chart(s)
  function renderChart1(chartData) {
    console.log("chartData: ", chartData);
    var ctx = $('#myBubbleChart1');

    var myBubbleChart = new Chart(ctx, {
      type: 'horizontalBar',
      // type: 'bar',
      data: {
        labels: ["Comedy", "Action/Adventure", "Sci-Fi", "Animals", "Part of a Series", "Musical"],
        datasets: [
          {
            label: "Movie Genre Count",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [comedyCount, actionCount, scifiCount, animalsCount, seriesCount, musicalCount],
          }
        ]
      },
      options: {
        borderWidth: 2,
        scales: {
          xAxes: [{
            stacked: false,
            scaleLabel: {
              display: true,
              labelString: 'Occurrences',
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              stepSize: 1
            },
          }],
          yAxes: [{
            stacked: false,
            scaleLabel: {
              display: true,
              labelString: 'Genre',
            },
            ticks: {
              beginAtZero: true
            },
          }],
        }
      }
    });

    ctx.prepend(myBubbleChart);
  }

  // Function for handling what to render when there are no movies
  //   function renderEmpty() {
  //     const alertDiv = $('<div>');
  //     alertDiv.addClass('alert alert-danger');
  //     alertDiv.text('You must create a movie before you can create a Submovie.');
  //     movieContainer.append(alertDiv);
  //   }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    const listItemData = $(this).parent('td').parent('tr').data('movie');

    const id = listItemData.id;
    $.ajax({
      method: 'DELETE',
      url: '/api/movies/' + id,
    })
      .then(getmovies);

    // window.location.reload();
    location.reload();
  }

  function handleCheckboxClick(e) {

    //Identifies field clicked 
    console.log("e.target.id: ", e.target.id);
    if (e.target.value == 'unchecked') {
      e.target.value = 'checked';
    } else {
      e.target.value = 'unchecked';
    }
    //Reads value of field clicked 
    // console.log("this.val(): ", $(this).val());
    console.log(e.target.id, ": ", e.target.value);

    // Build object to capture each change
    const change_id = e.target.id;
    const change_value = e.target.value;

    const change_data = {
      id: change_id,
      value: change_value,
    };

    movieChangeLog.push(change_data);
    console.log("movieChangeLog: ", movieChangeLog);
  };

  function compare(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

  function call_omdb(movie) {

    // Constructing a queryURL using the movie name
    let queryURL = 'http://www.omdbapi.com/?t=' + encodeURIComponent(movie) + '&y=&plot=short&tomatoes=true&apikey=trilogy';

    console.log("queryURL: ", queryURL);
    // Then run a request with axios to the OMDB API with the movie specified

  axios.get(queryURL)
      .then(function (response) {
        console.log(response);
      });
    // const id = movie;
    // console.log("id: ", id);

    // $.axios({
    //   method: 'GET',
    //   // url: '/api/omdb/' + id,
    //   url: queryURL,
    // })
    // .then(getmovies);
  }

});
