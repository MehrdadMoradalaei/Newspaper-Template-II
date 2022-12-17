import'./MainScreen.css'
import Grid from '@mui/material/Grid';
function MainScr(props){
    return(
        <Grid container spacing={2} item xs={12} className='SecondGrid'>
              <Grid item xs={4.5}>
                <div className='Bignews'>
                    <img src={props.Img}  alt=''/>
                    <h3>{props.Title}</h3>
                    <h5>{props.Subtitle}</h5>
                </div>
              </Grid>
              <Grid item xs={4.5}>
              <div  className='Bignews'>
                    <img src={props.Img2} alt=''/>
                    <h3>{props.Title2}</h3>
                    <h5>{props.Subtitle2}</h5>
                </div>
              </Grid>
            <Grid item xs={3} >
              <Grid item xs={12}>
              <div className='Smallnews'>
                    <img src={props.Img1S} className='img' alt=''/>
                    <h4>{props.Title1S}</h4>
                </div>
              </Grid>
              <Grid item xs={12}></Grid>
              <div className='Smallnews'>
                    <img src={props.Img2S} className='img' alt=''/>
                    <h4>{props.Title2S}</h4>
                </div>
            </Grid>
            </Grid>

    )
}
export default MainScr;
