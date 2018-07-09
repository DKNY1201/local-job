export const getToday = () => {
	const today = new Date();
	const year = today.getFullYear();
	let month = (today.getMonth() + 1);
	let date = today.getDate();

	if (month < 10) {
		month = '0' + month;
	}

	if (date < 10) {
		date = '0' + date;
	}

	return year + '-' + month + '-' + date;
}


export const formatDate = (date) => {
	const dateEles = date.split('-');
	const year = dateEles[0];
	const month = dateEles[1];
	const day = dateEles[2];

	return [month, day, year].join('/');
}