import Carrito from "../Assets/images.png"
import  "./CartWidget.css"

export default function CartWidget() {
    return (
      <div className="container-widget">
        <div className="widget">
          <img id="carrito" src={Carrito} alt="" />
          <span id="contador">0</span>
        </div>
      </div>
    );
  }