import React from 'react';

function LibrarySong({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) {

    const songSelectHan = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);

        const newSongs = songs.map((song) => {
            if (song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }else{
                return{
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        if (isPlaying) audioRef.current.play();
    };

    return (
        <div onClick={songSelectHan} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;

// export const playAudio = (isPlaying, audioRef) => {
//     if (isPlaying){
//         const playPromise = audioRef.current.play();
//         if (playPromise !== undefined) { 
//             playPromise.then((audio) => {
//                 audioRef.current.play();
//             });
//         }
//     }
// };
