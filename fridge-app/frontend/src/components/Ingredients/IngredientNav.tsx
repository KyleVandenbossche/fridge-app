import { Link } from "react-scroll";
import CarbGrid from "./CarbGrid";
import FruitGrid from "./FruitGrid";
import ProteinGrid from "./ProteinGrid";
import SeasoningsGrid from "./SeasoningsGrid";
import { useRef } from "react";
import "./IngredientNav.css"



export function IngredientNav () {



  return (
    <div className="ingredients-nav">
        <ul>
            <li className="link">Proteins</li>
            <li className="link">Fruit</li>
            <li className="link">Carbs</li>
            <li className="link">Vegetables</li>
            <li className="link">Seasonings</li>


            <div className="icon-container">
                <li className="picture-link"><img src={ require('./PicturesNav/Proteins.PNG')} height="50" /></li>
                <li className="picture-link"><img src={ require('./PicturesNav/Fruit.PNG')} height="50" /></li>
                <li className="picture-link"><img src={ require('./PicturesNav/Carbohydrates.PNG')} height="50" /></li>
                <li className="picture-link"><img src={ require('./PicturesNav/Seasonings.PNG')} height="50" /></li>
                <li className="picture-link"><img src={ require('./PicturesNav/Vegetables.PNG')} height="50" /></li>
            </div>

        </ul>

        
    </div>
  );
};


