import React from "react";
import styles from './product.module.css';
import Footer from '../footer';
import { useItemState } from './context';

function Item({ item }) {
    return(
        <div className={styles.item}>
            <img src={ item.src } />
            <h6 style={{ fontSize: '20px' }}>{ item.title }</h6>
            <p>{ item.price }</p>
        </div>
    );
}

function Product() {
    /*
    const items = [
        {
            id: 1,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '1000원',
            act: true
        },
        {
            id: 2,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '2000원',
            act: true
        },
        {
            id: 3,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '3000원',
            act: false
        },
        {
            id: 4,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '4000원',
            act: false
        },
        {
            id: 5,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '1000원',
            act: true
        },
        {
            id: 6,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '2000원',
            act: true
        },
        {
            id: 7,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '3000원',
            act: false
        },
        {
            id: 8,
            src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
            title: '[냉장]떠먹는 불가리스 복숭아',
            price: '4000원',
            act: false
        }
    ]
    */
    
    const items = useItemState();

    return(
        <div className={styles.subcom}>
            <header className={styles.header}>
                <h3>product</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}>
                <div>
                    {items.map((item) => (
                        <Item item={ item } key={ item.id } />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;