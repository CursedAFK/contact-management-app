enum Continent {
	Africa = 'Africa',
	Asia = 'Asia',
	AustraliaOceania = 'Australia-Oceania',
	Empty = '',
	Europe = 'Europe',
	NorthAmerica = 'North America',
	SouthAmerica = 'South America'
}

interface CountryInfo {
	_id: number | null
	iso2: null | string
	iso3: null | string
	lat: number
	long: number
	flag: string
}

export interface CountryInfoCollection {
	updated: number
	country: string
	countryInfo: CountryInfo
	cases: number
	todayCases: number
	deaths: number
	todayDeaths: number
	recovered: number
	todayRecovered: number
	active: number
	critical: number
	casesPerOneMillion: number
	deathsPerOneMillion: number
	tests: number
	testsPerOneMillion: number
	population: number
	continent: Continent
	oneCasePerPeople: number
	oneDeathPerPeople: number
	oneTestPerPeople: number
	activePerOneMillion: number
	recoveredPerOneMillion: number
	criticalPerOneMillion: number
}

interface GetCovidCasesWithDateResponse {
	cases: { [key: string]: number }
	deaths: { [key: string]: number }
	recovered: { [key: string]: number }
}

export const getCovidCasesWithDate = async () => {
	const response = await fetch(
		'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
	)
	const data: GetCovidCasesWithDateResponse = await response.json()
	return data
}

export const getCountriesCases = async () => {
	const response = await fetch('https://disease.sh/v3/covid-19/countries')
	const data: CountryInfoCollection[] = await response.json()
	return data
}
