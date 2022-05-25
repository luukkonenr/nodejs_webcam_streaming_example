# nodejs_webcam_streaming_example
Install opencv and required packages.

You can use this to query for devices
```
sudo apt-get install v4l-utils
v4l2-ctl --list-devices
```
Then make sure index.js:12 is given a valid device id
```
const wCap = new cv.VideoCapture(2);
```

run
```node index.js```
and go to localhost:3000 to see your webcam

Simple streaming example of usin
Credits to https://www.youtube.com/watch?v=qexy4Ph66JE
