class HomeVersion extends React.Component {
  render() {
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/roast-peking-duck-with-pancakes-1-1-1367x2048.jpg';
    let pic = './assets/pics/roast-peking-duck-with-pancakes-1-1-1367x2048.jpg';
      return <div>
        <h2>AN EASY HOME VERSION</h2>
  
        <img src={pic} alt="Easy home version" />
        
        <p>Unlike most of the dishes I share on this blog, not many home cooks in China would cook Peking duck in their own kitchen. To produce it to a restaurant standard, you’d need to be highly skilled and have professional equipment, such as a pump to blow up the duck skin, a large oven that allows the duck to be cooked vertically, etc.
          In response to some readers’ requests, I’ve tested and come up with an easy version of home-style Peking duck. I wouldn’t say it’s as good as what you get from a good restaurant, but it’s definitely more than satisfying as a homemade dish (my biased culinary fans in our Red House said it tasted just as good).
          This recipe doesn’t require any special equipment or advanced cooking experiences. The steps are explained in detail with extra tips and substitute ideas.
            </p>
      </div>;
  }
}