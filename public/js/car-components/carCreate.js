import { createCar } from "./apiGarage.js";
import { renderGarage } from "../ui-render/renderGarage.js";
import { storeUpdate } from "../store/storeUpdate.js";

export const carCreate = async () => {
  const createForm = document.querySelector("#create");
  const garageView = document.querySelector("#garage-view");

  createForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const color = e.target[1].value;

    await createCar({ name, color });
    await storeUpdate();

    garageView.innerHTML = renderGarage();
    createForm.reset();
  });
};
