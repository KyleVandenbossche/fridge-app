import { Link } from "react-scroll";
import CarbGrid from "./CarbGrid";
import FruitGrid from "./FruitGrid";
import ProteinGrid from "./ProteinGrid";
import SeasoningsGrid from "./SeasoningsGrid";
import { useRef } from "react";


export function IngredientNav () {

    const proteins = useRef(null);
    const fruit = useRef(null);
    const carbs = useRef(null);
    const seasonings = useRef(null);

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'

        })
    }



  return (
    <div className="ingredients-nav">
        <ul>
            <li className="link">Proteins</li>
            <li className="link">Fruit</li>
            <li className="link">Carbs</li>
            <li className="link">Seasonings</li>

        </ul>

        
    </div>
  );
};


