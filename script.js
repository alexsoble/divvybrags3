$(function() {

  const tripTable = $("#tripTable");

  if (tripTable.length !== 1) return;

  const tripRows = $("#tripTable tbody tr");

  const csvText = scrapePage(tripRows);

  const downloadHref = 'data:attachment/csv,' + encodeURIComponent(csvText);

  const downloadLink = `<a href=${downloadHref}
                           target="_blank"
                           download="divvy_trips.csv">
                             Download CSV</a>`;

  const divvyBragsMessage = `<strong>Hi there DivvyBrags user!</strong> \
                             This is your secret DivvyBrags panel that lets you \
                             export your own bikeshare data. \
                             <strong>It is annoying</strong> in that you have to go \
                             page-by-page because of how the Divvy website is set up. \
                             If you think it would be better just to have a "Download \
                             All My Data" button, <strong>please tweet at Divvy \
                             asking them for this feature using #DivvyAPI</strong>. \
                             `;

  const divvyBragsParagraph = `<p>${divvyBragsMessage}</p>`;

  const downloadArea = `<div id="downloadArea">
                          ${divvyBragsParagraph}
                          ${downloadLink}
                        </div>`;

  $('body').append(downloadArea);

});



