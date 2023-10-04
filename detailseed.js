const mongoose = require('mongoose');
// const {Detail}= require('./db')

const detailSchema = new mongoose.Schema({
  url: {type: String, required: true},
  videoName: { type: String, required: true },
  colllectionName: { type: String, required:true },
});
  const Detail = mongoose.model('Detail', detailSchema);
  module.exports = Detail;

mongoose.connect('mongodb+srv://harsh8423:8423047004@cluster0.1xbklyu.mongodb.net/youtube', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection open !!")
    Detail.insertMany([
      {"url":'https://www.youtube.com/watch?v=lzEop75AeOk',
      "videoName": 'Naiyo lagda',
      "colllectionName": 'video1',},
      {"url":'https://www.youtube.com/watch?v=jZGpkLElSu8',
      "videoName": 'karol  g',
      "colllectionName": 'video2',},
      {"url":'https://www.youtube.com/watch?v=sAzlWScHTc4',
      "videoName": 'nacho nacho',
      "colllectionName": 'video3',},
      {"url":'https://www.youtube.com/watch?v=huxhqphtDrM',
      "videoName": 'besharam rang',
      "colllectionName": 'video4',},
      {"url":'https://www.youtube.com/watch?v=YxWlaYCA8MU',
      "videoName": 'jhoome jo pathan',
      "colllectionName": 'video5',},
      {"url":'https://www.youtube.com/watch?v=VuG7ge_8I2Y',
      "videoName": 'maan meri jaan',
      "colllectionName": 'video6',},
    ])
  })
  .catch((err) => {
    console.log("error in catch")
    console.log(err);
  })










  const videoa = new Video1({
    url: 'https://www.youtube.com/watch?v=lzEop75AeOk',
    videoName: 'Naiyo lagda',
    detail:[
      {
        viewCount: 1,
      }
    ]
  });
  videoa.save();
  console.log('Video views saved successfully.');
  
  
  const videob = new Video2({
    url: 'https://www.youtube.com/watch?v=jZGpkLElSu8',
    videoName:'karol  g' ,
    detail:[
      {
        viewCount: 2,
      }
    ]
  });
  videob.save();
  console.log('Video views saved successfully.');
  
  
  const videoc = new Video3({
    url:'https://www.youtube.com/watch?v=sAzlWScHTc4',
    videoName:  'nacho nacho',
    detail:[
      {
        viewCount: 3,
      }
    ]
  });
  videoc.save();
  console.log('Video views saved successfully.');
  
  
  const videod = new Video4({
    url: 'https://www.youtube.com/watch?v=huxhqphtDrM',
    videoName: 'besharam rang',
    detail:[
      {
        viewCount: 4,
      }
    ]
  });
  videod.save();
  console.log('Video views saved successfully.');
  
  
  const videoe = new Video5({
    url:'https://www.youtube.com/watch?v=YxWlaYCA8MU' ,
    videoName: 'jhoome jo pathan',
    detail:[
      {
        viewCount: 5,
      }
    ]
  });
  videoe.save();
  console.log('Video views saved successfully.');
  
  
  const videof = new Video6({
    url:'https://www.youtube.com/watch?v=VuG7ge_8I2Y' ,
    videoName: 'maan meri jaan' ,
    detail:[
      {
        viewCount: 6,
      }
    ]
  });
  videof.save();
  console.log('Video views saved successfully.');
  
  








  

// Define the schema for the YouTube video data
const video1Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    }
  ],

});
const Video1 = mongoose.model('Video1', video1Schema);
module.exports = Video1;




const video2Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    }
  ],

});
const Video2 = mongoose.model('Video2', video2Schema);
module.exports = Video2;




const video3Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    }
  ],

});
const Video3 = mongoose.model('Video3', video3Schema);
module.exports = Video3;



const video4Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    }
  ],

});
const Video4 = mongoose.model('Video4', video4Schema);
module.exports = Video4;



const video5Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    }
  ],

});
const Video5 = mongoose.model('Video5', video5Schema);
module.exports = Video5;


const video6Schema = new mongoose.Schema({
  url:{type:String, required:true},
  videoName:{type:String, required:true},
  detail: [
    {
      viewCount:{type:Number, required:true},
      timestamp: { type: Date, default: Date.now },
    },
  ]
});
const Video6 = mongoose.model('Video6', video6Schema);
module.exports = Video6;
