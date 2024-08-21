import { ActivityIndicator, FlatList } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Search } from '@/components/Search';
import { useState } from 'react';
import { getNasaLibrary } from '@/service/apodapi';
import { AnimatedGameCard } from '@/components/CardItem';
import { NasaLibItem } from '@/model/NASALIB';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState<NasaLibItem[]>();
  const [loading, setLoading] = useState(false);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const performSearch = async () => {
    setSearchTriggered(true);
    if (searchValue.length >= 3) {
      setLoading(true);
      try {
        const data: any = await getNasaLibrary(searchValue);
        setItems(data.collection.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setItems([]);
    }
  };

  return (
    <ThemedView className="bg-black h-full p-4">
      <ThemedView className="p-4 rounded-lg bg-slate-800">
        <ThemedText className="mb-2" type="subtitle">
          Search NASA discoveries
        </ThemedText>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} onSearch={performSearch} />
      </ThemedView>

      {loading ? (
        <ActivityIndicator className="mt-8" />
      ) : searchTriggered && items?.length === 0 ? (
        <ThemedView className="mt-8 p-4 rounded">
          <ThemedText className="text-center">No results found for "{searchValue}"</ThemedText>
        </ThemedView>
      ) : (
        <FlatList
          className="mt-6"
          data={items}
          keyExtractor={(item: any) => item?.data[0]?.nasa_id}
          renderItem={({ item, index }) => <AnimatedGameCard items={item} index={index} />}
        />
      )}
    </ThemedView>
  );
}
