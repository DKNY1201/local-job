import axios from 'axios';

const expenseAxios = axios.create({
	baseURL: 'http://localhost:8080/api/expense'
})

export default expenseAxios;