import useKakao from "../hooks/useKakao"
import { useState, useEffect } from "react"

export default function Map() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null)

    const { kakao, map, services, putMarker } = useKakao(33.450701, 126.570667,container)
    useEffect(() => {
      if (!kakao || !map) return;
  
      putMarker(33.450701, 126.570667, () => {});
    }, [kakao, map, putMarker])

    return (
        <div className="w-full h-72 lg:h-96 rounded-md" ref={setContainer}></div>
    )
}