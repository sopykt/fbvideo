const fs = require('fs');
const fbUpload = require('facebook-api-video-upload');
 
const args = {
    token: EAAZAMUkYKVxYBAFHWDXW817S1FBZBDqMNaDVOFrhF63Xm0yxZBRZBHPOOTZBM9B8n3hGRZAPi2VE6ZArz5DgKEPoD54WUXXsMopWvRPKZBcM5W1tkjlI9fCu7yK5SqpT3ZAx39Xsmpz8pk169teFHvImbfXn9dGBnZA77WLvlNokLmbgs6lqnQ3ntxFpKY9chRZBZCkRq447UMAXpQZDZD, // with the permission to upload
    id: "me", //The id represent {page_id || user_id || event_id || group_id}
    stream: fs.createReadStream('received_218257442429267.mp4') //path to the video,
    title: "my video",
    description: "my description"
};
 
fbUpload(args).then((res) => {
    console.log('res: ', res);
    //res:  { success: true, video_id: '1838312909759132' }
}).catch((e) => {
    console.error(e);
});
