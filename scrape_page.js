function scrapePage (tripRows) {

  const csvRowArray = tripRows.map(function(row) {
    let dataCells = $(this).children();
    let rowTripData = (new TripHtmlRow(dataCells)).toCsvRow();
    return String(rowTripData);
  }).get();

  return csvRowArray.join("\n");

};
