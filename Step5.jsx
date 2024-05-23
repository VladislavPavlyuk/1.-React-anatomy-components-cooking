class Step5 extends React.Component {
  render() {
    
    let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/duck-and-stuffing-1536x1025.jpg';
    
      return <div>

        <h2>HOW TO ROAST THE DUCK?</h2>        
        
        <p>Before cooking, don’t forget to take the duck out of the fridge at least one hour beforehand. This allows it to come back to room temperature.</p>

        <h3>STUFF THE DUCK</h3>

        <img src={pic} alt="STUFF THE DUCK" />

        <p>
        Stuff the cavity of the duck with the following ingredients: apples, scallions, garlic, star anise, cassia cinnamon and bay leaves. This serves two purposes: To make the cooked meat juicier, and more flavourful too. To prevent the stuffing from falling out, seal the openings of the duck with toothpicks or skewers.
        </p>

      </div>;
  }
}