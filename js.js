function Urll(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
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
    
    this.getInfo = function(kommunenummer) {
        document.getElementById("here").innerHTML = "<table id='here'><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th></table>";
        http(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    var key = Object.keys(data.elementer[x].Kvinner);
                    var kommune = data.elementer[x].kommunenummer;
                    var menn = data.elementer[x].Menn;
                    var kvinner = data.elementer[x].Kvinner;

                    for (y in menn) {
                        var mann = menn[y];
                    }
                    for (z in kvinner) {
                        var kvinne = kvinner[z];
                    } 
                    for (hei in key) {
                        var aa = key[hei];
                    }
                    document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td><td>" + aa + "</td><td>" + mann + "</td><td>" + kvinne + "</td></tr>";
                }
            }   
        });
    };
    
    this.getNames = function() {
        document.getElementById("here").innerHTML = "";
        http(function(data) {
            for (x in data.elementer) {
                document.getElementById("here").innerHTML += "<tr><td>" + x + "</td></tr>";
            }
        });
    };
    
    this.getIDs = function() {
        document.getElementById("here").innerHTML = "";
        http(function(data) {
            for (x in data.elementer) {
                var kommune = data.elementer[x].kommunenummer;
                document.getElementById("here").innerHTML += "<tr><td>" + kommune + "</td></tr>";
            }
        });
    }
};

var test = new Urll(104857);

function http(callback) {
    var xhr = new XMLHttpRequest();
    var url = test;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var networkObj = JSON.parse(xhr.responseText);
            callback(networkObj);
        }
    }
    xhr.open("GET", url.url, true);
    xhr.send();
};
