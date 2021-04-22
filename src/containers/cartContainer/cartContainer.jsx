import React from 'react';
import { Link } from 'react-router-dom';
import './cartContainer.scss';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartContainer = () => {
    const { cart, totalPrice, removeItem, emptyCart } = useCartContext();

    return (
        <div id="cartContainer">
            {(cart.length > 0) ?
                <>
                    <div className="cartDetailHeader my-4 mx-5">
                        <div className="my-2"></div>
                        <div className="my-2">Producto</div>
                        <div className="my-2">Cantidad</div>
                        <div className="my-2">Precio total</div>
                        <div className="my-2"></div>
                    </div>
                    {React.Children.toArray(cart.map(i => (
                        <div className="cartDetailItems my-4 mx-5">
                            <div>
                                <img src={i.item.pictureURL} alt={i.item.name}/>
                            </div>
                            <div>
                                <p>{i.item.name}</p>
                            </div>
                            <div>
                                <p>{i.quantity}</p>
                            </div>
                            <div>
                                <p>{`$${i.item.price * i.quantity}`}</p>
                            </div>
                            <div>
                                <button className="btn" onClick={() => removeItem(i.item, i.quantity)}>
                                    <FontAwesomeIcon icon={faTrashAlt} className="removeItemIcon"/>
                                </button>
                            </div>
                        </div>
                    )))}
                    <div className="mx-5 pt-2" id="totalPriceContainer">
                        <p>Total: <span>{`$${totalPrice}`}</span></p>
                    </div>
                    <div className="cartButtonContainer my-3 mx-5">
                        <Link to={`/productos`}><button className="btn continueBuyingButton mr-3">Seguir comprando</button></Link>
                        <button className="btn emptyCartButton mr-3" onClick={emptyCart}>Vaciar carrito</button>
                        <Link to={`/checkout`}><button type="button" className="btn shadow-sm continueButton">Continuar</button></Link>
                    </div>
                </>
            :
                <>
                    <div className="emptyCart my-5">
                        <img src="/images/emptyCart.png" alt="Carrito vacío"/>
                        <div className="ml-5">
                            <p className="py-3">¡Tu carrito está vacío!</p>
                            <Link to={`/productos`} className="goToProducts">Ver productos <FontAwesomeIcon icon={faChevronRight} className="chevron ml-2"/></Link>
                        </div>      
                    </div>
                </>
            } 
        </div>
    );
};

export default CartContainer;