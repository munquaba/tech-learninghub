import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
//import web1Image from './web1.png';
const WebDevelopmentRoadmap = () => {
  const backgroundStyle = {
    backgroundImage: `url('/webback.jpg')`,
    backgroundSize: "cover",
  };
  return (
    <div className="flex justify-evenly h-screen px-2" style={backgroundStyle}>
      {/* Card 1 */}
      <div className=" flex justify-evenly gap-20 mt-40">
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/web1.jpg"
            title="Milestone 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              HTML,CSS (Cascading Style Sheets),JAVASCRIPT(JS)
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://youtu.be/G3e-cpL7ofc?si=Pzwk-l7XzW4gk89J">
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
          layout: { duration: 1, type: "spring" },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/web2.jpg"
            title="Milestone 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              FRAMEWORKS,BACKENED DEVELOPMENT,VERSION CONTROL
            </Typography>
          </CardContent>
          <CardActions>
          <a href="https://youtu.be/ZxKM3DCV2kE?si=LQ-uapN6keU4WR9K">
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
          layout: { duration: 1, type: "spring" },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/web3.jpg"
            title="Milestone 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Milestone 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ADVANCED JS,WEB SECURITY,DEBUGGING,TESTING
            </Typography>
          </CardContent>
          <CardActions>
          <a href="https://youtu.be/ypNKKYUJE5o?si=N3UcPDE6C3tDIVJ0">
            <Button size="small">Resources</Button></a>
          </CardActions>
        </Card>
      </motion.div>
      </div>
    </div>
  );
};
export default WebDevelopmentRoadmap;
