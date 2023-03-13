import { useEffect } from "react"



const AboutUs = () => {

    
    const clickear = (event) => {
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener('click', clickear)

        return () => {
            window.removeEventListener('click', clickear)
        }
    }, []) 

    return (
        <div className="container my-5" onClick={clickear}>
            <h2>Quiénes Somos</h2>
            <hr/>
        </div>
    )
}

export default AboutUs