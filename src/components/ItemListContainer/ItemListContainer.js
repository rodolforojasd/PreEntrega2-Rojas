import './ItemListContainer.scss'


 export const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="greeting-container">
            <h2>Banner
                
            </h2>
            <hr/>
            {greeting}
        </div>
    )
}
