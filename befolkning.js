function Urll(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";

    this.oversikt = function() {
        document.getElementById("overview").innerHTML = "<tr><th colspan='3'></th><th colspan='3'>Befolkning</th></tr><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th>";
        http(function(data) {
            for (kommune in data.elementer) {
                var år = Object.keys(data.elementer[kommune].Kvinner);
                var kommunenr = data.elementer[kommune].kommunenummer;
                var menn = data.elementer[kommune].Menn;
                var kvinner = data.elementer[kommune].Kvinner;

                for (y in menn) {
                    var mann = menn[y];
                }
                for (z in kvinner) {
                    var kvinne = kvinner[z];
                }
                for (tall in år) {
                    var year = år[tall];
                }
                document.getElementById("overview").innerHTML += "<tr><td>" + kommune + "</td><td>" + kommunenr + "</td><td>" + year + "</td>" + "<td>" + mann + "</td><td>" + kvinne + "</td></tr>";
                }
        });
    };

    this.getAll = function() {
        console.log("getall befolkning.js");
        document.getElementById("detail").innerHTML = "<tr><th colspan='5'></th><th colspan='3'>Menn</th><th colspan='3'>Kvinner</th></tr><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th><th>Grunnskole</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th><th>Grunnskole</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th>";

        var syssel = syss.getAll();
        var danning = utdanning.getAll();

        http(function(data) {
            for (kommune in data.elementer) {
                var år = Object.keys(data.elementer[kommune].Kvinner);
                var kommunenr = data.elementer[kommune].kommunenummer;
                var menn = data.elementer[kommune].Menn;
                var kvinner = data.elementer[kommune].Kvinner;

                for (y in menn) {
                    var mann = menn[y];
                }
                for (z in kvinner) {
                    var kvinne = kvinner[z];
                }
                for (tall in år) {
                    var year = år[tall];
                }
                for (var row in listeSyssel) {
                    var testing1 = listeSyssel[0];
                    var testing2 = listeSyssel[1];
                }
                for (var row in listeUtdanning) {
                    var grunnM = listeUtdanning[0];
                    var grunnK = listeUtdanning[1];
                    var fagM = listeUtdanning[2];
                    var fagK = listeUtdanning[3];
                    var uniMK = listeUtdanning[4];
                    var uniKK = listeUtdanning[5];
                    var uniML = listeUtdanning[6];
                    var uniKL = listeUtdanning[7];
                }
                document.getElementById("detail").innerHTML += "<tr><td>" + kommune + "</td><td>" + kommunenr + "</td><td>" + year + "</td><td>" + grunnM + "</td><td>" + grunnK + "</td><td>" + mann + "</td><td>" + kvinne + "</td><td>" + fagM + "</td><td>" + fagK + "</td><td>" + uniMK + "</td><td>" + uniKK + "</td><td>" + uniML + "</td><td>" + uniKL + "</td></tr>";
            }
        });
    };

    //Laster inn info om en kommune ved hjelp av kommunenummeret
    this.getInfo = function() {
        document.getElementById("detail").innerHTML = "<tr><th colspan='5'></th><th colspan='6'>Menn</th><th colspan='6'>Kvinner</th></tr><th>Kommune</th><th>Kommunenummer</th><th>År</th><th>Menn</th><th>Kvinner</th><th>Grunnskole</th><th>VGS</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th><th>Uoppgitt</th><th>Grunnskole</th><th>VGS</th><th>Fagskole</th><th>Uni kort</th><th>Uni lang</th><th>Uoppgitt</th>";

        var syssel = syss.getInfo();
        var danning = utdanning.getInfo();

        http(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (kommune in data.elementer) {
                if (data.elementer[kommune].kommunenummer == kNummer) {
                    var kommunenr = data.elementer[kommune].kommunenummer;
                    var menn = data.elementer[kommune].Menn;
                    var kvinner = data.elementer[kommune].Kvinner;

                    for (y in menn) {
                        var mann = menn[y];
                    }
                    for (z in kvinner) {
                        var kvinne = kvinner[z];
                    }
                    for (var row in listeSyssel) {
                        var testing1 = listeSyssel[0];
                        var testing2 = listeSyssel[1];
                    }
                    for (var row in listeUtdanning) {
                    var grunnM = listeUtdanning[0];
                    var grunnK = listeUtdanning[1];
                    var vgsM = listeUtdanning[2];
                    var vgsK = listeUtdanning[3];
                    var fagM = listeUtdanning[4];
                    var fagK = listeUtdanning[5];
                    var uniMK = listeUtdanning[6];
                    var uniKK = listeUtdanning[7];
                    var uniML = listeUtdanning[8];
                    var uniKL = listeUtdanning[9];
                    var uoppM = listeUtdanning[10];
                    var uoppK = listeUtdanning[11];
                    var year = listeUtdanning[12];
                    }
                    document.getElementById("detail").innerHTML += "<tr><td>" + kommune + "</td><td>" + kommunenr + "</td><td>" + year + "</td><td>" + mann + "</td><td>" + kvinne + "</td><td>" + grunnM + "%</td><td>" + vgsM + "%</td><td>" + fagM + "%</td><td>" + uniMK + "%</td><td>" + uniML + "</td><td>" + uoppM + "%</td><td>" + grunnK + "%</td><td>" + vgsK + "%</td><td>" + fagK + "%</td><td>" + uniKK + "%</td><td>" + uniKL + "%</td><td>" + uoppK + "%</td></tr>";
                }
            }
        });
    };

    //Sammenligner to kommuner
    this.sammenligning = function() {
        var syssel1 = syss.kommuneEn();
        var syssel2 = syss.kommuneTo();

        http(function(data) {
            var kNummer1 = document.getElementById("kNummerEn").value;
            var kNummer2 = document.getElementById("kNummerTo").value;

            var male1 = [];
            var female1 = [];
            var kommuneEn;

            for (kommune in data.elementer) {
                if (data.elementer[kommune].kommunenummer == kNummer1) {
                    kommuneEn = kommune;
                    var år = Object.keys(data.elementer[kommune].Kvinner);
                    var kommunenr = data.elementer[kommune].kommunenummer;
                    var menn = data.elementer[kommune].Menn;
                    var kvinner = data.elementer[kommune].Kvinner;

                    for (i in kMennTo) {
                        male1.push(kMennTo[i]);
                    }
                    for (i in kKvinnerTo) {
                        female1.push(kKvinnerTo[i])
                    }
                }
            }

            for (kommune in data.elementer) {
                if (data.elementer[kommune].kommunenummer == kNummer2) {
                    var text = document.getElementById("sammenligning");
                    var table = "<table><thead><tr><th></th><th colspan='3'>Menn</th><th colspan='3'>Kvinner</th></tr><th>År</th><th>" + kommuneEn + "</th><th></th><th>" + kommune + "</th><th>" + kommuneEn + "</th><th></th><th>" + kommune + "</th></thead><tbody>";

                    var år = Object.keys(data.elementer[kommune].Kvinner);
                    var kommunenr = data.elementer[kommune].kommunenummer;
                    var menn = data.elementer[kommune].Menn;
                    var kvinner = data.elementer[kommune].Kvinner;
                    var biggest;
                    var years = [];
                    var male2 = [];
                    var female2 = [];

                    for (var  i=0; i<år.length; i++) {
                        years.push(år[i])
                    }
                    for (i in kMennEn) {
                        male2.push(kMennEn[i]);
                    }
                    for (i in kKvinnerEn) {
                        female2.push(kKvinnerEn[i])
                    }
                    for (var i=0; i<år.length; i++) {
                        if (male2[i] > male1[i]) {
                            mbiggest = "&gt;";
                        } else {
                            mbiggest = "&lt;";
                        }
                        if (female2[i] > female1[i]) {
                            fbiggest = "&gt;";
                        } else {
                            fbiggest = "&lt;";
                        }

                        table += "<tr><td>" + years[i] + "</td><td>" + male2[i] + "%</td><td>" + "<p id='greaterOrEqual'>" + mbiggest + "</p></td><td>" + male1[i] + "%</td><td>" + female2[i] + "%</td><td>" + "<p id='greaterOrEqual'>" + fbiggest + "</p>" + "</td><td>" + female1[i] + "%</td></tr>";
                    }
                    table += "</tbody></table>";
                    text.innerHTML = table;
                }
            }
        });
    }

    //Laster inn alle kommunenavn
    this.getNames = function() {
        document.getElementById("detail").innerHTML = "";
        http(function(data) {
            for (kommunenavn in data.elementer) {
                document.getElementById("detail").innerHTML += "<tr><td>" + kommunenavn + "</td></tr>";
            }
        });
    };

    //Laster inn alle kommunenummer
    this.getIDs = function() {
        document.getElementById("detail").innerHTML = "";
        http(function(data) {
            for (kommunenummer in data.elementer) {
                var kommune = data.elementer[kommunenummer].kommunenummer;
                document.getElementById("detail").innerHTML += "<tr><td>" + kommune + "</td></tr>";
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
    xhr.open("GET", url.url, false);
    xhr.send();
};
