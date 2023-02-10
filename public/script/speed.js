(function(){
    let startTimeDownload=Date.now();
    window.addEventListener("load", function(){
        let endTimeDownload = Date.now();
        let speedDownload=Number(endTimeDownload-startTimeDownload)/1000;
        document.getElementById("speed_time").innerHTML = String(speedDownload) + " s";
    });
}());

