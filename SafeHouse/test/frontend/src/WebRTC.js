// Open Default Media Devices
const openMediaDevices = async constraints => {
    return await navigator.mediaDevices.getUserMedia(constraints);
};

const OpenDefaultMediaDevices = function () {
    try {
        const stream = openMediaDevices({video: true, audio: true});
        console.log('Got MediaStream:', stream);
    } catch (error) {
        console.error('Error accessing media devices.', error);
    };
};

// Query Media Devices
const getConnectedDevices = async function(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type);
};

const videoCameras = getConnectedDevices('videoinput');
console.log('Cameras found:', videoCameras);

const audioInput = getConnectedDevices('audioinput');
console.log('Audio inputs found:', audioInput);

// Open camera with at least minWidth and minHeight capabilities
const openCamera = async function(cameraId, minWidth, minHeight) {
    const constraints = {
        audio: {echoCancellation: true},
        video: {
            deviceId: cameraId,
            width: {min: minWidth},
            height: {min: minHeight}
        }
    };
    return await navigator.mediaDevices.getUserMedia(constraints);
};

const cameras = getConnectedDevices('videoinput');
if (cameras && cameras.length > 0) {
    // Open first available video camera with a resolution of 1280x720 pixels
    const stream = openCamera(cameras[0].deviceId, 1280, 720);
};

// Media Local Playback
exports.playVideoFromCamera = async function(constraints) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    } catch (error) {
        throw `Error opening media device: ` + error;
    };
};