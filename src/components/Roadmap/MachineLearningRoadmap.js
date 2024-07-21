import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
//import web1Image from './web1.png';
const MachineLearningRoadmap = () => {
  
    const backgroundStyle = {
      backgroundImage: `url('/mlback.jpg')`,
      backgroundSize: "cover",
    };
  return (
    <div className="flex justify-evenly h-screen px-2" style={backgroundStyle}>
        <div className=" flex justify-evenly gap-20 mt-40">
      {/* Card 1 */}
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: 'spring' },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/ml1.jpg"
            title="Milestone 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
           FUNDAMENTALS,MACHINE LEARNING TOOLS/LIBRARIES
            </Typography>
          </CardContent>
          <CardActions>
            
          <a href="https://youtu.be/7eh4d6sabA0?si=6fbpCZcRMD1d5dsv">
            <Button size="small">Resources</Button></a>
          </CardActions>
        </Card>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: 'spring' },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/ml2.jpg"
            title="Milestone 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ADVANCED MODELS,APPLICATIONS AREAS(NLP)
            </Typography>
          </CardContent>
          <CardActions>
            
          <a href="https://www.youtube.com/live/g9-bcOaGqaE?si=Ua8T6xcj2B-YjOtM">
            <Button size="small">Resources</Button></a>
          </CardActions>
        </Card>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: 'spring' },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/ml3.jpg"
            title="Milestone 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
            MODEL OPTIMIZATION,MODEL DEPLOYMENT,MODEL MONITORING
            </Typography>
          </CardContent>
          <CardActions>
            
          <a href="https://youtu.be/L4Pv6ExBQPM?si=QTVd-QJL8qpHJBq2">
            <Button size="small">Resources</Button></a>
          </CardActions>
        </Card>
      </motion.div>
      </div>
    </div>
  );
};

export default MachineLearningRoadmap;
