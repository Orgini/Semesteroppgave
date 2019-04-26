var listeUtdanning = [];

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
                listeUtdanning.push(mann, kvinne, uniMannKort, uniKvinnKort, uniMannLang, uniKvinnLang);

                if (listeUtdanning.length > 6) {
                    listeUtdanning.splice(0, 6);
                }
            }
        });
    };

    //Laster inn info om en kommune ved hjelp av kommunenummeret (utdanning)
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
                    listeUtdanning.push(mann, kvinne, uniMannKort, uniKvinnKort, uniMannLang, uniKvinnLang);

                    if (listeUtdanning.length > 6) {
                        listeUtdanning.splice(0, 6);
                    }
                }
            }
        });
    };
};

var utdanning = new Urll3(85432);

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
