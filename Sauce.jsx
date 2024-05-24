class Sauce extends React.Component {
  render() {
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/frying-sweet-bean-sauce-1536x1025.jpg';
    let pic = './assets/pics/frying-sweet-bean-sauce-1536x1025.jpg';

      return <div>
        <h2>THE SAUCE</h2>

        <p>Another quintessential accompaniment for Peking duck is Tian Mian Jiang/甜面酱 known as sweet bean sauce, sweet flour sauce, or sweet wheat sauce in English. It’s a classic condiment used in Northern Chinese cooking and particularly popular in Beijing cuisine.
        </p>        
  
        <img src={pic} alt="THE SAUCE" />
        
        <p>
          It’s a dark brown, smooth sauce with a thick consistency and a savoury but slightly sweet taste. Although many brands found in Chinese stores label this sauce as “sweet bean sauce”, it is in fact primarily made from fermented wheat flour (be aware some versions may contain a small amount of beans).
        </p>
        <p>
          For Peking duck, you could use this sauce straight out of the jar/package. However, it tastes much better if cooked with a little oil and sugar (like the restaurant version). Simply use some duck fat rendered from the roasting process. Mix with sweet bean sauce and a little sugar and simmer over low heat until little bubbles appear.
        </p>
        <p>Substitutes: If you have trouble sourcing sweet bean sauce, replace it with hoisin sauce (海鲜酱), yellow soybean sauce (黄豆酱), or plum sauce (苏梅酱).</p>
        <h3>THE VEGETABLES</h3>
        <p>
          Lastly, prepare some julienned cucumber and scallions (aka spring onion, green onion). These two classic ingredients can be replaced by pickled radish, blanched bean sprouts, lettuce leaves, or julienned apple, etc.
        </p>

      </div>;
  }
}