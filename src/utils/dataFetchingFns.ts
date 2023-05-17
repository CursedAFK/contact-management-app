export interface User {
	cases: { [key: string]: number }
	deaths: { [key: string]: number }
	recovered: { [key: string]: number }
}

export const getCovidCasesWithDate = async () => {
	const response = await fetch(
		'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
	)
	const data: User = await response.json()
	return data
}
