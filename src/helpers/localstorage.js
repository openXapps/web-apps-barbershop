import { barbershopSettings, storageItems } from '../config/defaults';

/**
 * Overwrite item to local storage
 * @param {string} item Local storage identifier
 * @param {any} data Data object to store
 */
export const saveLocalStorage = (item, data) => {
  try {
    localStorage.setItem(item, JSON.stringify(data));
  } catch (error) {
    console.log('saveLocalStorage: error...', error);
  }
};

/**
 * Get SETTINGS from local storage
 * @returns Returns an object {statusOk: boolean, data: any}
 */
export const getSettings = () => {
  let response = { statusOK: false, data: barbershopSettings };
  try {
    const settings = JSON.parse(localStorage.getItem(storageItems.settings));
    if (settings) {
      response = {
        statusOK: true,
        data: settings
      };
    } else {
      throw new Error('No items found in localStorage');
    }
  } catch (error) {
    console.log('getSettings: error...', error);
  }
  return response;
};


