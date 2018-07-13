import { combineReducers } from "redux";

import ClientsRedicers from "./client2";
import ActiveCar from "./client-active";

const allRedicers = combineReducers({
  clients_connect_json: ClientsRedicers,
  active: ActiveCar
});

export default allRedicers;
