import React from 'react'
import { VideoDialog } from '../common/video-dialog'

const AirlineVideo = () => {
  return (
    <>
      <div className="relative flex flex-col container mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <VideoDialog
          className="block dark:hidden rounded-md lg:rounded-xl mx-auto"
          animationStyle="top-in-bottom-out"
          videoSrc="/videos/emirates-airline-video.mp4"
          thumbnailSrc="/images/others/emirates-aeroplane.jpeg"
          thumbnailAlt="airline video"
        />
        <VideoDialog
          className="hidden dark:block rounded-md lg:rounded-xl mx-auto"
          animationStyle="top-in-bottom-out"
          videoSrc="/videos/emirates-airline-video.mp4"
          thumbnailSrc="/images/others/emirates-aeroplane.jpeg"
          thumbnailAlt="airline video"
        />
      </div>
    </>
  )
}

export default AirlineVideo
