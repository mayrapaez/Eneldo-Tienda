import { createContext, useContext, useState, useEffect } from 'react';
import swal from 'sweetalert';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('cart') != null && localStorage.getItem('cart') !== '[]' && cart.length === 0) {
            setCart(JSON.parse(localStorage.getItem('cart')))
            setCartQuantity(JSON.parse(localStorage.getItem('cartQuantity')))
            setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')))
        } else {
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        }
    }, [cart]);

    //Función para agregar productos al carrito
    function addItem(item, quantity) {

        //Función para saber si un producto está en el carrito
        const index = cart.findIndex(i => i.item.id === item.id);

        setCartQuantity(cartQuantity + quantity);
        setTotalPrice(totalPrice + quantity * item.price);

        //Agregar productos repetidos al carrito
        if(index !== -1) {
            let newArray = [...cart];
            newArray[index].quantity += quantity;
            setCart(newArray);
        } else {
            //Agregar productos nuevos al carrito
            setCart([...cart, {item, quantity}]);
        };
        swal({
            text: "Producto agregado al carrito",
            icon: "success",
            button: false,
            timer: 1200
          });
        localStorage.removeItem('cart');
        localStorage.removeItem('cartQuantity');
        localStorage.removeItem('totalPrice');
    };

    //Función para eliminar productos del carrito
    function removeItem(item, quantity) {
        setCart(cart.filter(i => i.item.id !== item.id));
        setCartQuantity(cartQuantity - quantity);
        setTotalPrice(totalPrice - quantity * item.price);
        localStorage.removeItem('cart');
        localStorage.removeItem('cartQuantity');
        localStorage.removeItem('totalPrice');
    };

    //Función para vaciar el carrito
    function emptyCart() {
        setCart([]);
        setCartQuantity(0);
        setTotalPrice(0);
        localStorage.removeItem('cart');
        localStorage.removeItem('cartQuantity');
        localStorage.removeItem('totalPrice');
    };

    return (
        <CartContext.Provider value={{ cart, cartQuantity, totalPrice, addItem, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};