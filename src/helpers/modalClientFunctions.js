import store from "@/store";

export function openModalClient(modalName) {
  // console.log(modalName); modalNewClient
  console.log();
  // store.state[modalName].show();
  store.state['modalClientInfo'].show();
}

export function closeModalClient(modalName) {
  store.state[modalName].hide();
}
