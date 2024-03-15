import { storageItems, barbershopSettings } from '../config/defaults';
import { saveLocalStorage, getSettings } from './localstorage';

/**
* Write initial storage on first usage
 */
export const initialUse = () => {
  let doVersionBump = true;
  const settings = getSettings();

  // No settings exist
  if (!settings.statusOK) {
    saveLocalStorage(storageItems.settings, barbershopSettings);
  }

  // Bump version
  if (doVersionBump && settings.statusOK && settings.data.version.indexOf(barbershopSettings.version) === -1) {
    saveLocalStorage(storageItems.settings, { ...settings.data, version: barbershopSettings.version });
  }

};