/////////////////////////////////////////////////////////////////////////////////////
//--------------------------------Firebase-------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCkS8j0IvEWJHXlhruye8dk6awqi3Fhf0",
    authDomain: "reactaddnotes.firebaseapp.com",
    databaseURL: "https://reactaddnotes.firebaseio.com",
    projectId: "reactaddnotes",
    storageBucket: "reactaddnotes.appspot.com",
    messagingSenderId: "723024657705",
    appId: "1:723024657705:web:bb0a16bd47d453d4390b38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/////////////////////////////////////////////////////////////////////////////////////
//--------------------------------      OSM     -------------------------------------
/////////////////////////////////////////////////////////////////////////////////////
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('myMap').setView([-37.9958, -57.5603], 15);

L.tileLayer(tilesProvider,{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(myMap);

///////////////////////////////  OBJETO MODELO  //////////////////////////////////////////    
/* {
        latLong:
        {
            lat: "-37.99898", 
            long:"-57.54903"
        }, 
        info:
        { 
            nombre:"Catedral", 
            historia:" Breve texto contando a modo introductorio", 
            direccion:"direccion"
        },
        opciones:
        {
            iconUrl: 'imagen.png',
            iconSize: [38, 95], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        },
        categorias: ['arquitectura','historia','espiritual']
    },*/

var lugares  = [    
    {latLong:{lat: "-38.01320", long:"-57.53518"}, info:{ nombre:"Torre Tanque", historia:" Breve texto contando a modo introductorio", direccion:"direccion"}},
    {latLong:{lat: "-38.01964", long:"-57.55250"}, info:{nombre:"Viila Victoria Ocampo", historia:" Breve texto contando a modo introductorio", direccion:"direccion"}},
    {latLong:{lat: "-38.02088", long:"-57.55243"}, info:{nombre:"Viila Mitre", historia:" Breve texto contando a modo introductorio", direccion:"direccion"}},
    {latLong:{lat: "-38.01054", long:"-57.53572"}, info:{nombre:"Museo Castagnino", historia:" Breve texto contando a modo introductorio", direccion:"direccion"}}
]

var defaultIcon = L.icon({
    iconUrl: 'iconos/icon.png',
    iconSize:     [40, 40], // size of the icon
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

lugares.forEach(lugar => {
    L.marker([lugar.latLong.lat, lugar.latLong.long], {icon: defaultIcon})
    .addTo(myMap);
})
/*
var marker = L.marker([-37.99898, -57.54903])
    .bindPopup("<b>Hello world!</b><br>I am Catedral.")
    .addTo(myMap);

*/

var userIcon = L.icon({
    iconUrl: 'iconos/user3.png',
    iconSize:     [45, 40], // size of the icon
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

navigator.geolocation.getCurrentPosition(
    (pos)=>{
        const { coords } = pos;
        L.marker([coords.latitude, coords.longitude], {icon: userIcon})
        .bindPopup("usted esta AQUI").openPopup(true)
        .addTo(myMap)
    },
    (err)=>{
        console.log(err)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
)