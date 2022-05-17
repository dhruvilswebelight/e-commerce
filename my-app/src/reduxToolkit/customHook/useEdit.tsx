import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useEdit = () => {
  const { pathname } = useLocation();
  const productId = parseInt(pathname.replace("/edit-product/", ""));

  const product = useSelector((state: any) =>
    state.products.entities.find((product: any) => product.id === productId)
  );
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);
  const [edit, setEdit] = useState(product.edit);

  const handleTitle = (e: any) => setTitle(e.target.value);
  const handlePrice = (e: any) => setPrice(e.target.value);
  const handleStatus = (e: any) => setStatus(e.target.value);
  const handleEdit = (e: any) => setEdit(e.target.value);
  
  return {
    title,
    price,
    status,
    edit,
    productId,
    handleTitle,
    handlePrice,
    handleStatus,
    handleEdit,
  };
};

export default useEdit;
