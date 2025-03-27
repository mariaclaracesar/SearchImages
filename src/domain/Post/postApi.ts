import {api} from '@api';

async function getList() {
  const response = await api.get('https://api.unsplash.com/search/photos');
  response.data;
}

export const postApi = {getList};
