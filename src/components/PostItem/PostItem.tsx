import {UnsplashImage} from '@domain';
import {PostImage} from './Components/PostImage';

interface Props {
  post: UnsplashImage;
}

export function PostItem({post}: Props) {
  return <PostImage imageUrl={post.urls.regular} />;
}
