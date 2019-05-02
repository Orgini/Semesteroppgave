var listeUtdanning = [];

function Urll3(url) {
    this.url = "http://wildboy.uib.no/~tpe056/folk/" + url + ".json";
    
     this.getAll = function() {
         console.log("getall utdanning.js")
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
        console.log("getinfo utdanning.js");
        http2(function(data) {
            var kNummer = document.getElementById("kommunenummer").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    
                    var år = Object.keys(data.elementer[x]["01"].Menn);
                    
                    var grKvinner = data.elementer[x]["01"].Kvinner;
                    
                    var grMenn = data.elementer[x]["01"].Menn;
                    
                    var vgsKvinner = data.elementer[x]["02a"].Kvinner;
                    
                    var vgsMenn = data.elementer[x]["02a"].Menn;
                    
                    var fagKvinner = data.elementer[x]["11"].Kvinner;
                    
                    var fagMenn = data.elementer[x]["11"].Menn;
                    
                    var uniKvinnerKort = data.elementer[x]["03a"].Kvinner;
                    
                    var uniMennKort = data.elementer[x]["03a"].Menn;
                    
                    var uniKvinnerLang = data.elementer[x]["04a"].Kvinner; 
                    
                    var uniMennLang = data.elementer[x]["04a"].Menn;
                    
                    var uoppgittKvinne = data.elementer[x]["09a"].Kvinner;
                    
                    var uoppgittMann = data.elementer[x]["09a"].Menn;
                    
                    for (a in grMenn) {
                        var grunnMenn = grMenn[a];
                    }
                    
                    for (b in grKvinner) {
                        var grunnKvinner = grKvinner[b];
                    }
                    
                    for (c in vgsMenn) {
                        var vgsMann = vgsMenn[c];
                    }
                    
                    for (d in vgsKvinner) {
                        var vgsKvinne = vgsKvinner[d];
                    }
                    
                    for (e in fagMenn) {
                        var fagM = fagMenn[e];
                    }
                    
                    for (f in fagKvinner) {
                        var fagK = fagKvinner[f];
                    }
                    
                    for (g in uniMennKort) {
                        var uniMannKort = uniMennKort[g];
                    }
                    
                    for (h in uniKvinnerKort) {
                        var uniKvinneKort = uniKvinnerKort[h];
                    }
                    
                    for (i in uniMennLang) {
                        var uniMannLang = uniMennLang[i];
                    }
                    
                    for (j in uniKvinnerKort) {
                        var uniKvinneLang = uniKvinnerLang[j];
                    }
                    
                    for (k in uoppgittMann) {
                        var uoppMann = uoppgittMann[k];
                    }
                    
                    for (l in uoppgittKvinne) {
                        var uoppKvinne = uoppgittKvinne[l];
                    }
                    
                    for (m in år) {
                        var year = år[m];
                    }
                    listeUtdanning.push(grunnMenn, grunnKvinner, vgsMann, vgsKvinne, fagM, fagK, uniMannKort, uniKvinneKort, uniMannLang, uniKvinneLang, uoppMann, uoppKvinne, year);
                    
                    if (listeUtdanning.length > 13) {
                        listeUtdanning.splice(0, 13);
                    }
                }
            }   
        });
    };
};

var utdanning = new Urll3(85432);

function http2(cb) {
    console.log("http utdanning.js");
    var xhr = new XMLHttpRequest();
    var url = utdanning;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var networkObj = JSON.parse(xhr.responseText);
            cb(networkObj);
        }
    }
    xhr.open("GET", url.url, false);
    xhr.send();
};
