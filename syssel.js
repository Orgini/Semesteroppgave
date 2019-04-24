var kMennEn = [];
var kKvinnerEn = [];
var kMennTo = [];
var kKvinnerTo = [];
var listeSyssel = [];

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
                listeSyssel.push(mann, kvinne);
                
                if (listeSyssel.length > 2) {
                    listeSyssel.splice(0, 2);
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
                    listeSyssel.push(mann, kvinne);
                    
                    if (listeSyssel.length > 2) {
                        listeSyssel.splice(0, 2);
                    }
                }
            }   
        });
    };
    
    //Kommune én av to for sammenligning
    this.kommuneEn = function() {
        http1(function(data) {
            var kNummer = document.getElementById("kNummerEn").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    var år = Object.keys(data.elementer[x].Kvinner);
                    var menn = data.elementer[x].Menn;
                    var kvinner = data.elementer[x].Kvinner;

                    for (i in menn) {
                        kMennEn.push(menn[i]);
                    }
                    
                    for (i in kvinner) {
                        kKvinnerEn.push(kvinner[i])
                    }
                }
            }   
        });
    };
    
    //Kommune to av to for sammenligning
    this.kommuneTo = function() {
        http1(function(data) {
            var kNummer = document.getElementById("kNummerTo").value;
            for (x in data.elementer) {
                if (data.elementer[x].kommunenummer == kNummer) {
                    var menn = data.elementer[x].Menn;
                    var kvinner = data.elementer[x].Kvinner;

                    for (i in menn) {
                        kMennTo.push(menn[i]);
                    }
                    
                    for (i in kvinner) {
                        kKvinnerTo.push(kvinner[i])
                    }
                }
            }   
        });
    };
};

var syss = new Urll2(100145);

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
