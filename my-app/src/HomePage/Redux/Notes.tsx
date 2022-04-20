import Note from "./Note";
import { useState } from "react";

export default ({
  products,
  setIsEditMode,
  handleSelectTodo,
  handleEdit,
}: any) => {
  return (
    <div className="display_product">
      {products.map((product: any) => (
        <Note
          key={product.id}
          product={product}
          title={product.title}
          price={product.price}
          status={product.status}
          handleSelectTodo={handleSelectTodo}
          handleEdit={handleEdit}
          setIsEditMode={setIsEditMode}
        />
      ))}
    </div>
  );
};
