import { registerVerse } from '../../redux/footerSlice';
import { Button, FormatQuoteIcon, Grid, ReplayIcon, Typography, useDispatch, useEffect, useSelector } from '../../Utils/exports';
import { Jesus } from '../../Utils/wordOfGod';
const chooseVerse = () => Math.ceil(Math.random() * 10)

const WordOfGod = ({ color, size }) => {
    const dispatch = useDispatch();
    const { verse } = useSelector(state => state.footer)
    useEffect(() => {
        dispatch(registerVerse(chooseVerse()))
    }, [])
    return (
        <Grid container sx={{ padding: size }} direction='column'>
            <Grid item xs={12} sm={12} xl={12} md={12} lg={12} alignSelf='center'>
                <Typography variant="h5" color={color}>
                    <FormatQuoteIcon /> {Jesus[verse]} <FormatQuoteIcon />
                    <Button onClick={() => dispatch(registerVerse(chooseVerse()))}>
                        <ReplayIcon sx={{ color: color }} />
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WordOfGod

