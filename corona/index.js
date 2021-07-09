function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                //mark on the map as

                new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])
                    .addTo(map);


            });
        })
}

updateMap();