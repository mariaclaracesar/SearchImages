import {Box, Button, Text, TextInput} from '@components';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function SearchEntry({value, onChangeText, onPress}: Props) {
  return (
    <Box padding="s16" backgroundColor="grayWhite" borderRadius="s8">
      <Text preset="headingSmall">Busque imagens pra se inspirar!</Text>
      <TextInput
        iconName="searchIcon"
        placeholder="cachorros fofinhos"
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        marginTop="s8"
        title="Buscar"
        preset="primary"
        onPress={onPress}
      />
    </Box>
  );
}
