import { STRINGS } from "@/constants/strings";

type Params = {
  onPlay: () => void;
  onPause: () => void;
  onSkip: (s: number) => void;
  onMute: () => void;
  muted: boolean;
};

export type VideoControlItem = {
  key: string;
  label: string;
  onPress: () => void;
};

export const getVideoControls = ({
  onPlay,
  onPause,
  onSkip,
  onMute,
  muted,
}: Params): VideoControlItem[] => [
  {
    key: "skip-back",
    label: STRINGS.VIDEO_CONTROLS.SKIP_BACK,
    onPress: () => onSkip(-10),
  },
  {
    key: "play",
    label: STRINGS.VIDEO_CONTROLS.PLAY,
    onPress: onPlay,
  },
  {
    key: "pause",
    label: STRINGS.VIDEO_CONTROLS.PAUSE,
    onPress: onPause,
  },
  {
    key: "skip-forward",
    label: STRINGS.VIDEO_CONTROLS.SKIP_FORWARD,
    onPress: () => onSkip(10),
  },
  {
    key: "mute",
    label: muted ? STRINGS.VIDEO_CONTROLS.MUTE : STRINGS.VIDEO_CONTROLS.UNMUTE,
    onPress: onMute,
  },
];
