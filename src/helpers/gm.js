import gm from 'gm';
import { greenery } from '../config/greenery';

export async function drawTextToImage(drawText, img) {
  return await gm(img)
    .gravity(greenery.settings.gm.gravity)
    .fill(greenery.settings.gm.fillColor)
    .fontSize(greenery.settings.gm.fontSize)
    .font(greenery.settings.gm.font)
    .drawText(greenery.settings.gm.drawTextX, greenery.settings.gm.drawTextY, drawText)
    .write(img, (err) => {
      if (err) {
        console.error(err);
      }
    });
}
