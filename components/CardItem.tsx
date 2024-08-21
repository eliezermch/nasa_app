import { useEffect, useRef } from 'react';
import { Animated, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const StyledPressable = styled(Pressable);

const placeholderImage = require('../assets/images/placeholder_no_image_available.webp');

const CardItem = ({ item }: any) => {
  const imageSource = item?.links?.[0]?.href ? { uri: item.links[0].href } : placeholderImage;

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  return (
    <Link asChild href={`/${item?.data[0]?.nasa_id}`}>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/40 mb-4 w-full rounded-xl relative">
        <ThemedView darkColor="#001F3F" className="w-full h-[200px] p-4 rounded-xl">
          <ThemedView className="flex-row gap-4 h-full bg-transparent" key={item?.data[0]?.nasa_id}>
            <Image source={imageSource} className="w-[107px] h-full rounded object-cover" />
            <ThemedView className="flex-shrink bg-transparent">
              <ThemedText type="subtitle" className="mb-1 text-white min-w-min">
                {item?.data[0]?.title}
              </ThemedText>
              <ThemedText className="mt-2 flex-shrink">{truncate(item?.data[0]?.description, 115)}</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </StyledPressable>
    </Link>
  );
};

export function AnimatedGameCard({ items, index }: any) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <CardItem item={items} />
    </Animated.View>
  );
}

export { CardItem };
