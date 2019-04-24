function data_constructor(link_id) {
  this.link_id = link_id;
  this.getNames = function {
    var befolkning = new XMLHttpRequest;
    befolkning.open("GET", "http://wildboy.uib.no/~tpe056/folk/" + this.link_id ".json", true);

    befolkning.onreadystatechange = function() {
      if (befolkning.readyState === 4 && befolkning.status === 200) {
        var response = JSON.parse(befolkning.responseText);
        var kommuner = Object.keys(response.elementer)
        return kommuner
      }

    }
    befolkning.send();
  }

}
