import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {ItemCount} from "../ItemCount/ItemCount"


const ItemDetail = ({item}) => {
    
    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()
    
    const handleBack = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        const newItem = {
            ...item,
            quantity
            
        }



        console.log(newItem)
    }

    return (
        <div className="container ">
            <h2>{item.title}</h2>
            <img src={`.${item.thumbnail}`} alt={item.title} width= "400px" />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
         
            <ItemCount 
                max={item.stock}
                quantity={quantity}
                setQuantity={setQuantity}
                handleAdd={handleAdd}
            />

            <button onClick={handleBack} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail