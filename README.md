# Netflix GPT

    - Vite app
    - configure Tailwindcss
    - Header
    - Routing
    - Login Form
    - Form Validation
    - useRef HOOK
    - firebase Setup
    - Deploying our app to production
    - Create Sign up user account.
    - Implemented Sign In using API
    - Created Redux Store using useSlice
    - Implemented Sign Out
    - Update Profile
    - Bugfix: Sign up user displayName and Profice image update
    - Bugfix: If the user is not logged in then Redirect from /browse to login page and vise-versa
    - unsubscribe from the listener when the component unmounts
    - Added constants.js and kept all the raw values inside it.
    - Register for TMDB Api and create an app  and get access token
    - Get data from TMDB Now Playing movies list Api.
    - Created Custom HOOk for Now Playing Movies and Trailer Videos
    - Created Components MainContainer, SecondaryContainer,VideoBackGround,VideoTitles
    - added moviesSlice and added reducer actions function in it.
    - implemented the movieSlice in store.
    - Embedded the youtube video in the VideoBackGround Component and make it autoplay and mute it
    - Added Tailwindcss and Make Main Container Awesome
    - Build Secondary Component
    - Build Movie List and Movie Card Component
    - Added custom Hooks and called Movies Lkist Api(Upcoming,Popular,TopRated,Now Playing)

    - GPT Search Feature. Adding a Link in the Header.
    - GPT Search Bar and GPT Movie Suggestion components created
    - Multi Language logic implemented in search Bar Component
    - gptSlice and configSlice created.
    - languageConstants and SUPPORTED_LANGUAGE in constants created
    - got API_KEY from Platform.openai.com ❌
    - installed npm i openai❌
    - got API_KEY from gemini from https://aistudio.google.com/api-keys
    - Click Create API Key.
    - Select or create a Google Cloud project if prompted.
    - Copy the generated API key.
    - Installed npm i @google/genai
    - created gemini.js in utils
    - Created GptSearchBar and GptMovieSuggestion components
    - created customHOOK for useFetchTmdbMovieDetails

# Features

    - Login / Sign Up
        - Sign In / Sign Up Form
        - Redirect to Browse Form
    - Browse (after authenticatio)
        - Header
        - Main Movie
            - Tailer in Background
            - Title & Description
            - Movie Suggestion

    - NetflixGPT
        - Search Bar
