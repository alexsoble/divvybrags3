$(function() {

  const tripTable = $("#tripTable");
  if (tripTable.length !== 1) return;

  chrome.storage.sync.get('userDivvyBragsId', function(data) {
    if ($.isEmptyObject(data)) {
      const userDivvyBragsId = Math.random().toString(36).substring(7);
      chrome.storage.sync.set({ 'userDivvyBragsId': userDivvyBragsId }, function() {});
    } else {
      const userDivvyBragsId = data.userDivvyBragsId;
    }

    $.ajax({
      url: 'divvybrags-server.herokuapp.com',
      data: userDivvyBragsId,
      success: function() {
        const totalTrips = findTotalTrips($('#content'));
        let tripsDataSize = unwrappedData.length || 0;

        // Compare total number of trips with trips stored in data:
        if (totalTrips > tripsDataSize) {
          // User needs to go scrape more trips!
          // For each page, get user data

          alert('Dearest user, we are going to need some more trip data for you!');

          const tripRows = $("#tripTable tbody tr");

          scrapePage(tripRows);
        } else {
          // The user can do stuff with their data!
          // Option 1: export as CSV or JSON
          // Option 2: send it to DivvyBrags server for viz?

          alert('Dearest user, this is great, you can do all sorts of fun things with your data!');
        };
      }
    });

  });

});


