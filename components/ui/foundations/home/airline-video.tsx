import React from "react";
import { VideoDialog } from "../common/video-dialog";

const AirlineVideo = () => {
  return (
    <>
      <div className="relative bg-secondary">
        <div className="flex flex-col container mx-auto px-4 lg:px-6  y-16 lg:py-20">
          <VideoDialog
            className="block dark:hidden rounded-md lg:rounded-xl mx-auto"
            animationStyle="top-in-bottom-out"
            videoSrc="https://youtu.be/ivSAn7IT2Zg?si=00N-YA0PEMeZWtek"
            thumbnailSrc="/images/others/emirates-aeroplane.jpeg"
            thumbnailAlt="airline video"
          />
          <VideoDialog
            className="hidden dark:block rounded-md lg:rounded-xl mx-auto"
            animationStyle="top-in-bottom-out"
            videoSrc="https://youtu.be/ivSAn7IT2Zg?si=00N-YA0PEMeZWtek"
            thumbnailSrc="/images/others/emirates-aeroplane.jpeg"
            thumbnailAlt="airline video"
          />
        </div>
      </div>
    </>
  );
};

export default AirlineVideo;
