const fs = require('fs');
const fbUpload = require('facebook-api-video-upload');
 
const args = {
    token: y, // with the permission to upload
    id: me, //The id represent {page_id || user_id || event_id || group_id}
    stream: fs.createReadStream('./test/fixture/fixture.mp4') //path to the video,
    title: "my video",
    description: "my description"
};
 
fbUpload(args).then((res) => {
    console.log('res: ', res);
    //res:  { success: true, video_id: '1838312909759132' }
}).catch((e) => {
    console.error(e);
});
