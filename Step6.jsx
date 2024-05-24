class Step6 extends React.Component {
  render() {
    
    //let pic1 = 'https://redhousespice.com/wp-content/uploads/2022/01/roast-duck-in-the-oven-1536x1057.jpg';
    let pic1 = './assets/pics/roast-duck-in-the-oven-1536x1057.jpg';

    //let pic2 = 'https://redhousespice.com/wp-content/uploads/2022/01/roast-peking-duck-1367x2048.jpg';
    let pic2 = './assets/pics/roast-peking-duck-1367x2048.jpg';

      return <div>      

        <h2>ROAST IN TWO STAGES</h2>

        <p>
        For best results, I recommend you use a fan-assisted oven, aka convection oven. Preheat it at 200°C/390°F. If using a conventional oven, increase the temperature to 220°C/425°F.
        </p>
        <img src={pic1} alt="FIRST STAGE OF ROASTING" />

        <p>Place the duck, the breast side facing up, on the middle rack of the oven. This allows the heat to travel in all directions and ensure an even browning. Remember to put a large tray at the bottom of the oven to collect any dripping fat while cooking. Leave to roast for 15 minutes.
        </p>

        <p>In the second stage of roasting, reduce the oven temperature to 180°C/350°F (or 200°C/390°F if using a conventional oven). To prevent burning, cover the tip of the wings and the end of the legs with aluminium foil. Continue cooking for another 60 minutes or so.
        </p>
        <img src={pic2} alt="SECOND STAGE OF ROASTING" />

      </div>;
  }
}