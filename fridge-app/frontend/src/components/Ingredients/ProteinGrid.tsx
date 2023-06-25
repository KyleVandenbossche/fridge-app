



export function ProteinGrid () {

    const proteins: string[] = [
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
    ];



  return (
    <>
    <div className="protein-container">
    <div className="container">
      <div className="row">
        {proteins.map((protein, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{protein}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default ProteinGrid;
