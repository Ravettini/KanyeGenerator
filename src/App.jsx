import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import "./app.css"
import kanye from "./assets/kanye.png"
import axios from "axios";

const App = () => {
  const [giphy, setGiphy] = useState("");
  const [quote, setQuote] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {

      const apiRoot = "https://api.giphy.com/v1/gifs/search?api_key=s92T3sw8DwxFBxt737tncTIPYT06w0WC&q=Kanye+west&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
      const giphyUrl = (`${apiRoot}trending?`);
      const quoteUrl = "https://api.kanye.rest/text";

      const getGiphyUrl = axios.get(giphyUrl);
      const getQuoteUrl = axios.get(quoteUrl);

      axios.all([getGiphyUrl, getQuoteUrl]).then(
        axios.spread((...allData)=>{
          
          setGiphy(`${allData[0].data.data[randomIndex].images.fixed_height.url}`)
          setQuote(`${allData[1].data}`)
          
        })
      )
      const randomIndex = Math.floor(Math.random() * 24)
      
    };
    fetchData();
  }, [fetching]);
  return (
    <main>
    <div className='container'>
    
  <img src={kanye} className='kanyexd' /><h1>Kanye West Gif and Quote generator</h1>
  <p className='parrafo'>A Kanye West Random Gif and quote generator using GIPHYapi and KANYErestAPI</p>
        
    <Card className='cardxd'>
      <Card.Img className='imgxd' variant="top" src={giphy} />
      <Card.Body>
        <Card.Title>Random Kanye West generator
        </Card.Title>
        <Card.Text className='texto'>
          "{quote}" <br/>
        </Card.Text>
        <p className='spam'> -Kanye West </p>
        <Button className='boton' variant="primary" onClick={()=>setFetching(!fetching)}>More Gifs and quotes</Button>
      </Card.Body>
    </Card>
    
    </div>
    <div className="iconos">
    <a href="https://github.com/Ravettini"><i class="fa-brands fa-github"></i></a>
    <a href="https://ravefolio.netlify.app"><i class="fa-solid fa-briefcase"></i> </a>
    </div>
    </main>
  )
}

export default App