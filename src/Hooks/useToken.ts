import { useState } from "react";

interface UseTokenInterface {
  setToken: (userToken: string) => void;
  token: string;
}

export default function useToken(): UseTokenInterface {
  const getToken = () => {
    const tokenString = localStorage.getItem("jwt");

    if (tokenString) {
      const userToken = JSON.parse(tokenString);

      return userToken?.token;
    }

    return null;
  };

  const [token, setToken] = useState<string>(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("jwt", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
