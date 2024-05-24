class Pancakes extends React.Component {
  render() {
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/peking-duck-pancakes-1536x864.jpg';
    let pic = './assets/pics/peking-duck-pancakes-1536x864.jpg';
      return <div>
        <h2>THE PANCAKES</h2>
  
        <img src={pic} alt="THE PANCAKES" />
        
        <p>The thin pancakes used for wrapping Peking duck are called Chun Bing (春饼) in Chinese which means spring pancakes. They are also known as Peking duck pancakes or Mandarin pancakes in English. You can find them in Chinese stores (usually in the frozen food section). Defrost in the fridge then steam for a few minutes to warm up before serving.
        </p>
      </div>;
  }
}