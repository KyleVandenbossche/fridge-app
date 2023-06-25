


export function CarbGrid () {


    const carbohydrates: string[] = [
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
    ];



  return (
    <>   
     <div className="container">
      <div className="row">
        {carbohydrates.map((carbohydrate, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{carbohydrate}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default CarbGrid;
