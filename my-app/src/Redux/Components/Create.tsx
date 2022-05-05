import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productAction";
import { useHistory } from "react-router-dom";

type Inputs = {
  id: number;
  title: string;
  price: string;
  status: string;
};

const Create = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    dispatch(addProduct(data));
    history.push("/");
    console.log(data);
  };
  return (
    <form className="Redux_add_form" onSubmit={handleSubmit(onSubmit)} key="id">
      <input type="text" id="id" placeholder="id" {...register("id")} />
      <input type="text" {...register("title")} placeholder="title" />
      <input type="text" {...register("price")} placeholder="price" />
      <input type="text" {...register("status")} placeholder="status" />
      <input type="submit" />
    </form>
  );
};
export default Create;

