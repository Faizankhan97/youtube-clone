import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-70 shadow-lg">
      <img src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewcount} views</li>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({info}) => {
  return(
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
