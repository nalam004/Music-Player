import {musicList} from './data/music'
import { useState } from "react"
import albumCover from './assets/album-cover.jpg'

function App() {
  
  const [isPlaying, setIsPlaying] =  useState<boolean[]>([]);
  const [currPlaying, setCurrPlaying] =  useState(false);
  const play = <img alt='' src="https://img.icons8.com/ios/250/ffffff/play--v1.png"/>
  const pause = <img alt='' src="https://img.icons8.com/ios/250/ffffff/pause--v1.png"/>
  const bigPlay = <img alt='' src="https://img.icons8.com/ios/256/F472B6/circled-play--v1.png"/>
  const bigPause = <img alt='' src="https://img.icons8.com/ios/256/F472B6/circled-pause--v1.png"/>
  const [song, setSong] = useState("Hello");
  const [artist, setArtist] = useState("Adele");
  const [length, setLength] = useState("2:56");

  function handleClick(index: number, song: string, artist: string, length: string) {
    // a boolean array with items initialized to false 
    let playing = isPlaying.map((val: boolean) => { return (val = false); }); 
    playing = playing.slice();
    playing[index] = !currPlaying;
    setIsPlaying(playing);

    // player btn depends on if one of playlist btn is playing 
    setCurrPlaying(playing[index]);

    // sets states to current song playing
    setSong(song);
    setArtist(artist);
    setLength(length);
  }
  
  function handleNext() {
    // if a song is playing -- when isPlaying has a true value
      // find the index
      // set next index to true and previous index false
      
      let index = isPlaying.indexOf(true); 
      
  }

  return (
    <div className="flex flex-row justify-center items-center min-h-full">
    
      <div id='container' className="flex flex-col lg:flex-row bg-white bg-opacity-10 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
        style={{ backdropFilter: 'blur(5px)', }} >
          
          <div id='music-player' className="items-center bg-white bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
              style={{ backdropFilter: 'blur(5px)', }} >

            <img src={albumCover} alt="album art" />
            <div id="song-details" className="pt-3 text-center">
                <h1 className="text-xl text-white font-bold tracking-wide">{song}</h1>
                <p className="text-md text-gray-600 tracking-wide">{artist}</p>
            </div>
            
            <div id="progress" className="w-4/5">
                <div id="progress-time" className="flex text-sm text-white justify-between pl-1 pr-1">
                    <p className="start">1:30</p>
                    <p className="end">{length}</p>
                </div>
                <div id="progress-bar" className="h-2 mt-3 bg-white rounded">
                  <div id="inner-bar" className="w-1/2 h-full bg-pink-400 rounded rounded-r-none"></div>
                </div>
            </div>
            
            <ul className="p-3 flex items-center">
              <button id="shuffle" className="w-6 m-2 transform hover:scale-110 motion-reduce:transform-none"><img alt='' src="https://img.icons8.com/ios/250/ffffff/shuffle.png"/></button>
              <button id="back" className="w-6 m-2 transform hover:scale-110 motion-reduce:transform-none"><img alt='' src="https://img.icons8.com/ios/250/ffffff/skip-to-start.png"/></button>
              <button id="play" className="w-10 m-2 transform hover:scale-110 motion-reduce:transform-none">{currPlaying ? bigPause : bigPlay}</button>
              <button id="next" onClick={() => handleNext} className="w-6 m-2 transform hover:scale-110 motion-reduce:transform-none"><img alt='' src="https://img.icons8.com/ios/250/FFFFFF/end--v1.png"/></button>
              <button id="repeat" className="w-6 m-2 transform hover:scale-110 motion-reduce:transform-none"><img alt='' src="https://img.icons8.com/ios/250/ffffff/recurring-appointment.png"/></button>    
            </ul>
          </div>
          
          <div id='playlist' className="flex-1 p-4 lg:p-6 overflow-y-auto overscroll-contain">
            {musicList.map((music, index) => (           
                <div key={index} className='flex text-gray-700 border-b border-gray-800 items-center hover:bg-white hover:bg-opacity-25 hover:border-transparent'> 
                    <img className='p-3 w-16 h-16 rounded-full' src={albumCover} alt='album-cover' />
                    <div className="p-3 w-full">{music.song}</div>
                    <div className="p-3 w-full">{music.artist}</div>
                    <div className="p-3 w-full">{music.album}</div>
                    <div className="p-3 w-full text-xs">{music.time}</div>
                    <button id="play" className="m-3 w-36" onClick={() => handleClick(index, music.song, music.artist, music.time)}>
                        { isPlaying[index] ? pause : play }
                    </button>              
                </div>
            ))}
          </div>
      </div>
    
  </div>
  );
}

export default App;
