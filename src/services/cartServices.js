import axios from "axios";


export async function addToCart(
  itemId,
  userId,
  itemTitle,
  itemImage,
  itemPrice,
  itemQuantity
) {
   const response=await axios.post(
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
      itemQuantity,
      {
        withCredentials: true,
      }
  )
  return response
}

export async function getCartItems(userId) {
  const response = await axios.get(
    "http://localhost:3001/api/cart/get-cart-item/" + userId
  );
  if (response.status === 200) {
    return response.data
  } else {
    throw response;
  }
}

export async function removeCartItem(productId,userId) {
  const response = await axios.post(
    "http://localhost:3001/api/cart/remove-cart-item/"+productId+"/"+userId
  );
  if(response.status===200)
  {
    return true
  }
  else
  {
    return false
  }
}

export async function deleteCart(userId)
{
    const response=await axios.post("http://localhost:3001/api/cart/delete-cart/"+userId)
    return response
}
