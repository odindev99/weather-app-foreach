import axios from "axios";
import getDateNumb from "../utils/getDateNumb";
import getDateName from "../utils/getDateName";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import getHour from "../utils/getHour";

class WeatherApi {
	#SANTIAGO_LATITUD = -33.47269;
	#SANTIAGO_LONGITUD = -70.64724;
	#API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

	#fetcher = axios.create({
		baseURL: `https://api.openweathermap.org/data/2.5/forecast`,
		params: {
			lat: this.#SANTIAGO_LATITUD,
			lon: this.#SANTIAGO_LONGITUD,
			appid: this.#API_KEY,
			units: "metric",
			lang: "sp",
		},
	});

	//* Peticiones
	async getWeather() {
		try {
			const weather = await this.#fetcher.get("/");
			return weather.data;
		} catch (error) {
			throw error;
		}
	}

	//* Formateo de data
	formatDataByDayName(fetchedData) {
		const weatherData = fetchedData.list;

		const formatedData = {};

		weatherData.forEach((weatherData, index) => {
			const weatherDayNumb = getDateNumb(weatherData.dt_txt);
			const weatherDayName = getDateName(weatherDayNumb);

			if (!formatedData[weatherDayName]) {
				formatedData[weatherDayName] = [weatherData];
			} else {
				formatedData[weatherDayName] = [
					...formatedData[weatherDayName],
					weatherData,
				];
			}
		});

		return formatedData;
	}

	formatDataByDayForHomeChart(dataByDays) {
		const formatedData = Object.entries(dataByDays).map(([day, data]) => ({
			label: capitalizeFirstLetter(day),
			//* temperatura
			value: (data[0].main.temp_min + data[0].main.temp_max) / 2,
		}));

		return formatedData;
	}

	formatDataByDayForDetailsChart(allDataByDays, day) {
		const dataByDay = allDataByDays[day];

		const formatedData = dataByDay.map((data) => ({
			label: getHour(data.dt_txt),
			//* temperatura
			value: (data.main.temp_min + data.main.temp_max) / 2,
		}));

		return formatedData;
	}
}

export default new WeatherApi();
