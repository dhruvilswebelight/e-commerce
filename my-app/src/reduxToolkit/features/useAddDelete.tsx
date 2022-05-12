import moment from "moment";
import { useState } from "react";
import { productDeleted } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

const useCustom = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [edit, setEdit] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  const handleTitle = (e: any) => setTitle(e.target.value);
  const handlePrice = (e: any) => setPrice(e.target.value);
  const handleStatus = (e: any) => setStatus(e.target.value);
  const handleEdit = (e: any) => setEdit(e.target.value);
  const productsAmount = useSelector(
    (state: any) => state.products.entities.length 
  );
  const handleDelete = (id: any) => {
    dispatch(productDeleted({ id }));
  };

  return {
    title,
    price,
    status,
    edit,
    productsAmount,
    handleTitle,
    handlePrice,
    handleStatus,
    handleEdit,
    handleDelete,
  };
};
export default useCustom;
