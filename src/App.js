import logo from './logo.svg';
import React from "react";
import './App.css';


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
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {/*type a small description*/}


            {numPizzas > 0 ? (
                <>
                    <p>
                        We have a variety of pizzas to choose from. Order online or visit our restaurant to enjoy our
                        delicious
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((menu) => (
                            <Pizza key={menu.name} menu={menu}/>
                        ))}
                    </ul>
                </>
            ) : <span className={'order'}>No Pizza on our menu</span>}

        </main>
    )
}

function Pizza({menu}) {
    return (
        <li className={`${menu.soldOut ? 'sold-out' : ''} pizza`}>
            <img src={menu.photoName} alt={menu.name}/>
            <div>
                <h3>{menu.name}</h3>
                <p>{menu.ingredients}</p>
                <span>{menu.soldOut ? "SOLD OUT" : menu.price}</span>
            </div>
        </li>
    );
}

function Order({closeHour, openHour}) {
    return (
        <div className="order">
            <p>We are open from {openHour}:00 Until {closeHour}:00 Come visit ur or order online</p>
            <button className="btn">Order</button>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    console.log(isOpen)

    // if(hour >= openHour &&  hour <= closeHour) {
    //     return <footer>{new Date().toLocaleTimeString()}. We are currently open</footer>
    // }
    return <footer className="footer">{
        isOpen ?
            <Order openHour={openHour} closeHour={closeHour}/>
            : (
                <div className="order">
                    <p>We are closed. We open at {openHour}:00</p>
                </div>)

    }</footer>
}


export default App;
