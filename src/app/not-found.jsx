"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen max-w-xl mx-auto">
            <div className="flex flex-col justify-center items-center">
                <FileSearch size={44} />
                <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
                <Link href={'/'} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page