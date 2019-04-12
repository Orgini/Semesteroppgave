//Kostruktør for alle
function URL(urlq, url2, url3, getnames, getIDs, getInfo, load) {
  this.url1 = url1;
  this.url2 = url2;
  this.url3 = url3;
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

//
function load(url) {

}
