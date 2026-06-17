//alert("Hello Prithvi!");

class Weather {
  lat = '';
  lon = '';
  city = this.city;
  temp = '';
  date = '';

  constructor(city) {
    this.city = city;
  }
  
  async getCoordinates(city) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
    const data = await response.json();
    if (data.length > 0) {
      this.lon = data[0].lon;
      this.lat = data[0].lat;
      console.log("latitude: ",this.lat);
      console.log("longitude: ",this.lon);
    } else {
      console.log("City not found");
    }
  }

  // display() {
  //   console.log(this.lat);
  //   console.log(this.lon);
  // }

  async getLocationName(lat, lon) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${this.lat}&lon=${this.lon}&format=json`
    );
    const data = await response.json();
    console.log(data.display_name);
  }

  async loadData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    try {
      if(typeof url !== "string" || url.trimEnd() === "") {
        throw new Error("Invalid URL;")
      }

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-type": "application/json"},
      });

      const data = await response.json();
      console.log(data.current);
      this.time = data.current.time;
      this.temp = data.current.temperature_2m;

      if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
      }

    } catch (err) {
      console.log("Error: ",err.message);
    }
  }

  async start() {
    await this.getCoordinates(this.city);
    await this.getLocationName(this.lat, this.lon);
    await this.loadData(this.lat, this.lon);
  }
  
}


const inp = document.querySelector(".search-inp");
const search = document.querySelector(".search-icon");
const city = document.querySelector(".city");
const todayTemp = document.querySelector(".today-temp");

search.addEventListener('click', () => {
  searchWeather();
});

async function searchWeather() {
  const input = inp.value.trim();
  const newLocation = new Weather(input);
  await newLocation.start();
  console.log(newLocation.time);
  console.log(newLocation.temp);
  console.log(newLocation.city);
  city.textContent = newLocation.city;
  todayTemp.textContent = newLocation.temp;
}






