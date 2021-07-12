import React from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap';
import movie1 from '../images/movie1.jpg'
import movie2 from '../images/movie2.jpeg'
import movie3 from '../images/movie3.jpeg'
import movie4 from '../images/movie4.jpeg'
import movie5 from '../images/movie5.jpg'
import movie6 from '../images/movie6.jpeg'

const Movies = () => {
    return (
        <div>
             
           
            <br></br>
            <h2 className="text-left">Featured Movies</h2>
            <br></br>
            <br></br>
            <CardGroup>
                
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie1} alt="movie1"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie2} alt="movie2"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie3} alt="movie2"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie4} alt="movie3"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie5} alt="movie4"/>
                    </div>
                </Card>
                <Card className="moviesTab">
                    <div id = "movieImg"><Card.Img variant="top" src={movie6} alt="movie5"/>
                    </div>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Movies
