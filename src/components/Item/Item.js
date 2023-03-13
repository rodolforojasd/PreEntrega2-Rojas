import { Link } from "react-router-dom"
import './Item.scss' 

const Item = ( {item} ) => {

    return (
        <div className='col-4'>
            <div>
                <img id={`${item.id}-${item.title}`} className="list-img" src={item.thumbnail} alt={item.title}/>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>Precio: <strong>${item.price}</strong></p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            </div>
        
        </div>
    )
}

export default Item