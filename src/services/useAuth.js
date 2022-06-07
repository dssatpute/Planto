import axios from "axios";
import { useState, useEffect } from "react";

export default function useAuth() {
  const [status, setLoginStatus] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUsername] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get("https://planto-backend-version.herokuapp.com/auth/verify", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setLoginStatus(response.data.flag);
          setUserId(response.data.userId);
          setUsername(response.data.userName);
          setLoading(false)
        } 
        else {
          throw response;
        }
      } 
      catch (error) {
        setError(error);
      } 
    }
    init();
  }, []);

  return { status, userId, userName, error,loading };
}
