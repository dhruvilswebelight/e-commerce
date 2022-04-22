import Table from "./Table";

const Tables =  ({
  products,
  setIsEditMode,
  handleSelectTodo,
  handleEdit,
  
}:any) => {
  return (
    <>
      {products.map((product: any) => (
        <Table
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
        </>
  );
};
export default Tables