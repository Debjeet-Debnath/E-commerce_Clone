import { useState } from 'react';

import { Box, Button, styled } from '@mui/material';

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/cartActions';

import { payUsingPaytm } from '../../service/api';

import { post } from '../../utils/paytm';

const LeftConatiner = styled(Box)( ({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    width: '90%',
   padding: '15px'
})

const StyledButton = styled(Button)(( {theme}) => ({
    width: '48.831%',
    height: 50,
    borderRadius: 5,
    marginTop: 6,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));




const ActionItem = ({ product }) => {



    const navigate =  useNavigate();

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const  { id } = product;


    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = async() => {
        let response = await payUsingPaytm( {amount: 500, email: 'a@gmail.com'} );
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }
    
    return (
        <LeftConatiner>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
            }}>
                <Image src={product.detailUrl} alt='detailImage' />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: '#fb541b' }}><Flash />Buy Now </StyledButton>
        </LeftConatiner>
    )
}


export default ActionItem;