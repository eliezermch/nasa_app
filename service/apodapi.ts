import { NasaApodData } from '@/model/APOD';
import { NasaLibAssetCollection, NasaLibItem } from '@/model/NASALIB';
import { getData } from '@/utils/functions';

const API_DOMAIN = `https://api.nasa.gov/planetary/apod?api_key=${'9Au7MgCrF4GBfs99NU1uuoDAVJMPeUlj0hnFCyOw'}`;
const API_IMAGES_LIBRARY_DOMAIN = `https://images-api.nasa.gov/search`;
const API_IMAGES_LIBRARY_BY_ID_DOMAIN = `https://images-api.nasa.gov/asset/`;

function getApodData(): Promise<NasaApodData> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(API_DOMAIN);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

function getNasaLibrary(input: string): Promise<NasaLibItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(`${API_IMAGES_LIBRARY_DOMAIN}?q=${input}&media_type=image,video&page=1`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

function getNasaLibraryAssetsById(id: string | string[]): Promise<NasaLibAssetCollection> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(`${API_IMAGES_LIBRARY_BY_ID_DOMAIN}${id}`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export { getApodData, getNasaLibrary, getNasaLibraryAssetsById };
