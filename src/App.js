import React, {useState, useRef} from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from './data';
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {

  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHan = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const reoundedCurrent = Math.round(current);
    const reoundedDuraton = Math.round(duration);
    const animation = Math.round((reoundedCurrent / reoundedDuraton) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animation});
  };

  const songEndHan = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player 
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library 
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio 
        onTimeUpdate={timeUpdateHan} 
        ref={audioRef} 
        onLoadedMetadata={timeUpdateHan}
        src={currentSong.audio}
        onEnded={songEndHan}
      ></audio>
    </div>
  );
}

export default App;
