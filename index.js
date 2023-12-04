const express= require('express')
const app=express()
const cors = require("cors");


const allowedOrigins = [
  "http://localhost:3000",
  "https://harshanalytics.vercel.app",
  "https://harshanalytics-server.onrender.com"
  // Add more origins as needed
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));



app.get("/hello", async (req, res) => {
  try {
        res.json({ success:true});
      }catch (err) {
        console.log(err)
        res.json({ success:false});
    }
});

const getVideo = async (e) => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
  const currentHour = Number(currentTime.split(":")[0]);
  if (currentHour >= 8 && currentHour < 22) {
  try {
    const response = await fetch("https://harshanalytics-server.onrender.com/api/getVideos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json.success);
    
  } catch (error) {
    console.error("Error sending video data:", error);
  }
};
}
setInterval(getVideo,10*60*1000);

app.listen(8000 , () =>{
  console.log("listening to the port at 8000")
})