function greeter(name: string) {
  return `Hello ${name}`;
}

const greeting = greeter("We Got POP");

document.getElementById("greeting-content").innerHTML = greeting;

// Set the title of the document
window.document.title = greeting;
