import { useEffect, useState } from "react";
import { getRepliesServiceService, sendRepliesService } from "../services";

export const useReplies = (id, idService) => {
  //Addcoment, cargamos en componente padre

  const [replies, setReplies] = useState([]);
  const [addReply, setAddReply] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReply = async () => {
      try {
        setLoading(true);
        const data = await sendRepliesService(idService);

        setAddReply(data.replies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadReply();
  }, [idService]);

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

  return { replies, addReply, error, loading };
};

export default useReplies;
