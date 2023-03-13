import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../../helpers/getProducts'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

 export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        
        getProducts()
            .then((response) => {
                if (!categoryId) {
                    setProducts(response)
                } else {
                    response.map((product)=> product.thumbnail = `${product.thumbnail}`)    
                    setProducts( response.filter((product) => product.category === categoryId)) 
                    
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div >
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={products}/>
            }
            
        </div>
    )
}


