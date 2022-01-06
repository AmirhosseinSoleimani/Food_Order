import Baner from '../assests/burger-g40b6835c9_1920.jpg'
import {Link} from 'react-router-dom';
import './Home.css'
const Home = () => {
    return(
        <div className={'home'} style={{background:`url(${Baner})`}}>
            <div className={'headerContainer'}>
                <h1 style={{ fontWeight: "bold" }}>Burger Restaurant</h1>
                <p>clicked order now </p>
                <Link to={'/'}>
                    <button>
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Home;