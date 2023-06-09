import { Link } from 'react-router-dom'
import Button from '../../../components/button'
import { Wrapper } from './style'

const Hero = () => {
    const user = localStorage.getItem('name')
    return (
        <Wrapper>
            <div>
                <h1>Make your home work for you.</h1>
                <h2>
                    Earn extra income by renting out your home to travellers
                    around the globe
                </h2>
                <Link to={user ? '/createvenue' : '/login'}>
                    <Button content={'Get Started'} />
                </Link>
            </div>
        </Wrapper>
    )
}

export default Hero
