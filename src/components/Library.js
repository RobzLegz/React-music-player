import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import LibrarySong from "./LibrarySong";

function Library({songs, setCurrentSong, audioRef, isPlaying, setSongs,libraryStatus}) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong 
                        setSongs={setSongs}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs} 
                        setCurrentSong={setCurrentSong} 
                        song={song}
                        key={song.id}
                        id={song.id}
                    />
                ))}
            </div>            
        </div>
    );
};

export default Library;
