// Product Component

import one from "../assets/image/one.jpg"
import two from "../assets/image/two.jpg"
import three from "../assets/image/three.jpg"


function Product()
{
   return(
    <section className="product">
        <div class="card1">
            <img src={one} alt="one"></img>
            <p>A soft and romantic fragrance with fresh rose essence.
                Perfect forspecial moments.This is the best seller for fragrance</p>
        </div>

        <div className="card1">
            <img src={two} alt="two"></img>
            <p>Perfect fracrance for this product expesialy its smell too good for more effective 24 hours long-lasting your preference best sellers.</p>
        </div>

        <div className="card1">
            <img src={three} alt="three"></img>
            <p>Perfect fracrance for this product expesialy its smell too you like most this flavour its made by original flower for pure fragrance good for your preference best sellers.</p>
        </div>
    </section>
   )
}

export default Product