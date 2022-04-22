                                                   // Simple Crud Operation
// import React, { useState } from "react";
// import DetailTable from "./tables/Table";
// import AddDetailForm from "./forms/Add";
// import EditDetailForm from "./forms/Edit";
// import { useHistory } from "react-router-dom";

// const Crud = () => {
//   const history = useHistory();
//   const productsData = [
//     { id: 1,  title: "mi smart watch", price: "800", status: "In stock" },
//     { id: 2, title: "speaker", price: "1500", status: "In stock" },
//     { id: 3, title: "i-pad", price: "30000", status: "In stock" },
//     { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
//   ];

//   const [products, setProducts] = useState(productsData);

//   const addProduct = (product: any) => {
//     product.id = products.length + 1;
//     setProducts([...products, product]);
//   };

//   const deleteProduct = (id: any) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const [editing, setEditing] = useState(false);
//   const initialFormState = { id: null, title: "", price: "", status: "" };
//   const [currentProduct, setCurrentProduct] = useState(initialFormState);

//   const editRow = (product: any) => {
//     setEditing(true);
//     setCurrentProduct({
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       status: product.status,
//     });
//   };

//   const updateProduct = (id: any, updateProduct: any) => {
//     setEditing(false);
//     setProducts(
//       products.map((product) => (product.id === id ? updateProduct : product))
//     );
//   };

//   return (
//     <div className="container">
//       <h1 id="h1">Product Details</h1>
//       <div className="flex-row">
//         <div className="flex-large">
//           {editing ? (
//             <div>
//               <h2>Edit Detail</h2>
//               <EditDetailForm
//                 editing={editing}
//                 setEditing={setEditing}
//                 currentProduct={currentProduct}
//                 updateProduct={updateProduct}
//                 />
//             </div>
//           ) : (
//             <div>
//               <h2 id="h2">Add Detail</h2>
//               <AddDetailForm addProduct={addProduct} />
//             </div>
//           )}
//         </div>
//         <div className="flex-large">
//           <h2 id="h2">View Details</h2>
//           <DetailTable
//             products={products}
//             deleteProduct={deleteProduct}
//             editRow={editRow}
//             />
//         </div>

//         <button onClick={()=>history.push("./Product_Detail-Page")}>back</button>
//       </div>
//     </div>
//   );
// };

// export default Crud;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./Redux/EditForm";
import Form from "./Redux/Form";
import Tables from "./Redux/Tables";
import {
  EditProduct as editTodoActionCreator,
  selectTodoActionCreator
} from "./Redux/ProductSlice";

const Crud = ()=> {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    status:""
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const products = useSelector((state:any) => state.products.products);
  const selectedTodoId = useSelector((state:any) => state.selectedTodo);

  const selectedTodo =
    (selectedTodoId && products.find((todo:any) => todo.id === selectedTodoId)) ||
    null;

  const handleSelectTodo = (todoId:any) => {
    dispatch(selectTodoActionCreator({ id: todoId }));
  };

  const setValues = () => {
    setProduct({
      title: selectedTodo.title,
      price: selectedTodo.price,
      status: selectedTodo.status,
    });
  };

  const handleEdit = () => {
    if (!selectedTodo) return;
    setValues();
  };

  const handleUpdate = (e:any) => {
    e.preventDefault();

    if (!product.title || !product.price || !product.status || !selectedTodoId) {
      handleCancelUpdate(e);
      return;
    }

    dispatch(
      editTodoActionCreator({
        id: selectedTodoId,
        title: product.title,
        price: product.price,
        status: product.status

      })
    );
    setIsEditMode(false);
    setProduct({
      title: "",
      price: "",
      status:""
    });
  };

  const handleCancelUpdate = (e:any) => {
    setIsEditMode(false);
    setProduct({
      title: "",
      price: "",
      status:""
    });
  };

  const handleChange = (event:any) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  return (
    <div className="App">
      {isEditMode ? (
        <EditForm
        product={product}
        setProduct={setProduct}
          selectedTodo={selectedTodo}
          isEditMode={isEditMode}
          handleUpdate={handleUpdate}
          handleCancelUpdate={handleCancelUpdate}
          handleChange={handleChange}
        />
      ) : (
        <Form />
      )}
      <Tables
        products={products}
        handleSelectTodo={handleSelectTodo}
        handleEdit={handleEdit}
        setIsEditMode={setIsEditMode}
      />
    </div>
  );
}
export default Crud
