<!-- includes/script.inc -->
<script>
    // Step 1: Create map (default center = Colombo)
    const map = L.map('map').setView([6.9271, 79.8612], 13);

    // Step 2: Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let userMarker, userCircle;

    // Step 3: Locate function
    function findLocation() {
        map.locate({setView: true, maxZoom: 16});
    }

    // Step 4: When location found
    map.on('locationfound', e => {
        const radius = e.accuracy / 2;

        if (userMarker) {
            map.removeLayer(userMarker);
            map.removeLayer(userCircle);
        }

        userMarker = L.marker(e.latlng)
            .addTo(map)
            .bindPopup("📍 You are here!")
            .openPopup();

        userCircle = L.circle(e.latlng, {radius: radius, color: '#dc3545'}).addTo(map);
    });

    // Step 5: When location fails
    map.on('locationerror', e => {
        alert("Could not get your location: " + e.message);
    });

    // Optional: Auto locate when page loads
    findLocation();
</script>