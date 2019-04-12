//Kostruktør for alle
function URL(url) {
  this.url = url;
}

//Returnerer listen av alle kommunanavnene
function getNames(url) {
  var xhr = new XMLHttpRequest;
  xhr.open( "GET", url);
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      var kommune = JSON.parse(xhr.responseText)
      console.log(kommune.region.verdi);
    }
  };
  xhr.send();
}

//returnerer listen av alle kommunenumrene
function getIDs(url) {
  var xhr = new XMLHttpRequest;
  xhr.open( "GET", url);
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      var kommune = JSON.parse(xhr.responseText)
      console.log(kommune.kommunenummer);
    }
  };
  xhr.send();
}

//Bruker kommunenummeret som argument og henter all informasjon om den kommunen
function  getInfo(url, n) {

}

//
function load(url) {

}
