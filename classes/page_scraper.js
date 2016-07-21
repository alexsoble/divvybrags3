class pageScraper {

  constructor (pageContent) { this.pageContent = pageContent; }

  findTotalTrips () {

    // Ugly hack through HTML to find the number we need,
    // Divvy should really implement an API huh?

    const totalTripsRow = this.pageContent.children().first()
                                     .children().first()
                                     .children().eq(1)
                                     .children().first();

    const totalTripsText = $(totalTripsRow)[0].innerText;

    const totalTripsString = totalTripsText.split('(')[1].split(' ')[0];

    const totalTripsInt = parseInt(totalTripsString);

    return totalTripsInt;

  }

  findMonth () {

    // Ugly hack through HTML to find the number we need,
    // Divvy should really implement an API huh?

    const totalTripsRow = this.pageContent.children().first()
                                     .children().first()
                                     .children().eq(1)
                                     .children().first();

    console.log(totalTripsRow.get());

  }

};
