import React from "react";
import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Chip,
  CardContent
} from "@mui/material";
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from "@mui/material/Rating";
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const { classes } = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behaviour: "smooth", block: "start"})

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
        <Rating value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant="subtitle1">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display='flex' justifyContent='space-between' alignItems="center">
            <img src={award.images.small} alt={award.display_name}/>
            <Typography variant="subtitle2">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        
        {place?.address && (
          <Typography gutterBottom variant="subtitle2" className={classes.subtitle}>
            <LocationOnIcon />{place?.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <LocalPhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => {window.open(place?.web_url, '_blank')}}>Trip Advisor</Button>
          <Button size="small" color="primary" onClick={() => {window.open(place?.website, '_blank')}}>Website</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
