import { createContext, ReactNode, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  tags: string[]
  price: number
  image: string
  description: string
}

interface CartCoffee extends Coffee {
  amount: number
}

interface CartContextProps {
  cart: CartCoffee[]
  addToCart: (coffee: CartCoffee) => void
  coffees: Coffee[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    price: 9.9,
    image: '../../../src/assets/coffees/expresso-tradicional.svg',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['tradicional'],
    price: 9.9,
    image: '../../../src/assets/coffees/expresso-americano.svg',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    price: 9.9,
    image: '../../../src/assets/coffees/expresso-cremoso.svg',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    image: '../../../src/assets/coffees/expresso-gelado.svg',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/cafe-com-leite.svg',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/latte.svg',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: 7,
    name: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/capuccino.svg',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/macchiato.svg',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/mocaccino.svg',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['especial', 'com leite'],
    price: 9.9,
    image: '../../../src/assets/coffees/chocolate-quente.svg',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    image: '../../../src/assets/coffees/cubano.svg',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['especial'],
    price: 9.9,
    image: '../../../src/assets/coffees/havaiano.svg',
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['especial'],
    price: 9.9,
    image: '../../../src/assets/coffees/arabe.svg',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: 14,
    name: 'Irlandês',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    image: '../../../src/assets/coffees/irlandes.svg',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartCoffee[]>([])

  function addToCart(coffee: CartCoffee) {
    setCart([...cart, coffee])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, coffees }}>
      {children}
    </CartContext.Provider>
  )
}
