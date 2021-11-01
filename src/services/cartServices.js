import axios from "axios";

export async function addToCart(
  itemId,
  userId,
  itemTitle,
  itemImage,
  itemPrice,
  itemQuantity
) {
  const response = await axios.post(
    "http://localhost:3001/api/cart/add-to-cart/" +
      itemId +
      "/" +
      userId +
      "/" +
      itemTitle +
      "/" +
      encodeURIComponent(itemImage) +
      "/" +
      itemPrice +
      "/" +
      itemQuantity
  );
  if (response.data === 200) {
    return response.data;
  } else {
    throw response;
  }
}


export async function getCartItems(userId)
{
    const response=await axios.get("http://localhost:3001/api/cart/get-cart-item/"+userId)
    if(response.status===200)
    {
        return response.data
    }
    else{
        throw response
    }

}