import axios from "./axios";

const PRODUCT_API_URL = "/products";

const addProductService = async (param) => {
  console.log("param", param);
  const response = await axios.post(`${PRODUCT_API_URL}`, param);
  return response?.data?.data;
};

export { addProductService };
