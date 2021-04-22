import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app'
import { getFirestore } from '../../firebase/firebase.jsx';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';
import './checkout.scss';

const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useCartContext();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [apartment, setApartment] = useState("");
    const [location, setLocation] = useState("");
    const [orderID, setOrderID] = useState();
    const [date, setDate] = useState("");
    const [total, setTotal]= useState(0);
    const [purchase, setPurchase]= useState([]);

    const managePurchase = (evt) => {
        evt.preventDefault();
        
        let purchaseDate = new Date();
        setDate(purchaseDate.toLocaleString());
        
        const purchaseInfo = {
            buyer: {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                address: {
                    street: street,
                    streetNumber: streetNumber,
                    apartment: apartment,
                    location: location
                }
            },
            items: cart,
            total: totalPrice,
            date: firebase.firestore.Timestamp.fromDate(purchaseDate)
        };
        
        const baseDatos = getFirestore();
        const orderCollection = baseDatos.collection("orden");
        orderCollection.add(purchaseInfo).then(({id}) => {
            setOrderID(id);
        })
        .catch((error) =>{
            console.log(error);
        });
        updateStock(purchaseInfo);
    };

    const updateStock = (purchaseInfo) => {
        purchaseInfo.items.map((element) => {
            let id = element.item.id
            let quantity = element.quantity

            const baseDatos = getFirestore();
            const itemCollection = baseDatos.collection("productos");
            const itemFirestore = itemCollection.doc(id);
            itemFirestore.get().then((value) => {
                let previousStock = value.data().stock
                return itemFirestore.update({
                    stock: previousStock - quantity
                });
            });
        });
    };

    return (
        <>
            {orderID ?
                <div className="checkoutCongratsContainer my-3 mx-5">
                    <h5>¡Muchas gracias por tu compra, {name}!</h5><br/>
                    <p>
                        Tu número de orden es <span id="order">{orderID}</span><br/><br/>
                        Ya enviamos el detalle de tu compra y el código de seguimiento del envío a tu casilla de correo electrónico (<a id="email">{email}</a>).
                    </p>
                    <Link to={`/productos`} className="goToProducts">Iniciar una nueva compra</Link>
                </div>
                :
                <div className="checkoutFormContainer my-3 mx-5">
                    <form className="checkoutForm" onSubmit={(evt) => {managePurchase(evt); emptyCart(); setTotal(totalPrice); setPurchase(cart)}}>
                        <h5>Datos personales</h5>
						<div className="form-group my-4">
							<label htmlFor="name">Nombre</label>
							<input type="text" className="form-control" id="name" name="name" value={name} onChange={(evt) => {setName(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="surname">Apellido</label>
							<input type="text" className="form-control" id="surname" name="surname" value={surname} onChange={(evt) => {setSurname(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="email">E-mail</label>
							<input type="email" className="form-control" id="email" name="email" value={email} onChange={(evt) => {setEmail(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="confirmEmail">Confirmar e-mail</label>
							<input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={confirmEmail} onChange={(evt) => {setConfirmEmail(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="phone">Teléfono</label>
							<input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(evt) => {setPhone(evt.target.value)}}/>
						</div>
                        <hr className="my-5"/>
                        <h5>Domicilio</h5>
                        <div className="form-group my-4">
							<label htmlFor="street">Calle</label>
							<input type="text" className="form-control" id="street" name="street" value={street} onChange={(evt) => {setStreet(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="streetNumber">Altura</label>
							<input type="text" className="form-control" id="streetNumber" name="streetNumber" value={streetNumber} onChange={(evt) => {setStreetNumber(evt.target.value)}}/>
						</div>
                        <div className="form-group my-4">
							<label htmlFor="apartment">Piso / departamento (opcional)</label>
							<input type="text" className="form-control" id="apartment" name="apartment" value={apartment} onChange={(evt) => {setApartment(evt.target.value)}}/>
						</div>

                        <div className="form-group my-4">
							<label htmlFor="location">Localidad</label>
							<input type="text" className="form-control" id="location" name="location" value={location} onChange={(evt) => {setLocation(evt.target.value)}}/>
						</div>
                        <div className="checkoutButtonContainer">
                            <Link to={`/carrito`}><button className="btn backButton mr-3">Atrás</button></Link>
                            {email === confirmEmail && name && surname && phone && street && streetNumber && location ? <button type="submit" className="btn shadow-sm continueButton">Comprar</button> : <button type="submit" className="btn shadow-sm continueButton" disabled>Comprar</button>}
                        </div>
					</form>
				</div>
            }
        </>
    );
};

export default Checkout;