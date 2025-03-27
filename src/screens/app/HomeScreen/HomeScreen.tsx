import {Box, Button, Text, TextInput} from '@components';

export function HomeScreen() {
  return (
    <Box padding="s24" flex={1} justifyContent="center">
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge">Procurando imagens pra se inspirar?</Text>

      <Box mt="s32">
        <TextInput
          placeholder="Ex: cachorros fofinhos"
          label="Busque uma imagem"
        />

        <Button marginTop="s24" title="Buscar" />
      </Box>
    </Box>
  );
}
