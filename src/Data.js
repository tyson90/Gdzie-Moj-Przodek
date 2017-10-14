export const markers = [
	{
		title: 'Cmentarz Wolski',
		description: 'Wolska 180/182, 01-258 Warszawa',
		latlng: {
			latitude: 52.228686,
		  longitude: 20.934985,
		}, 
	},
	
]

export const getMarkerIcon = () => (
	require('./images/marker.png')
)

export const zooms = {
	in: 0.08,
	out: 5,
}
