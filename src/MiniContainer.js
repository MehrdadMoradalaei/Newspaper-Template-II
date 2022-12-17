import Grid from '@mui/material/Grid';
import './MiniContainer.css'
import Weather from "./Weather"
function MiniCont(){
    return(
        <Grid container spacing={2} className='FirstGrid'>
            <Grid item xs={8}>
              <Grid item xs={12}>
                <div>
                    <div className='label'>Breaking News</div>
                    <div className='subject'>Iranian People finally celebrate their Modern Revolution!</div>
                </div>
              </Grid>
                <Grid item xs={12}>
                    <div>
                     <div className='label'>Breaking News</div>
                     <div className='subject'>USA signed a peace treaty with Russia!</div>
                    </div>
                </Grid>
            </Grid>
        <Grid item xs={4}>
            <div>
                <Weather/>
                </div>        
        </Grid>
        </Grid>
    )
}
export default MiniCont;
