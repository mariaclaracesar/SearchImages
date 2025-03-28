import {Box, Screen, TextInput} from '@components';
import {postService, UnsplashImage} from '@domain';
import {useEffect, useState} from 'react';

export function HomeScreen() {
  const [postList, setPostList] = useState<UnsplashImage[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const results = await postService.getList(search);
    setPostList(results);
  };

  useEffect(() => {
    handleSearch();
  });

  return (
    // <Box padding="s24" flex={1} justifyContent="center">
    //   <Text mb="s8" preset="headingLarge">
    //     Olá!
    //   </Text>
    //   <Text preset="paragraphLarge">Procurando imagens pra se inspirar?</Text>

    //   <Box mt="s32">
    //     <TextInput
    //       placeholder="Ex: cachorros fofinhos"
    //       label="Busque uma imagem"
    //       value={search}
    //       onChangeText={setSearch}
    //     />

    //     <Button marginTop="s24" title="Buscar" onPress={handleSearch} />

    //     {/* {postList.map(post => (
    //       <Box key={post.id} mt="s16">
    //         <Text>{post.description || 'Sem descrição'}</Text>
    //       </Box>
    //     ))} */}

    //   </Box>
    // </Box>

    <Screen>
      <Box>
        <TextInput
          placeholder="Ex: cachorros fofinhos"
          label="Busque uma imagem"
          value={search}
          onChangeText={setSearch}
        />
      </Box>
    </Screen>
  );
}
