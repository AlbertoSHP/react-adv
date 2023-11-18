import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProp, ProductCardProp } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProp) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
