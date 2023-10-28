"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        { keyword !== '' ? router.push(`/search/${keyword}`) : null }
        // if (!keyword) return
        // router.push(`/search/${keyword}`)

    }
    return (
        <div className="relative">
            <form onSubmit={handleSearch}>
                <input
                    placeholder="cari anime..."
                    className=" w-full p-2 rounded"
                    ref={searchRef}
                />
                <button aria-label="Search" type="submit" className="absolute top-2 end-2" onClick={handleSearch}>
                    <MagnifyingGlass size={24} />
                </button>
            </form>

        </div>
    )
}

export default InputSearch