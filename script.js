$(function() {

  const tripTable = $("#tripTable");

  if (tripTable.length !== 1) return;

  const tripRowsHtml = $("#tripTable tbody tr").html();

  let tripsData = $.map(tripRowsHtml, function(htmlRow) {
    console.log(htmlRow);
  });
});

// Detect if the page is a trip list
  // If not, do nothing

// If yes, look up total # of trips and add it to data

// Compare total number of trips with trips stored in data

  // If the number is equal:

    // The user can do stuff with their data!
    // Option 1: export as CSV or JSON
    // Option 2: send it to DivvyBrags server for viz?

  // If the number is not equal:

    // User needs to go scrape more trips!
    // For each page, present a "SCRAPE MY TRIPS" button
      // Clicking the page lets the user get more trips into their data