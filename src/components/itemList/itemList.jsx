import './itemList.css';
import Item from '../item/item.jsx';

const ItemList = ({ item }) => {
    return (
        <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-0 my-5 px-5">
            {item?.map((item) => {
                return <Item key={item.itemID} item={item}/>;
            })}
        </div>
    );
};

export default ItemList;