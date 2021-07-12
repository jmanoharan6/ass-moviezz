import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import tv1 from '../images/tv1.jpeg';
import tv2 from '../images/tv2.jpeg';
import tv3 from '../images/tv3.jpeg';
import tv4 from '../images/tv4.jpeg';
import tv5 from '../images/tv5.jpeg';
import tv6 from '../images/tv6.jpg';

const Tvshows = () => {
    return (
        <div>
            
            <br></br>
            <br></br>
            <h2 className="text-left">Featured TV shows</h2>
            <br></br>
            <br></br>
            <CardGroup>
                
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv1} alt="tv1"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv2} alt="tv2"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv3} alt="tv3"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv4} alt="tv4"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv5} alt="tv5"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={tv6} alt="tv6"/>
                    </div>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Tvshows
