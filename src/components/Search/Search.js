import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../Api";
import './Search.css';



const Search = ({onSearchChange}) => {
	const [search, setSearch] = useState(null);

	// called in AsyncPaginate Search component for passing selected input
	function handleOnChange(searchData) {
		setSearch(searchData);
		onSearchChange(searchData);
	}
	
	// called in AsyncPaginate Search component for loading options when typed.. we have to return options we fetch from https://rapidapi.com/wirefreethought/api/geodb-cities/
	async function loadOptions(inputValue) {
		try {
			if(inputValue !== '') {
				const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
				const result = await response.json();
				// console.log('result', result);
				// console.log('search', search);
				return {
						options: result.data.map(city => {
								return {
										value: `${city.latitude} ${city.longitude}`,
										label: `${city.city}, ${city.country}`,
								}
						})
				}

			} else {
				return {options: [
					{
						value: ``,
						label: `Please type the city name`,
					}
				]}
			}
			
		} catch (error) {
			console.error(error);
			return {options: [
				{
					value: ``,
					label: `Invalid City Name`,
				}
			]}
		}
	}

	return (
		<>
			<div className='search-container'>
					<div className='search-header'>
						<p className='search-header-content'>Weather App</p>
					</div>
					<AsyncPaginate
							placeholder='Enter City Name'
							debounceTimeout={600}
							value={search}
							onChange={handleOnChange}
							loadOptions={loadOptions}
					/>
					<div className='divider-div'>
						<hr className='divider-line' />
						<span className='divider-text'>or</span>
					</div>
					<div className='device-location-div'>
						<button className='device-location-button'>Get Device Location</button>
					</div>
			</div>
		</>
	)
}

export default Search;