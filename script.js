// Carte Leaflet
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Données exemple
const countriesData = [
  {
    name: "France",
    coords: [48.8566, 2.3522],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Baguette.jpg",
      desc: "Baguette et fromage" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/LaTourEiffel.jpg", 
      desc: "Tour Eiffel" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/france.jpg", // tu peux changer si tu veux
      desc: "Culture française et gastronomie" 
    }
  },
 
  {
    name: "Japon",
    coords: [35.6762, 139.6503],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/sushi.jpg", 
      desc: "Sushi" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Cerisiers.jpg", 
      desc: "Mont Fuji et cerisiers" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Hanami.jpg", 
      desc: "Hanami" 
    }
  },
  {
    name: "Italie",
    coords: [41.9028, 12.4964],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Pasta.jpg",
      desc: "Pasta" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/LeColis%C3%A9edeRome.jpg", 
      desc: "Colisée de Rome" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/venise.jpg", 
      desc: "Carnaval de Venise" 
    }
  },
  {
    name: "Brésil",
    coords: [-15.7801, -47.9292],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Feijoada.jpg",
      desc: "Feijoada" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/christ.jpg", 
      desc: "Christ Rédempteur" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/rio.jpg", 
      desc: "Carnaval de Rio" 
    }
  },
  {
    name: "Inde",
    coords: [28.6139, 77.2090],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Curry.jpg",
      desc: "Curry et riz" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/TajMahal.jpg", 
      desc: "Taj Mahal" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Diwali.jpg", 
      desc: "Diwali" 
    }
  },

{
  name: "Espagne",
  coords: [40.4168, -3.7038],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/paella.jpg", desc: "Paella" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/SagradaFamilia.jpg", desc: "Sagrada Familia" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Tomatina.jpg", desc: "La Tomatina" }
},
{
  name: "Allemagne",
  coords: [52.52, 13.405],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Saucissesetbi%C3%A8re.jpg", desc: "Saucisses et bière" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Brandebourg.jpg", desc: "Porte de Brandebourg" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Oktoberfest.jpg", desc: "Oktoberfest" }
},
{
  name: "Grèce",
  coords: [37.9838, 23.7275],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Moussaka.jpg", desc: "Moussaka" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Parthenon.jpg", desc: "Parthénon" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Patras.jpg", desc: "Carnaval de Patras" }
},
{
  name: "Royaume-Uni",
  coords: [51.5074, -0.1278],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/fishandchips.jpg", desc: "Fish and Chips" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/BigBen.jpg", desc: "Big Ben" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/NottingHill.jpg", desc: "Carnaval de Notting Hill" }
},
{
  name: "Portugal",
  coords: [38.7169, -9.139],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/bacalhau.jpg", desc: "Bacalhau" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Belem.jpg", desc: "Tour de Belém" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/SantoAntonio.jpg", desc: "Fête de Santo António" }
},
{
  name: "Turquie",
  coords: [41.0082, 28.9784],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Kebab.jpg", desc: "Kebab" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/SainteSophie.jpg", desc: "Sainte-Sophie" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Derviches.jpg", desc: "Festival des Derviches" }
},
{
  name: "Russie",
  coords: [55.7558, 37.6173],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/bortsch.jpg", desc: "Bortsch (soupe de betteraves)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/red-square.jpg", desc: "Place Rouge et cathédrale Saint-Basile, à deux pas du Kremlin" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Maslenitsa.jpg", desc: "Maslenitsa (festival slave du printemps)" }
},
{
  name: "Pays-Bas",
  coords: [52.3676, 4.9041],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/fromage.jpg", desc: "Gouda et harengs" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Moulins.jpg", desc: "Moulins de Kinderdijk" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/KingDay..jpg", desc: "Fête du Roi" }
},
{
  name: "Sénégal",
  coords: [14.7167, -17.4677],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/thi%C3%A9boudienne.jpg", desc: "Thiéboudienne" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/MonumentRenaissance.jpg", desc: "Monument de la Renaissance africaine" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Dakar.jpg", desc: "Festival de Dakar" }
},
{
  name: "Nigeria",
  coords: [9.0579, 7.4951],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/jollof.jpg", desc: "Jollof rice" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/ZumaRock.jpg", desc: "Zuma Rock" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Lagos.jpg", desc: "Carnaval de Lagos" }
},
{
  name: "Afrique du Sud",
  coords: [-25.7479, 28.2293],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/bobotie.jpg", desc: "Bobotie" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/TableMountain.jpg", desc: "Table Mountain" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/CapeTown.jpg", desc: "Cape Town Jazz Festival" }
},
{
  name: "Égypte",
  coords: [30.0444, 31.2357],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Koshari.jpg", desc: "Koshari" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Pyramides.jpg", desc: "Pyramides de Gizeh" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Louxor.jpg", desc: "Festival de Louxor" }
},
{
  name: "Maroc",
  coords: [31.6295, -7.9811],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/couscous.jpg", desc: "Couscous" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Marrakech.jpg", desc: "Place Jemaa el-Fna" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Fes.jpg", desc: "Festival de Fès" }
},
{
  name: "Côte d’Ivoire",
  coords: [5.3167, -4.0333],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/atti%C3%A9k%C3%A9.jpg", desc: "Attiéké et poisson" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/BasiliqueYamoussoukro.jpg", desc: "Basilique de Yamoussoukro" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Masa.jpg", desc: "MASA d’Abidjan" }
},
{
  name: "Kenya",
  coords: [-1.2921, 36.8219],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/ugali.jpg", desc: "Ugali et sukuma wiki" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/MontKenya.jpg", desc: "Mont Kenya" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Lamu.jpg", desc: "Festival de Lamu" }
},
{
  name: "Éthiopie",
  coords: [9.03, 38.74],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/injera.jpg", desc: "Injera et wot" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Lalibela.jpg", desc: "Églises de Lalibela" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Timkat.jpg", desc: "Timkat" }
},
{
  name: "Ghana",
  coords: [5.55, -0.2],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/fufu.jpg", desc: "Fufu et soupe" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/CapeCoast.jpg", desc: "Château de Cape Coast" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Homowo.jpg", desc: "Festival Homowo" }
},
{
  name: "Tanzanie",
  coords: [-6.8, 39.2833],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/nyamaChoma.jpg", desc: "Nyama Choma" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Kilimandjaro.jpg", desc: "Mont Kilimandjaro" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Zanzibar.jpg", desc: "Festival de Zanzibar" }
},
{
  name: "États-Unis",
  coords: [38.9072, -77.0369],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/burger.jpg", desc: "Hamburger" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/StatueLiberte.jpg", desc: "Statue de la Liberté" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Thanksgiving.jpg", desc: "Thanksgiving" }
},
{
  name: "Canada",
  coords: [45.4215, -75.6972],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Poutine.jpg", desc: "Poutine" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Niagara.jpg", desc: "Chutes du Niagara" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/MontrealJazz.jpg", desc: "Festival de Jazz de Montréal" }
},

{
  name: "Mexique",
  coords: [19.4326, -99.1332],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/Tacos.jpg", desc: "Tacos" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/ChichenItza.jpg", desc: "Chichen Itza" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/JourDesMorts.jpg", desc: "Jour des morts" }
},
{
  name: "Argentine",
  coords: [-34.6037, -58.3816],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/asado.jpg", desc: "Asado" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Obelisco.jpg", desc: "Obélisque de Buenos Aires" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Tango.jpg", desc: "Festival de Tango" }
},
{
  name: "Cuba",
  coords: [23.1136, -82.3666],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/ropaVieja.jpg", desc: "Ropa Vieja" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Malecon.jpg", desc: "Malecón de La Havane" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/CarnavalLaHavane.jpg", desc: "Carnaval de La Havane" }
},
{
  name: "Chili",
  coords: [-33.4489, -70.6693],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/empanadas.jpg", desc: "Empanadas chilenas" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Valparaiso.jpg", desc: "Valparaíso" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/FiestasPatrias.jpg", desc: "Fiestas Patrias" }
},
{
  name: "Pérou",
  coords: [-12.0464, -77.0428],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/ceviche.jpg", desc: "Ceviche" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/MachuPicchu.jpg", desc: "Machu Picchu" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/IntiRaymi.jpg", desc: "Inti Raymi" }
},
{
  name: "Colombie",
  coords: [4.711, -74.0721],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/arepas.jpg", desc: "Arepas" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/Medellin.jpg", desc: "Plaza Botero à Medellín" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/FeriaFlores.jpg", desc: "Feria de las Flores" }
},
{
  name: "Venezuela",
  coords: [10.4806, -66.9036],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/arepa.jpg", desc: "Arepa vénézuélienne" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/AngelFalls.jpg", desc: "Salto Ángel" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/CarnavalVenezuela..jpg", desc: "Carnaval vénézuélien" }
},
{
  name: "Australie",
  coords: [-33.8688, 151.2093],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/vegemite.jpg", 
    desc: "Vegemite sur toast" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/opera-house.jpg", 
    desc: "Opéra de Sydney" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/mardi-gras-sydney.jpg", 
    desc: "Mardi Gras de Sydney" 
  }
},
{
  name: "Nouvelle-Zélande",
  coords: [-36.8485, 174.7633],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/hangi.jpg", 
    desc: "Hangi (plat maori cuit sous terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/hobbiton.jpg", 
    desc: "Hobbiton" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/matariki.jpg", 
    desc: "Matariki (Nouvel An maori)" 
  }
},
{
  name: "Fidji",
  coords: [-17.7134, 178.0650],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/kokoda.jpg", 
    desc: "Kokoda (poisson mariné au lait de coco)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/mamanuca.jpg", 
    desc: "Îles Mamanuca" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/fiji-festival.jpg", 
    desc: "Fiji Day" 
  }
},
{
  name: "Papouasie-Nouvelle-Guinée",
  coords: [-6.3149, 143.9555],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/mumu.jpg", 
    desc: "Mumu (plat cuit sous terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/tari.jpg", 
    desc: "Festival de Tari" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/sing-sing.jpg", 
    desc: "Sing-Sing (rencontre culturelle)" 
  }
},
{
  name: "Samoa",
  coords: [-13.7590, -172.1046],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/oka.jpg", 
    desc: "Oka (poisson cru au lait de coco)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/aga-falls.jpg", 
    desc: "Aga Falls" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/samoa-festival.jpg", 
    desc: "Teuila Festival" 
  }
},
{
  name: "Estonie",
  coords: [59.4370, 24.7536],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/verivorst.jpg", 
    desc: "Verivorst (boudin noir estonien)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/tallinn-old-town.jpg", 
    desc: "Vieille ville de Tallinn" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/tallinn-festival.jpg", 
    desc: "Tallinn Music Week" 
  }
},
{
  name: "Lettonie",
  coords: [56.9496, 24.1052],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/grey-peas.jpg", 
    desc: "Pois gris avec lard" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/riga-old-town.jpg", 
    desc: "Vieille ville de Riga" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/riga-festival.jpg", 
    desc: "Riga City Festival" 
  }
},
{
  name: "Lituanie",
  coords: [54.6872, 25.2797],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/cepelinai.jpg", 
    desc: "Cepelinai (raviolis de pomme de terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/vilnius-old-town.jpg", 
    desc: "Vieille ville de Vilnius" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/kaunas-festival.jpg", 
    desc: "Kaunas Jazz Festival" 
  }
},
{
  name: "Finlande",
  coords: [60.1695, 24.9354],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/karjalanpiirakka.jpg", 
    desc: "Karjalanpiirakka (tarte carélienne)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/helsinki-cathedral.jpg", 
    desc: "Cathédrale d'Helsinki" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/vasaloppet.jpg", 
    desc: "Vappu (fête du printemps)" 
  }
},
{
  name: "Suède",
  coords: [59.3293, 18.0686],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/kottbullar.jpg", 
    desc: "Köttbullar (boulettes de viande)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/stockholm-palace.jpg", 
    desc: "Palais Royal de Stockholm" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/midsommar.jpg", 
    desc: "Midsommar (fête de la mi-été)" 
  }
},

  {
    name: "Ukraine",
    coords: [50.4501, 30.5234],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/varenyky.jpg", desc: "Varenyky (raviolis ukrainiens)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/kyiv-pechersk-lavra.jpg", desc: "Lavra de Kyiv" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/easter-ukraine.jpg", desc: "Pâques ukrainiennes" }
  },
  {
    name: "Biélorussie",
    coords: [53.9006, 27.5590],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/draniki.jpg", desc: "Draniki (galettes de pommes de terre)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/mir-castle.jpg", desc: "Château de Mir" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/slavianski-festival.jpg", desc: "Slavianski Bazaar" }
  },
  {
    name: "Ouzbékistan",
    coords: [41.2995, 69.2401],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/plov.jpg", desc: "Plov (riz pilaf ouzbek)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/registan.jpg", desc: "Registan de Samarcande" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/navruz.jpg", desc: "Navruz (Nouvel An perse)" }
  },
  {
    name: "Kazakhstan",
    coords: [51.1605, 71.4704],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/beshbarmak.jpg", desc: "Beshbarmak (plat à base de viande et nouilles)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/baiterek.jpg", desc: "Tour Bayterek à Astana" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/nowruz-kazakhstan..jpg", desc: "Nauryz (Nouvel An kazakh)" }
  },
  {
    name: "Géorgie",
    coords: [41.7151, 44.8271],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/khachapuri.jpg", desc: "Khachapuri (pain au fromage)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/tbilisi-old-town.jpg", desc: "Vieille ville de Tbilissi" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/tbilisoba.jpg", desc: "Tbilisoba (fête de la ville)" }
  },
  {
    name: "Azerbaïdjan",
    coords: [40.4093, 49.8671],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/plov-az.jpg", desc: "Plov azerbaïdjanais" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/maiden-tower.jpg", desc: "Tour de la Vierge à Bakou" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/novruz-az.jpg", desc: "Novruz (Nouvel An)" }
  },
  
  {
    name: "Moldavie",
    coords: [47.0105, 28.8638],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/mamaliga.jpg", desc: "Mamaliga (polenta moldave)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/orheiul-vei.jpg", desc: "Orheiul Vechi" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/vin-festival.jpg", desc: "Festival du Vin de Moldavie" }
  },
 
  {
    name: "Kirghizistan",
    coords: [42.8746, 74.5698],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/beshbarmak-kg.jpg", desc: "Beshbarmak kirghize" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/son-kul.jpg", desc: "Lac Son-Koul" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/nomad-festival.jpg", desc: "Festival des Nomades" }
  },
  {
    name: "Tadjikistan",
    coords: [38.5598, 68.7870],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/qurutob.jpg", desc: "Qurutob (plat à base de pain et yaourt)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/pamir.jpg", desc: "Monts du Pamir" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/nowruz-tj.jpg", desc: "Navruz" }
  },
  {
    name: "Arménie",
    coords: [40.1792, 44.4991],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/harissa.jpg", desc: "Harissa (plat à base de blé et viande)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/etchmiadzin.jpg", desc: "Cathédrale d’Etchmiadzin" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/eghegnadzor-festival.jpg", desc: "Festival du vin d’Erevan" }
  },
  {
    name: "Turkménistan",
    coords: [37.9601, 58.3261],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/plov-tm.jpg", desc: "Plov turkmène" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/ashgabat.jpg", desc: "Monuments d’Achgabat" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/nowruz-tm.jpg", desc: "Nowruz" }
  },
 
 {
  name: "Togo",
  coords: [6.1319, 1.2228],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/pate-ademe.jpg", 
    desc: "Pâte avec Adémé" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/place-independance.jpg", 
    desc: "Place de l'Indépendance" 
  },
  festival: {
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/evala.webp",
    desc: "Évala (lutte traditionnelle)"
  }
},
{
  name: "Bénin",
  coords: [6.3703, 2.3912],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/amiwo.jpg", 
    desc: "Amiwo (pâte de maïs rouge)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/amazone.jpg", 
    desc: "Statue de l'Amazone" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/amazon-festival.jpg", 
    desc: "Festival des Amazones" 
  }
},

{
  name: "Burkina Faso",
  coords: [12.3714, -1.5197],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/to.jpg", desc: "Tô (pâte de mil ou maïs) avec sauce" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/ruins-ouagadougou.jpg", desc: "Ruines et monuments de Ouagadougou" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/fespaco.jpg", desc: "FESPACO (festival cinéma africain)" }
},
{
  name: "Cameroun",
  coords: [3.8480, 11.5021],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/ndole.jpg", desc: "Ndolé (plat aux feuilles amères et arachides)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/cameroon.jpg", desc: "Mont Cameroun" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/ngondo.jpg", desc: "Festival Ngondo" }
},
{
  name: "République centrafricaine",
  coords: [4.3947, 18.5582],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/images/mamba.jpg", desc: "Mamba (poisson ou viande en sauce)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/bangui-monuments.jpg", desc: "Monuments de Bangui" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/bangui-festival.jpg", desc: "Festival de la musique et danse" }
},
{
  name: "Chine",
  coords: [39.9042, 116.4074],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/jiaozi.jpg", desc: "Jiaozi (raviolis chinois)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/7ef775541fa60c6b357003406910fa1a0a360624/public/bg/GrandeMurailleChine.jpg", desc: "Grande Muraille de Chine" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/chinese-new-year.jpg", desc: "Nouvel An chinois" }
},
{
  name: "Jordanie",
  coords: [31.9454, 35.9284],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/mansaf.jpg", desc: "Mansaf" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/petra.jpg", desc: "Petra (Le Trésor)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/petra-by-night.jpg", desc: "Petra by Night" }
},
{
  name: "Pologne",
  coords: [52.2297, 21.0122],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/pierogi.jpg", desc: "Pierogi" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/wawel-castle.jpg", desc: "Château de Wawel" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/wianki.jpg", desc: "Wianki (fête de la Saint-Jean)" }
},
{
  name: "Tunisie",
  coords: [36.8065, 10.1815],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/brik.jpg", desc: "Brik" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/el-jem.jpg", desc: "Amphithéâtre d'El Jem" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/carthage-festival.jpg", desc: "Festival International de Carthage" }
},
{
  name: "Bolivie",
  coords: [-16.5000, -68.1500],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/saltenas.jpg", desc: "Salteñas" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/uyuni.jpg", desc: "Salar de Uyuni" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/oruro-carnival.jpg", desc: "Carnaval de Oruro" }
},
{
  name: "Vanuatu",
  coords: [-17.7333, 168.3273],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/images/laplap.jpg", desc: "Laplap" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/yasur-volcano.jpg", desc: "Volcan Yasur" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/405c66a7f3d7ac59339936a2f74c962085bc3705/public/bg/naghol.jpg", desc: "Naghol (saut rituel)" }
},
{
  name: "Vietnam",
  coords: [21.0285, 105.8542],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/pho.jpg", desc: "Pho" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/halong-bay.jpg", desc: "Baie d'Ha Long" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/hoi-an-festival.jpg", desc: "Festival des lanternes de Hoi An" }
},
{
  name: "Thaïlande",
  coords: [13.7563, 100.5018],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/pad-thai.jpg", desc: "Pad Thai" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/wat-arun.jpg", desc: "Wat Arun" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/songkran.jpg", desc: "Songkran (fête de l'eau)" }
},
{
  name: "Indonésie",
  coords: [-6.2088, 106.8456],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/nasi-goreng.jpg", desc: "Nasi Goreng" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/borobudur.jpg", desc: "Borobudur" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/kecak-dance.jpg", desc: "Danse Kecak (Bali)" }
},
{
  name: "Philippines",
  coords: [14.5995, 120.9842],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/adobo.jpg", desc: "Adobo" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/banaue-rice-terraces.jpg", desc: "Rizières de Banaue" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/sinulog-festival.jpg", desc: "Festival Sinulog (Cebu)" }
},
{
  name: "Malaisie",
  coords: [3.1390, 101.6869],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/nasi-lemak.jpg", desc: "Nasi Lemak" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/petronas-towers.jpg", desc: "Tours Petronas" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/thaipusam.jpg", desc: "Thaipusam" }
},
{
  name: "Myanmar",
  coords: [16.8409, 96.1735],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/mohinga.jpg", desc: "Mohinga" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/shwedagon-pagoda.jpg", desc: "Pagode Shwedagon" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/thingyan.jpg", desc: "Thingyan (fête de l'eau birmane)" }
},
{
  name: "Cambodge",
  coords: [11.5564, 104.9282],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/amok.jpg", desc: "Amok" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/angkor-wat.jpg", desc: "Angkor Wat" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/bon-om-touk.jpg", desc: "Bon Om Touk (fête de l'eau)" }
},
{
  name: "Laos",
  coords: [17.9757, 102.6331],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/images/larb.jpg", desc: "Larb" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/that-luang.jpg", desc: "That Luang (Vientiane)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/89009e73b62cbea83364f5b96c1d7305975f2810/public/bg/lao-new-year.jpg", desc: "Pi Mai Lao (Nouvel An laotien)" }
},
{
  name: "Arabie saoudite",
  coords: [24.7136, 46.6753],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/kabsa.jpg", desc: "Kabsa" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/diriyah.jpg", desc: "At-Turaif (Diriyah)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/janadriyah.jpg", desc: "Festival de Janadriyah" }
},
{
  name: "Émirats arabes unis",
  coords: [25.2048, 55.2708],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/harees.jpg", desc: "Harees" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/burj-khalifa.jpg", desc: "Burj Khalifa" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/liwa-festival.jpg", desc: "Festival international de Liwa" }
},
{
  name: "Liban",
  coords: [33.8938, 35.5018],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/tabbouleh.jpg", desc: "Tabbouleh" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/baalbek.jpg", desc: "Baalbek (Temple de Bacchus)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/cedars-of-god.jpg", desc: "Cèdres de Dieu" }
},
{
  name: "Israël",
  coords: [32.0853, 34.7818],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/hummus.jpg", desc: "Houmous" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/bahai-gardens.jpg", desc: "Jardins Bahá'ís (Haïfa)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/purim.jpg", desc: "Pourim" }
},
{
  name: "Irak",
  coords: [33.3152, 44.3661],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/masgouf.jpg", desc: "Masgouf" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/ziggurat-of-ur.jpg", desc: "Ziggourat d'Ur" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/nowruz-kirkuk.jpg", desc: "Nowruz à Kirkouk" }
},
{
  name: "Iran",
  coords: [35.6892, 51.3890],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/ghormeh-sabzi.jpg", desc: "Ghormeh Sabzi" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/persepolis.jpg", desc: "Persépolis" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/chaharshanbe-suri.jpg", desc: "Chaharshanbe Suri" }
},
{
  name: "Yémen",
  coords: [15.3694, 44.1910],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/mandi.jpg", desc: "Mandi" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/old-sanaa.jpg", desc: "Vieille ville de Sanaa" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/souk-sanaa.jpg", desc: "Souk Al Milh (marché traditionnel de Sanaa)" }
},
{
  name: "Oman",
  coords: [23.5880, 58.3829],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/images/omani-shuwa.jpg", desc: "Shuwa" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/sultan-qaboos-mosque.jpg", desc: "Grande Mosquée du Sultan Qabous" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/b745095da50a52d42be387aa273c28208827ae5c/public/bg/khareef-salalah.jpg", desc: "Khareef (saison de mousson, Salalah)" }
},
{
  name: "Guatemala",
  coords: [14.6349, -90.5069],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/pepian.jpg", desc: "Pepián" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/tikal.jpg", desc: "Tikal" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/semana-santa-antigua.jpg", desc: "Semana Santa (Antigua)" }
},
{
  name: "Costa Rica",
  coords: [9.9281, -84.0907],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/gallo-pinto.jpg", desc: "Gallo Pinto" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/arenal-volcano.jpg", desc: "Volcan Arenal" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/boruca-diablitos.jpg", desc: "Fiesta de los Diablitos (Boruca)" }
},
{
  name: "Panama",
  coords: [8.9824, -79.5199],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/sancocho-panama.jpg", desc: "Sancocho" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/panama-canal.jpg", desc: "Canal de Panama (Miraflores)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/carnaval-las-tablas.jpg", desc: "Carnaval de Las Tablas" }
},
{
  name: "Haïti",
  coords: [18.5944, -72.3074],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/griot.jpg", desc: "Griot" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/citadelle-laferriere.jpg", desc: "Citadelle Laferrière" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/kanaval-jacmel.jpg", desc: "Kanaval de Jacmel" }
},
{
  name: "République dominicaine",
  coords: [18.4861, -69.9312],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/mangu.jpg", desc: "Mangú" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/catedral-primada.jpg", desc: "Cathédrale Primatiale d'Amérique" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/carnaval-la-vega.jpg", desc: "Carnaval de La Vega" }
},
{
  name: "Jamaïque",
  coords: [17.9712, -76.7936],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/jerk-chicken.jpg", desc: "Jerk Chicken" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/dunns-river-falls.jpg", desc: "Dunn's River Falls" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/jonkonnu-jamaica.jpg", desc: "Jonkonnu" }
},
{
  name: "Trinité-et-Tobago",
  coords: [10.6549, -61.5019],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/doubles.jpg", desc: "Doubles" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/pitch-lake.jpg", desc: "Pitch Lake" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/trinidad-carnival.jpg", desc: "Carnaval de Trinité-et-Tobago" }
},
{
  name: "Bahamas",
  coords: [25.0343, -77.3963],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/images/conch-salad.jpg", desc: "Conch Salad" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/queens-staircase.jpg", desc: "Queen's Staircase (Nassau)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/8ea84e73c4e5401ad2d8e8f3c13bf33dd1ec35ea/public/bg/junkanoo-nassau.jpg", desc: "Junkanoo" }
},
{
  name: "RD Congo",
  coords: [-4.4419, 15.2663],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/moambe.jpg", desc: "Poulet à la Moambe" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/virunga-gorilla.jpg", desc: "Parc national des Virunga (gorilles)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/rumba-congolaise.jpg", desc: "Rumba congolaise" }
},
{
  name: "Angola",
  coords: [-8.8390, 13.2894],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/calulu.jpg", desc: "Calulu" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/kalandula-falls.jpg", desc: "Chutes de Kalandula" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/carnaval-luanda.jpg", desc: "Carnaval de Luanda" }
},
{
  name: "Zambie",
  coords: [-15.3875, 28.3228],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/nshima.jpg", desc: "Nshima" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/victoria-falls.jpg", desc: "Chutes Victoria" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/kuomboka.jpg", desc: "Cérémonie de Kuomboka" }
},
{
  name: "Zimbabwe",
  coords: [-17.8292, 31.0522],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/sadza.jpg", desc: "Sadza" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/great-zimbabwe.jpg", desc: "Ruines du Grand Zimbabwe" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/mbira-zimbabwe.jpg", desc: "Musique Mbira" }
},
{
  name: "Mozambique",
  coords: [-25.9692, 32.5732],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/piri-piri.jpg", desc: "Poulet piri-piri" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/ilha-de-mocambique.jpg", desc: "Île de Mozambique" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/danse-mozambique.jpg", desc: "Danse traditionnelle mozambicaine" }
},
{
  name: "Madagascar",
  coords: [-18.8792, 47.5079],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/romazava.jpg", desc: "Romazava" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/avenue-baobabs.jpg", desc: "Allée des Baobabs" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/hira-gasy.jpg", desc: "Hira Gasy" }
},
{
  name: "Rwanda",
  coords: [-1.9403, 29.8739],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/isombe.jpg", desc: "Isombe" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/volcanoes-np-rwanda.jpg", desc: "Parc national des Volcans (gorilles)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/intore-dance.jpg", desc: "Danse Intore" }
},
{
  name: "Ouganda",
  coords: [0.3476, 32.5825],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/images/matoke.jpg", desc: "Matoke" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/source-of-the-nile.jpg", desc: "Source du Nil (Jinja)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/602f388095a253fe7709023ec3a32dc44e436adb/public/bg/uganda-stick-dance.jpg", desc: "Danse traditionnelle aux bâtons" }
},
{
  name: "Serbie",
  coords: [44.7866, 20.4489],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/cevapi.jpg", desc: "Ćevapi" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/kalemegdan.jpg", desc: "Forteresse de Kalemegdan" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/guca-festival.jpg", desc: "Festival de la trompette de Guča" }
},
{
  name: "Croatie",
  coords: [45.8150, 15.9819],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/strukli.jpg", desc: "Štrukli" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/dubrovnik.jpg", desc: "Vieille ville de Dubrovnik" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/rijeka-carnival.jpg", desc: "Carnaval de Rijeka" }
},
{
  name: "Bosnie-Herzégovine",
  coords: [43.8563, 18.4131],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/burek.jpg", desc: "Burek" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/stari-most.jpg", desc: "Stari Most (Mostar)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/sarajevo-film-festival.jpg", desc: "Festival du film de Sarajevo" }
},
{
  name: "Autriche",
  coords: [48.2082, 16.3738],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/wiener-schnitzel.jpg", desc: "Wiener Schnitzel" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/schonbrunn.jpg", desc: "Château de Schönbrunn" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/christkindlmarkt.jpg", desc: "Marché de Noël viennois" }
},
{
  name: "Suisse",
  coords: [46.9480, 7.4474],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/fondue.jpg", desc: "Fondue" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/matterhorn.jpg", desc: "Cervin (Matterhorn)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/basel-fasnacht.jpg", desc: "Fasnacht de Bâle" }
},
{
  name: "Hongrie",
  coords: [47.4979, 19.0402],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/goulash.jpg", desc: "Gulyás" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/hungarian-parliament.jpg", desc: "Parlement hongrois (Budapest)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/busojaras.jpg", desc: "Busójárás (Mohács)" }
},
{
  name: "République tchèque",
  coords: [50.0755, 14.4378],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/svickova.jpg", desc: "Svíčková" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/charles-bridge.jpg", desc: "Pont Charles (Prague)" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/masopust.jpg", desc: "Masopust" }
},
{
  name: "Irlande",
  coords: [53.3498, -6.2603],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/images/irish-stew.jpg", desc: "Irish Stew" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/cliffs-of-moher.jpg", desc: "Falaises de Moher" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/3f8cb615d85dd1c8703fac5f8e46a644243d6c82/public/bg/st-patricks-day.jpg", desc: "Défilé de la Saint-Patrick" }
}


];

let markers = [];

// Fonction pour afficher les markers selon le choix
function updateMarkers() {
  // Supprime les markers existants
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const choice = document.getElementById('viewSelect').value;

  countriesData.forEach(country => {
    const marker = L.marker(country.coords).addTo(map);
    marker.on('click', () => showInfo(country, choice));
    markers.push(marker);
  });
}

// Affichage de la carte info
function showInfo(country, type) {
  document.getElementById('countryName').textContent = country.name;
  document.getElementById('dishImg').src = country[type].img;
  document.getElementById('dishDesc').textContent = country[type].desc;
  document.getElementById('infoCard').style.display = 'block';
}

// Fermer la carte info
function closeCard() {
  document.getElementById('infoCard').style.display = 'none';
}

// Initialisation
updateMarkers();
