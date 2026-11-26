export const DIRECT_PLAYBACK_QUALITIES = ["best", "1080", "720", "480", "360"] as const;
export type DirectPlaybackQuality = (typeof DIRECT_PLAYBACK_QUALITIES)[number];

export function isDirectPlaybackQuality(value: string): value is DirectPlaybackQuality {
  return (DIRECT_PLAYBACK_QUALITIES as readonly string[]).includes(value);
}
