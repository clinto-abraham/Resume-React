import {
  Link,
  useState,
  useSelector,
  styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Button,
  FavoriteIcon, ShareIcon, ExpandMoreIcon, MoreVertIcon, Box,
  WhatsappShareButton,
  useDispatch,
} from '../../Utils/exports'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { useDispatch, useSelector } from 'react-redux';
import { registerModalToggle } from '../../Redux/portfolioSlice';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  width: 700,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalPortfolio() {
  const { modal } = useSelector(state => state.portfolio)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(registerModalToggle(false));

  return (
    <div>
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: 'purple' }}
      >
        <Box sx={style}>
          <Card sx={{ minWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://firebasestorage.googleapis.com/v0/b/clinto-resume.appspot.com/o/Display%2FAdmin_Dashboard.png?alt=media&token=9228d058-7d33-4b17-8bcc-1b0e027d5254"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <WhatsappShareButton
                url={`https://wedding-days.vercel.app/${'https://firebasestorage.googleapis.com/v0/b/clinto-resume.appspot.com/o/Display%2FAdmin_Dashboard.png?alt=media&token=9228d058-7d33-4b17-8bcc-1b0e027d5254'}`}
                title={`Share the ${'https://firebasestorage.googleapis.com/v0/b/clinto-resume.appspot.com/o/Display%2FAdmin_Dashboard.png?alt=media&token=9228d058-7d33-4b17-8bcc-1b0e027d5254'.toUpperCase()} URL to any whatsapp contact!`}
                separator=":: "
              >
                <Button size="small" color="primary">
                  <ShareIcon /> Share
                </Button>
              </WhatsappShareButton>
            </CardActions>
          </Card>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}



