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
                <li className="link"><button className="protein-button"><Link to ='./proteins'>Proteins</Link></button></li>
                <li className="link"><button className="fruit-button"><Link to ='./fruits'>Fruit</Link></button></li>
                <li className="link"><button className="carbohydrate-button"><Link to ='./carbohydrates'>Carbohydrates</Link></button></li>
                <li className="link"><button className="vegetable-button"><Link to ='./vegetables'>Vegetables</Link></button></li>
                <li className="link"><button className="seasonings-button"><Link to ='./seasonings'>Seasonings</Link></button></li>
            </div>    

        {/* TEXT AT THE TOP - NAV BAR */}




        {/* PICTURES AT THE BOTTOM - NAV BAR */}

            <div className="icon-nav-container">
                <li className="picture-link"><Link to ='./proteins'><img src={ require('./PicturesNav/Proteins.PNG')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./fruits'><img src={ require('./PicturesNav/Fruit.PNG')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./carbohydrates'><img src={ require('./PicturesNav/Carbohydrates.PNG')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./seasonings'><img src={ require('./PicturesNav/Seasonings.PNG')} height="50" /></Link></li>
                <li className="picture-link"><Link to ='./vegetables'><img src={ require('./PicturesNav/Vegetables.PNG')} height="50" /></Link></li>
            </div>

        {/* PICTURES AT THE BOTTOM - NAV BAR */}

        </ul>

        
    </div>
  );
};


