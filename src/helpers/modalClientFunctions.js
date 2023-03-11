import store from "@/store";

export function openModalClient(modalName) {
  store.state[modalName].show();
}

export function closeModalClient(modalName) {
  store.state[modalName].hide();
}
