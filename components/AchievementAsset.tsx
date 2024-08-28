import { useEffect, useRef, useState } from 'react';
import { ThemedView } from './ThemedView';
import { ActivityIndicator, Image, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { ThemedText } from './ThemedText';

interface AchievementAssetProps {
  selectedItem: any;
}

const AchievementAsset = ({ selectedItem }: AchievementAssetProps) => {
  const VideoRef = useRef<any>();
  const [status, setStatus] = useState<any>({});
  const [video, setVideo] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const assetHref = selectedItem?.data[0]?.asset;
    if (assetHref) {
      setVideo(assetHref.includes('mp4'));
    }
  }, [selectedItem]);

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
              <Video
                ref={VideoRef}
                className="w-[350px] h-[275px] rounded-lg"
                source={{
                  uri: selectedItem.data[0].asset ?? '',
                }}
                volume={1.0}
                useNativeControls
                isMuted={false}
                isLooping
                onPlaybackStatusUpdate={(status: any) => setStatus(() => status)}
              />
              <Pressable
                onPress={() => (status.isPlaying ? VideoRef.current.pauseAsync() : VideoRef.current.playAsync())}
              >
                <ThemedView darkColor="#000000" lightColor="#2F2F2F" className="mt-4 py-2 px-8 rounded-lg">
                  <ThemedText>{status.isPlaying ? 'Pause' : 'Play'}</ThemedText>
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
