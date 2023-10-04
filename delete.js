const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://harsh8423:8423047004@cluster0.1xbklyu.mongodb.net/youtube",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection open !!");
  })
  .catch((err) => {
    console.log("error in catch");
    console.log(err);
  });

const videoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  videoName: { type: String, required: true },
  detail: [
    {
      viewCount: { type: String, required: true },
      time: { type: String },
    },
  ],
});
const Video = mongoose.model("VideoAll", videoSchema);
module.exports = Video;



const videoId = "645de4e4684a30d7b7c6523b"; // Replace 'your_video_id' with the actual ID of the video document

// Find the specific document by its ID
Video.findById(videoId, (err, video) => {
  if (err) {
    console.error(err);
  } else {
    if (!video) {
      console.log("Video not found");
    } else {
      // Delete the elements in the detail array from index 0 to 5000
      video.detail.splice(0, 4001);

      // Save the updated document
      video.save((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Deletion successful!");
        }
      });
    }
  }
});
