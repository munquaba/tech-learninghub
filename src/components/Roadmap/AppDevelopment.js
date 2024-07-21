import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const AppRoadmapDevelopment = () => {
  const backgroundStyle = {
    backgroundImage: `url('/appback.jpg')`,
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
            image="/app1.jpg"
            title="Milestone 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            BASICS OF ANDROID(JAVA/KOTLIN/DART),REACT NATIVE, FLUTTER
            </Typography>
          </CardContent>
          <CardActions>
            
          <a href="https://youtu.be/mXjZQX3UzOs?si=UpyPXncBK56z7PP2">
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
            image="/app2.jpg"
            title="Milestone 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
       
INTEGRATING APIs AND WORKING WITH DATABASES FOR MOBILE APPS
            </Typography>
          </CardContent>
          <CardActions>
          <a href="https://youtu.be/hJPk50p7xwA?si=jgcW2tdIfTMIxRqp">
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
            image="/app3.jpg"
            title="Milestone 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
           DEEP LEARNING,IMPLEMENTING COMPLEX FUNCTIONALITIES LIKE REAL-TIME COMMUNICATION, ADVANCED BACKEND TECHNIQUES
            </Typography>
          </CardContent>
          <CardActions>
    
          <a href="https://youtu.be/SGZ6BttHMPw?si=1y2iSPc41i1UEgAJ">
            <Button size="small">Resources</Button></a>
          </CardActions>
        </Card>
      </motion.div>
      </div>
    </div>
  );
};

export default AppRoadmapDevelopment;
