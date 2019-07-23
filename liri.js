require('dotenv').config();

// code required to import the keys.js
var keys = require("./keys");
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');

var [node, file, ...args] = process.argv;

// join user input with spaces
console.log("User Search: " + args.slice(1).join(" "))

// retrieves spotify information via keys.js
var spotify = new Spotify(keys.spotify);

// run searchSpotify()
if(args[0] === "spotify-this-song"){
    if (args[1] === undefined){
        searchSpotify("creep");
    }
    else{
        var songTitle = args.slice(1).join(" "); 
        searchSpotify(songTitle);
    }
}
// run searchMovie()
if(args[0] === "movie-this"){
    if (args[1] === undefined){
        searchMovie("shrek");
    }
    else{
        var movieTitle = args.slice(1).join(" "); 
        searchMovie(movieTitle);
    }
}
// run searchEvent()
if(args[0] === "concert-this"){
    if (args[1] === undefined){
        searchEvent("pink");
    }
    else{
        var artistName = args.slice(1).join(" "); 
        searchEvent(artistName);
    }
}
if (args[0] === "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error){
            return console.log(error);
        }
        dataArray = data.split(",");
        // console.log(dataArray);

function doIt(operator, query){
    operator = dataArray[0];
    query = dataArray[1];
}
    if (dataArray[0] === "spotify-this-song"){
        searchSpotify(dataArray[1]);
    }
    else if (dataArray[0] === "movie-this"){
        searchMovie(dataArray[1]);
    }
    else if (dataArray[0] === "concert-this"){
        searchEvent(dataArray[1]);
    }

    })
}

function searchSpotify(songName){
    spotify.search({ type: 'track', query: songName, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      data.tracks.items.forEach(function(element){
          console.log("\nArtist: " + element.artists[0].name);
          console.log("Song: " + songName);
          console.log("Spotify preview link: " + element.preview_url);
          console.log("Album: " + element.album.name);
          console.log("\n----------------\n")
      })
      });
}

function searchMovie(movieName){
    apiKey = "943080ee";

    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=" + apiKey)
    .then(function(movie){
        console.log("\n----------------")
        console.log("\nTitle: " + movie.data.Title);
        console.log("Year: " + movie.data.Year);
        console.log("IMDB Rating: " + movie.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + movie.data.Ratings[1].Value);
        console.log("Country: " + movie.data.Country);
        console.log("Language: " + movie.data.Language);
        console.log("Plot: " + movie.data.Plot);
        console.log("Actors: " + movie.data.Actors);
        console.log("\n----------------\n")
    })
}

// bands in town function
function searchEvent(bandName){
    axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp")
    .then(function(bands){
    
        console.log("\n----------------")
        console.log(bands.data.forEach(function(element){
            var dateTime = element.datetime;
            var split = dateTime.split("T");
            // joins the date without separation
            var date = split[0].split("-").join("")
            // console.log(date);
            var format = "YYYY/MM/DD";
            var convertedDate = moment(date, format);
            var dateFormat = convertedDate.format("MM/DD/YYYY");

            console.log("\n----------------\n");
            console.log("Name of the Venue: " + element.venue.name);
            console.log("Venue Location: " + element.venue.city + ", " + element.venue.country);       
            console.log("Event Date: " + dateFormat);
        }));
    })
}