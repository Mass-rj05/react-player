import { v4 as uuidv4 } from "uuid";
function Util() {
  return [
    {
      name: "Slim Bobby",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#C564AC", "#4A2C5F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
    },
    {
      name: "Creswicky",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C564AC", "#4A2C5F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10454",
    },
    {
      name: "Deeper",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C564AC", "#4A2C5F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10460",
    },
    {
      name: "Maple Leaf Pt.2",
      artist: "Philanthrope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F9F9F9", "#8F5339"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
    },
    {
      name: "Wildlife",
      artist: "Philanthrope, chromonicci",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F9F9F9", "#8F5339"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
    },
    {
      name: "Upstate",
      artist: "Philanthrope, Brock Berrigan, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F9F9F9", "#8F5339"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10245",
    },
  ];
}

export default Util;
