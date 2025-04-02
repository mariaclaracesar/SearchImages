/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image} from 'react-native';

interface PostImageProps {
  imageUrl: string;
}

export function PostImage({imageUrl}: PostImageProps) {
  return (
    <Image
      source={{uri: imageUrl}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
        marginBottom: 16,
      }}
    />
  );
}
