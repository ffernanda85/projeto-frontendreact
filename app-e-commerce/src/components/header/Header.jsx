import * as s from "./styledHeader"
import ShopCar from '../img/car.svg'
import Login from '../img/login.svg'
import { Container } from "../../Container"


export function Header(props) {
    const { setGender, description, setDescription, setFilterIsOn, setScreen, totalItems } = props

    function selectFilter(e, setState, text) {
        setState(e.target.value)
        if (!text) {
            setFilterIsOn()
        }
    }

    return (
        <s.DivAux>
            <Container>
                <s.ContainerHeader>
                    <s.HeaderTop>
                        <s.Logo>
                            <s.ImageLogo src='https://img.freepik.com/vetores-gratis/bonito-astronauta-paz-na-lua-com-foguete-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone_138676-5030.jpg?w=2000' />
                            <h1>LabSpace</h1>
                        </s.Logo>
                        <s.NavSearch>
                            <img src='https://uploaddeimagens.com.br/images/004/351/164/full/585e4ae1cb11b227491c3393.png?1676184119' alt="" />
                            <input placeholder="procure o produto desejado..." value={description} onChange={(e) => selectFilter(e, setDescription, 'name')} />
                            <button onClick={() => setFilterIsOn()}>Buscar</button>
                        </s.NavSearch>

                        <s.ContainerLogin>
                            <img src={Login} />
                            <p>Olá, faça seu <a href="" >login</a> ou <a href="">cadastre-se</a></p>
                        </s.ContainerLogin>
                        <s.ContainerCart>
                            <s.QtdItemsCart>{totalItems}</s.QtdItemsCart>
                            <s.CarImg src={ShopCar} onClick={() => setScreen("Cart")} />
                        </s.ContainerCart>

                    </s.HeaderTop>
                    <s.HeaderNav>
                        <button value='todos' onClick={(e) => selectFilter(e, setGender)}>Todos os Produtos</button>
                        <button value='masculino' onClick={(e) => selectFilter(e, setGender)}>Moda Masculina</button>
                        <button value='feminino' onClick={(e) => selectFilter(e, setGender)}>Moda Feminina</button>
                        <button value='infantil' onClick={(e) => selectFilter(e, setGender)}>Moda Infantil</button>
                        <button value='regata' onClick={(e) => selectFilter(e, setGender)}>Camisetas Regata</button>
                    </s.HeaderNav>
                </s.ContainerHeader>
            </Container>
        </s.DivAux>
    )
}