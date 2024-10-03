import './Common.css'
import { useState, useEffect, Fragment } from 'react';
import Navbar from './Nevbar';

const productData = [
    {
        id: 'Phone1',
        img: 'https://www.course-api.com/images/cart/phone-1.png',
        name: 'Samsung Galaxy S8',
        price: 399.99,
        unit: 1
    },
    {
        id: 'Phone2',
        img: 'https://www.course-api.com/images/cart/phone-2.png',
        name: 'google pixel',
        price: 999.99,
        unit: 1
    },
    {
        id: 'Phone3',
        img: 'https://www.course-api.com/images/cart/phone-3.png',
        name: 'Xiaomi Redmi Note 2',
        price: 699.99,
        unit: 1
    },
    {
        id: 'Phone4',
        img: 'https://www.course-api.com/images/cart/phone-4.png',
        name: 'Samsung Galaxy S7',
        price: 599.99,
        unit: 1
    }
];



const PhoneList = () => {
    const [product, setProduct] = useState([]);
    const [totalCartItem, settotalCartItem] = useState(0);

    

    useEffect(() => {
        // Initialize the product data, adding a count property to each item
        const initialProducts = productData.map(phone => ({ ...phone, count: 1, rate: phone.price }));
        setProduct(initialProducts);
        settotalCartItem(initialProducts.length);
    }, []);

    const changeProductCount = (n, id) => {
        const updatedProducts = product.map(item => {
            if (item.id === id) {
                // Make sure the count doesn't go below 1
                const newCount = Math.max(1, item.count + n);
                const price = item.rate * newCount;
                return { ...item, count: newCount, price: price };
            }
            return item;
        });
        setProduct(updatedProducts);
    };

    const removeProduct = (id) => {
        const updatedProducts = product.filter(item => item.id !== id);
        setProduct(updatedProducts);
        settotalCartItem(updatedProducts.length);
    };

    const removeAll = () => {
        setProduct([]);
        settotalCartItem(0);
    };

    return (
        <Fragment>
            <Navbar totalItem={totalCartItem}/>
            <div className='phone-list'>
                <h1>{`${product.length > 0 ? 'Your Card' : 'Your Cart is Empty'}`} <i class="fa-solid fa-bag-shopping"></i></h1>
                {product.map(phone => (
                    <div key={phone.id} className='phone-card'>
                        <img src={phone.img} alt={phone.name} />
                        <div className="detail">
                            <h3>{phone.name}</h3>
                            <p>Price: ${phone.price.toFixed(2)}</p>
                            <button className="remove-btn" onClick={() => removeProduct(phone.id)}>
                                Remove
                            </button>
                        </div>

                        <div className="counter-product">
                            <button className="increment-btn" onClick={() => changeProductCount(1, phone.id)}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </button>
                            <div className="countval">{phone.count}</div>
                            <button className="decrement-btn" onClick={() => changeProductCount(-1, phone.id)}>
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                ))}

                <div className="total-price">
                    <h3>Total Price:</h3>
                    <h3>
                        ${product.reduce((total, { price }) => (total + price), 0).toFixed(2)}
                    </h3>
                </div>
                <div className="checkout-btn">
                    <button onClick={removeAll}>Clear Cart</button>
                </div>
                
            </div>
        </Fragment>
    );
};

export default PhoneList;
