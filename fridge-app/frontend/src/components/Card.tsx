import { Ingredients } from "../models/Ingredients";


export function Card(props: {ingredient: Ingredients}){

    return(
        <div className="card-container">
            <div className="card"> 
                <div className="card_body">
                    <h2 className="card_title">Chicken</h2>
                    <p className="card_description">Chicken is a protein</p>
                </div>
                <button className="card_btn">View Nutrition</button>
            </div>
            <div className="card2">
                <div className="card_body">
                    <h2 className="card_title">Chicken</h2>
                    <p className="card_description">Chicken is a protein</p>
                </div>
                <button className="card_btn">View Nutrition</button>
            </div>
            <div className="card3">
                <div className="card_body">
                    <h2 className="card_title">Chicken</h2>
                    <p className="card_description">Chicken is a protein</p>
                </div>
                <button className="card_btn">View Nutrition</button>
            </div>
            <div className="card4">
                <div className="card_body">
                    <h2 className="card_title">Chicken</h2>
                    <p className="card_description">Chicken is a protein</p>
                </div>
                <button className="card_btn">View Nutrition</button>
            </div>

        </div>
    )
}