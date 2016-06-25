function scrapePage (tripRows) {

  // Let's start by fetching our trips list from local storage!
  chrome.storage.sync.get('tripsDataArray', function(data) {
    if ($.isEmptyObject(data)) { data = []; }

    const storedTripIds = data.map(function(trip) {
      return trip['trip_id'];
    });

    // For each row in the trip rows ...
       // Add it to the trips list array if its id isn't already in the array.
       // (We can tell because of the trip ID.)

    tripRows.each(function(row) {
      let dataCells = $(this).children();
      let rowTripData = (new TripHtmlRow(dataCells)).toJsObject();
      let trip_id = rowTripData['trip_id'];
      let isNotYetStored = (storedTripIds.indexOf(trip_id) === -1);

      if (isNotYetStored) {
        data.push(rowTripData);
      }
    });

    // Then when all is done, update the trips data array in local storage:
    chrome.storage.sync.set({ 'tripsDataArray': data }, function() {});

  });

};
