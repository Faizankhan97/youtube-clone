import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper'

const Demo = () => {
    const [text, setText] = useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState('')

    const prime = useMemo(() => findPrime(text), [text])
    return (
        <div className={'m-2 p-2 border border-black w-96 ' + (isDarkTheme && "bg-gray-800 text-white")}>
            <div>
                <button className='m-4 p-2 bg-green-300' onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
            </div>
            <div>
                <input type="text" className='border border-black w-70 px-2' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div><p className='font-bold text-3xl'>nth Prime: {prime}</p></div>
        </div>
    )
}

export default Demo