import './InfoWrapper.css'
import cart from "../../assets/icon-cart.svg"
function InfoWrapper() {
    return(
     <div id='infoWrapperDiv'>
        <label className='prodect-type'>PERFUME</label>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div id='priceDiv'>
            <label className="cost">$149.99</label>
            <label className='deleted-cost'><del>$169.99</del></label>
        </div>
        
        <button id='cartButton'>
        <img src={cart}/>
          Add to Cart
        </button>
        
       

     </div>
    )
}

export default InfoWrapper 