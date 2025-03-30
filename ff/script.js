const apiKey = 'YOUR_API_KEY'; // You'll need to get an API key from OpenWeatherMap

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    async function getWeatherData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();
            
            if (data.cod === '404') {
                alert('City not found. Please try again.');
                return;
            }

            updateWeatherData({
                temp: Math.round(data.main.temp),
                location: data.name,
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
                icon: data.weather[0].icon
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        }
    }

    function updateWeatherData(data) {
        document.getElementById('temp').textContent = data.temp;
        document.getElementById('location').textContent = data.location;
        document.getElementById('humidity').textContent = data.humidity;
        document.getElementById('windSpeed').textContent = data.windSpeed;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    }

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            getWeatherData(searchTerm);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Initial weather data for a default city
    getWeatherData('Addis Ababa');
});