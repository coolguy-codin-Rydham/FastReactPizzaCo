import "./index.css";
import PropTypes from "prop-types";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaLen = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaLen > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious
          </p>
          <ul className="PizzaList">
            {pizzas.map((pizza) => {
              return <Pizza key={pizza.name} pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p> Wr are still working on our Menu. Please come back later</p>
      )}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut? "sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut? "SOLD OUT":  pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 to {closeHour}
          :00
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour, openHour }) => (
  <div className="order">
    <p>
      We&apos;re Open from {openHour}:00 to {closeHour}:00. Come Visit us or
      order online
    </p>
    <button className="btn">Order</button>
  </div>
);

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
  openHour: PropTypes.number.isRequired,
};

Pizza.propTypes = {
  pizzaObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photoName: PropTypes.string.isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};
export default App;
