import dayjs from "dayjs";

const getHour = (date) => dayjs(date).format("h:mma");

export default getHour;
