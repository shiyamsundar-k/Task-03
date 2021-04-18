let req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    let country = JSON.parse(this.response);
    for(var i in country){
        try{
            var cname= country[i].name;
            var latlong = country[i].latlng;
            if (latlong==0){
                ("Latitude and Longitude not found");
            }
            weatherdata(cname,...latlong);
            }
            catch(e){
                console.log("Invalid Coordinate"+cname);
        }
    }
}
var weatherdata = function(name,lat,lng){
    let req1 = new XMLHttpRequest();
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2267118de37bf8888502035d0af8570b`;
    req1.open('GET',URL,true);
    req1.send();
    req1.onload = function(){
        var data = JSON.parse(this.response);
        console.log(name+" "+data.main.temp);
    }

}