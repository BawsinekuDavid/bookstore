import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css"; // Make sure this file exists and is properly styled
import { Link } from 'react-router-dom';
import { BookContext } from "./BookContext";

const Dashboard = () => {
  const { books, setBooks } = useContext(BookContext);
  const [currentBook, setCurrentBook] = useState(null);
  const [formValues, setFormValues] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const { name, category, price, description, image } = formValues;
    if (!name || !category || !price || !description || !image) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  const handleAddBook = () => {
    if (validateForm()) {
      const newBook = { ...formValues, id: Date.now() }; // Generate a unique ID
      setBooks([...books, newBook]);
      setFormValues({
        id: null,
        name: "",
        category: "",
        price: "",
        description: "",
        image: "",
      });
    }
  };

  const handleUpdateBook = () => {
    if (validateForm()) {
      const updatedBooks = books.map((book) =>
        book.id === formValues.id ? formValues : book
      );
      setBooks(updatedBooks);
      setFormValues({
        id: null,
        name: "",
        category: "",
        price: "",
        description: "",
        image: "",
      });
      setCurrentBook(null);
    }
  };

  const handleEditClick = (book) => {
    setCurrentBook(book);
    setFormValues(book);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Book Dashboard</h1>
      <Link to="/home" className="btn btn-secondary mb-4">Back to Home</Link>
      <div className="mb-4">
        <h3>{currentBook ? "Update Book" : "Add New Book"}</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Book Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">ID</label>
            <input
              required
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={formValues.id}
              onChange={handleInputChange}
              placeholder="Book Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              required
              id="category"
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              required
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              required
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              required
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={formValues.image}
              onChange={handleInputChange}
              placeholder="Image URL"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={currentBook ? handleUpdateBook : handleAddBook}
          >
            {currentBook ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
      <h3 className="mb-4">Book List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.category}</td>
              <td>{book.price}</td>
              <td>{book.description}</td>
              <td><img src={book.image} alt={book.name} style={{ width: '100px' }} /></td>
              <td>
                <button
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => handleEditClick(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
