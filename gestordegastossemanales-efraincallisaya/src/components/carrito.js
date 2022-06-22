
export default function carrito(props) {
    return(
        <button className="btn btn-outline-dark me-5" type="submit">
            <i className="bi-cart-fill me-1"></i>
            carrito
            <span className="badge bg-dark text-white ms-1 rounded-pill">{props.cantcarrito}</span>
        </button>
    )
}