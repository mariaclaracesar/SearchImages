import {PostItem, Screen} from '@components';
import {postService, UnsplashImage} from '@domain';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {SearchEntry} from './Components/SearchEntry';

export function HomeScreen() {
  const [postList, setPostList] = useState<UnsplashImage[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const results = await postService.getList(search);
    console.log('Resultados da API:', results);
    setPostList(results);
    setSearch('');
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flatListRef = React.useRef<FlatList>(null);

  function renderItem({item}: {item: UnsplashImage}) {
    return <PostItem post={item} />;
  }

  return (
    <Screen flex={1} backgroundColor="gray4">
      <SearchEntry
        value={search}
        onChangeText={setSearch}
        onPress={handleSearch}
      />

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </Screen>
  );
}
