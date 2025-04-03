/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image} from 'react-native';
import {Box} from '../../Box/Box';
import {Text} from '../../Text/Text';

interface PostImageProps {
  imageUrl: string;
  userName: string;
  category: string;
  description: string;
}

export function PostImage({
  imageUrl,
  userName,
  category,
  description,
}: PostImageProps) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = SCREEN_WIDTH / 2 - 32; // margem de 12px entre os itens
  return (
    <Box
      width={ITEM_WIDTH}
      backgroundColor="grayWhite"
      marginTop="s16"
      marginBottom="s16"
      marginHorizontal="s4"
      padding="s12"
      borderRadius="s12"
      alignItems="center">
      <Box>
        <Image
          source={{uri: imageUrl}}
          resizeMode="cover"
          style={{
            width: ITEM_WIDTH * 0.85,
            height: ITEM_WIDTH * 0.85,
            borderRadius: 8,
          }}
        />

        <Box marginTop="s4">
          <Text preset="headingSmall">{description}</Text>
          <Text preset="paragraphMedium">{userName}</Text>
          <Text preset="paragraphMedium">{category}</Text>
        </Box>
      </Box>
    </Box>
  );
}
