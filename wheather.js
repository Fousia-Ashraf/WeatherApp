// 

function findPlace(){
    
    // alert(loc.value)
    places=loc.value;
    console.log(places);
    // alert(loc.value);
    console.log("hi")


    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${places}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(response=>response.json()).then(data=>weatherDetails(data))
    
    }

    
     


function weatherDetails(weather) {
    console.log(weather);

    Brokenclouds = weather.weather[0].main
    icon = weather.weather[0].icon

    pressure = weather.main.pressure
    humidity = weather.main.humidity
    visibility = weather.visibility
    speed = weather.wind.speed
    temperature = weather.main.temp
    long = weather.coord.lon
    lati = weather.coord.lat
    place=weather.name
    console.log(pressure);

    tempCelious = Math.round(temperature - 273)
    console.log(tempCelious);
    if(Brokenclouds==="Mist"){
        iconimage='mist1.png'
    }
    else if(Brokenclouds==="Clear"){
        iconimage='sunny.png'
    }
    else if(Brokenclouds==="Clouds"){
        iconimage='cloudy2.png'
    }
    else if(Brokenclouds==="Haze"){
        iconimage='haze1.png'
    }
    else if(Brokenclouds==="Storm"){
        iconimage='storm1.png'
    }
    else if(Brokenclouds==="Snow"){
        iconimage='sno1.png'
    }
    else if(Brokenclouds==="Rain"){
        iconimage='rain2.png'
    }
    else if(Brokenclouds==='Broken clouds' ){
        iconimage='sun.png'
    }


    result.innerHTML = `

    <div class="row container w-100 text-center justify-content-center">
                <div id="colwea" class="col-md-12 p-4"
                    style="background-color: rgba(100, 49, 129, 0.7);border: none;border-radius: 7px;">

                    <div id="img" class="container align-items-center justify-content-center" style=" width:100px;
                        height:100px;">
                        <img src="./images/icons/${iconimage}" alt="" style=" width:100px;
                            height:100px;">
                    </div>

                    <div id="g1" class="" style=" padding: 5px;
                        margin-bottom: 5px;">
                        <div class="row  justify-content-center text-white">
                            <div id="lat" class="col col-lg-2">
                                lat: ${lati}
                            </div>
                            <div id="d" class="col-md-auto" style=" font-size: 35px;
                                font-weight: 700;">

                                <span id="d2" class="deg">${tempCelious}<sup id="d3">°</sup>C</span>
                            </div>
                            <div id="lon" class="col col-lg-2">
                                lon: ${long}
                            </div>
                        </div>

                    </div>
                    <div id="cloud1" class="weather text-white p-2" style="font-size: small;">${ Brokenclouds}</div>

                    <div id="l1" class="location text-white p-2" style="font-size: small;">
                        <i class="bx bx-map"></i>
                        <span id="l2"> ${place}</span>


                    </div>
                    <div class="row p-2 text-white align-items-center justify-content-center">
                        <div id="q1" class="col-6 col-sm-3 p-2">visibilty<br>
                            <i class="fa-light fa fa-eye"></i><br>
                            <h6 id="v1">${visibility} km</h6>
                        </div>
                        <div id="q2" class="col-6 col-sm-3 p-2">wind<br>
                            <i class="fa-light fa fa-wind"></i></i><br>
                            <h6 id="v2">${speed} kmPh</h6>
                        </div>
                        <div id="q3" class="col-6 col-sm-3 p-2">humidity<br>
                            <!-- <i class="bx bxs-droplet-half"></i> -->
                            <img src="./images/icons/Humidity-icon.png" alt="" style="width: 30px;height:30px;">

                            <br>
                            <h6 id="v3">${ humidity} %</h6>
                        </div>
                        <div id="q4" class="col-6 col-sm-3 p-2">Pressure<br>
                            <img src="./images/icons/pressure-icon-png-13.jpg" alt=""
                                style="width: 20px;height: 20px;"><br>
                            <h6 id="v4">${ pressure}<span>hpa</span></h6>
                        </div>
                    </div>
                </div>


            </div>
    
    
    `
}