
import { useParams } from "react-router-dom"

function Product () {
    const pathParams = useParams()
    return (
        <h1>produto: {pathParams.name}</h1>
    )
}

export { Product }