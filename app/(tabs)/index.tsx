import { Image, Platform, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useGlobatState } from '@/context/context';
import { useEffect } from 'react';
import { NasaApodData } from '@/model/APOD';
import { getApodData } from '@/service/apodapi';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

const searchBgImage = require('../../assets/images/hero-image-241707.webp');
console.log('🚀 ~ searchBgImage:', searchBgImage);

export default function HomeScreen() {
  const [state, dispatch] = useGlobatState();
  console.log('🚀 ~ HomeScreen ~ state:', state?.apod?.url?.length);

  useEffect(() => {
    (async () => {
      if (!state.apod.length) {
        const data: NasaApodData[] = await getApodData();
        dispatch({ apod: data });
      }
    })();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        state?.apod?.url?.length !== 0 ? (
          <Image source={{ uri: state?.apod?.url }} className="absolute bottom-0 left-0 w-full h-full" />
        ) : (
          <></>
        )
      }
    >
      <ThemedView className="flex gap-2 justify-center items-center mb-2">
        <ThemedText className="text-center" type="title">
          NASA Daily: Beyond Our World
        </ThemedText>
        <AntDesign name="arrowdown" size={24} color="white" />
      </ThemedView>
      <ThemedView className="gap-2 mb-2">
        <ThemedText type="subtitle">{state?.apod?.title}</ThemedText>
        <ThemedText>{state?.apod?.explanation}</ThemedText>
      </ThemedView>

      <Link asChild href={'/search'} className="text-blue-400">
        <Pressable>
          <ThemedView className="relative w-full h-[120px] border border-solid border-white rounded-lg">
            <Image source={searchBgImage} className="w-full h-full absolute object-cover rounded-lg" />
            <ThemedView className="flex w-full h-full justify-center items-center bg-black/40 rounded-lg">
              <ThemedText type="subtitle">Explore NASA Achievements</ThemedText>
            </ThemedView>
          </ThemedView>
        </Pressable>
      </Link>
    </ParallaxScrollView>
  );
}
