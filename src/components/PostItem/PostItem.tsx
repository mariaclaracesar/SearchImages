import {UnsplashImage} from '@domain';
import {Pressable} from 'react-native';
import {PostImage} from './Components/PostImage';

interface Props {
  post: UnsplashImage;
}

export function PostItem({post}: Props) {
  return (
    <Pressable>
      <PostImage userName={post.user.name} imageUrl={post.urls.regular} />
    </Pressable>
  );
}
