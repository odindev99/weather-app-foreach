import DetailsWeatherCardContent from "../DetailsWeatherCardContent/DetailsWeatherCardContent";

const DetailsWeatherCard = ({ weatherDayData, dateName }) => {
	return (
		<div className="weather-card details p-4 flex flex-col rounded-md items-center">
			<p className={`capitalize text-lg font-bold mb-3`}>{dateName}</p>

			{weatherDayData.map((hourData) => (
				<DetailsWeatherCardContent
					key={hourData.dt}
					dataContent={hourData}
					dateName={dateName}
				/>
			))}
		</div>
	);
};

export default DetailsWeatherCard;
