function Urll(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
    //Laster inn all info om alle kommunene
    this.getAll = function() {
        document.getElementById("here").innerHTML = "<table id='here'><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th></table>";
        http(function(data) {
            for (x in data.elementer) {
                var år = Object.keys(data.elementer[x].Kvinner);
                var kommune = data.elementer[x].kommunenummer;
                var menn = data.elementer[x].Menn;
                var kvinner = data.elementer[x].Kvinner;

                for (y in menn) {
                    var mann = menn[y];
                }
                for (z in kvinner) {
                    var kvinne = kvinner[z];
                } 
                for (tall in år) {
                    var year = år[tall];
                }
                document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td><td>" + year + "</td>" + "<td>" + mann + "</td><td>" + kvinne + "</td></tr>";
                }  
        });
    };
    
    //Laster inn info om en kommune ved hjelp av kommunenummeret
    this.getInfo = function(kommunenummer) {
        document.getElementById("here").innerHTML = "<table id='here'><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th></table>";
        http(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    var år = Object.keys(data.elementer[x].Kvinner);
                    var kommune = data.elementer[x].kommunenummer;
                    var menn = data.elementer[x].Menn;
                    var kvinner = data.elementer[x].Kvinner;

                    for (y in menn) {
                        var mann = menn[y];
                    }
                    for (z in kvinner) {
                        var kvinne = kvinner[z];
                    } 
                    for (tall in år) {
                        var year = år[tall];
                    }
                    document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td><td>" + year + "</td><td>" + mann + "</td><td>" + kvinne + "</td></tr>";
                }
            }   
        });
    };
    
    //Laster inn alle kommunenavn
    this.getNames = function() {
        document.getElementById("here").innerHTML = "";
        http(function(data) {
            for (kommunenavn in data.elementer) {
                document.getElementById("here").innerHTML += "<tr><td>" + kommunenavn + "</td></tr>";
            }
        });
    };
    
    //Laster inn alle kommunenummer
    this.getIDs = function() {
        document.getElementById("here").innerHTML = "";
        http(function(data) {
            for (kommunenummer in data.elementer) {
                var kommune = data.elementer[kommunenummer].kommunenummer;
                document.getElementById("here").innerHTML += "<tr><td>" + kommune + "</td></tr>";
            }
        });
    }
};

var befolkning = new Urll(104857);

function http(cb) {
    var xhr = new XMLHttpRequest();
    var url = befolkning;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var networkObj = JSON.parse(xhr.responseText);
            cb(networkObj);
        }
    }
    xhr.open("GET", url.url, true);
    xhr.send();
};
