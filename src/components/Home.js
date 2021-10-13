import React from 'react'
import './Home.css'
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <div className="home_container">
                <img className="home_img" src="174714.jpg" alt=""/>
            </div>
            {/*Different type of items*/}
            <div className="home_row">
                <Product title="Cant hear T-shirt" image="https://images-na.ssl-images-amazon.com/images/I/710JYae%2BISL._AC_UX569_.jpg" price={300} rating={4} />
                <Product title="My Perfect Day T-shirt" image="https://m.media-amazon.com/images/I/61R1v1UEw3L._AC_SX569._SX._UX._SY._UY_.jpg" price={400} rating={5}/>
                <Product title="Life T-Shirt" image="https://images-na.ssl-images-amazon.com/images/I/61p3xYXy2EL._AC_UX466_.jpg" price={300} rating={4}/>
            </div> 

            <div className="home_row">
                <Product title="ESG Repeat Hoodie" image="https://m.media-amazon.com/images/I/61UWzecH3kL._AC_SX569._SX._UX._SY._UY_.jpg" price={700} rating={4} />
                <Product title="Keep Calm Hoodie" image="https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1VOwlC172S.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png" price={650} rating={3}/>
                <Product title="Super Hero Hoodie" image="https://m.media-amazon.com/images/I/81GhWvWNIvL._AC_SY550._SX._UX._SY._UY_.jpg" price={800} rating={5}/>
            </div>
        </div>
    )
}

export default Home;