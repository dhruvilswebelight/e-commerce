import React, { useState, useEffect, useRef } from "react";
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

// import React, { useState, useEffect ,useRef} from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../actions/productAction";
// import { useHistory } from "react-router-dom";
// type Inputs = {
//   id: number,
//   title: string,
//   price: string,
//   status: string,
// };

// const Create = ()=> {
//   let history = useHistory();
//   const dispatch = useDispatch();
//   const { register, handleSubmit} = useForm<Inputs>();
//   const idRef = useRef<HTMLInputElement | null>(null);
//   const titleRef = useRef<HTMLInputElement | null>(null);

//   const priceRef = useRef<HTMLInputElement | null>(null);

//   const statusRef = useRef<HTMLInputElement | null>(null);

//   const { ref, ...rest } = register('id');

//   const onSubmit = (data:any) => {
//     dispatch(addProduct(data));
//     history.push("/Crud-Page");
//     console.log(data);
//   };
//   return (

//     <form className="createadd" onSubmit={handleSubmit(onSubmit)} key="id">
//       <input type="number" id="id"  {...rest} name="id" placeholder="id" ref={(e) => {
//         ref(e)
//         idRef.current = e }}  />
//       <input  {...rest}name="title" ref={(e) => {
//         ref(e)
//         titleRef.current = e }} placeholder="title" />
//       <input  {...rest}name="price" ref={(e) => {
//         ref(e)
//         priceRef.current = e }} placeholder="price" />
//       <input  {...rest}name="status"ref={(e) => {
//         ref(e)
//         statusRef.current = e }}placeholder="status" />
//       <input  type="submit" />
//     </form>

//   );
// }
// export default Create
