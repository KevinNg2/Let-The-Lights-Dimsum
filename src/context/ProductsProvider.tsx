import { ReactElement, createContext, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
// const initState: ProductType[] = [];
const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Xiaolongbao",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Char Siu Chung",
    price: 5.99,
  },
  {
    sku: "item0003",
    name: "Braised Beef Noodle Soup",
    price: 15.99,
  },
  {
    sku: "item0004",
    name: "Lo Mai Gai",
    price: 4.99,
  },
  {
    sku: "item0005",
    name: "Chi Zhi Feng Zhao",
    price: 3.99,
  },
  {
    sku: "item0006",
    name: "Century Egg Congee",
    price: 5.0,
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  // useEffect(() => {
  //     const fetchProducts = async (): Promise<ProductType[]> => {
  //         const data = await fetch('http://localhost:3500/products').then(res => {
  //             return res.json()
  //         }).catch(err => {
  //             if (err instanceof Error) console.log(err.message)
  //         })
  //         return data
  //     }

  //     fetchProducts().then(products => setProducts(products))
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
