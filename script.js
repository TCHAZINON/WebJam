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
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Baguette.jpg",
      desc: "Baguette et fromage" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/LaTourEiffel.jpg", 
      desc: "Tour Eiffel" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/france.jpg", // tu peux changer si tu veux
      desc: "Culture française et gastronomie" 
    }
  },
 
  {
    name: "Japon",
    coords: [35.6762, 139.6503],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/sushi.jpg", 
      desc: "Sushi" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Cerisiers.jpg", 
      desc: "Mont Fuji et cerisiers" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Hanami.jpg", 
      desc: "Hanami" 
    }
  },
  {
    name: "Italie",
    coords: [41.9028, 12.4964],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Pasta.jpg",
      desc: "Pasta" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/LeColis%C3%A9edeRome.jpg", 
      desc: "Colisée de Rome" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/venise.jpg", 
      desc: "Carnaval de Venise" 
    }
  },
  {
    name: "Brésil",
    coords: [-15.7801, -47.9292],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Feijoada.jpg",
      desc: "Feijoada" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/christ.jpg", 
      desc: "Christ Rédempteur" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/rio.jpg", 
      desc: "Carnaval de Rio" 
    }
  },
  {
    name: "Inde",
    coords: [28.6139, 77.2090],
    dish: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Curry.jpg",
      desc: "Curry et riz" 
    },
    monument: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/TajMahal.jpg", 
      desc: "Taj Mahal" 
    },
    festival: { 
      img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Diwali.jpg", 
      desc: "Diwali" 
    }
  },

{
  name: "Espagne",
  coords: [40.4168, -3.7038],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/paella.jpg", desc: "Paella" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/SagradaFamilia.jpg", desc: "Sagrada Familia" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Tomatina.jpg", desc: "La Tomatina" }
},
{
  name: "Allemagne",
  coords: [52.52, 13.405],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Saucissesetbi%C3%A8re.jpg", desc: "Saucisses et bière" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Brandebourg.jpg", desc: "Porte de Brandebourg" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Oktoberfest.jpg", desc: "Oktoberfest" }
},
{
  name: "Grèce",
  coords: [37.9838, 23.7275],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Moussaka.jpg", desc: "Moussaka" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Parthenon.jpg", desc: "Parthénon" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Patras.jpg", desc: "Carnaval de Patras" }
},
{
  name: "Royaume-Uni",
  coords: [51.5074, -0.1278],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/fishandchips.jpg", desc: "Fish and Chips" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/BigBen.jpg", desc: "Big Ben" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/NottingHill.jpg", desc: "Carnaval de Notting Hill" }
},
{
  name: "Portugal",
  coords: [38.7169, -9.139],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/bacalhau.jpg", desc: "Bacalhau" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Belem.jpg", desc: "Tour de Belém" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/SantoAntonio.jpg", desc: "Fête de Santo António" }
},
{
  name: "Turquie",
  coords: [41.0082, 28.9784],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Kebab.jpg", desc: "Kebab" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/SainteSophie.jpg", desc: "Sainte-Sophie" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Derviches.jpg", desc: "Festival des Derviches" }
},
{
  name: "Russie",
  coords: [55.7558, 37.6173],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/bortsch.jpg", desc: "Bortsch (soupe de betteraves)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/red-square.jpg", desc: "Place Rouge et cathédrale Saint-Basile, à deux pas du Kremlin" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Maslenitsa.jpg", desc: "Maslenitsa (festival slave du printemps)" }
},
{
  name: "Pays-Bas",
  coords: [52.3676, 4.9041],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/fromage.jpg", desc: "Gouda et harengs" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Moulins.jpg", desc: "Moulins de Kinderdijk" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/KingDay..jpg", desc: "Fête du Roi" }
},
{
  name: "Sénégal",
  coords: [14.7167, -17.4677],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/thi%C3%A9boudienne.jpg", desc: "Thiéboudienne" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/MonumentRenaissance.jpg", desc: "Monument de la Renaissance africaine" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Dakar.jpg", desc: "Festival de Dakar" }
},
{
  name: "Nigeria",
  coords: [9.0579, 7.4951],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/jollof.jpg", desc: "Jollof rice" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/ZumaRock.jpg", desc: "Zuma Rock" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Lagos.jpg", desc: "Carnaval de Lagos" }
},
{
  name: "Afrique du Sud",
  coords: [-25.7479, 28.2293],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/bobotie.jpg", desc: "Bobotie" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/TableMountain.jpg", desc: "Table Mountain" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/CapeTown.jpg", desc: "Cape Town Jazz Festival" }
},
{
  name: "Égypte",
  coords: [30.0444, 31.2357],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Koshari.jpg", desc: "Koshari" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Pyramides.jpg", desc: "Pyramides de Gizeh" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Louxor.jpg", desc: "Festival de Louxor" }
},
{
  name: "Maroc",
  coords: [31.6295, -7.9811],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/couscous.jpg", desc: "Couscous" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Marrakech.jpg", desc: "Place Jemaa el-Fna" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Fes.jpg", desc: "Festival de Fès" }
},
{
  name: "Côte d’Ivoire",
  coords: [5.3167, -4.0333],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/atti%C3%A9k%C3%A9.jpg", desc: "Attiéké et poisson" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/BasiliqueYamoussoukro.jpg", desc: "Basilique de Yamoussoukro" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Masa.jpg", desc: "MASA d’Abidjan" }
},
{
  name: "Kenya",
  coords: [-1.2921, 36.8219],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/ugali.jpg", desc: "Ugali et sukuma wiki" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/MontKenya.jpg", desc: "Mont Kenya" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Lamu.jpg", desc: "Festival de Lamu" }
},
{
  name: "Éthiopie",
  coords: [9.03, 38.74],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/injera.jpg", desc: "Injera et wot" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Lalibela.jpg", desc: "Églises de Lalibela" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Timkat.jpg", desc: "Timkat" }
},
{
  name: "Ghana",
  coords: [5.55, -0.2],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/fufu.jpg", desc: "Fufu et soupe" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/CapeCoast.jpg", desc: "Château de Cape Coast" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Homowo.jpg", desc: "Festival Homowo" }
},
{
  name: "Tanzanie",
  coords: [-6.8, 39.2833],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/nyamaChoma.jpg", desc: "Nyama Choma" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Kilimandjaro.jpg", desc: "Mont Kilimandjaro" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Zanzibar.jpg", desc: "Festival de Zanzibar" }
},
{
  name: "États-Unis",
  coords: [38.9072, -77.0369],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/burger.jpg", desc: "Hamburger" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/StatueLiberte.jpg", desc: "Statue de la Liberté" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Thanksgiving.jpg", desc: "Thanksgiving" }
},
{
  name: "Canada",
  coords: [45.4215, -75.6972],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Poutine.jpg", desc: "Poutine" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Niagara.jpg", desc: "Chutes du Niagara" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/MontrealJazz.jpg", desc: "Festival de Jazz de Montréal" }
},

{
  name: "Mexique",
  coords: [19.4326, -99.1332],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/Tacos.jpg", desc: "Tacos" },
  monument: { img: "public/bg/ChichenItza.jpg", desc: "Chichen Itza" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/JourDesMorts.jpg", desc: "Jour des morts" }
},
{
  name: "Argentine",
  coords: [-34.6037, -58.3816],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/asado.jpg", desc: "Asado" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Obelisco.jpg", desc: "Obélisque de Buenos Aires" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Tango.jpg", desc: "Festival de Tango" }
},
{
  name: "Cuba",
  coords: [23.1136, -82.3666],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/ropaVieja.jpg", desc: "Ropa Vieja" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Malecon.jpg", desc: "Malecón de La Havane" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/CarnavalLaHavane.jpg", desc: "Carnaval de La Havane" }
},
{
  name: "Chili",
  coords: [-33.4489, -70.6693],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/empanadas.jpg", desc: "Empanadas chilenas" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Valparaiso.jpg", desc: "Valparaíso" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/FiestasPatrias.jpg", desc: "Fiestas Patrias" }
},
{
  name: "Pérou",
  coords: [-12.0464, -77.0428],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/ceviche.jpg", desc: "Ceviche" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/MachuPicchu.jpg", desc: "Machu Picchu" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/IntiRaymi.jpg", desc: "Inti Raymi" }
},
{
  name: "Colombie",
  coords: [4.711, -74.0721],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/arepas.jpg", desc: "Arepas" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/Medellin.jpg", desc: "Plaza Botero à Medellín" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/FeriaFlores.jpg", desc: "Feria de las Flores" }
},
{
  name: "Venezuela",
  coords: [10.4806, -66.9036],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/arepa.jpg", desc: "Arepa vénézuélienne" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/AngelFalls.jpg", desc: "Salto Ángel" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/CarnavalVenezuela..jpg", desc: "Carnaval vénézuélien" }
},
{
  name: "Australie",
  coords: [-33.8688, 151.2093],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/vegemite.jpg", 
    desc: "Vegemite sur toast" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/opera-house.jpg", 
    desc: "Opéra de Sydney" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/mardi-gras-sydney.jpg", 
    desc: "Mardi Gras de Sydney" 
  }
},
{
  name: "Nouvelle-Zélande",
  coords: [-36.8485, 174.7633],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/hangi.jpg", 
    desc: "Hangi (plat maori cuit sous terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/hobbiton.jpg", 
    desc: "Hobbiton" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/matariki.jpg", 
    desc: "Matariki (Nouvel An maori)" 
  }
},
{
  name: "Fidji",
  coords: [-17.7134, 178.0650],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/kokoda.jpg", 
    desc: "Kokoda (poisson mariné au lait de coco)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/mamanuca.jpg", 
    desc: "Îles Mamanuca" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/fiji-festival.jpg", 
    desc: "Fiji Day" 
  }
},
{
  name: "Papouasie-Nouvelle-Guinée",
  coords: [-6.3149, 143.9555],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/mumu.jpg", 
    desc: "Mumu (plat cuit sous terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/tari.jpg", 
    desc: "Festival de Tari" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/sing-sing.jpg", 
    desc: "Sing-Sing (rencontre culturelle)" 
  }
},
{
  name: "Samoa",
  coords: [-13.7590, -172.1046],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/oka.jpg", 
    desc: "Oka (poisson cru au lait de coco)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/aga-falls.jpg", 
    desc: "Aga Falls" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/samoa-festival.jpg", 
    desc: "Teuila Festival" 
  }
},
{
  name: "Estonie",
  coords: [59.4370, 24.7536],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/verivorst.jpg", 
    desc: "Verivorst (boudin noir estonien)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/tallinn-old-town.jpg", 
    desc: "Vieille ville de Tallinn" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/tallinn-festival.jpg", 
    desc: "Tallinn Music Week" 
  }
},
{
  name: "Lettonie",
  coords: [56.9496, 24.1052],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/grey-peas.jpg", 
    desc: "Pois gris avec lard" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/riga-old-town.jpg", 
    desc: "Vieille ville de Riga" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/riga-festival.jpg", 
    desc: "Riga City Festival" 
  }
},
{
  name: "Lituanie",
  coords: [54.6872, 25.2797],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/cepelinai.jpg", 
    desc: "Cepelinai (raviolis de pomme de terre)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/vilnius-old-town.jpg", 
    desc: "Vieille ville de Vilnius" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/kaunas-festival.jpg", 
    desc: "Kaunas Jazz Festival" 
  }
},
{
  name: "Finlande",
  coords: [60.1695, 24.9354],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/karjalanpiirakka.jpg", 
    desc: "Karjalanpiirakka (tarte carélienne)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/helsinki-cathedral.jpg", 
    desc: "Cathédrale d'Helsinki" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/vasaloppet.jpg", 
    desc: "Vappu (fête du printemps)" 
  }
},
{
  name: "Suède",
  coords: [59.3293, 18.0686],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/kottbullar.jpg", 
    desc: "Köttbullar (boulettes de viande)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/stockholm-palace.jpg", 
    desc: "Palais Royal de Stockholm" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/midsommar.jpg", 
    desc: "Midsommar (fête de la mi-été)" 
  }
},

  {
    name: "Ukraine",
    coords: [50.4501, 30.5234],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/varenyky.jpg", desc: "Varenyky (raviolis ukrainiens)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/kyiv-pechersk-lavra.jpg", desc: "Lavra de Kyiv" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/easter-ukraine.jpg", desc: "Pâques ukrainiennes" }
  },
  {
    name: "Biélorussie",
    coords: [53.9006, 27.5590],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/draniki.jpg", desc: "Draniki (galettes de pommes de terre)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/mir-castle.jpg", desc: "Château de Mir" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/slavianski-festival.jpg", desc: "Slavianski Bazaar" }
  },
  {
    name: "Ouzbékistan",
    coords: [41.2995, 69.2401],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/plov.jpg", desc: "Plov (riz pilaf ouzbek)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/registan.jpg", desc: "Registan de Samarcande" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/navruz.jpg", desc: "Navruz (Nouvel An perse)" }
  },
  {
    name: "Kazakhstan",
    coords: [51.1605, 71.4704],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/beshbarmak.jpg", desc: "Beshbarmak (plat à base de viande et nouilles)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/baiterek.jpg", desc: "Tour Bayterek à Astana" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/nowruz-kazakhstan..jpg", desc: "Nauryz (Nouvel An kazakh)" }
  },
  {
    name: "Géorgie",
    coords: [41.7151, 44.8271],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/khachapuri.jpg", desc: "Khachapuri (pain au fromage)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/tbilisi-old-town.jpg", desc: "Vieille ville de Tbilissi" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/tbilisoba.jpg", desc: "Tbilisoba (fête de la ville)" }
  },
  {
    name: "Azerbaïdjan",
    coords: [40.4093, 49.8671],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/plov-az.jpg", desc: "Plov azerbaïdjanais" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/maiden-tower.jpg", desc: "Tour de la Vierge à Bakou" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/novruz-az.jpg", desc: "Novruz (Nouvel An)" }
  },
  
  {
    name: "Moldavie",
    coords: [47.0105, 28.8638],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/mamaliga.jpg", desc: "Mamaliga (polenta moldave)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/orheiul-vei.jpg", desc: "Orheiul Vechi" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/vin-festival.jpg", desc: "Festival du Vin de Moldavie" }
  },
 
  {
    name: "Kirghizistan",
    coords: [42.8746, 74.5698],
    dish: { img: "public/images/beshbarmak-kg.jpg", desc: "Beshbarmak kirghize" },
    monument: { img: "public/bg/son-kul.jpg", desc: "Lac Son-Koul" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/nomad-festival.jpg", desc: "Festival des Nomades" }
  },
  {
    name: "Tadjikistan",
    coords: [38.5598, 68.7870],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/qurutob.jpg", desc: "Qurutob (plat à base de pain et yaourt)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/pamir.jpg", desc: "Monts du Pamir" },
    festival: { img: "public/bg/nowruz-tj.jpg", desc: "Navruz" }
  },
  {
    name: "Arménie",
    coords: [40.1792, 44.4991],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/harissa.jpg", desc: "Harissa (plat à base de blé et viande)" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/etchmiadzin.jpg", desc: "Cathédrale d’Etchmiadzin" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/eghegnadzor-festival.jpg", desc: "Festival du vin d’Erevan" }
  },
  {
    name: "Turkménistan",
    coords: [37.9601, 58.3261],
    dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/plov-tm.jpg", desc: "Plov turkmène" },
    monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/ashgabat.jpg", desc: "Monuments d’Achgabat" },
    festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/nowruz-tm.jpg", desc: "Nowruz" }
  },
 
 {
  name: "Togo",
  coords: [6.1319, 1.2228],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/pate-ademe.jpg", 
    desc: "Pâte avec Adémé" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/place-independance.jpg", 
    desc: "Place de l'Indépendance" 
  },
  festival: {
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/evala.webp",
    desc: "Évala (lutte traditionnelle)"
  }
},
{
  name: "Bénin",
  coords: [6.3703, 2.3912],
  dish: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/amiwo.jpg", 
    desc: "Amiwo (pâte de maïs rouge)" 
  },
  monument: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/amazone.jpg", 
    desc: "Statue de l'Amazone" 
  },
  festival: { 
    img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/amazon-festival.jpg", 
    desc: "Festival des Amazones" 
  }
},

{
  name: "Burkina Faso",
  coords: [12.3714, -1.5197],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/to.jpg", desc: "Tô (pâte de mil ou maïs) avec sauce" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/ruins-ouagadougou.jpg", desc: "Ruines et monuments de Ouagadougou" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/fespaco.jpg", desc: "FESPACO (festival cinéma africain)" }
},
{
  name: "Cameroun",
  coords: [3.8480, 11.5021],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/ndole.jpg", desc: "Ndolé (plat aux feuilles amères et arachides)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/cameroon.jpg", desc: "Mont Cameroun" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/ngondo.jpg", desc: "Festival Ngondo" }
},
{
  name: "République centrafricaine",
  coords: [4.3947, 18.5582],
  dish: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/images/mamba.jpg", desc: "Mamba (poisson ou viande en sauce)" },
  monument: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/bangui-monuments.jpg", desc: "Monuments de Bangui" },
  festival: { img: "https://raw.githubusercontent.com/TCHAZINON/WebJam/main/public/bg/bangui-festival.jpg", desc: "Festival de la musique et danse" }
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
