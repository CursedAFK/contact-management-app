import { useQuery } from '@tanstack/react-query'
import {
	getCovidCasesWithDate,
	getCountriesCases,
	CountryInfoCollection
} from '../utils/dataFetchingFns'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts'
import { useMediaQuery } from 'react-responsive'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Interface for case data
interface CaseData {
	date: string
	cases: number
}

// Chart component
const Chart = ({ data }: { data: CaseData[] }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

	// Format tick values for YAxis
	const formatTickValue = (value: number) => {
		if (value >= 1e6) {
			return `${(value / 1e6).toFixed(1)}m`
		} else if (value >= 1e3) {
			return `${(value / 1e3).toFixed(1)}k`
		} else {
			return value.toString()
		}
	}

	return (
		<ResponsiveContainer
			width='100%'
			height={isDesktop ? 500 : isTablet ? 400 : 300}
		>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='date' />
				<YAxis tickFormatter={formatTickValue} />
				<Tooltip />
				<Legend />
				<Line
					type='natural'
					dataKey='cases'
					stroke='#8884d8'
					strokeWidth={1}
					dot={{ r: 2 }}
					activeDot={{ r: 2 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}

// Map component
const Map = ({ countryCase }: { countryCase: CountryInfoCollection[] }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

	return (
		<MapContainer
			center={[0, 0]} // Set initial center coordinates
			zoom={3} // Set initial zoom level
			style={{ height: isDesktop ? 500 : isTablet ? 400 : 300, width: '100%' }} // Set map container size
		>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />{' '}
			{/* Use a tile layer */}
			{/* Render markers for each country */}
			{countryCase.map(country => (
				<Marker
					key={country.country} // Use a unique key for each marker
					position={[country.countryInfo.lat, country.countryInfo.long]} // Set marker position using country latitude and longitude
				>
					<Popup>
						{/* Display country information in the marker popup */}
						<div>
							<h2>{country.country}</h2>
							<p>Total Cases: {country.cases}</p>
							<p>Active Cases: {country.active}</p>
							<p>Recovered Cases: {country.recovered}</p>
							<p>Total Deaths: {country.deaths}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}

// ChartsAndMaps component
const ChartsAndMaps = () => {
	const {
		data: covidCasesWithDate,
		isError: covidCasesWithDateError,
		isLoading: covidCasesWithDateLoading
	} = useQuery({
		queryKey: ['covidCasesWithDate'],
		queryFn: getCovidCasesWithDate
	})

	const {
		data: countriesCases,
		isError: countriesCasesError,
		isLoading: countriesCasesLoading
	} = useQuery({
		queryKey: ['countriesCases'],
		queryFn: getCountriesCases
	})

	// Convert covid cases data to an array of objects
	const covidCasesWithDateArr = Object.entries(
		covidCasesWithDate?.cases || {}
	).map(([date, cases]) => ({
		date,
		cases
	}))

	return (
		<>
			<section className='w-full'>
				<h2 className='mb-6 mt-10 text-center text-xl font-semibold md:mb-8 md:mt-12 md:text-2xl md:font-bold'>
					Covid cases fluctuations chart
				</h2>
				{covidCasesWithDateLoading ? (
					<p className='mb-6 text-center font-medium md:mb-8'>Loading...</p>
				) : covidCasesWithDateError ? (
					<p className='mb-6 text-center font-medium text-red-500 md:mb-8'>
						Error occurred while fetching data
					</p>
				) : (
					<div className='mx-auto w-[90%] max-w-[700px]'>
						<Chart data={covidCasesWithDateArr} />
					</div>
				)}
			</section>

			<section className='w-full'>
				<h2 className='mb-6 mt-10 text-center text-xl font-semibold md:mb-8 md:mt-12 md:text-2xl md:font-bold'>
					Covid cases country map
				</h2>
				{countriesCasesLoading ? (
					<p className='mb-6 text-center font-medium md:mb-8'>Loading...</p>
				) : countriesCasesError ? (
					<p className='mb-6 text-center font-medium text-red-500 md:mb-8'>
						Error occurred while fetching data
					</p>
				) : (
					<div className='mx-auto w-[90%] max-w-[700px]'>
						<Map countryCase={countriesCases} />
					</div>
				)}
			</section>
		</>
	)
}

export default ChartsAndMaps
