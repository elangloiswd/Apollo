var map = L.map("map", {
  center: [45.63, -73.51],
  zoom: 10,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([45.63, -73.51]).addTo(map);
