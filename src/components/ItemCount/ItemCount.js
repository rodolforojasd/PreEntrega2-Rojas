

export const ItemCount = ({max, quantity,setQuantity, addToCart}) => {


    



    const handleAdd = () =>{
      quantity < max && setQuantity(quantity + 1)
    }

    const handleReduce = () =>{
        quantity > 1 && setQuantity(quantity - 1)
    }
    

    return(
        
            <div className= "container">
                <button onClick={addToCart} className="btn btn-success">Añade al carrito</button>
                <div className="col-4">
                    <button onClick={handleAdd} type="button" className="btn btn-secondary">+</button>
                    <span className="item_Count">{quantity}</span>
                    <button onClick={handleReduce} type="button" className="btn btn-secondary">-</button>
                </div>
                
            </div>
        )

    }                        


