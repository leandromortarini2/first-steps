import React from "react";
import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controllers", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

export default function FristStepsApp() {
  return (
    <div>
      {itemsInCart.map(({ productName, quantity }, i) => (
        <ItemCounter key={i} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={2} />
      <ItemCounter name="Pro Controllers" quantity={1} />
      <ItemCounter name="Sega" quantity={3} /> */}
    </div>
  );
}
