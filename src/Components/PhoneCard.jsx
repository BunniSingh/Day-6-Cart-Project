import './Common.css'

import { useState, useEffect } from 'react';

const phoneData = [
    {
        id: 'Phone1',
        img: 'https://www.course-api.com/images/cart/phone-1.png',
        name: 'Samsung Galaxy S8',
        price: 399.99
    },
    {
        id: 'Phone2',
        img: 'https://www.course-api.com/images/cart/phone-2.png',
        name: 'google pixel',
        price: 999.99
    },
    {
        id: 'Phone3',
        img: 'https://www.course-api.com/images/cart/phone-3.png',
        name: 'Xiaomi Redmi Note 2',
        price: 699.99
    },
    {
        id: 'Phone4',
        img: 'https://www.course-api.com/images/cart/phone-4.png',
        name: 'Samsung Galaxy S7',
        price: 599.99
    }
];


const PhoneList = () => {
    const [productCount, setProductCount] = useState(1);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct([...phoneData]);
    }, []);
    const changeProductCount = (n ,id) => {
        let copyproduct = [...phoneData];
        copyproduct.forEach(item => {
            if (item.id === id) {
                setProductCount(productCount  + n)
            }
        });
    }
    return (
        <div className='phone-list'>
            <h1>Your bag</h1>
            {product.map(phone => (
                <div key={phone.id} className='phone-card'>
                    <img src={phone.img} alt={phone.name} />
                    <div className="detail">
                        <h3>{phone.name}</h3>
                        <p>Price: ${phone.price.toFixed(2)}</p>
                        <button className="remove-btn">Remove</button>
                    </div>

                    <div className="counter-product">
                        <button className="increment-btn" onClick={()=>{
                            changeProductCount(1 ,phone.id);
                        }}><i class="fa-solid fa-chevron-up"></i></button>
                        <div className="countval">{productCount}</div>
                        <button className="decrement-btn" onClick={()=>{
                            changeProductCount(-1, phone.id);
                        }}><i class="fa-solid fa-chevron-down"></i></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PhoneList;