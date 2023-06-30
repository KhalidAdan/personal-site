import { useEffect, useRef } from "react";

interface SoundPlayerProps {
  play: boolean;
  sound: string;
  loop?: boolean;
}

const SoundPlayer: React.FC<SoundPlayerProps> = ({ play, sound, loop }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (play) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [play]);

  return <audio ref={audioRef} loop={loop} src={sound} />;
};

export default SoundPlayer;
