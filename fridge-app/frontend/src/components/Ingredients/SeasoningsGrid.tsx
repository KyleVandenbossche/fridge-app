


export function SeasoningsGrid () {

    const seasonings: string[] = [
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper'
    ];


  return (
    <>
    <div className="container">
      <div className="row">
        {seasonings.map((seasoning, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{seasoning}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SeasoningsGrid;
