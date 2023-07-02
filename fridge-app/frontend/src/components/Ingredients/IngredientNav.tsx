import CarbGrid from "./CarbGrid";
import FruitGrid from "./FruitGrid";
import ProteinGrid from "./ProteinGrid";
import SeasoningsGrid from "./SeasoningsGrid";
import { useRef } from "react";
import "./IngredientNav.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export function IngredientNav () {

  



  return (
    <div className="ingredients-nav">
        <ul>

        {/* TEXT AT THE TOP - NAV BAR */}

            <div className="text-nav-container">
                <li className="link"><button className="protein-button"><Link to ='./proteins' style={{ textDecoration: 'none', color: 'white' }}>Proteins</Link></button></li>
                <li className="link"><button className="fruit-button"><Link to ='./fruits'style={{ textDecoration: 'none', color: 'white'}}>Fruit</Link></button></li>
                <li className="link"><button className="carbohydrate-button"><Link to ='./carbohydrates' style={{ textDecoration: 'none', color: 'white' }}>Carbohydrates</Link></button></li>
                <li className="link"><button className="vegetable-button"><Link to ='./vegetables' style={{ textDecoration: 'none', color: 'white' }}>Vegetables</Link></button></li>
                <li className="link"><button className="seasonings-button"><Link to ='./seasonings' style={{ textDecoration: 'none', color: 'white' }}>Seasonings</Link></button></li>
            </div>    

        {/* TEXT AT THE TOP - NAV BAR */}




        {/* PICTURES AT THE BOTTOM - NAV BAR */}

            <div className="icon-nav-container">
                <li className="picture-link"><Link to ='./proteins'><img src={ require('./PicturesNav/meat.png')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./fruits'><img src={ require('./PicturesNav/fruits.png')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./carbohydrates'><img src={ require('./PicturesNav/bread.png')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./seasonings'><img src={ require('./PicturesNav/seasoning.png')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./vegetables'><img src={ require('./PicturesNav/vegetable.png')} height="50" /></Link></li>
                        
            {/* <div className='icon-nav-container-text'>
                <p>Proteins</p>
                <p>Fruits</p>
                <p>Carbohydrates</p>
                <p>Seasonings</p>
                <p>Vegetables</p>
            </div> */}
            </div>   

        {/* PICTURES AT THE BOTTOM - NAV BAR */}

        </ul>

        
    </div>
  );
};


