
const API_URL = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0`
let selectedSolIndex
getWeather().then(sols => {
	selectedSolIndex = sols.length - 1
	displaySelectedSol(sols)
	displayPreviousSols(sols)
	

	
})
function displaySelectedSol(sols) {
	const selectedSol = sols[selectedSolIndex]
    document.getElementById('sol-cnt').innerText = selectedSol.sol
	
	document.getElementById('max-weather').innerText = selectedSol.maxTemp
	document.getElementById('min-weather').innerText = selectedSol.minTemp
	document.getElementById('wind-val').innerText = selectedSol.windSpeed
	
	
}
function getWeather() {
	return fetch(API_URL)
		.then(res => res.json())
		.then(data => {
			const {
				sol_keys,
				validity_checks,
				...solData
			} = data
			return Object.entries(solData).map(([sol, data]) => {
				return {
					sol: sol,
					maxTemp: data.AT.mx,
					minTemp: data.AT.mn,
					windSpeed: data.HWS.av,
					windDirectionDegrees: data.WD.most_common.compass_degrees,
					windDirectionCardinal: data.WD.most_common.compass_point,
					date: new Date(data.First_UTC)
				}
			})
		})
}
