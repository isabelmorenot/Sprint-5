//Nivel 1
const url = 'https://icanhazdadjoke.com';
let temp = ''

function produceJokes(){
  a = fetch(url, {
    headers : { 
      'Accept': 'application/json'
      }})
    .then((response) => response.json()
    )
    .then ((joke) => {
      let findJoke= joke.joke;
      document.getElementById("joke").innerHTML =findJoke;
      return findJoke;
    })
  a.then((c) => {
    temp = c;});
    return temp;
}

const reportJokes = [];

function createObject(){
  let score=getScore(score);
  
}

function getScore(score){
  let finalScore = score.value;
  console.log(finalScore); 

  let date = getDate();
  let joke= produceJokes();
  let createArray = new newObject (joke,finalScore,date);
  reportJokes.push(createArray);
  console.log(reportJokes);
}

function getDate(){
  const d = new Date();
  let date = d.toISOString();
  return date;
}

//Nivel 2

const link = 'https://www.el-tiempo.net/api/json/v2/home';

fetch(link)
    .then((response) => response.json()
    )
    .then ((weather) => {
      let checkWeather = weather.ciudades
      console.log(checkWeather);
      let findCity = checkWeather.filter((city) =>city.name =="Barcelona")
      let tempera= findCity.map((temp) => temp.temperatures);
      let max= tempera.map((temp) => temp.max);
      let min= tempera.map((temp) => temp.min);
      let findDescription= findCity.map((temp) => temp.stateSky);
      let typeTemperature= findDescription.map((temp) => temp.description);
      
      document.getElementById("city").innerHTML= "Barcelona " 
      document.getElementById("description").innerHTML= typeTemperature;
      document.getElementById("max").innerHTML= max + "°C" + " / " + min + "°C";
      
    })