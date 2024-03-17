/**
 * DEFAULT DATA FOR INITIAL APP LOAD
 */

// App name
export const appName = 'Mediterranean Barber';

// Local storage object names
export const storageItems = {
  settings: 'barbershop-settings',
};

/**
 * Local storage app settings
 * barbershop-settings
 */
export const barbershopSettings = {
  // Remember to update package.json with version
  version: import.meta.env.VITE_APP_VERSION,
  themeIsDark: true,
};
