const express= require('express')
const app=express()
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment-timezone');
const path = require('path')

// const {Detail}= require('./db')


mongoose.connect('mongodb+srv://harsh8423:8423047004@cluster0.1xbklyu.mongodb.net/youtube', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection open !!")
    setInterval(scrapeAndStoreViews,5*60*1000);
// Assuming you have a Video model defined

// Delete the first 100 objects from the array
Video.updateMany({}, { $pull: { detail: { $exists: true } }, $slice: { videos: -1000 } }, (err) => {
  if (err) {
    console.error('Error occurred while deleting objects:', err);
  } else {
    console.log('First 100 objects deleted successfully.');
  }
});

})
  .catch((err) => {
    console.log("error in catch")
    console.log(err);
  })

const c=50;

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname,'views'))
  app.use(express.urlencoded({extended: true}))
  // app.use(methodOverride('_method'))
  app.use(express.static( path.join(__dirname, './public')))



const videoSchema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:String, required:true},
      time: { type: String },
    },
  ]
});
const Video = mongoose.model('VideoAll', videoSchema);
module.exports = Video;


// Function to scrape YouTube video views and store them in the database
async function scrapeAndStoreViews() {
  Video.find({}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      // Iterate through each document and log its fields
      docs.forEach(doc => {
        try {
        
          axios.get(doc.url)
            .then( async response => {
              const html = response.data;
              const $ = cheerio.load(html);
              const views = $('meta[itemprop="interactionCount"]').attr('content');
              console.log('View count:', views);

              // const currentTime = moment().tz('Asia/Kolkata').seconds(0).milliseconds(0);
              // console.log(currentTime)
              const currentTime= moment().tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss")
              // console.log(t)

              await doc.updateOne({ $push: { detail: {viewCount:views, time:currentTime } } })

              // doc.detail.viewCount.push('views')
              // doc.detail.timestamp.push('currentTime')
        
            })
            .catch(error => {
              console.log('An error occurred:', error);
            });
        } catch (error) {
          console.error('Error occurred while scraping and storing video views:', error.message);
        }
        console.log(doc.name, doc.age);
      });
    }
  });
}


app.get('/', async(req,res) =>{
  const videos= await Video.find({})
  res.render('home',{videos})
} )

app.get('/videoDetail/:id', async (req,res)=>{
  const {id}= req.params
  const Detail= await Video.findById(id)
  // console.log(produ)
  // res.send("worked")
  res.render('videoDetail',{Detail})
})

app.get('/new', async(req,res) =>{
  res.render('new')
} )

app.post('/new', async (req,res) =>{
  const newVideo= new Video(req.body)
  // console.log(req.body)
  await newVideo.save();
  res.redirect(`/videoDetail/${newVideo._id}`)
})




app.listen(3000 , () =>{
  console.log("listening to the port at 3000")
})