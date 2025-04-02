import {Button, PostItem, Screen, TextInput} from '@components';
import {postService, UnsplashImage} from '@domain';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function HomeScreen() {
  const [postList, setPostList] = useState<UnsplashImage[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const results = await postService.getList(search);
    console.log('Resultados da API:', results);
    setPostList(results);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flatListRef = React.useRef<FlatList>(null);

  // Mas o FlatList espera que renderItem receba um objeto { item }, então precisa ser assim:
  function renderItem({item}: {item: UnsplashImage}) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <TextInput
        placeholder="Ex: cachorros fofinhos"
        label="Busque uma imagem"
        value={search}
        onChangeText={setSearch}
      />

      <Button marginTop="s8" title="Buscar" onPress={handleSearch} />

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
