import { useNavigate } from "react-router-dom";
import getDateName from "../../utils/getDateName";
import getDateNumb from "../../utils/getDateNumb";
import removeAccents from "../../utils/removeAccents";

const WeatherCard = ({ mainData, extraData, date }) => {
	const dateNumb = getDateNumb(date);
	const dateName = getDateName(dateNumb);
	const navigate = useNavigate();

	const goToDetailsHandler = () => {
		return navigate(`/${removeAccents(dateName)}`, { state: { dateName } });
	};

	return (
		<div
			className={`weather-card p-4 flex flex-col rounded-md items-center cursor-pointer`}
			onClick={goToDetailsHandler}
		>
			<p className={`capitalize text-lg font-bold mb-1`}>{dateName}</p>

			<p className={`capitalize`}>{extraData.description}</p>
			<img
				src={`http://openweathermap.org/img/w/${extraData.icon}.png`}
				alt="weather icon"
			/>

			<div className="flex flex-col items-center ">
				<p className="mt-2">Temperatura Promadio más Baja:</p>
				<p className="text-sm">{mainData.temp_min} °C</p>

				<p className="mt-2">Temperatura Promadio más Alta:</p>
				<p className="text-sm">{mainData.temp_max} °C</p>

				<p className="mt-2">Presión:</p>
				<p className="text-sm">{mainData.pressure}</p>

				<p className="mt-2">Humedad:</p>
				<p className="text-sm">{mainData.humidity}</p>
			</div>
		</div>
	);
};

export default WeatherCard;
