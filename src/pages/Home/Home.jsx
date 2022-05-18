import styles from "./Home.module.scss";
import { useContext, useEffect } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WeatherApi from "../../services/WeatherApi";
import { WeatherContext } from "../../context/WeatherContext";
import BarChart from "../../components/BarChart/BarChart";
import Spinner from "../../components/Spinner/Spinner";

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

					<div className="flex flex-col items-center mt-8">
						<h2 className="font-bold text-xl mb-8 text-center">
							Variacion de Temperatura Promedio por Día
						</h2>
						<div className="chart-container">
							<BarChart
								data={WeatherApi.formatDataByDayForHomeChart(
									weatherDataByDayName
								)}
								colorMultiplier={1}
								xAxieLabel="Día"
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
