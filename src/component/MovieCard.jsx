import {Link } from "react-router-dom";
import "./MovieCard.css"

const MovieCard = ({list}) => {
    return (
        <div className="container">
            
            <div className="content">
                <Link to= {`description/${list.id}`}>
                    <iframe width="350" height="300" src={list.posterURL} 
                    title={list.title} frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullscreen>
                    </iframe>
                    <h2>{list.title}</h2>
                </Link>
                
                <p>{list.description}</p>
            </div>
        </div>
    )
}
export default MovieCard;
