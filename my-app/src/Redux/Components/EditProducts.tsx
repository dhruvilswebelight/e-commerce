import  { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../actions/productAction";
import { useHistory, useParams } from "react-router-dom";

type Inputs = {
  id: string;
  title: string;
  price: string;
  status: string;
};

const EditProducts = () => {
  let id = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Inputs>();
  
  const product = useSelector((state: any) => state.product.products);
  console.log(product,"data");
  


  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const onUpdateProduct = (data:any)  => {
    dispatch(updateProduct(data));
    console.log(data,"data");
    history.push("/Crud-Page");
  };


  return (
    <form
     className="Redux_edit_form"
      onSubmit={handleSubmit(onUpdateProduct)}
      key="id"
    >
      <input
        type="text"
        // Value= {product ? product.id : ""}
        id="id"
        {...register("id")}
        placeholder="id"
      />

      <input
      type="text"
       
        // Value={product ? product.title : ""}
        placeholder="title"
        {...register("title")}
      />
      <input
        type="text"

        // Value={product ? product.price : ""}
        placeholder="price"
        {...register("price")}
      />
      <input
        type="text"

        // Value={product ? product.status : ""}
        placeholder="status"
        {...register("status")}
      />
      <input   type="submit" id="Redux_edit_submit" />
    </form>
  );
};
export default EditProducts;
