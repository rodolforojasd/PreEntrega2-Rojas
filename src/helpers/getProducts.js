import data from '../data/PRODUCTS.json'

export const getProducts = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data)
        },1500)
    })
}

export const getProductsById = (id) => {

    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve(data.find(product => product.id === id))
        }, 1500)
    })
}