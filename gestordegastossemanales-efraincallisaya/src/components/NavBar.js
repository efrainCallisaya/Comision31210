

export default function NavBar() {
  return (

    <div className="container d-flex justify-content-around ">    
        <a href="./pages/comprasPrimavera.html">
            <button type="button" className="btn btn-outline-success py-1 border-0">Primavera </button>
        </a>
        <a href="./pages/comprasVerano.html">
            <button type="button" className="btn btn-outline-danger py-1 border-0">Verano</button>
        </a>
        <a href="./pages/comprasOtonio.html">
            <button type="button" className="btn btn-outline-dark py-1 border-0">Otoño</button>
        </a>
        <a href="./pages/comprasInvierno.html">
            <button type="button" className="btn btn-outline-primary py-1 border-0">Invierno</button>
        </a>
    </div>
  )
}
