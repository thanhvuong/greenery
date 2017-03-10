export const greenery = {
  settings: {
    baseImgPath: '/home/pi/dev/greenery/images',
    filenameDateFormat: 'X', // https://date-fns.org/docs/format
    dateFormat: 'ddd, MMM do, YYYY hh:mm A', // https://date-fns.org/docs/format
    raspicam: { // reference: https://github.com/troyth/node-raspicam
      mode: 'photo',
      width: 2592,
      height: 1944,
      encoding: 'jpg',
      rotation: 180,
      quality: 100
    },
    dht: { // reference: https://github.com/momenso/node-dht-sensor
      sensors: [
        {
          name: "My Garden",
          type: 22, // DHT11 is type 11, DHT22 or AM2302 is type 22
          pin: 4
        }
      ]
    },
    gm: {
      gravity: 'SouthEast',
      fillColor: '#fff',
      fontSize: '50',
      font: 'Arial',
      drawTextX: 20,
      drawTextY: 20
    }
  }
};

// 320x240 - 0.07 Megapixel
// 640x480 - 0.3 Megapixel
// 800x600 - 0.4 Megapixel
// 1024x768 - 0.7 Megapixel
// 1280x960 - 1 Megapixel
// 1536x1180 - 1.81 Megapixel
// 1600x1200 - 2 Megapixel
// 2048x1536 - 3 Megapixel
// 2240x1680 - 4 Megapixel
// 2560x1920 - 5 Megapixel
// 3032x2008 - 6 Megapixel
// 3072x2304 - 7 Megapixel
// 3264x2448 - 8 Megapixel