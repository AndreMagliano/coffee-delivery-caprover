import {
  HomeContainer,
  IntroContent,
  CoffeeList,
  Cards,
  CoffeeContainer,
} from './styles'

import BannerImg from '../../assets/Banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoCard } from '../../components/InfoCard'

import { defaultTheme } from '../../styles/themes/default'
import { CoffeeCard } from '../../components/CoffeeCard'

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

export function Home() {
  return (
    <HomeContainer>
      <IntroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Cards>
            <InfoCard
              icon={<ShoppingCart size={16} weight="fill" />}
              color={defaultTheme['yellow-dark']}
              text="Compra simples e segura"
            />
            <InfoCard
              icon={<Package size={16} weight="fill" />}
              color={defaultTheme['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <InfoCard
              icon={<Timer size={16} weight="fill" />}
              color={defaultTheme.yellow}
              text="Entrega rápida e rastreada"
            />
            <InfoCard
              icon={<Coffee size={16} weight="fill" />}
              color={defaultTheme.purple}
              text="O café chega fresquinho até você"
            />
          </Cards>
        </div>
        <img src={BannerImg} alt="" />
      </IntroContent>
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                tags={coffee.tags}
                price={coffee.price}
                image={coffee.image}
                description={coffee.description}
              />
            )
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
