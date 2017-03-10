import Promise from 'bluebird';
import dht from 'node-dht-sensor';
import format from 'date-fns/format';
import { greenery } from '../config/greenery';

export async function readSensors(sensors) {
  const t = sensors.map(async (s) => {
    const sensorData = await this.dhtReadSensor(s.type, s.pin);
    const temp = sensorData.temperature && sensorData.temperature.toFixed(1) || null;
    const humidity = sensorData.humidity && sensorData.humidity.toFixed(1) || null;
    return {
      name: s.name,
      temperature: this.toFahrenheit(temp) + '°F',
      humidity: humidity,
      date: format(new Date(), greenery.settings.dateFormat)
    };
  });
  const readOuts = await Promise.all(t);
  return readOuts;
}

export function dhtReadSensor(dhtType, dhtPin) {
  return new Promise((resolve, reject) => {
    dht.read(
      dhtType,
      dhtPin,
      (err, temperature, humidity) => {
        if (err) reject(err);
        if (!err) resolve({ temperature, humidity });
      },
    );
  });
}

export function toFahrenheit(cel) {
  var tempConvert = cel * 1.8 + 32;
  // return Math.round(tempConvert * 100) / 100;
  return +(Math.round(tempConvert + 'e+2') + 'e-2');
}
