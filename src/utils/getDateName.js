const getDateName = (dayNumb) => {
	const days = [
		"domingo",
		"lunes",
		"martes",
		"miércoles",
		"jueves",
		"viernes",
		"sábado",
	];

	return days[dayNumb];
};

export default getDateName;
