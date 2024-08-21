import { Dispatch, SetStateAction, useRef } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ThemedView } from './ThemedView';
import { Keyboard, TextInput } from 'react-native';

type Props = {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  onSearch: () => void;
};

function Search({ searchValue, setSearchValue, onSearch }: Props) {
  const searchInput = useRef<TextInput>(null);

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  const handleSearchPress = () => {
    onSearch();
    Keyboard.dismiss(); // Hide keyboard
  };

  return (
    <ThemedView className="flex-row items-center p-2 bg-slate-800">
      <FontAwesome5 name="search" size={24} color="white" onPress={handleSearchPress} />
      <TextInput
        value={searchValue}
        ref={searchInput}
        onChangeText={handleSearch}
        onSubmitEditing={handleSearchPress}
        className="flex-1 ml-2 h-[40px] border-gray-200 border rounded p-2 text-white "
        placeholder="Search"
      />
    </ThemedView>
  );
}

export { Search };
