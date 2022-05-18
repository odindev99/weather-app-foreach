import styles from "./WeatherChart.module.scss";
import BarChart from "../BarChart/BarChart";

const WeatherChart = ({ title, data, xAxieLabel }) => {
	return (
		<div className={`max-width flex flex-col items-center mt-8`}>
			<h2 className="font-bold text-xl mb-8 text-center">{title}</h2>
			<div className={`${styles.chart_container}`}>
				<BarChart data={data} colorMultiplier={1} xAxieLabel={xAxieLabel} />
			</div>
		</div>
	);
};

export default WeatherChart;
