import { useLayoutEffect, useState } from "react";


export const useLang=()=>{
    const [lang, setLang] = useState('ru')

    useLayoutEffect(()=>{
        document.documentElement.setAttribute('lang', lang)
    }, [lang])

    return {lang, setLang}
}