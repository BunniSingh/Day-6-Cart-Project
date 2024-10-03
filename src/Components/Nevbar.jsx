import './Common.css';

const Navbar = ({totalItem}) => {
    console.log(totalItem);
    return (
        <nav>
            <div className="logo">
                 <h1>My<i class="fa-solid fa-people-carry-box"></i>Shop</h1>
            </div>
            
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <div className="cart">
            <i class="fa-solid fa-cart-plus"></i>
            <span class='cart-value'>{totalItem}</span>
            </div>
        </nav>
    )
}

export default Navbar;