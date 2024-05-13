import { CardDiv, MiniPhrase, MainPhrase, Title, Prices, Price, OldPrice, ButtonBuy } from "../Style/App"
import image from '../images/icon-cart.svg'

const Card = () => {
    return (
        <CardDiv>
            <MiniPhrase>
                PERFUME
            </MiniPhrase>
            <Title>Gabrielle Essence Eau De Parfum</Title>
            <MainPhrase>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </MainPhrase>
            <Prices>
                <Price>$149.99</Price> <OldPrice>$169.99</OldPrice>
            </Prices>
            <ButtonBuy>
                <img src={image} alt="" />
                Add to Cart
            </ButtonBuy>
        </CardDiv>
    )
}

export default Card;