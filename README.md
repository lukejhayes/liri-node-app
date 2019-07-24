1. Clearly state the problem the app is trying to solve. (i.e. what is it doing and why)

        In this assignment I made a Node.js console system application that takes in user input about music and movies from the command line. By doing this I made it easier for any user with my app to find specific spotify songs based off catagories such as song name or lyrics. On-top of being able too look up any song at your fingertips, I gave the user ability to find concert dates for the favorite artist at locations all around the world. The user recieves information on the name of the Venue, Location, and Event Date. The user can also look up the name of any movie and recieve data about that movie, including the following information. Movie Title, Year Published, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot & Actors.


2. Give a high-level overview of how the app is organized.

        Authentication keys for Spotify and OMBD are stored in a .env file. I exported the module contents inside of that file to my "keys.js" so that it can be called and used in my main "liri.js" file. Inside of "liri.js" I required the appropriate NPM modules and called my "keys.js" file. Once the user runs my "liri.js" file, I used Use API calls and parsed through them, returning JSON objects and outputting them in a specified format.


3. Give start-to-finish instructions on how to run the app.

        - Open your terminal through your computer or my liri-node-app folder
        - Navigate to my liri.js file through the bash
        - Depending on the command you run, the output will vary

    Finding concerts put on by your favorite artist or band:
        - Type "nodemon liri.js concert-this <name of artist or band>" in the liri.js console

    Finding specific spotify songs based off catagories such as song name or lyrics:
        - Type "nodemon liri.js spotify-this-song <lyric or title>" in the liri.js console

    Finding information about movie titles such as Year Published, Ratings, Plot & Actors:
        - Type "nodemon liri.js movie-this <movie title>" in the liri.js console


4. Include screenshots, gifs or videos of the app functioning.

        Youtube Link: https://youtu.be/cCWyFb4aFWo

5. Contain a link to a deployed version of the app.

        Deployed Code: https://github.com/lukejhayes/liri-node-app


6. Clearly list the technologies used in the app.

        - Node.js
        - JavaScript
        - Spotify API (node-spotify-api)
        - OMDb API (axios)
        - .gitignore
        - .env
        - .README.md


7. State your role in the app development.

        This project was a homework assignment for my Web Delevopment program at Northwestern University. I was the only contributer to the code and program.
    
