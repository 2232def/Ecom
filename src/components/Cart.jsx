import React, {  useState } from "react";

function Cart({ visible, onClose, cart, setCart}) {
  if (!visible) return null;
  // const {cart} = useContext(CartContext)

  const [price, setPrice] = useState(0);

  const appStyle = {
    fontFamily: "'Monospace',Lucida Console"
  };

  return (
    <article>
      <div style={appStyle} className="cart w-[22vw] h-[100vh] bg-red-500 fixed right-0">
        <button onClick={onClose} className="text-white">
          X
        </button>
        {cart.map((item) => {
          <div className="Cart_box" key={item.id}>
            <div className="Cart_img">
              <img src={item.imageSrc} alt="" />
              <p>{item.name}</p>
            </div>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button>Remove</button>
            </div>
          </div>
        })}
      </div>
      <div>
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

    </article>
  );
}

export default Cart;
