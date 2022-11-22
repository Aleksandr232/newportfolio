import { useLayoutEffect, useState } from "react";


export const useLang=()=>{
    const [lang, setLang] = useState('ru')
    const [img, setImg] = useState('lang_ru')

    useLayoutEffect(()=>{
        document.documentElement.setAttribute('lang', lang)
        document.documentElement.setAttribute("id", img)
    }, [lang, img])

    return {lang, setLang, img, setImg}
}