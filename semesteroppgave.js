function folk() {
  var befolkning = new XMLHttpRequest;
  befolkning.open("GET", "http://wildboy.uib.no/~tpe056/folk/104857.json", true);

  befolkning.onreadystatechange = function() {
    if (befolkning.readyState === 4 && befolkning.status === 200) {
      var response = JSON.parse(befolkning.responseText);
      console.log(response)
    }
  }
  befolkning.send();
};


function syssel() {
  var sysselsett = new XMLHttpRequest;
  sysselsett.open("GET", "http://wildboy.uib.no/~tpe056/folk/100145.json", true);

  sysselsett.onreadystatechange = function() {
    if (sysselsett.readyState === 4 && sysselsett.status === 200) {
      var response = JSON.parse(sysselsett.responseText);
      console.log(response)
    }
  }
  sysselsett.send();
};

function utdanning() {
  var utdann = new XMLHttpRequest;
  utdann.open("GET", "http://wildboy.uib.no/~tpe056/folk/85432.json", true);

  utdann.onreadystatechange = function() {
    if (utdann.readyState === 4 && utdanning.status === 200) {
      var response = JSON.parse(utdanning.responseText);
      console.log(response)
    }
  }
  utdann.send();
};

document.addEventListener("DOMContentLoaded", folk);

document.addEventListener("DOMContentLoaded", syssel);
document.addEventListener("DOMcontentLoaded", utdanning);
