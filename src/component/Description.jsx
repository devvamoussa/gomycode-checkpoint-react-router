import React from 'react'
import NavBar from './NavBar'
import "./Description.css"

function Description({match , movie}) {

    let films = movie.find(p => p.id == match.params.id)

    return (
        <div>
            <NavBar/>
            
                <div className="container-dp">
                    <div>
                        <iframe width="900" height="600" src={films.posterURL}
                            title={films.title} frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullscreen>
                            </iframe>
                        
                    </div>
                    <div>
                        <h1>{films.description}</h1>
                    </div>
                </div>

            
        </div>
    )
}

export default Description
