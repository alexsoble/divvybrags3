$(function() {
  // First, detect if the page has a trip table element.
  // If no, there's a problem on the page, quit:

  const tripTable = $("#tripTable");
  if (tripTable.length !== 1) return;

  // If yes, look up total # of trips and add it to data:
  const totalTrips = findTotalTrips($('#content'));
  console.log(totalTrips);

// Compare total number of trips with trips stored in data

  // If the number is equal:

    // The user can do stuff with their data!
    // Option 1: export as CSV or JSON
    // Option 2: send it to DivvyBrags server for viz?

  // If the number is not equal:

    // User needs to go scrape more trips!
    // For each page, get user data

  const tripRows= $("#tripTable tbody tr");

  let pageTripsData = [];

  tripRows.each(function(row) {
    let dataCells = $(this).children();
    let rowTripData = (new TripHtmlRow(dataCells)).toJsObject();

    pageTripsData.push(rowTripData);
  });

  console.log(pageTripsData);
});


