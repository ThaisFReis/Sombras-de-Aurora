import { api } from ".";

export const listProductsInCategory = async (categorySlug: string) => {
  console.log(categorySlug);
  const { data } = await api.get(`/category/${categorySlug}/products`); // Altere para o formato correto
  console.log(data.products);
  return data.products;
}
