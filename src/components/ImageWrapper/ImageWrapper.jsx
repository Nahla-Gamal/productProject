import './ImageWrapper.css'
import product from '../../assets/product.jpg'
import productMobile from "../../assets/product-mobile.jpg"

function ImageWrapper() {
    return(
        <div id='imageWrapperDiv'>
            <img className='desktop-img' src={product} />
            <img className='mobile-img' src={productMobile} />
        </div>
    )
}

export default ImageWrapper