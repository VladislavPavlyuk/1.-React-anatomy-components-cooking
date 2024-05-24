class Serving extends React.Component {
  render() {
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/peking-duck-over-a-pancakes--1367x2048.jpg';
    let pic = './assets/pics/peking-duck-over-a-pancakes--1367x2048.jpg';

      return <div>
        <h2>WHAT TO SERVE WITH?</h2>
  
        <img src={pic} alt="WHAT TO SERVE WITH?" />
        
        <p>Don’t rush to carve the duck. Let it rest for 15 minutes. Then carve the meat, along with the skin, into small pieces. A sharpened knife will make this task much easier.
        </p>
        <p>Now let’s talk about the four classic items which are served with Peking duck. They are thin pancakes, sweet bean sauce, julienned scallions and cucumber.
         </p>
      </div>;
  }
}