import { useEffect, useRef, useState } from 'react';
import { ThemedView } from './ThemedView';
import { ActivityIndicator, Image, Pressable } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { ThemedText } from './ThemedText';

interface AchievementAssetProps {
  selectedItem: any;
}

const AchievementAsset = ({ selectedItem }: AchievementAssetProps) => {
  const VideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [video, setVideo] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const assetHref = selectedItem?.data[0]?.asset;
    if (assetHref) {
      setVideo(assetHref.includes('mp4'));
    }
  }, [selectedItem]);

  const player = useVideoPlayer(selectedItem?.data[0].asset ?? '', (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener('playingChange', (isPlaying) => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [selectedItem, player]);

  return (
    <ThemedView
      darkColor="#001F3F"
      lightColor="#F5F5F5"
      className="flex-col w-full justify-center items-center p-4 rounded-lg"
    >
      {!selectedItem?.data[0].asset ? (
        <ActivityIndicator className="w-[350px] h-[275px] mt-8" />
      ) : (
        <>
          {video === true ? (
            <>
              <VideoView
                ref={VideoRef}
                className="w-[350px] h-[275px] rounded-lg"
                player={player}
                allowsFullscreen
                allowsPictureInPicture
              />
              <Pressable
                onPress={() => {
                  if (isPlaying) {
                    player.pause();
                  } else {
                    player.play();
                  }
                  setIsPlaying(!isPlaying);
                }}
              >
                <ThemedView darkColor="#000000" lightColor="#2F2F2F" className="mt-4 py-2 px-8 rounded-lg">
                  <ThemedText>{isPlaying ? 'Pause' : 'Play'}</ThemedText>
                </ThemedView>
              </Pressable>
            </>
          ) : (
            <Image className="w-[350px] h-[275px] rounded-lg" source={{ uri: selectedItem?.data[0].asset }} />
          )}
        </>
      )}
    </ThemedView>
  );
};

export default AchievementAsset;
