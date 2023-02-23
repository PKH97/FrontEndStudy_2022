import React from "react";
import Footer from './footer';
// import Product from "./components/product";
import { useItemState } from "./context";

function Item({ item }) {
    if( item.id < 4 ) {
        return(
            <div className={styles.item}>
                <img src={ item.src } />
                <h6 style={{ fontSize: '20px' }}>{ item.title }</h6>
                <p>{ item.price }</p>
            </div>
        );
    }
}

function MainPage() {
    const items = useItemState();

    return(
        <div>
            <h3>MainPage</h3>
            <div style={{ border: '5px solid red' }}>
                {items.map((item) => (
                    <Item item={ item } key={ item.id } />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;