import gm from 'gm';
import RaspiCam from 'raspicam';
import format from 'date-fns/format';
import * as dhtHelper from './helpers/dht';
import * as gmHelper from './helpers/gm';
import { greenery } from './config/greenery';

const main = async () => {
  const imgDir = greenery.settings.baseImgPath;
  const rcOpts = greenery.settings.raspicam;
  const fileName = format(new Date(), greenery.settings.filenameDateFormat);
  rcOpts.output = `${imgDir}/${fileName}.${rcOpts.encoding}`;

  const camera = new RaspiCam(rcOpts);
  await camera.start();

  camera.on('exit', async () => {
    camera.stop();
    try {
      const readOuts = await dhtHelper.readSensors(greenery.settings.dht.sensors);
      const drawText = readOuts.map(s => {
        return `${s.name}: ${s.temperature} / ${s.humidity} @ ${s.date}`;
      }).join(' // ');
      await gmHelper.drawTextToImage(drawText, rcOpts.output);
      console.log(drawText);
      console.log(rcOpts.output);
    } catch(e) {
      console.error('error', e);
    }
  });
};

main();
