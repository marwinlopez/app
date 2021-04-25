import React, { useState, useEffect, useRef } from "react";

const useAudio = audio => {
    const [playing, setPlaying] = useState(false);
    
    const toggle = () => (setPlaying(!playing));
  
    useEffect(() => {
        console.log(playing)
        if (playing)
            audio.play()
        else audio.pause();
    },
        [playing]
    );
  
    return [playing, toggle];
  };

  export default useAudio;