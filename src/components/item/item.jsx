import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ item }) => {

    return (
        <div className="col mb-4">
            <Link to={`/productos/${item.id}`}>
                <div className="card cardItem shadow">
                    <img src={item.pictureURL} className="card-img-top img-fluid" alt={item.name}/>
                    <div className="card-body py-0 px-3">
                        <h5 className="card-title m-0">{item.name}</h5>
                        <p className="mt-3">${item.price}</p>
                    </div>
                    {(item.stock === 0) ?
                        <div className="card-footer">
                            <button type="button" className="btn mainBtn disabled">SIN STOCK</button>
                        </div>
                        :
                        <div className="card-footer">
                            <button type="button" className="btn shadow-sm mainBtn seeDetail">Ver producto</button>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};

export default Item;