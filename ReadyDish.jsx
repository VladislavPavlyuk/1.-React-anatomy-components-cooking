class ReadyDish extends React.Component {
  render() {
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-1367x2048.jpg';
    let pic = './assets/pics/sliced-peking-duck-1367x2048.jpg';

      return <div>
        <p>A legendary dish made easy, this Peking duck recipe doesn’t require any special equipment or advanced skill. But it still tastes so satisfying!</p>
        <img src={pic} alt="Ready dish" />
        <h2>WHAT IS PEKING DUCK?</h2>
        <p>One of the most symbolic dishes of Chinese Cuisine, Peking Duck (北京烤鸭) is a delicacy named after the city where it was invented several hundred years ago (Peking is an older variation of the word Beijing/北京).
            It’s a dish consisting of several elements: sliced pieces of roast duck with crispy skin and tender meat, thin pancakes, a savoury sauce and some julienned vegetables. These elements are assembled into a roll for consumption.
            Every time I travel back to Beijing where I worked for nearly a decade, Peking duck is always my No.1 dish to eat with family and friends. If you’ve tasted it before, you’d understand why it’s regarded as a culinary art.
            </p>
      </div>;
  }
}