import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Make sure this file exists and is properly styled
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import { Link } from 'react-router-dom';
import { BookContext } from "./BookContext";
import Footer from "./footer"; // Import the Footer component

const HomePage = () => {
  const { books } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      (book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || book.category === selectedCategory)
  );

  const handleCategoryChange = (category, e) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Bookstore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* Dropdown button */}
                <button
                  className="nav-link dropdown-toggle btn btn-light"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="/Category"
                    onClick={(e) => handleCategoryChange("", e)}
                  >
                    All Categories
                  </a>
                  <a
                    className="dropdown-item"
                    href="/categories"
                    onClick={(e) => handleCategoryChange("Fiction", e)}
                  >
                    Fiction
                  </a>
                  <a
                    className="dropdown-item"
                    href="/categories"
                    onClick={(e) => handleCategoryChange("Non-Fiction", e)}
                  >
                    Non-Fiction
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <form className="form-inline ml-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide mt-1 pt-2">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static01.nyt.com/images/2021/12/12/books/review/12TenBest-COVER/12TenBest-COVER-superJumbo.gif"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../assets/Bookshop.gif"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWh1dmI3YXlxcDkybXcxc3hkcnhmbnBlOGdwdXNpNnFxNTlwY2w1NCZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/WQGTk8In1neHvYzLyU/giphy.webp"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container mt-2">
        <div className="row">
          {filteredBooks.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card mb-4">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Category: {book.category}
                  </h6>
                  <p className="card-text">Price: {book.price}</p>
                  <p className="card-text">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Include the Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
