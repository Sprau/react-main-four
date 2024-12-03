import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function NotFoundPage(){

    let location = useLocation()
    console.log(location)


    let navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/products')
        }, 5000)
    }, [])

    return(
        <div className="not_found">
            <button className="btn" onClick={() => navigate('/products')}>Go to Prod List</button>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?t=st=1730133489~exp=1730137089~hmac=282680c7ce1dd0b0faaf2e761ba216368b2d4b9657b67bcf1037a2477af8305d&w=900"/>
        </div>
    )
}

export default NotFoundPage
