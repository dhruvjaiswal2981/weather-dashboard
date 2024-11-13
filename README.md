# Weather Dashboard 🌦️

A responsive Weather Dashboard web application built with React that lets users search for and view current weather conditions and a 5-day forecast for any city. It includes a light/dark mode toggle and an option to switch between Celsius and Fahrenheit. This project uses the OpenWeatherMap API to fetch real-time weather data.

### Features

- Search Functionality: Search for any city to get its current weather and a 5-day forecast.
- Responsive Design: Fully responsive layout for mobile, tablet, and desktop.
- Current Weather Information:
    - City name
    - Temperature
    - Weather description (e.g., Clear, Cloudy, Rainy)
    - Wind speed
    - Humidity
    - Weather icon
- 5-Day Forecast: Displays a daily temperature and weather icon for each day in the forecast.
- Dark/Light Mode: Toggle between dark and light themes for a customized viewing experience.
- Temperature Units: Switch between Celsius and Fahrenheit units.
- Error Handling: Displays appropriate messages when a city is not found or if there is a network issue.

### Technology Stack

- Frontend: React, HTML, CSS
- API: OpenWeatherMap API
- Styling: CSS with responsive design principles, custom styles, and variables for easy theme management.

### Installation

1. Clone the Repository:

    ```bash

    git clone https://github.com/dhruvjaiswal2981/weather-dashboard.git
    cd weather-dashboard

2. Install Dependencies: Ensure you have npm or yarn installed, then run:

    ```bash

    npm install
    # or
    yarn install

3. Obtain an API Key:

    Register at OpenWeatherMap to get a free API key.

4. Start the Application:

    ```bash

    npm start
    # or
    yarn start


### Usage

1. Search for Weather:
    - Enter a city name in the search bar.
    - Click the search button to fetch the weather data for the specified city.

2. Toggle Temperature Units:
    - Use the toggle button to switch between Celsius and Fahrenheit units.

3. Dark Mode:
    - Switch between dark and light themes using the dark mode toggle.

4. View 5-Day Forecast:
    - The forecast displays temperature and weather icons for the next five days below the current weather.

### Project Structure
- /public: Contains the HTML file.
- /src:
    - App.js: Main component that renders the Weather Dashboard.
    - components: Contains the SearchBar, WeatherInfo, Forecast, and other reusable components.
    - styles: Contains WeatherDashboard.css for styling.

### WeatherDashboard.css Overview
- Responsive Design: Uses @media queries to adjust layout on smaller screens.
- Root Variables: Defined for colors and styles to enable easy theme switching.
- Flexbox and Grid Layouts: Organized layout for better structure and alignment.
- Hover and Transition Effects: Smooth transitions and hover effects for interactive elements.
- Dark/Light Mode: Switches background, text, and component colors based on mode.

### Credits
- Weather API: OpenWeatherMap
- Icons: Weather icons provided by the OpenWeatherMap API.

### Future Enhancements
- Weather Alerts: Display alerts if any exist for the searched location.
- More Detailed Forecast: Add hourly forecast data for more detailed insights.
- Localization: Add support for multiple languages.

### Screen-Shot
- ![CHEESE!](public\images\weather%20dash%20img.PNG)
- ![CHEESE!](images\weather%20dash%20img2.PNG)



### Note: 

- Make sure to update your API key in the file before running the project.

### Deployment Link

- URL :- https://weathers-dashboard.netlify.app/