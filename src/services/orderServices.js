import axios from "axios";

export async function createOrder(
  userId,
  firstname,
  lastname,
  email,
  address,
  contact,
  state,
  city,
  pin,
  cartItems
) {
  await axios.post(
    "http://localhost:3001/api/orders/create-order",
    {
      userId,
      firstname,
      lastname,
      email,
      address,
      contact,
      state,
      city,
      pin,
      cartItems,
    },
    {
      header: {
        "Content-Type": "application/json",
      },
    }
  );
  // return response
}
