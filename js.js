var liste = [];
var listee = [];

function Urll(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
    this.getAll = function() {
        document.getElementById("here").innerHTML = "<tr><th colspan='5'></th><th colspan='3'>Menn</th><th colspan='3'>Kvinner</th></tr><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th>";
        
        var syssel = syss.getAll();
        var danning = utdanning.getAll();
        
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
                for (var row in liste) {
                    var testing1 = liste[0];
                    var testing2 = liste[1];
                }
                for (var row in listee) {
                    var fagM = listee[0];
                    var fagK = listee[1];
                    var uniMK = listee[2];
                    var uniKK = listee[3];
                    var uniML = listee[4];
                    var uniKL = listee[5];
                }
                document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td><td>" + year + "</td><td>" + mann + "</td><td>" + kvinne + "</td><td>" + fagM + "</td><td>" + fagK + "</td><td>" + uniMK + "</td><td>" + uniKK + "</td><td>" + uniML + "</td><td>" + uniKL + "</td></tr>";
            }
        });
    };
    
    //Laster inn info om en kommune ved hjelp av kommunenummeret
    this.getInfo = function() {        
        document.getElementById("here").innerHTML = "<tr><th colspan='5'></th><th colspan='3'>Menn</th><th colspan='3'>Kvinner</th></tr><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th>";
        
        var syssel = syss.getInfo();
        var danning = utdanning.getInfo();
        
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
                    for (var row in liste) {
                        var testing1 = liste[0];
                        var testing2 = liste[1];
                    }
                    for (var row in listee) {
                        var fagM = listee[0];
                        var fagK = listee[1];
                        var uniMK = listee[2];
                        var uniKK = listee[3];
                        var uniML = listee[4];
                        var uniKL = listee[5];
                    }
                    document.getElementById("here").innerHTML += "<tr><td>" + x + "</td><td>" + kommune + "</td><td>" + year + "</td><td>" + mann + "</td><td>" + kvinne + "</td><td>" + fagM + "</td><td>" + fagK + "</td><td>" + uniMK + "</td><td>" + uniKK + "</td><td>" + uniML + "</td><td>" + uniKL + "</td></tr>";
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

function Urll2(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
    this.getAll = function() {
        http1(function(data) {
            for (x in data.elementer) {
                var menn = data.elementer[x].Menn;
                var kvinner = data.elementer[x].Kvinner;

                for (y in menn) {
                    var mann = menn[y];
                }
                for (z in kvinner) {
                    var kvinne = kvinner[z];
                }
                liste.push(mann, kvinne);
                if (liste.length > 2) {
                    liste.splice(0, 2);
                }
            }   
        });
    };
    
    //Laster inn info om en kommune ved hjelp av kommunenummeret
    this.getInfo = function() {
        http1(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    var menn = data.elementer[x].Menn;
                    var kvinner = data.elementer[x].Kvinner;

                    for (y in menn) {
                        var mann = menn[y];
                    }
                    for (z in kvinner) {
                        var kvinne = kvinner[z];
                    }
                    liste.push(mann, kvinne);
                    if (liste.length > 2) {
                        liste.splice(0, 2);
                    }
                }
            }   
        });
    };
};

function Urll3(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
     this.getAll = function() {
        http2(function(data) {
            for (x in data.elementer) {
                var fagKvinner = data.elementer[x]["11"].Kvinner;

                var fagMenn = data.elementer[x]["11"].Menn;

                var uniKvinnerKort = data.elementer[x]["03a"].Kvinner;

                var uniMennKort = data.elementer[x]["03a"].Menn;

                var uniKvinnerLang = data.elementer[x]["04a"].Kvinner;

                var uniMennLang = data.elementer[x]["04a"].Menn;

                for (y in fagKvinner) {
                    var kvinne = fagKvinner[y];
                }

                for (z in fagMenn) {
                    var mann = fagMenn[z];
                }

                for (o in uniKvinnerKort) {
                    var uniKvinnKort = uniKvinnerKort[o];
                }

                for (l in uniMennKort) {
                    var uniMannKort = uniMennKort[l];
                }

                for (p in uniKvinnerLang) {
                    var uniKvinnLang = uniKvinnerLang[p];
                }

                for (q in uniMennLang) {
                    var uniMannLang = uniMennLang[q];
                }
                listee.push(mann, kvinne, uniMannKort, uniKvinnKort, uniMannLang, uniKvinnLang);
                if (listee.length > 6) {
                    listee.splice(0, 6);
                }
            }   
        });
    };
    
    //Laster inn info om en kommune ved hjelp av kommunenummeret
    this.getInfo = function() {
        http2(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    
                    var fagKvinner = data.elementer[x]["11"].Kvinner;
                    
                    var fagMenn = data.elementer[x]["11"].Menn;
                    
                    var uniKvinnerKort = data.elementer[x]["03a"].Kvinner;
                    
                    var uniMennKort = data.elementer[x]["03a"].Menn;
                    
                    var uniKvinnerLang = data.elementer[x]["04a"].Kvinner;
                    
                    var uniMennLang = data.elementer[x]["04a"].Menn;
                    
                    for (y in fagKvinner) {
                        var kvinne = fagKvinner[y];
                    }
                    
                    for (z in fagMenn) {
                        var mann = fagMenn[z];
                    }
                    
                    for (o in uniKvinnerKort) {
                        var uniKvinnKort = uniKvinnerKort[o];
                    }
                    
                    for (l in uniMennKort) {
                        var uniMannKort = uniMennKort[l];
                    }
                    
                    for (p in uniKvinnerLang) {
                        var uniKvinnLang = uniKvinnerLang[p];
                    }
                    
                    for (q in uniMennLang) {
                        var uniMannLang = uniMennLang[q];
                    }
                    listee.push(mann, kvinne, uniMannKort, uniKvinnKort, uniMannLang, uniKvinnLang);
                    if (listee.length > 6) {
                        listee.splice(0, 6);
                    }
                }
            }   
        });
    };
};

var befolkning = new Urll(104857);
var syss = new Urll2(100145);
var utdanning = new Urll3(85432);

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

function http1(cb) {
    var xhr = new XMLHttpRequest();
    var url = syss;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var networkObj = JSON.parse(xhr.responseText);
            cb(networkObj);
        }
    }
    xhr.open("GET", url.url, true);
    xhr.send();
};

function http2(cb) {
    var xhr = new XMLHttpRequest();
    var url = utdanning;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var networkObj = JSON.parse(xhr.responseText);
            cb(networkObj);
        }
    }
    xhr.open("GET", url.url, true);
    xhr.send();
};
