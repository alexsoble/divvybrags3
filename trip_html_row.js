class TripHtmlRow {

  constructor (dataCells) { this.dataCells = dataCells; }

  getValueForCell (dataCellIndex) {
    return (this.dataCells[dataCellIndex]).innerText;
  }


  // Store positions:

  get trip_id_index () { return 0; }

  get start_station_index () { return 1; }

  get start_time_index () { return 2; }

  get end_station_index () { return 3; }

  get end_time_index () { return 4; }

  get duration_index () { return 5; }


  // Fetch data from cells:

  get trip_id () { return this.getValueForCell(this.trip_id_index); }

  get start_station () { return this.getValueForCell(this.start_station_index); }

  get start_time () { return this.getValueForCell(this.start_time_index); }

  get end_station () { return this.getValueForCell(this.end_station_index); }

  get end_time () { return this.getValueForCell(this.end_time_index); }

  get duration () { return this.getValueForCell(this.duration_index); }


  // Return json:

  toJson () {
    return {
      trip_id: this.trip_id,
      start_station: this.start_station,
      start_time: this.start_time,
      end_station: this.end_station,
      end_time: this.end_time,
      duration: this.duration
    }
  }

};
