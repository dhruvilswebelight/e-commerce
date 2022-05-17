                                                //    Simple Crud Operation
import  { useState } from "react";
import DetailTable from "./tables/Table";
import AddDetailForm from "./forms/Add";
import EditDetailForm from "./forms/Edit";
import { useHistory } from "react-router-dom";

const Crud = () => {
  const history = useHistory();
  const productsData = [
    { id: 1,  title: "mi smart watch", price: "800", status: "In stock" },
    { id: 2, title: "speaker", price: "1500", status: "In stock" },
    { id: 3, title: "i-pad", price: "30000", status: "In stock" },
    { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
  ];

  const [products, setProducts] = useState(productsData);

  const addProduct = (product: any) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const deleteProduct = (id: any) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, title: "", price: "", status: "" };
  const [currentProduct, setCurrentProduct] = useState(initialFormState);

  const editRow = (product: any) => {
    setEditing(true);
    setCurrentProduct({
      id: product.id,
      title: product.title,
      price: product.price,
      status: product.status,
    });
  };

  const updateProduct = (id: any, updateProduct: any) => {
    setEditing(false);
    setProducts(
      products.map((product) => (product.id === id ? updateProduct : product))
    );
  };

  return (
    <div className="container">
      <h1 id="h1">Product Details</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Detail</h2>
              <EditDetailForm
                editing={editing}
                setEditing={setEditing}
                currentProduct={currentProduct}
                updateProduct={updateProduct}
                />
            </div>
          ) : (
            <div>
              <h2 id="h2">Add Detail</h2>
              <AddDetailForm addProduct={addProduct} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2 id="h2">View Details</h2>
          <DetailTable
            products={products}
            deleteProduct={deleteProduct}
            editRow={editRow}
            />
        </div>

        <button onClick={()=>history.push("./Product_Detail-Page")}>back</button>
      </div>
    </div>
  );
};

export default Crud;



