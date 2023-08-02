import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid orange',
    boxShadow: 24,
    p: 4,
};

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={isScrolled ? 'father_navbar scrolled' : 'father_navbar'}>
                <div className='container'>
                    <div className='row navbar'>
                        <div className='col-2'>
                            <a href='/'><img className='w-50' src='logo.png' /></a>
                        </div>
                        <div className='col-5'>
                            <ul className='row list'>
                                <li className='col-3'>Оценка</li>
                                <li className='col-3'>Оценка</li>
                                <li className='col-3'>Оценка</li>
                                <li className='col-3'>Оценка</li>
                            </ul>
                        </div>
                        <div className='col-4 '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <a href=''>+998999999999</a>
                                <button onClick={handleOpen}>Обратный звонок</button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <h2>Закажите обратный звонок</h2>
                                        <p>Ответим на любой вопрос о процедуре проведения оценки</p>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className='modal_info_part'>
                                                <input type='text'  placeholder='Name'/>
                                                <input type='tel'  placeholder='Phone number'/>
                                            </div>
                                            <button onClick={handleClose} className='send'>Жду звонка</button>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar