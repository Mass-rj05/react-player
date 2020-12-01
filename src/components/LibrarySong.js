import React from "react";
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  currentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(song);

    //Add active state
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === currentSong.id,
        };
      })
    );
    //check if the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name} </h3>
        <h4>{song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
