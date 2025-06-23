import EmptyCartImg from "../img/cart/empty-cart.png";

function EmptyCart({ openCart }) {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Keranjangmu Kosong</p>
      <button onClick={openCart}>Terus Menjelajah</button>
    </div>
  );
}

export default EmptyCart;
