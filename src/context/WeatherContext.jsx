import { createContext, useState } from "react";

export const WeatherContext = createContext({
	weatherDataByDayName: null,
	setWeatherDataByDayName: () => {},
});

export const WeatherContextProvider = ({ children }) => {
	const [weatherDataByDayName, setWeatherDataByDayName] = useState();

	// const context = useMemo(
	// 	() => ({ weatherDataByDayName, setWeatherDataByDayName }),
	// 	[weatherDataByDayName]
	// );

	const context = { weatherDataByDayName, setWeatherDataByDayName };

	return (
		<WeatherContext.Provider value={context}>
			{children}
		</WeatherContext.Provider>
	);
};
