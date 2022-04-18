import React from "react";

const DetailTable = (props: any) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map((product: any) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.status}</td>

            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(product)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteProduct(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No products</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default DetailTable;
