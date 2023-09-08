function Update() {
    document.getElementById("sliValue").innerHTML = document.getElementById("transferSpeed").value;
}

function Szamol() {
    let amount = document.
    getElementById("dataAmount").value;
    let type1 = document.
    getElementById("ID_dataType").value;
    let ts = document.
    getElementById("transferSpeed").value;
    let type2 = document.
    getElementById("ID_dataType2").value;


    if (type1 != type2) {
        if (type1 == "KB" && type2 == "KBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts)
        } 
        if (type1 == "KB" && type2 == "MBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts)
        } 
        if (type1 == "KB" && type2 == "GBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts)
        } 
        if (type1 == "MB" && type2 == "KBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000)
        }
        if (type1 == "MB" && type2 == "MBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts)
        } 
        if (type1 == "MB" && type2 == "GBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts) 
        } 
        if (type1 == "GB" && type2 == "KBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000000)
        }
        if (type1 == "GB" && type2 == "MBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000)
        }
        if (type1 == "GB" && type2 == "GBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts)
        } 
        if (type1 == "TB" && type2 == "KBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000000000)
        }
        if (type1 == "TB" && type2 == "MBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000000)
        }
        if (type1 == "TB" && type2 == "GBps"){
            parseFloat(document.getElementById("kiiras").
        innerHTML = amount / ts * 1000)
        }
    }
}