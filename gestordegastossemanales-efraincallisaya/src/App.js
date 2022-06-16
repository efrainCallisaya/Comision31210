import './App.css';

export default function App() {
  return (
    <nav class="navbar navbar-light bg-light static-top">
    <div class="container ">
        <a class="navbar-brand" href="">AtraPA2</a>
       
        <a href="./pages/comprasPrimavera.html">
            <button type="button" class="btn btn-outline-success py-1 border-0">Primavera </button>
        </a>
        <a href="./pages/comprasVerano.html">
            <button type="button" class="btn btn-outline-danger py-1 border-0">Verano</button>
        </a>
        <a href="./pages/comprasOtonio.html">
            <button type="button" class="btn btn-outline-dark py-1 border-0">Otoño</button>
        </a>
        <a href="./pages/comprasInvierno.html">
            <button type="button" class="btn btn-outline-primary py-1 border-0">Invierno</button>
        </a>
        <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            carrito
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            
        </button>
        <a class="btn btn-primary" href="">Iniciar Sesion</a>
        
    </div>
</nav>
  )
}