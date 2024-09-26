import Image from "next/image";
import styles from "./page.module.css";
import VideoPlayer from "@/components/VideoPlayer";


export default function Home() {

  const videoJsOptions = {
    controls: true,
    autoplay: true,
    preload: 'auto',
    sources: [{
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Example video URL
      type: 'video/mp4',
    }],
  };

  return (
    <div>
      <h1>My Video Player</h1>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
}
