function scrapePage (tripRows) {

  // Let's start by fetching our trips list from local storage!

  // For each row in the trip rows ...
     // Add it to the trips list array if its id isn't already in the array

  // Then when all is done, update the trips list array in local storage

  tripRows.each(function(row) {
    let dataCells = $(this).children();
    let rowTripData = (new TripHtmlRow(dataCells)).toJsObject();

    pageTripsData.push(rowTripData);
  });

};
