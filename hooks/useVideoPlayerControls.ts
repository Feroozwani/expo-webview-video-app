import { useVideoPlayer } from "expo-video";
import { useState } from "react";

export function useVideoPlayerControls(source: string) {
  const [isMuted, setIsMuted] = useState(false);

  const player = useVideoPlayer(source, (player) => {
    player.loop = false;
    player.play();
  });

  const play = () => player.play();
  const pause = () => player.pause();

  const skip = (seconds: number) => {
    if (!player.duration) return;

    const nextTime = Math.min(
      Math.max(player.currentTime + seconds, 0),
      player.duration
    );

    player.currentTime = nextTime;
  };

  const toggleMute = () => {
    const muted = !isMuted;
    setIsMuted(muted);
    player.muted = muted;
  };

  return {
    player,
    isMuted,
    play,
    pause,
    skip,
    toggleMute,
  };
}
