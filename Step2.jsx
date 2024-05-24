class Step2 extends React.Component {
  render() {
    
    //let pic = 'https://redhousespice.com/wp-content/uploads/2022/01/pouring-hot-water-over-duck-1536x1036.jpg';
    let pic = './assets/pics/pouring-hot-water-over-duck-1536x1036.jpg';

      return <div>

        <h2>STEP 2: TIGHTEN THE DUCK SKIN.</h2>        

        <img src={pic} alt="STEP 2: TIGHTEN THE DUCK SKIN" />

          <p>
            The traditional method involves basting: hold the duck over a pot of boiling water then use a ladle to pour water over the duck. I’d like to introduce an alternative, simpler way: Boil some water in the kettle then gently pour it over the entire duck skin (remember to flip over and do the other side). You can use a deep tray to collect the water, or do it inside a sink.
          </p>
          <p>
            You’ll see the skin tightens as soon as the hot water touches it. It also looks shinier and smoother. At this stage, you might notice some remaining ends of the feathers appearing. Remove them with a pair of tweezers.
          </p>
       
      </div>;
  }
}