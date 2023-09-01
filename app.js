if ("geolocation" in navigator) {
    // Obtener la ubicación del usuario
    var options = {
        enableHighAccuracy: true,
        timeout: 5000, // Tiempo máximo para obtener la ubicación
        maximumAge: 0 // No usar caché de ubicaciones anteriores
    };

    navigator.geolocation.getCurrentPosition((position) => {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;

        var key = "AIzaSyCi54xvBk79uDN8P3ed1_uA7C8lF3aRaWw";
        var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=${key}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    var direccion = data.results[0].formatted_address;
                    alert(direccion);
                } else {
                    alert("No se encontró ninguna dirección para estas coordenadas.");
                }
            })
            .catch(error => {
                alert("Error al obtener la dirección:", error);
            });

    }, (error) => {

    }, options);

} else {
    alert("Geolocalización no disponible en este navegador.");
}