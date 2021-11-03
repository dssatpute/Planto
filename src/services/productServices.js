import axios from "axios";

const baseUrl = process.env.BACKEND_BASE_URL;

export async function getProducts(category) {
  const response=await axios
    .get("http://localhost:3001/api/data/get-products/" + category)
    if (response.status === 200) {
        return response.data;
      } else {
        throw response;
      }
}

export async function getSelectedItem(category, itemId) {
  const response=await axios
    .get(
      "http://localhost:3001/api/data/get-selected-item/" +
        category +
        "/" +
        itemId
    )
    if (response.status === 200) {
        return response.data;
      } else {
        throw response;
      }
}
