import useKakao from "../libs/client/useKakao"
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
        <div style={style} ref={setContainer}></div>
    )
}

const style = {
  width: 1200,
  height: 800,
}