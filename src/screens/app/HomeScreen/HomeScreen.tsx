import {Box, Button, Text, TextInput} from '@components';

export function HomeScreen() {
  return (
    <>
      <Text color="carrotSecondary" preset="headingMedium">
        MARIA
      </Text>

      <Box padding="s14" justifyContent="center">
        <TextInput label="Busque por uma imagem" />

        <Button title="maria" />
      </Box>
    </>
  );
}
