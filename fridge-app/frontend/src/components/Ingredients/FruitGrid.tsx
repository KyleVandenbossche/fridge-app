


export function FruitGrid () {

  const fruits: string[] = [
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
  ];



  return (
    <div className="container">
      <div className="row">
        {fruits.map((fruit, index) => (
          <div className="col-lg-6 col-md-4 col-sm-2" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{fruit}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitGrid;
