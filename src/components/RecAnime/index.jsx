"use client"

import { useEffect, useState } from "react"
import { getNestedAnimeResponse } from "@/libs/api-libs"
import AnimeList from "../AnimeList"


const RecAnime = () => {
    const [recAnime, setRecAnime] = useState([])

    const fetchData = async () => {
        let recAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
        let Random = Math.floor(Math.random() * 193)

        recAnime = { data: recAnime.slice(Random, Random + 8) }
        setRecAnime(recAnime)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AnimeList api={recAnime} />
    )
}

export default RecAnime