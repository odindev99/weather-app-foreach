const removeAccents = (string) =>
	string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default removeAccents;
