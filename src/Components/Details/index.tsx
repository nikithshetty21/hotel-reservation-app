import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Reservations from './Reservations';
import { AppState, Reservation } from '../../Interface';
import { AppContext } from '../../Context';


type modalProps = {
    modalOpen: boolean
    data: Reservation |  null
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    overflow:'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    minHeight: "80vh",
    maxHeight: 600,
    p: 4,
  };

const Details = (props: modalProps) => {
  const {  handleClose } = useContext<AppState>(AppContext);
    const {modalOpen, data} = props;
    return (<Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
            <Reservations data={data}/>
        </Box>
      </Modal>)
}

export default Details;