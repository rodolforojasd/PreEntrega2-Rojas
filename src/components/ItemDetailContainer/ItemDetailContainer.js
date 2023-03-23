import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../helpers/getProducts"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
/* 
        
        conecto a la coleccion de elementos
        const productosRef = coleection(db,"products",itemId)
        
        pedido asincronico

        getDoc(productosRef)
            .then((doc)=>{

                
                    console.log(docs)

                    setItem({
                        id:doc.id,
                        
                    })
                })
            
            })
        */
        getProductsById( Number(itemId) )
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer