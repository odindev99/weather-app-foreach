import styles from "./DetailsWeatherCardContent.module.scss";
import getHour from "../../utils/getHour";

const DetailsWeatherCardContent = ({ dataContent, dateName }) => {
	return (
		<div className={`${styles.container} w-full flex flex-col items-center `}>
			<p className={`capitalize text-lg font-bold mb-1`}>
				{getHour(dataContent.dt_txt)}
			</p>

			<p className={`capitalize`}>{dataContent.weather[0].description}</p>
			<img
				src={`http://openweathermap.org/img/w/${dataContent.weather[0].icon}.png`}
				alt="weather icon"
			/>

			<div className="flex flex-col items-center ">
				<p className="mt-2">Temperatura Promadio más Baja:</p>
				<p className="text-sm">{dataContent.main.temp_min} °C</p>

				<p className="mt-2">Temperatura Promadio más Alta:</p>
				<p className="text-sm">{dataContent.main.temp_max} °C</p>

				<p className="mt-2">Presión:</p>
				<p className="text-sm">{dataContent.main.pressure}</p>

				<p className="mt-2">Humedad:</p>
				<p className="text-sm">{dataContent.main.humidity}</p>
			</div>
		</div>
	);
};

export default DetailsWeatherCardContent;
