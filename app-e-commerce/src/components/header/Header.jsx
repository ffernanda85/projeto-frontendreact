import { HeaderTop, Logo, NavSearch, CarImg,  ContainerHeader, HeaderNav, ImageLogo, ContainerLogin } from "./styledHeader"
import ShopCar from '../img/car.svg'
import Login from '../img/login.svg'

export function Header(props) {

    const {setIsOn, setGender} = props

    console.log(props)

    function selectFilter(e) {
        setGender(e.target.value)
        setIsOn(true)
    }

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

                <CarImg src={ShopCar} />

            </HeaderTop>
            <HeaderNav>
                <button value='todos' onClick={(e)=>selectFilter(e)}>Todos os Produtos</button>
                <button value='masculino' onClick={(e)=>selectFilter(e)}>Moda Masculina</button>
                <button value='feminino' onClick={(e)=>selectFilter(e)}>Moda Feminina</button>
                <button value='infantil' onClick={(e)=>selectFilter(e)}>Moda Infantil</button>
                <button value='regata' onClick={(e)=>selectFilter(e)}>Camisetas Regata</button>
            </HeaderNav>
        </ContainerHeader>
    )
}