import { HeaderTop, Logo, NavSearch, CarImg, ContainerCar, ContainerHeader, HeaderNav, ImageLogo, ContainerLogin } from "./styledHeader"
import ShopCar from '../img/car.svg'
import Login from '../img/login.svg'

export function Header() {
    return (
        <ContainerHeader>
            <HeaderTop>
                <Logo>
                    <ImageLogo src='https://img.freepik.com/vetores-gratis/bonito-astronauta-paz-na-lua-com-foguete-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone_138676-5030.jpg?w=2000' />
                    <h1>LabSpace</h1>
                </Logo>
                <NavSearch>
                    <img src='https://uploaddeimagens.com.br/images/004/351/164/full/585e4ae1cb11b227491c3393.png?1676184119' alt="" />
                    <input placeholder="procure o produto desejado..." />
                    <button>Buscar</button>
                </NavSearch>

                <ContainerLogin>
                    <img src={Login} />
                    <p>Olá, faça seu <a href="" >login</a> ou <a href="">cadastre-se</a></p>
                </ContainerLogin>

                <ContainerCar>
                    <CarImg src={ShopCar}/>
                </ContainerCar>
            </HeaderTop>
            <HeaderNav>
                <button><a href="">Todos os Produtos</a></button>
                <button><a href="">Moda Masculina</a></button>
                <button><a href="">Moda Feminina</a></button>
                <button><a href="">Moda Infantil</a></button>
                <button><a href="">Camisetas Regata</a></button>
            </HeaderNav>
        </ContainerHeader>
    )
}