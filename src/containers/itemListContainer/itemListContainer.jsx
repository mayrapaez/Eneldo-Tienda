import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {
    const {category} = useParams();
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("productos");
        
        const promesaItems = new Promise ((resolve, reject) => {
            resolve((category) ?
                (itemCollection.where("category", "==", category).get().then((value) => {
                    return value.docs.map(element => ({...element.data()}));
                }))
                :
                (itemCollection.get().then((value) => {
                    return value.docs.map(element => ({...element.data()}));
                }))
            )
        });

        promesaItems.then((result) => {
            setItem(result);
            setIsLoading(false);
        });

    }, [category]);

    if(isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <img src="/images/loading.gif" className="loading" alt="Loading" img-fluid/>
            </div>
        );
    };

    return (
        <ItemList item={item}/>
    );
};

export default ItemListContainer;