export const getProductsList = async (url) => {
  try {
    const res = await fetch(url);
    const response = await res.json();
    return response.products;
  } catch (err) {
    console.error(err);
  }
};
