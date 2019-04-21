function Urll(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json"
}

var Oversikt = {
    getInfo: function(kommunenummer) {
        document.getElementById("here").innerHTML = "<table id='here'><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th></table>";
        var kNummer = document.getElementById("kommunenummer").value;
        console.log("Kommunenummer søk:", kNummer);
        var xhr = new XMLHttpRequest();
        var url = new Urll(104857)
        xhr.open("GET", url.url);
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("URL:", url.url);
            var networkObj = JSON.parse(xhr.responseText);
            console.log("elementer: ", networkObj["elementer"]);
            for (x in networkObj.elementer) {
                if (networkObj.elementer[x].kommunenummer == kNummer) {
                    var key = Object.keys(networkObj.elementer[x].Kvinner);
                    var kommune = networkObj.elementer[x].kommunenummer;
                    var menn = networkObj.elementer[x].Menn;
                    var kvinner = networkObj.elementer[x].Kvinner;

                    for (y in menn) {
                        var mann = menn[y];
                    }
                    for (z in kvinner) {
                        var kvinne = kvinner[z];
                    } 
                    for (hei in key) {
                        var aa = key[hei];
                    }
                    document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td>" + " " + "<td>" + aa + "</td>" + "<td>" + mann + "</td><td>" + kvinne + "</td></tr>";
                }   
            }
        }
        };
        xhr.send();
    },
    getNames: function() {
        document.getElementById("here").innerHTML = "";
        var xhr = new XMLHttpRequest();
        var url = new Urll(104857);
        xhr.open("GET", url.url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("URL:", url.url);
                var networkObj = JSON.parse(xhr.responseText);
                for (x in networkObj.elementer) {
                    document.getElementById("here").innerHTML += "<tr><td>" + x + "</td></tr>";
                }
            }
        };
        xhr.send();
    },
    getIDs: function() {
        document.getElementById("here").innerHTML = "";
        var xhr = new XMLHttpRequest();
        var url = new Urll(104857);
        xhr.open("GET", url.url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("URL:", url.url);
                var networkObj = JSON.parse(xhr.responseText);
                for (x in networkObj.elementer) {
                    var kommune = networkObj.elementer[x].kommunenummer;
                    document.getElementById("here").innerHTML += "<tr><td>" + kommune + "</td></tr>";
                }
            }
        };
        xhr.send();
    }
};



/*function lastNed() {
    var xhr = new XMLHttpRequest();
    var url = new Oversikt(104857);
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("URL:", url);
        var networkObj = JSON.parse(xhr.responseText);
        console.log("elementer: ", networkObj["elementer"]);
        
        for (x in networkObj.elementer) {
            var key = Object.keys(networkObj.elementer[x].Kvinner);
            var kommune = networkObj.elementer[x].kommunenummer;
            var menn = networkObj.elementer[x].Menn;
            var kvinner = networkObj.elementer[x].Kvinner;
            
            for (y in menn) {
                var mann = menn[y];
            }
            for (z in kvinner) {
                var kvinne = kvinner[z];
            } 
            for (hei in key) {
                var aa = key[hei];
            }
            document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td>" + " " + "<td>" + aa + "</td>" + "<td>" + mann + "</td><td>" + kvinne + "</td></tr>";
        }
    }
    };
    xhr.send();
}*/
