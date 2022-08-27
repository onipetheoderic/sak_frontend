import amplitude from "amplitude-js";
import { AMPLITUDE_KEY } from "../constants/amplitudeKey";

amplitude.getInstance().init(AMPLITUDE_KEY, "", {
  // optional configuration options
  includeUtm: true,
  includeGclid: true,
  includeReferrer: true,
});
export { amplitude };
