import FirstNav from "./FirstNav";
import Header from "./Header";
import './App.css'
import CenteredTabs from "./LinksNav"
import MiniCont from './MiniContainer'
import Container from '@mui/material/Container';
import MainScr from "./MainScreen"
function App(){
  return(
    <>
    <FirstNav/>
    <Header/>
    <CenteredTabs/>
    <Container>
      <MiniCont/>
      <MainScr Img='https://static.dw.com/image/64006039_602.jpg' 
      Title='Energy breakthrough: Can nuclear fusion help fuel the world?'
      Subtitle="The US Department of Energy announced a breakthrough in the generation of energy using nuclear fusion." 
      Img2='https://static.dw.com/image/61440212_602.jpg'
      Title2='Small Morocco punches above its weight on renewables'
      Subtitle2="Morocco is scoring big on renewables projects. DW takes a look at how it got there."
      Img1S='https://static.dw.com/image/63727138_602.jpeg'
      Title1S="A green town of the future"
      Img2S='https://static.dw.com/image/64066425_602.jpg'
      Title2S="Ukrainians VS winter"/>
      <MainScr Img='https://static.dw.com/image/64071246_602.jpg' 
      Title='Bundesliga: Who could replace Manuel Neuer at Bayern Munich?'
      Subtitle="The news that Manuel Neuer will be out for the rest of the season has rocked the serial Bundesliga champions. Recalling Alexander Nübel from his loan at Monaco is the preferred option – but it's not straightforward." 
      Img2='https://static.dw.com/image/41213854_602.jpg'
      Title2="Explaining the 'unexplained' gender pay gap"
      Subtitle2="A team of researchers from 15 different countries has completed a major new study on the gender pay gap. It upends previous research that suggested the gap was caused by the types of jobs men and women ended up in."
      Img1S='https://static.dw.com/image/63941766_602.jpeg'
      Title1S="Global Living Room: Italy"
      Img2S='https://static.dw.com/image/59169246_602.jpg'
      Title2S="Diet causes cognitive decline" />
    </Container>
    </>
  )
}
export default App;
