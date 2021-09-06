import { custom_greeting } from "../../declarations/custom_greeting";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with custom_greeting actor, calling the greet method
  const greeting = await custom_greeting.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
