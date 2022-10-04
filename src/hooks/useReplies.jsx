import { useEffect, useState } from "react";
import { getRepliesServiceService } from "../services";

export const useReplies = (id) => {
  //Addcoment, cargamos en componente padre

  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadGetReply = async () => {
      try {
        setLoading(true);
        const data = await getRepliesServiceService(id);

        setReplies(data.replies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGetReply();
  }, [id]);

  return { replies, setReplies, error, loading };
};

export default useReplies;
