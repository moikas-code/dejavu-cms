"use client"

import { useEffect, useRef } from "react"

interface SoundCloudPlayerProps {
  url: string
  autoPlay?: boolean
  showArtwork?: boolean
  height?: number
}

export function SoundCloudPlayer({ 
  url, 
  autoPlay = false, 
  showArtwork = true,
  height = 166 
}: SoundCloudPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Extract track ID from URL if needed
    const embedUrl = new URL('https://w.soundcloud.com/player/')
    embedUrl.searchParams.set('url', url)
    embedUrl.searchParams.set('color', '6B46C1') // Primary purple color
    embedUrl.searchParams.set('auto_play', autoPlay.toString())
    embedUrl.searchParams.set('hide_related', 'true')
    embedUrl.searchParams.set('show_comments', 'false')
    embedUrl.searchParams.set('show_user', 'true')
    embedUrl.searchParams.set('show_reposts', 'false')
    embedUrl.searchParams.set('show_teaser', 'false')
    embedUrl.searchParams.set('visual', showArtwork.toString())

    if (iframeRef.current) {
      iframeRef.current.src = embedUrl.toString()
    }
  }, [url, autoPlay, showArtwork])

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <iframe
        ref={iframeRef}
        width="100%"
        height={showArtwork ? 450 : height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        className="w-full"
      />
    </div>
  )
}