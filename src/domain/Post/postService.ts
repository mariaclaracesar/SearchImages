import {postApi} from './postApi';
import {UnsplashImage} from './postTypes';

async function getList(query: string): Promise<UnsplashImage[]> {
  const postList = await postApi.getList(query);
  return postList;
}

export const postService = {getList};
