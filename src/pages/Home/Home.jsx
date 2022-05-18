import styles from "./Home.module.scss";
import { useContext, useEffect } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WeatherApi from "../../services/WeatherApi";
import { WeatherContext } from "../../context/WeatherContext";
import Spinner from "../../components/Spinner/Spinner";
import WeatherChart from "../../components/WeatherChart/WeatherChart";

const getAndFormatWeather = async () => {
	try {
		const fetchedWeather = await WeatherApi.getWeather();

		const formatedData = WeatherApi.formatDataByDayName(fetchedWeather);

		console.log(formatedData);
		return formatedData;
	} catch (error) {
		throw error;
	}
};

const Home = () => {
	const { weatherDataByDayName, setWeatherDataByDayName } =
		useContext(WeatherContext);

	useEffect(() => {
		getAndFormatWeather().then((formatedWeather) =>
			setWeatherDataByDayName(formatedWeather)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{!weatherDataByDayName ? (
				<div className="h-full w-full flex justify-center items-center">
					<Spinner />
				</div>
			) : (
				<>
					<div
						className={`${styles.container} max-width flex flex-wrap justify-center gap-8`}
					>
						{Object.entries(weatherDataByDayName).map(
							([dateNumb, weatherCardData]) => (
								<WeatherCard
									key={weatherCardData[0].dt}
									mainData={weatherCardData[0].main}
									extraData={weatherCardData[0].weather[0]}
									date={weatherCardData[0].dt_txt}
								/>
							)
						)}
					</div>

					<WeatherChart
						title="Variacion de Temperatura Promedio por Día"
						data={WeatherApi.formatDataByDayForHomeChart(
							weatherDataByDayName
						)}
						xAxieLabel="Día"
					/>
				</>
			)}
		</>
	);
};

export default Home;
