import './home.css'; //import css for this code
import { Box,Button,  Divider, Avatar, Accordion, AccordionDetails,AccordionSummary, Card, CardMedia, Grid} from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

//creating the Home function (use uppercase) and EXPORT it so anyone in app can find it
export const Home = () =>  {
  return (
    
    <div className="App">
      <header className="App-header">
        
        {/*  Added this to header
        <Box sx={{float:"right"}}>
          <Avatar src={process.env.PUBLIC_URL + 'pictures/blankProfile.png'} 
           sx={{border:1.5 , width: 70, height:70}}/>
          <Button variant="text" float="right">Sign In</Button>
        </Box>*/
      }
          <img className = "App-Logo" src= {process.env.PUBLIC_URL + 'pictures/HomeworkHelp.png'} alt="Camp Summer logo" height={300} width={500} />
    <Divider variant="middle" light= {false}  />

      </header>     
  
       <body className = "App-body">
         
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardDoubleArrowDownIcon />} >
                <h2>Hours</h2>
            </AccordionSummary>
            <AccordionDetails>
              <h4>Sunday: 12:00AM - 8:00PM</h4>
              <h4>Monday-Thursday: 5:00PM - 10:00PM</h4>
            </AccordionDetails>

            </Accordion>

            <Accordion>

            <AccordionSummary
              expandIcon={<KeyboardDoubleArrowDownIcon />} >
              <h2 text-align='center'>Subjects</h2>
            </AccordionSummary>

            <AccordionDetails>
              <Grid sx={{flexGrow: 1}} container spacing={4} justifyContent="center">
                <Grid item xs={2}>
                  <Card sx={{ maxWidth: 230}}>
                  <CardMedia sx={{height:150}}
                  image= {process.env.PUBLIC_URL + 'pictures/math.png'} title="math Picture"
                />
                  <h4>Math</h4>
                </Card>
                </Grid>
                
                <Grid item xs={2}>
                   <Card sx={{ maxWidth: 230}}>
                  <CardMedia sx={{height:150}}
                   image ={process.env.PUBLIC_URL + 'pictures/science.png'} title="science Picture" 
                />
                <h4>Science</h4>
                </Card>
                </Grid>
          
              <Grid item xs={2}>
                   <Card sx={{ maxWidth: 230}}>
                  <CardMedia sx={{height:150}}
                   image ={process.env.PUBLIC_URL + 'pictures/history.png'} title="History Picture" 
                />
                <h4>History</h4>
                </Card>
                </Grid>

                <Grid item xs={2}>
                   <Card sx={{ maxWidth: 230}}>
                  <CardMedia sx={{height:150}}
                   image ={process.env.PUBLIC_URL + 'pictures/programming.png'} title="programming Picture" 
                />
                <h4>Programming</h4>
                </Card>
                </Grid>
             
              </Grid>
          </AccordionDetails> 
           
          </Accordion> 

          
           </body> 

    </div>
  );
}


