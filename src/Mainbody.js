import { StarRating } from "./StarRating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Mainbody({ pic, name, price, button, setCount, count }) {
  return (
    <section>
      <div className="laptop-container">
        <div className="mainbody">
          <img className="image" src={pic} alt={name} />
          <h5>{name}</h5>
          <StarRating />
          <p> {price}</p>
          <button
            className="btn btn-primary mt-auto"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddShoppingCartIcon /> {button}
          </button>
        </div>
      </div>
    </section>
  );
}

export function Topnavbar({ count, setCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <Button
              style={{ marginRight: "20px" }}
              variant="contained"
              type="submit"
            >
              <ShoppingCartIcon /> Cart {count}
            </Button>

            <Button variant="outlined" color="error" type="submit">
              <RemoveShoppingCartIcon
                onClick={() => {
                  // emptying the cart to zero
                  setCount(0);
                }}
              />{" "}
              Empty Cart{" "}
              <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
}
