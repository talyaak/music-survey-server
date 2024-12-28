import configProd from './prod.js'
import configDev from './dev.js'


export var config

if (process.env.NODE_ENV === 'development') {
  config = configProd
} else {
  config = configDev
}
config.isGuestMode = true

/*import configProd from "./prod.js";
import configDev from "./dev.js";

export const config = process.env.NODE_ENV === "development" ? configDev : configProd;
config.isGuestMode = true; // Optional: Additional flag for configuration*/
