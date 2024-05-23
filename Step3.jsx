class Step3 extends React.Component {
  render() {
    
    let pic1 = 'https://redhousespice.com/wp-content/uploads/2022/01/dilute-maltose-with-water-1536x1025.jpg';
    
    let pic2 = 'https://redhousespice.com/wp-content/uploads/2022/01/brushing-syrup-over-duck-1536x1025.jpg';
      return <div>
        <h2>STEP 3: COAT THE SKIN WITH SYRUP.</h2>       

        <img src={pic1} alt="STEP 3: COAT THE SKIN WITH SYRUP" />

        <p>The key ingredient used in this step is maltose (Mai Ya Tang/麦芽糖), a type of syrup with dense, super sticky consistency that is commonly used in Chinese cuisine. It has a milder sweetness than sugar or honey but gives food a much glossier look. You should be able to find it in most of the Chinese/Asian shops.</p>

        <img src={pic2} alt="STEP 3: COAT THE SKIN WITH SYRUP" />

        <p>You’ll need hot water to soften and dilute maltose and add a small amount of vinegar (any type). Evenly brush one layer over the entire duck skin. Leave to dry in the fridge for 1 hour then brush another layer.</p>

      </div>;
  }
}