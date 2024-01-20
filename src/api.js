import { API_KEY, API_URL } from './config';

const getProducts = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

export { getProducts };
