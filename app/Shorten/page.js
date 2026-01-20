"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshorturl("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-200 my-8 md:my-16 p-4 md:p-8 rounded-lg flex flex-col gap-4 mx-4'>
            <h1 className='font-bold text-xl md:text-2xl text-center'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text" value={url} className='bg-white px-4 py-2 focus:outline-purple-600 rounded-md text-sm md:text-base' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                <input type="text" value={shorturl} className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white text-sm md:text-base' placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-500 shadow-lg rounded-lg p-3 py-2 font-bold my-3 text-white text-sm md:text-base'>Generate</button>
            </div>
            {generated && (
                <>
                    <span className='font-bold text-base md:text-lg'>Your Link</span>
                    <code className='break-all text-sm'>
                        <Link target="_blank" href={generated}>{generated}</Link>
                    </code>
                </>
            )}
        </div>
    )
}

export default Shorten