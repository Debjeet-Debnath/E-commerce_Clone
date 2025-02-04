import { useEffect } from 'react';

import { styled, Box } from '@mui/material';


//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide'
import MidSection from './MidSection';

import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;



const Home = () => {

    const { products } = useSelector( state => state.getProducts );

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getProducts())
    }, [dispatch])

    return(
        <>
        <NavBar />
        <Component>
        <Banner />
        <MidSlide products={products} title="Deals of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title= "Suggesting Items" timer={false}/>
        <Slide products={products} title= "Top Selection" timer={false} />
        <Slide products={products} title= "Recommended Items" timer={false} />
        <Slide products={products} title= "Trending Offers" timer={false} />
        <Slide products={products} title= "Season's Top Picks" timer={false} />
        <Slide products={products} title= "Top Deals on Accessories" timer={false} />
        </Component>
        </> 
    )
}

export default Home;