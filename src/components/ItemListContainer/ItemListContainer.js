import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../../helpers/getProducts'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// import {collection, getdocs, query, where} from 'firebase/firebase'
//import {db} from '../../firebase/config'

 export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    let data = []

    useEffect(() => {
        setLoading(true)
        /* 
        
        conecto a la coleccion de elementos
        const productosRef = coleection(db,products)
        
        pedido asincronico

      
         const q = categoryId
                ? query(productosRef, where("category", "==",categoryId))
                : productosRef
                
                
        getDocs(q)
            .then((res)=>{

                res.docs.map((doc)=>{
                    const docs = res.docs.map((doc)=> {
                        return{...doc.data(), id: doc.id} 
                    console.log(docs)

                    setProducts(docs)
                })
            
            })
        */

        /* BUSQUEDA FILTRADA DESDE FIREBASE POR CATEGORIA
        const productosRef = coleection(db,products)
        const q = 



        */

        getProducts()
            .then((response) => {
                if (!categoryId) {
                    setProducts(response)
                } else {
    // siento que este metodo es muy ineficiente seria mejor que mapeara sobre un resultado filtrado pero se me rompe todo cuando lo intente                
                    response.map((product) => { if(product.thumbnail.includes('../')){
                        product.thumbnail = `${product.thumbnail}` 
                    }else{
                        product.thumbnail = `.${product.thumbnail}`
                    }
                })    
                    setProducts(response.filter((product) => product.category === categoryId)) 
                    
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


