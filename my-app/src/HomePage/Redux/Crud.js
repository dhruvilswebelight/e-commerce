import { Component } from "react";

import PropTypes from "prop-types";
import {
  getProduct,
  addProduct,
  editProduct,
  deleteProduct
} from "./action";
import { connect } from "react-redux";

class Crud extends Component {
    
  constructor(props) {
      
    super(props);
    this.state = {
      id: 0,
      title: "",
      price: "",
      status: ""
    };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    getProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProduct();
  }

  submitData = () => {
    if (
      this.state.title &&
      this.state.price &&
      this.state.status &&
      !this.state.id
    ) {
      const newProduct = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        title: this.state.title,
        price: this.state.price,
        status: this.state.status
      };

      this.props.addProduct(newProduct);
    } else if (
      this.state.title &&
      this.state.price &&
      this.state.status &&

      this.state.id
    ) {
      const updatedDetails = {
        id: this.state.id,
        title: this.state.title,
        price: this.state.price,
        status: this.state.status

      };

      this.props.editProduct(updatedDetails);
    } else {
      alert("Enter Product Details.");
    }

    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      title: data.title,
      price: data.price,
      status: data.status

    });
  };

  deleteProduct = (id) => {
    this.clearData();
     {
      this.props.deleteProduct(id);
    }
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    });
  };
  handleStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      title: "",
      price: "",
      status:""
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Products Details</h1>
        </header>
        <p className="App-intro">
          <div className="leftsection">
            Title :{" "}
            <input
              onChange={this.handleTitleChange}
              value={this.state.title}
              type="text"
            />{" "}
            <br />
            Price :{" "}
            <input
              onChange={this.handlePriceChange}
              value={this.state.price}
              type="text"
            />
            <br />
            Status :{" "}
            <input
              onChange={this.handleStatusChange}
              value={this.state.status}
              type="text"
            />
            <br />
            {this.state.id ? (
              <button onClick={this.submitData}>UPDATE</button>
            ) : (
              <button onClick={this.submitData}>ADD</button>
            )}{" "}
            <button onClick={this.clearData}>CLEAR</button>
          </div>
          <div className="rightsection">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Price </th>
                  <th>Status </th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.products &&
                  this.props.products.map((data, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.status}</td>

                        <td>
                          <button onClick={() => this.editDetails(data)}>
                            EDIT
                          </button>{" "}
                          <button onClick={() => this.deleteProduct(data.id)}>
                            DELETE
                          </button>{" "}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, {
  getProduct,
  addProduct,
  editProduct,
  deleteProduct
})(Crud);