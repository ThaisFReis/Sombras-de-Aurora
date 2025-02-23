import { api } from ".";
//retorna um array de  4 categorias

export const listCategories = async () => {
  const { data } = await api.get('/category');
  return data.categories;
}