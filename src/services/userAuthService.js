import axios from "axios";

export async function verifyUser() {
  try {
    const response = await axios.get("http://localhost:3001/auth/verify", { withCredentials: true })
    if(response.status===200)
    {
        return [response.data.flag,response.data.userid]
    }
    else{
        throw response
    }
     
  } catch (error) {
    throw error;
  }
}
