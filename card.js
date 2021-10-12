//import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import { Card } from 'antd';

// const { Meta } = Card;
export default function MovieCard({movie}){
    console.log('card',movie.cover_image)
    return(
        <>
        <Card style={{ width: '18rem', margin:'0px 0px 0px 50px', display:'flex'  }}>
        {/* card.img is used for poster  */}
        <Card.Img style={{ width: '290px', height:'300px' }}variant="top" src={movie.cover_image} />
        <Card.Body>
        {/* title is used here */}
             {/* <Card.Title>{movie.titles}</Card.Title> */}
             {/* year of the movie */}
             <Card.Text>
                  {movie.descriptions}
             </Card.Text>
             {/* link to the particular movie is rendered using imdbID */}
             <Link to={'/movies/'+ movie.id}>
                <Button variant="primary">Click here</Button>
            </Link>
        </Card.Body>
        </Card>
        </>
    )
}