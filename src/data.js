import { v4 as uuidv4 } from "uuid";


function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
        name: "Pick me up",
        artist: "Tesk",
        id: uuidv4(),
        active:false,
        cover: "https://chillhop.com/wp-content/themes/chillhop/assets/images/releases/fall-2020/VinylShot_Fall2020.png",
        color: ["#F6C4C3", "#DB6D94"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8171",
    },
    {
        name: "Girls Just Wanna Have Sun",
        artist: "SAINT WKND",
        id: uuidv4(),
        active: false,
        cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
        color: ["#C6E4E7", "#314B6D"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7930",
    },
    {
      name: "Bluetooth Ringtone",
      artist: "Aviino",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      color: ["#A370B5", "#493B63"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10446",
    },
    {
      name: "Deeper",
      artist: "Aviino",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      color: ["#A370B5", "#493B63"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10460",
    },
    {
      name: "Backyard Puddles",
      artist: "Sleepy Fish",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      color: ["#9ACFD7", "#3B7692"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10032",
    },
    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      color: ["#916CA0", "#635681"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
    },
    {
      name: "Velocities",
      artist: "Sleepy Fish",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",
      color: ["#6ECADF", "#196E9C1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7988",
    },
    //ADD MORE HERE
  ];
}

export default chillHop;