import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("productos");
        const itemFirestore = itemCollection.doc(id);
        itemFirestore.get().then((value) => {
            setItem({id: value.id, ...value.data()});
        });
    }, [id]);
    
    return (
        <>
            {item && <ItemDetail item = {item}/>}
        </>
    );
};

export default ItemDetailContainer;