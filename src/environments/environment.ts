// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { LOCAL_DEV_CONFIG } from "src/config/local.config";

export const environment = {
  production: false,
  configuration: LOCAL_DEV_CONFIG
};
