import { useContext } from "react";
import { useLocation } from "react-router-dom";
import BarChart from "../components/BarChart/BarChart";
import DetailsWeatherCard from "../components/DetailsWeatherCard/DetailsWeatherCard";
import { WeatherContext } from "../context/WeatherContext";
import WeatherApi from "../services/WeatherApi";

const Details = () => {
	const { weatherDataByDayName } = useContext(WeatherContext);
	const location = useLocation();
	const dateName = location.state.dateName;

	return (
		<div className="max-width flex flex-col items-center">
			<DetailsWeatherCard
				weatherDayData={weatherDataByDayName[dateName]}
				dateName={dateName}
			/>

			<div className="flex flex-col items-center mt-8">
				<h2 className="font-bold text-xl text-center mb-8">
					Variacion de Temperatura Promedio por Hora
				</h2>

				<div className="chart-container">
					<BarChart
						data={WeatherApi.formatDataByDayForDetailsChart(
							weatherDataByDayName,
							dateName
						)}
						colorMultiplier={1}
						xAxieLabel="Hora"
					/>
				</div>
			</div>
		</div>
	);
};

export default Details;
