$(document).ready(onReady);

//****** AT PAGE LOAD FUNCTIONS ******

// "onReady" is the wrapper function that will trigger all other funtions when
// the "ready" event listener finds the page has loaded.
function onReady() {
	
	var mySearch = $('#search-box').val();
	watchSearch();
	addToWatch();








//****** SEARCH & CLICK: ACTION FUNCTIONS ******

	// "watchSearch" watches the search box and button for any actions. 
	function watchSearch() {
		$('#search-button').on('click', findResults);
		var key = $('#search-box').keypress;
		// **** Need to get the enter block working. ****
		if (key.which == 13) {
			$('#search-box').keypress(findResults);
		}
	}


	// "findResults" finds the results of the text box through
	// using the "imdbSearch" function.
	function findResults() {
		// Input from search box
		imdbSearch($('#search-box').val());
		// Wipe out old results when search clicked again.
		$('.populate').html();
	}


	// "imdbSearch" collects "mySearch" and adds the API json to the rows
	// in "createResultRows."
		function imdbSearch(query){
			$.get(
				'http://www.omdbapi.com/',
				{
					s: query
				},
				popResultRows,
				'json'
			);
		}








//****** TABLE SWITCH FUNCTIONS ******

	// "addToWatch" adds the rows that were clicked on to the watch table.
	function addToWatch() {
		$('.populate').on('click', popWatchRows);
	}


	// "onWatchClick" adds the rows that were clicked on to the watch table.
	function onWatchClick() {
		// Input from search box
		$('.watch').on('click', popWatchedRows);
	}







//****** ROW CREATING FUNCTIONS ******

//	"popResultRows" creates rows within the search results table.
	function popResultRows(mySearch) {

		var counter = 0;

		for (var key in mySearch.Search) {

			var rowTemplate = _.template('<tr class="populate"><td><%= Title %></td><td><%= Year %></td></tr>');

			$('#table-row').append(rowTemplate(mySearch.Search[counter]));
			counter++;
		}


	}

//	"popWatchRows" adds rows within the "watch" movies table.
	function popWatchRows() {
		console.log('Watch Click Worked!');
		// var counter = 0;

		// for (var key in mySearch.Search) {

		// 	var rowTemplate = _.template('<tr class="watch"><td><%= Title %></td><td><%= Year %></td></tr>');

		$('#watch-table-row').append($('.populate'));
		// counter++;
	}

// "popWatchedRows" adds rows from the the "watch" movies to "watched" movies
// table.
	function popWatchedRows(mySearch) {

		// var counter = 0;

		// for (var key in mySearch.Search) {

		// 	var rowTemplate = _.template('<tr class="populate"><td><%= Title %></td><td><%= Year %></td></tr>');

		// 	$('#table-row').append(rowTemplate(mySearch.Search[counter]));
		// 	counter++;
		// }
	}	

}





// ****** Boneyard Code ******

// function tomatoMeter(imdbID) {
// 	$.get(
// 		'http://www.omdbapi.com/',
// 		{
// 			i: imdbID,
// 			tomatoes: true
// 		},
// 		onTomatoResults,
// 		'json'
// 		);
// }


// function onTomatoResults(mySearch) {
// 	console.log(mySearch);
// 	console.log(mySearch.tomatoMeter)
// }



//Display results in "results" div.