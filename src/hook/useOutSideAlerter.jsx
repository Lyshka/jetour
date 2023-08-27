import { useEffect, useRef, useState } from "react";

export default function useOutSideAlerter (initialIsVisible) {
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef(null)

    const handleClickIutSide = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickIutSide, true)

        return () => {
            document.removeEventListener("click", handleClickIutSide, true)
        }
    })

    return {ref, isShow, setIsShow}
}