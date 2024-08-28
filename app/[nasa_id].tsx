import AchievementAsset from '@/components/AchievementAsset';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useGlobalState } from '@/context/context';
import { NasaLibAssetCollection, NasaLibItem } from '@/model/NASALIB';
import { getNasaLibraryAssetsById } from '@/service/apodapi';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';

export default function AchievementPage() {
  const [state, dispatch] = useGlobalState();
  const { nasa_id } = useLocalSearchParams();

  const selectedItem = state.NasaItems.find((item: NasaLibItem) => item.data[0].nasa_id === nasa_id);

  useEffect(() => {
    (async () => {
      if (selectedItem && !selectedItem?.data[0].asset) {
        const data: NasaLibAssetCollection = await getNasaLibraryAssetsById(nasa_id);
        const videoAsset = data.collection.items.find((item) => item.href.includes('orig.mp4'));
        const imageAsset = data.collection.items.find(
          (item) => item.href.includes('orig.jpg') || item.href.includes('orig.png')
        );

        let finalAsset;
        if (videoAsset) {
          finalAsset = videoAsset;
        } else {
          finalAsset = imageAsset;
        }

        if (finalAsset) {
          // Ensure the asset URL is using https
          const secureAssetUrl = finalAsset.href.replace('http://', 'https://');

          const updatedItem: NasaLibItem = {
            ...selectedItem,
            data: [
              {
                ...selectedItem.data[0],
                asset: secureAssetUrl,
              },
            ],
          };

          const updatedNasaItems = state.NasaItems.map((item) =>
            item.data[0].nasa_id === nasa_id ? updatedItem : item
          );

          dispatch({ NasaItems: updatedNasaItems });
        }
      }
    })();
  }, [selectedItem, nasa_id]);

  return (
    <ScrollView>
      <ThemedView className="bg-black h-full p-4">
        <ThemedText className="mb-2" type="title">
          {selectedItem?.data[0].title}
        </ThemedText>
        <ThemedText className="mb-6">{selectedItem?.data[0].description}</ThemedText>
        {selectedItem && <AchievementAsset selectedItem={selectedItem} />}
      </ThemedView>
    </ScrollView>
  );
}
