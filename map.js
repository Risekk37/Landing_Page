'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2l0Mzc3NSIsImEiOiJjbHlsc3Z0bHowYmNmMmtvamZjeG1xYzJjIn0.6DjxqtbCSE9iiq1Xwd3YRw'


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kit3775/clym09mui01ws01qocfwh98ms',
    center: [-95.0, 30.5],
    scale: 0.0001,
    zoom: 3
});
map.setMaxBounds([
    [-179, 18], // 서서부 경계 설정
    [-52, 50]   // 동부 경계 설정
]);
