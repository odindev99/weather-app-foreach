const getDateNumb = (date) => {
	const newDate = new Date(date);

	const dateNumb = newDate.getDay();

	return dateNumb;
};

export default getDateNumb;
