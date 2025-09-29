const stationWebsites = {
  "Radio La Unción": "https://radiolauncion.com/",
  "Radio Vida": "https://radiovidacusco.com/",
  "Radio Unión Cristiana": "https://zeno.fm/radio/radio-union-cristiana/",
  "Radio Nueva Luz": "https://radionuevaluzcusco.com/",
  "Radio DiospySuyana": "https://diospisuyanaradio.com/",
  "Al Fin Radio": "https://alfinradio.blogspot.com/?m=1",
  "Radio Poder Celestial": "https://onlineradiobox.com/pe/podercelestial/",
  "Radio Bethel": "https://www.bethel.fm/",
  "Radio La Voz Celestial": "https://www.programalavozcelestial.com/cusco",
  "Radio Nueva Luz Live": "https://radionuevaluzcusco.com/",
  "Radio Fe Avivamiento": "https://www.radiofeavivamiento.com/?m=1"
};

const schedule = [
  {
    startTime: "00:00:00",
    endTime: "04:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Hora Cero con Jesús",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "04:00:00",
    endTime: "05:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "A Solas Con Dios",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "05:56:00",
    endTime: "06:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5, 6, 0],
  },

  //lunes a Viernes ❌📛📛🛑❌❌❌❌❌❌❌❌❌❌


  
  {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
      logo: "/assets/RadioBethel.jpg"
    },
    programName: "Despierta con Bethel",
    days: [1,2,3,4,5],
  },
  {
    startTime: "07:00:00",
    endTime: "07:06:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5 ],
  },
  {
    startTime: "07:06:00",
    endTime: "07:56:00",
    station: {
      name: "Radio Unión Cristiana",
      url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
      logo: "/assets/RadioUnionCristiana.jpg"
    },
    programName: "Fortaleza Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "07:56:00",
    endTime: "08:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:00:00",
    endTime: "08:56:00",
    station:  {
      name: "Radio Diospysuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Mensaje",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:56:00",
    endTime: "09:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:00:00",
    endTime: "09:56:00",
    station: {
      name: "Radio Fe Avivamiento",
      url: "https://conectperu.com/8340/stream",
      logo: "/assets/RadioFeAvivamiento.jpg"
    },
    programName: "Programa N°5",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:56:00",
    endTime: "10:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "10:00:00",
    endTime: "10:56:00",
    station:  {
      name: "Radio Diospysuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Tus Mañanas",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "10:56:00",
    endTime: "11:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "11:00:00",
    endTime: "12:00:00",
    station:  {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Al Aire con Enoc Garcia",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "12:00:00",
    endTime: "13:00:00",
    station:  {
      name: "Radio Diospysuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "D Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "13:00:00",
    endTime: "14:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Vida Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "14:00:00",
    endTime: "14:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "La Voz Celestial",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "14:56:00",
    endTime: "15:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:00:00",
    endTime: "15:56:00",
    station:  {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Retro",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:56:00",
    endTime: "16:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "16:00:00",
    endTime: "17:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°12",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "17:00:00",
    endTime: "18:00:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Zona Libre",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "18:00:00",
    endTime: "20:00:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Encuentro Latinoamericano",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "20:00:00",
    endTime: "20:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Tu Historia Preferida",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Programa Final",
    days: [1, 2, 3, 4, 5],
  },





  // Sábado🟢🟡🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  
  
  {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Amanecer con Dios",
    days: [6],
  },
  {
    startTime: "07:00:00",
    endTime: "11:00:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "break",
    days: [6],
  },

  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio La Voz Celestial",
      url: "https://stream3.rcast.net/67255",
      logo: "/assets/RadioLaVozCelestial.png"
    },
    programName: "Revolución Juvenil",
    days: [6],
  },
  {
    startTime: "13:00:00",
    endTime: "15:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Undefined",
    days: [6],
  },
  {
    startTime: "15:00:00",
    endTime: "20:30:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "indefinido",
    days: [6],
  },
     {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [6],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Programa Final",
    days: [6],
  },





  // Domingo🟥⚪⚪🟥⚪🟥⚪⚪🟧🟥⚪⚪🟥🟥🟧🟥🟥⚪
   {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Programa Especial",
    days: [0],
  },
     {
    startTime: "07:00:00",
    endTime: "08:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "El Sembrador",
    days: [0],
  },
  {
    startTime: "08:00:00",
    endTime: "10:20:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°1",
    days: [0],
  },
  {
    startTime: "10:20:00",
    endTime: "11:00:00",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Break Music",
    days: [0],
  },
  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°2",
    days: [0],
  },
    {
    startTime: "13:00:00",
    endTime: "20:30:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undefined",
    days: [0],
  },
   {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [0],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undefined",
    days: [0],
  }
];
// Elementos del DOM
const radioPlayer = document.getElementById("radioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const nextEventTitle = document.getElementById("nextEventTitle");
const nextEventDetails = document.getElementById("nextEventDetails");
const stationLogo = document.getElementById("stationLogo");
const programProgressBar = document.getElementById("programProgressBar");
const currentDayIndicator = document.getElementById("currentDayIndicator");
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');
const stationsList = document.getElementById('stationsList');

const dayMenu = document.getElementById('dayMenu');
const dayMenuOverlay = document.getElementById('dayMenuOverlay');
const closeDayMenu = document.getElementById('closeDayMenu');
const dayScheduleList = document.getElementById('dayScheduleList');
const dayMenuTitle = document.getElementById('dayMenuTitle');
const connectionStatus = document.getElementById("connectionStatus");

let isPlaying = false;
let pausedManually = false; // Controla si la pausa fue iniciada manualmente por el usuario
let lastCheckedTime = new Date().getTime(); // Para detectar cambios de hora

// Convertir hora en formato HH:mm:ss a segundos desde medianoche
function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

// Verificar si hay conexión a internet
function checkInternetConnection() {
  return navigator.onLine;
}

// Actualizar el indicador de estado de conexión
function updateConnectionStatus() {
  const isOnline = checkInternetConnection();
  
  // Actualizar el estado en el contenido principal
  if (isOnline) {
    connectionStatus.textContent = "Online";
    connectionStatus.className = "online";
  } else {
    connectionStatus.textContent = "Offline";
    connectionStatus.className = "offline";
  }
  
  // Actualizar el estado en el header
  const headerStatus = document.getElementById('headerStatus');
  const headerStatusText = document.getElementById('headerStatusText');
  
  if (headerStatus && headerStatusText) {
    if (isOnline) {
      headerStatus.className = "status-indicator online";
      headerStatusText.textContent = "En línea";
    } else {
      headerStatus.className = "status-indicator offline";
      headerStatusText.textContent = "Sin conexión";
    }
  }
}

// Obtener la estación programada según la hora actual
function getScheduledStation() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  return schedule.find((s) => {
    const startSeconds = timeToSeconds(s.startTime);
    const endSeconds = timeToSeconds(s.endTime);
    return (
      currentSeconds >= startSeconds &&
      currentSeconds < endSeconds &&
      s.days.includes(currentDay)
    );
  });
}



// Actualizar el logo de la estación y la información del programa
function updateStationLogo(scheduled) {
  const logoContainer = document.querySelector('.logo-container');
  const stationNameElement = document.getElementById('stationName');
  const programNameElement = document.getElementById('programName');
  
  if (scheduled && scheduled.station && scheduled.station.logo) {
    stationLogo.src = scheduled.station.logo;
    stationLogo.alt = `Logo de ${scheduled.station.name}`;
    logoContainer.style.display = 'block';
    
    // Actualizar nombre de la estación
    if (stationNameElement) {
      stationNameElement.textContent = scheduled.station.name;
    }
    
    // Actualizar nombre del programa
    if (programNameElement) {
      programNameElement.textContent = scheduled.programName;
    }
  } else {
    stationLogo.src = "";
    stationLogo.alt = "Logo de la estación";
    logoContainer.style.display = 'none';
    
    // Limpiar nombres
    if (stationNameElement) {
      stationNameElement.textContent = "";
    }
    if (programNameElement) {
      programNameElement.textContent = "";
    }
  }
}



// Actualizar la barra de progreso del programa actual
function updateProgramProgress(scheduled) {
  if (scheduled && scheduled.startTime && scheduled.endTime) {
    const now = new Date();
    const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    const startSeconds = timeToSeconds(scheduled.startTime);
    const endSeconds = timeToSeconds(scheduled.endTime);
    const duration = endSeconds - startSeconds;

    if (duration > 0) {
      const elapsed = currentSeconds - startSeconds;
      const progress = (elapsed / duration) * 100;
      programProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    } else {
      programProgressBar.style.width = '0%';
    }
  } else {
    programProgressBar.style.width = '0%';
  }
}

// Reproducir una estación
function playStation(station) {
  // No reproducir si está pausado manualmente
  if (pausedManually) {
    console.log("Reproducción pausada manualmente, no se reproduce automáticamente");
    return;
  }

  if (!checkInternetConnection()) {
    updateConnectionStatus();
    return;
  }

  radioPlayer.src = station.url;
  const playPromise = radioPlayer.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateConnectionStatus();
      })
      .catch((error) => {
        console.error("Error al reproducir:", error);
        updateConnectionStatus();
      });
  }
  updateMediaSession(station);
}

// Función para intentar reconectar
function attemptReconnection(station) {
  if (!checkInternetConnection()) {
    console.log("Sin conexión a internet, no se intenta reconectar.");
    updateConnectionStatus();
    return;
  }

  if (pausedManually) {
    console.log("Reproducción pausada manualmente, no se intenta reconectar.");
    return;
  }

  console.log("Intentando reconectar...");
  updateConnectionStatus();

  radioPlayer.src = station.url;
  const playPromise = radioPlayer.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Reconexión exitosa.");
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateConnectionStatus();
      })
      .catch((error) => {
        console.error("Error al intentar reconectar:", error);
        updateConnectionStatus();
      });
  }
}

// Actualizar la sesión de medios
function updateMediaSession(station, programName = "") {
  if ('mediaSession' in navigator && station) {
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: station.name,
      artist: programName || "Sin programa", // Mostrar el nombre del programa o un valor por defecto
      album: "",
      artwork: [
        { src: station.logo || 'https://img.icons8.com/ios-filled/100/000000/radio.png', sizes: '512x512', type: 'image/png' }
      ]
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      // Pausar la reproducción
      radioPlayer.pause();
      console.log("Reproducción pausada desde MediaSession.");
    });

    navigator.mediaSession.setActionHandler('play', () => {
      // Reanudar la reproducción y actualizar los metadatos
      const scheduled = getScheduledStation();
      if (scheduled) {
        radioPlayer.src = scheduled.station.url; // Asegurar que la URL esté configurada
        radioPlayer.play().then(() => {
          console.log("Reproducción reanudada desde MediaSession.");
          updateMediaSession(scheduled.station, scheduled.programName); // Actualizar metadatos al reanudar
        }).catch((error) => {
          console.error("Error al reanudar la reproducción desde MediaSession:", error);
        });
      }
    });
  }
}

// Verificar y actualizar la estación según el horario
function checkSchedule() {
  // Lógica para detectar un salto en el tiempo (cambio manual o al despertar el PC)
  const currentTime = new Date().getTime();
  const timeDiff = Math.abs(currentTime - lastCheckedTime);
  // Si la diferencia es mayor a 2s (un umbral seguro para un intervalo de 1s), asumimos un cambio.
  const timeChanged = timeDiff > 2000; 
  if (timeChanged) {
    console.log("Salto de tiempo detectado. Forzando actualización de la programación.");
  }
  lastCheckedTime = currentTime; // Actualizar siempre la última hora de verificación
  const scheduled = getScheduledStation();

  updateConnectionStatus(); // Actualizar el estado de conexión

  if (!checkInternetConnection()) {
    if (scheduled) {
      updateStationLogo(scheduled);
      updateProgramProgress(scheduled);
    }
    updateNextEvent();
    return;
  }

  if (scheduled) {
    // Solo actualizar si hubo cambio de hora, URL diferente, o si no está pausado manualmente
    if (timeChanged || radioPlayer.src !== scheduled.station.url) {
      // Solo reproducir si no está pausado manualmente
      if (!pausedManually) {
        console.log("Actualizando estación debido a cambio de horario o URL diferente");
        console.log("Estación actual:", scheduled.station.name, "Programa:", scheduled.programName);
        playStation(scheduled.station);
        updateMediaSession(scheduled.station, scheduled.programName);
      }
    }
    updateStationLogo(scheduled);
    updateProgramProgress(scheduled);
  } else {
    // Solo pausar si no está pausado manualmente
    if (!pausedManually) {
      radioPlayer.pause();
      radioPlayer.src = "";
      updateStationLogo(null);
      updateProgramProgress(null);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    }
  }
  updateNextEvent();
}

// Actualizar el próximo evento
function updateNextEvent() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  let nextEvent = null;
  for (let i = 0; i < 7; i++) {
    const dayToCheck = (currentDay + i) % 7;
    nextEvent = schedule.find((s) => {
      const startSeconds = timeToSeconds(s.startTime);
      return (
        s.days.includes(dayToCheck) &&
        (i === 0 ? startSeconds > currentSeconds : true)
      );
    });
    if (nextEvent) break;
  }

  nextEventTitle.textContent = "Próximo evento:";
  nextEventTitle.classList.remove("blink-red");

  if (nextEvent) {
    nextEventDetails.textContent = nextEvent.programName || "Sin nombre";
    const nextStartSeconds = timeToSeconds(nextEvent.startTime);
    let secondsToNext = nextStartSeconds - currentSeconds;
    if (secondsToNext < 0) secondsToNext += 24 * 3600;
    if (secondsToNext <= 60) {
      nextEventTitle.classList.add("blink-red");
    }
  } else {
    nextEventDetails.textContent = "No hay más eventos programados.";
  }
}

// Actualizar el indicador del día actual
function updateCurrentDayIndicator() {
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const currentDay = daysOfWeek[new Date().getDay()];
  currentDayIndicator.alt = `Ver programación del ${currentDay}`;
  currentDayIndicator.title = `Programación del ${currentDay}`;
}

// Manejar el botón de reproducir/pausar
playPauseButton.addEventListener("click", () => {
  if (radioPlayer.paused) {
    // Reanudar la reproducción
    pausedManually = false;
    console.log("Pausa manual reseteada - reproducción iniciada por usuario");

    const scheduled = getScheduledStation();
    if (scheduled) {
      if (!checkInternetConnection()) {
        updateConnectionStatus();
        return;
      }
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station, scheduled.programName); // Actualizar metadatos al reanudar
      }).catch((error) => {
        console.error("Error al reanudar la reproducción:", error);
      });
    }
  } else {
    // Pausar la reproducción
    pausedManually = true;
    console.log("Pausa manual activada por usuario");
    radioPlayer.pause();
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
    updateConnectionStatus();

    // Actualizar MediaSession con el programa actual al pausar
    const scheduled = getScheduledStation();
    if (scheduled) {
      updateMediaSession(scheduled.station, scheduled.programName);
    }
  }
});

// Actualizar ícono cuando el audio se pausa o reproduce
radioPlayer.addEventListener("play", () => {
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
  isPlaying = true;
  // Solo actualizar estado de conexión si no está pausado manualmente
  if (!pausedManually) {
    updateConnectionStatus();
  }
});

radioPlayer.addEventListener("pause", () => {
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
  // Solo actualizar estado de conexión si no está pausado manualmente
  if (!pausedManually) {
    updateConnectionStatus();
  }
});

// Manejar eventos de error y stalled
radioPlayer.addEventListener("error", () => {
  console.log("Error en el reproductor detectado.");
  updateConnectionStatus();
});

radioPlayer.addEventListener("stalled", () => {
  console.log("Streaming detenido (stalled).");
  updateConnectionStatus();
});

// Detectar cuando el usuario interactúa con el reproductor desde otras aplicaciones
radioPlayer.addEventListener("play", () => {
  // Si el reproductor se reproduce desde otra aplicación, resetear pausa manual
  if (pausedManually) {
    console.log("Reproducción iniciada desde otra aplicación - reseteando pausa manual");
    pausedManually = false;
  }
});

radioPlayer.addEventListener("pause", () => {
  // Si el reproductor se pausa desde otra aplicación, marcar como pausa manual
  if (!pausedManually) {
    console.log("Pausa iniciada desde otra aplicación - activando pausa manual");
    pausedManually = true;
  }
});

// Detectar pérdida y reconexión de red
window.addEventListener("offline", () => {
  console.log("Conexión a la red perdida.");
  updateConnectionStatus();
  // Pausamos el reproductor explícitamente pero sin marcarlo como pausa manual
  // para que pueda reanudarse automáticamente al volver la conexión.
  radioPlayer.pause();
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
});

window.addEventListener("online", () => {
  console.log("Conexión a la red restaurada.");
  updateConnectionStatus();
  
  // Intentar reconectar automáticamente cuando se restaura la conexión
  // con un pequeño delay para asegurar que la conexión esté estable
  const scheduled = getScheduledStation();
  if (scheduled && !pausedManually) {
    console.log("Intentando reconectar automáticamente...");
    setTimeout(() => {
      attemptReconnection(scheduled.station);
    }, 1000); // 1 segundo de delay para conexión estable
  }
});

// Detectar cuando la página vuelve a estar activa
window.addEventListener("focus", () => {
  console.log("Página vuelve a estar activa, verificando programación...");
  checkSchedule();
});

// Detectar cambios de visibilidad de la página
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    console.log("Página vuelve a ser visible, verificando programación...");
    checkSchedule();
  }
});

// Manejar clics y teclado en currentDayIndicator
function openDayMenu() {
  dayMenu.classList.add('open');
  dayMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  loadDaySchedule();
}

currentDayIndicator.addEventListener("click", openDayMenu);
currentDayIndicator.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    openDayMenu();
  }
});

// Ocultar preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}

// Inicialización
window.addEventListener("load", () => {
  // Registrar el Service Worker para mantener la app activa en segundo plano
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.log('Error al registrar el Service Worker:', error);
      });
  }

  const preloader = document.getElementById("preloader");
  const preloaderMsg = document.getElementById("preloaderMsg");
  const preloaderStart = document.getElementById("preloaderStart");
  const scheduled = getScheduledStation();

  updateCurrentDayIndicator();
  updateConnectionStatus(); // Inicializar el estado de conexión
  checkSchedule();

  // Mostrar información de la estación y programa en el preloader
  if (scheduled) {
    preloaderMsg.innerHTML = `
      <div style="margin-bottom: 15px;">
        <strong style="color: #fff; font-size: 18px;">${scheduled.station.name}</strong>
      </div>
      <div style="margin-bottom: 10px;">
        <span style="color: #ccc; font-size: 14px;">${scheduled.programName}</span>
      </div>
    `;
  } else {
    preloaderMsg.innerHTML = `
      <div style="color: #888; font-size: 14px;">
        No hay programación actual
      </div>
    `;
  }

  function iniciarRadio() {
    hidePreloader();
    if (scheduled) {
      // Si ya está reproduciendo, solo ocultar el preloader
      if (isPlaying) {
        return;
      }
      // Si no está reproduciendo, intentar reproducir
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station, scheduled.programName);
        updateConnectionStatus();
      }).catch(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
        isPlaying = false;
        updateConnectionStatus();
      });
    } else {
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
      updateConnectionStatus();
    }
  }

  if (scheduled) {
    // Intentar reproducción automática con un pequeño delay
    setTimeout(() => {
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        hidePreloader();
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station, scheduled.programName);
        updateConnectionStatus();
      }).catch(() => {
        preloaderMsg.innerHTML = `
          <div style="margin-bottom: 15px;">
            <strong style="color: #fff; font-size: 18px;">${scheduled.station.name}</strong>
          </div>
          <div style="margin-bottom: 10px;">
            <span style="color: #ccc; font-size: 14px;">${scheduled.programName}</span>
          </div>
        
          <div style="color: #888; font-size: 12px;">
            ✝️ ¡Hoy puede ser un día de bendición!<br>
            Dale clic a "Iniciar" y permite que Dios hable a tu corazón.
          </div>
        `;
        preloaderStart.style.display = "inline-block";
        preloaderStart.onclick = iniciarRadio;
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
        isPlaying = false;
        updateConnectionStatus();
      });
    }, 5000); // Delay de 1 segundo para la reproducción automática
  } else {
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
      hidePreloader();
      updateConnectionStatus();
    }
});

// ===== CONFIGURACIÓN DE TIEMPO DE RESPUESTA =====
// Verificar el horario cada 500ms para mayor responsividad
// Puedes cambiar el valor 500 por:
// - 1000 (1 segundo) para menos uso de CPU
// - 250 (0.25 segundos) para respuesta más rápida
// - 100 (0.1 segundos) para respuesta muy rápida (más uso de CPU)
setInterval(() => {
  checkSchedule();
  updateCurrentDayIndicator();
  
  
}, 1000);

// Función de debug para verificar el estado del sistema
function debugSchedule() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const currentDay = now.toLocaleDateString('es-ES', { weekday: 'long' });
  const scheduled = getScheduledStation();
  
  console.log("=== DEBUG SCHEDULE ===");
  console.log("Hora actual:", currentTime);
  console.log("Día actual:", currentDay);
  console.log("Estación programada:", scheduled ? scheduled.station.name : "Ninguna");
  console.log("Programa actual:", scheduled ? scheduled.programName : "Ninguno");
  console.log("Reproduciendo:", isPlaying);
  console.log("Pausado manualmente:", pausedManually);
  console.log("Reproductor pausado:", radioPlayer.paused);
  console.log("Conexión a internet:", checkInternetConnection());
  console.log("Estado del reproductor:");
  console.log("  - ReadyState:", radioPlayer.readyState);
  console.log("  - NetworkState:", radioPlayer.networkState);
  console.log("  - Error:", radioPlayer.error);
  console.log("  - Src:", radioPlayer.src);
  console.log("=====================");
}

// Descomenta la línea siguiente para activar logs de debug cada 5 segundos
// setInterval(debugSchedule, 5000);

// ===== FUNCIONES DEL MENÚ =====
function openMenu() {
  sideMenu.classList.add('open');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  loadStationsList();
}

function closeMenuFunc() {
  sideMenu.classList.remove('open');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function loadStationsList() {
  stationsList.innerHTML = '';
  const uniqueStations = new Map();
  schedule.forEach(item => {
    if (!uniqueStations.has(item.station.name)) {
      uniqueStations.set(item.station.name, item.station);
    }
  });

  uniqueStations.forEach((station, stationName) => {
    const stationItem = document.createElement('div');
    stationItem.className = 'station-item';
    const website = stationWebsites[stationName] || '#';

    stationItem.innerHTML = `
      <img src="${station.logo}" alt="${stationName}" class="station-logo">
      <div class="station-info">
        <div class="station-name">${stationName}</div>
        <div class="station-description"></div>
      </div>
    `;

    stationItem.addEventListener('click', () => {
      window.open(website, '_blank');
      closeMenuFunc();
    });

    stationsList.appendChild(stationItem);
  });
}

menuButton.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
menuOverlay.addEventListener('click', closeMenuFunc);



document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sideMenu.classList.contains('open')) {
    closeMenuFunc();
  }
});

// ===== FUNCIONES DEL MENÚ DEL DÍA =====
function closeDayMenuFunc() {
  dayMenu.classList.remove('open');
  dayMenuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function loadDaySchedule() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  
  dayMenuTitle.textContent = `Programación ${daysOfWeek[currentDay]}`;
  dayScheduleList.innerHTML = '';

  const daySchedule = schedule.filter(s => s.days.includes(currentDay));

  if (daySchedule.length === 0) {
    dayScheduleList.innerHTML = '<div style="color: white; text-align: center; padding: 20px;">No hay programación para este día.</div>';
    return;
  }

  daySchedule.sort((a, b) => timeToSeconds(a.startTime) - timeToSeconds(b.startTime));

  daySchedule.forEach(program => {
    const startSeconds = timeToSeconds(program.startTime);
    const endSeconds = timeToSeconds(program.endTime);
    const isCurrent = currentSeconds >= startSeconds && currentSeconds < endSeconds;
    const isPast = currentSeconds > endSeconds;

    const scheduleItem = document.createElement('div');
    scheduleItem.className = `day-schedule-item ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}`;

    let statusText = isCurrent ? 'EN CURSO' : isPast ? 'FINALIZADO' : 'PRÓXIMO';
    let statusClass = isCurrent ? 'current' : isPast ? 'past' : 'upcoming';

    scheduleItem.innerHTML = `
      <div class="day-schedule-time">
        ${program.startTime.substring(0, 5)}
      </div>
      <img src="${program.station.logo}" alt="${program.station.name}" class="day-schedule-logo">
      <div class="day-schedule-info">
        <div class="day-schedule-program">${program.programName}</div>
      </div>
      <div class="day-schedule-status ${statusClass}">${statusText}</div>
    `;

 

    dayScheduleList.appendChild(scheduleItem);
  });

  setTimeout(() => {
    const currentProgramElement = dayScheduleList.querySelector('.day-schedule-item.current');
    if (currentProgramElement) {
      currentProgramElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function getDaysText(days) {
  const daysNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return days.map(day => daysNames[day]).join(', ');
}

closeDayMenu.addEventListener('click', closeDayMenuFunc);
dayMenuOverlay.addEventListener('click', closeDayMenuFunc);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (dayMenu.classList.contains('open')) {
      closeDayMenuFunc();
    } else if (sideMenu.classList.contains('open')) {
      closeMenuFunc();
    }
  }
});
