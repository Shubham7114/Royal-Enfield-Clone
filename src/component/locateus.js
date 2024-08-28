import React from 'react'
import '../cssfolder/locateus.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Locateus() {
    return (
        <div>
            <div className='col-4 cardpropert cardn1'>
                <div className='imgeback'>
                    <h1 >Store</h1>
                    <button type='button' className='btn btn-light'>Find a store<KeyboardArrowRightIcon></KeyboardArrowRightIcon> </button>
                </div>
            </div>

            <div className='col-4  cardpropert cardn2'>
                <div className='imgeback'>
                    <h1>Service</h1>
                    <button type='button' className='btn btn-light '>Find a service center<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                </div>
            </div>
            <div className='col-4 cardpropert cardn3'>
                <div className='imgeback'>
                    <h1>Geniune Store</h1>
                    <button type='button' className='btn btn-light'>Find a distributor<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                </div>
            </div>
            {/* ============================Second card line=============== */}
            <div className='col-4 cardpropert cardn4'>
                <div className='imgeback'>
                    <h1>Geniune Store</h1>
                    <button type='button' className='btn btn-light'>Explore more<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                </div>
            </div>

            <div className='col-4 cardpropert cardn5'>
                <div className='imgeback'>
                    <h1>Geniune Store</h1>
                    <button type='button' className='btn btn-light'>Explore<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                </div>
            </div>
            <div className='col-4 cardpropert cardn6'>
                <div className='imgeback'>
                    <h1>Geniune Store</h1>
                    <button type='button' className='btn btn-h1 btn-light'>Download<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                </div>
            </div>
        </div>
    )
}

export default Locateus

