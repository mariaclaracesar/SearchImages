import {api} from '@api';
import {UnsplashImage} from './postTypes';

async function getList(query: string): Promise<UnsplashImage[]> {
  const response = await api.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      client_id: 'WNk0iqzwwy37OkCwtck6SK581BsZfnsA0jWVsXls6X0',
    },
  });

  return response.data.results;
}

export const postApi = {getList};
