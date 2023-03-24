import { Container } from "../../Container"
import * as s from "./styledFooter"
import Wpp from '../img/networks/wpp.png'
import YouTube from '../img/networks/youtube.svg'
import Git from '../img/networks/git.png'
import Insta from '../img/networks/insta.png'
import Link from '../img/networks/link.png'
import CopyR from '../img/copyright.svg'
import Face from '../img/networks/face.png'
import America from '../img/payment/american-express.svg'
import Aura from '../img/payment/aura.svg'
import Boleto from '../img/payment/boleto.svg'
import Dinner from '../img/payment/diners.svg'
import Elo from '../img/payment/elo.svg'
import Hiper from '../img/payment/hipercard.svg'
import Master from '../img/payment/mastercard.svg'
import Visa from '../img/payment/visa.svg'

export function Footer() {
    return (
        <s.FooterContainer>
            <Container>
                <s.ContentFooter>
                    <s.ServicesContainer>
                        <s.UlFooter>
                            <s.LiFooter><s.Links href="">Encontre Uma Loja LabSpace</s.Links></s.LiFooter>
                            <s.LiFooter><s.Links href="">Cadastre-se para receber novidades</s.Links></s.LiFooter>
                            <s.LiFooter><s.Links href="">Cartão Presente</s.Links></s.LiFooter>
                        </s.UlFooter>

                        <div>
                            <s.TitleFooter>Ajuda</s.TitleFooter>
                            <s.UlFooter>
                                <s.LiFooter><s.Links href="">Dúvidas Gerais</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Entregas</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Pedidos</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Trocas e Devoluções</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Pagamentos</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Produtos</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Corporativo</s.Links></s.LiFooter>
                                <s.LiFooter><s.Links href="">Fale Conosco</s.Links></s.LiFooter>
                            </s.UlFooter>
                        </div>

                        <s.PaymentSocialContainer>
                            <div>
                                <s.TitleFooter>Redes Sociais</s.TitleFooter>
                                <s.NetworksContainer>
                                    <a href="https://web.whatsapp.com/" target='_blank'><s.ImgNetWork src={Wpp} alt="wpp" /></a>
                                    <a href="https://www.youtube.com/" target='_blank'><s.ImgNetWork src={YouTube} alt="youtube" /></a>
                                    <a href="https://www.linkedin.com/in/flavia-santos-dev/" target='_blank'><s.ImgNetWork src={Link} alt="linkedin" /></a>
                                    <a href="https://www.instagram.com/" target='_blank'><s.ImgNetWork src={Insta} alt="instagram" /></a>
                                    <a href="https://pt-br.facebook.com/" target='_blank'><s.ImgNetWork src={Face} alt="facebook" /></a>
                                    <a href="https://github.com/ffernanda85" target='_blank'><s.ImgNetWork src={Git} alt="github" /></a>
                                </s.NetworksContainer>
                            </div>

                            <div>
                                <s.TitleFooter>Formas de pagamento</s.TitleFooter>
                                <s.PaymentContainer>
                                    <s.ImgPayment src={America} alt="america" />
                                    <s.ImgPayment src={Aura} alt="aura" />
                                    <s.ImgPayment src={Boleto} alt="boleto" />
                                    <s.ImgPayment src={Dinner} alt="dinner" />
                                    <s.ImgPayment src={Elo} alt="elo" />
                                    <s.ImgPayment src={Hiper} alt="hiper" />
                                    <s.ImgPayment src={Master} alt="master" />
                                    <s.ImgPayment src={Visa} alt="visa" />
                                </s.PaymentContainer>
                            </div>

                        </s.PaymentSocialContainer>

                    </s.ServicesContainer>
                    <hr />
                    <s.BaseFooterContainer>
                        <s.ContentOne>
                            <a href=""><p>Brasil</p></a>
                            <a href=""><p>Política de Privacidade</p></a>
                            <a href=""><p>Termos de Uso</p></a>
                        </s.ContentOne>
                        <s.ContentTwo>
                            <img src={CopyR} alt="copyrigth" />
                            <p>
                                2023 - Desenvolvido por <a href="https://github.com/ffernanda85" target='_blank'>Flávia Santos</a>. Todos os direitos reservados.
                            </p>
                            <p>CNPJ: 55.555.555/0005-55 - Rodovia Leste, S/N Km 555 - Galpão 555 - CEP 555.555-555 - Paulista/PE</p>
                        </s.ContentTwo>
                    </s.BaseFooterContainer>
                </s.ContentFooter>
            </Container>
        </s.FooterContainer>
    )
}