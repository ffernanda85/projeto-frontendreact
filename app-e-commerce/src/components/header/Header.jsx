import { HeaderContainer, Logo, NavSearch } from "./styledHeader"

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src='https://img.freepik.com/vetores-gratis/bonito-astronauta-paz-na-lua-com-foguete-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone_138676-5030.jpg?w=2000' />
                <h1>LabSpace</h1>
            </Logo>
            <NavSearch>
                <img src='https://uploaddeimagens.com.br/images/004/351/164/full/585e4ae1cb11b227491c3393.png?1676184119' alt="" />
                <input placeholder="procure o produto desejado..." />
                <button>Buscar</button>
            </NavSearch>
            <img src=''/>
        </HeaderContainer>
    )
}