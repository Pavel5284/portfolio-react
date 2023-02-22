import {useEffect, useState} from "react";


const getStorageValue = (key: string, defaultValue: string) => {
    //getting store value
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved!)
    return initial || defaultValue
}

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value,setValue]
}