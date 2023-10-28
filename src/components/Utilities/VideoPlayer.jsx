"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const option = {
        width: 300,
        height: 250
    }

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
            <div className="">
                <button onClick={handleVideoPlayer} className="text-color-primary float-right bg-color-secondary px-3">X</button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Youtube Video is Broken")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="text-color-primary float-right bg-color-secondary px-3">
                ^
            </button>
        )
    }


    return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer