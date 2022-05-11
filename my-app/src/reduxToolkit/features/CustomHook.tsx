import moment from "moment";
import { useState } from "react";

const useCustom = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [edit, setEdit] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  const [error, setError] = useState(null);

  const handleTitle = (e: any) => setTitle(e.target.value);
  const handlePrice = (e: any) => setPrice(e.target.value);
  const handleStatus = (e: any) => setStatus(e.target.value);
  const handleEdit = (e: any) => setEdit(e.target.value);

  return {
    title,
    price,
    status,
    edit,
    error,
    handleTitle,
    handlePrice,
    handleStatus,
    handleEdit,
  };
};
export default useCustom;
