import useKakao from "../hooks/useKakao"
import { useState, useEffect } from "react"

interface MapProps {
  lat: number;
  lng: number;
}

export default function Map({lat, lng}:MapProps) {
    const [container, setContainer] = useState<HTMLDivElement | null>(null)

    const { kakao, map, services, putMarker } = useKakao(lat, lng, container)
    useEffect(() => {
      if (!kakao || !map) return;
  
      putMarker(lat, lng, () => {});
    }, [kakao, map, putMarker])

    return (
        <div className="w-full h-72 lg:h-96 rounded-md" ref={setContainer}></div>
    )
}