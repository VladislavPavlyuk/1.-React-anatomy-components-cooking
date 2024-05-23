class Wrapping extends React.Component {
  render() {
    let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/wrap-peking-duck-with-pancake.jpg';
    
      return <div>
        <h2>HOW TO WRAP?</h2>

        <p>Now you’ve got all the elements of a Peking duck meal. It’s time to wrap up and enjoy! Lay a piece of pancake on the plate. Spread some sauce over then add a few pieces of sliced duck, scallions and cucumber.
        </p>  

        <img src={pic} alt="HOW TO WRAP?" />
        
        <p>Fold the bottom part up, then fold the left and right sides towards the centre to form a cylinder leaving the top part open. Give it a generous bite. I’m sure you’ll be proud of your made-from-scratch creation!
        </p>

      </div>;
  }
}