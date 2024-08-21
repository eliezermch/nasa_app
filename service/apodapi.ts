import { NasaApodData } from '@/model/APOD';
import { getData } from '@/utils/functions';

const API_DOMAIN = `https://api.nasa.gov/planetary/apod?api_key=${'9Au7MgCrF4GBfs99NU1uuoDAVJMPeUlj0hnFCyOw'}`;
const API_IMAGES_LIBRARY_DOMAIN = `https://images-api.nasa.gov/search`;

function getApodData(): Promise<NasaApodData[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(API_DOMAIN);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

function getNasaLibrary(input: string): Promise<any[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(`${API_IMAGES_LIBRARY_DOMAIN}?q=${input}`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export { getApodData, getNasaLibrary };
