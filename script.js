$(function() {
  // First, detect if the page has a trip table element.
  // If no, there's a problem on the page, quit:

  const tripTable = $("#tripTable");
  if (tripTable.length !== 1) return;

  // If yes, look up total # of trips and store it to data:
  const totalTrips = findTotalTrips($('#content'));
  chrome.storage.sync.set({ 'totalTripsCount': totalTrips }, function() {});

  chrome.storage.sync.get('tripsDataArray', function(data) {
    let unwrapper = new ChromeStorageUnwrapper(data);
    unwrappedData = unwrapper.unwrappedData();

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
  });
});


