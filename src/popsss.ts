function applyStyle(element: HTMLElement, alertType: AlertType) {
  element.classList.add("toast");
  element.style.padding = "15px 20px";
  element.style.color = "black";
  let backgroundColor = "var(--action-info)";

  switch (alertType) {
    case "info":
      backgroundColor = "var(--action-info)";
      break;
    case "danger":
      backgroundColor = "var(--action-error)";
      break;
    case "warning":
      backgroundColor = "var(--action-warning)";
      break;
    case "success":
      backgroundColor = "var(--action-positive)";
      break;
  }

  element.style.background = backgroundColor;
  element.style.display = "inline-block";
  element.style.position = "fixed";
  element.style.top = "0";
  element.style.right = "15px";
  element.style.transition = "all 0.4s ease-out";
  element.style.zIndex = "2500";
}
type AlertType = "danger" | "warning" | "success" | "info";

export function alert(message: string, type: AlertType = "info") {
  const element = document.createElement("div");
  element.innerHTML = message;
  applyStyle(element, type);
  const time = 2000;
  document.querySelector("body").appendChild(element);
  setTimeout(() => {
    const width = element.offsetWidth + 20;
    element.style.opacity = "0";
    element.style.right = `-${width}px`;
    setTimeout(() => element.remove(), 600);
  }, time);
}

declare global {
  // tslint:disable-next-line
  interface Window {
    POPSSS: any;
  }
}

window.POPSSS = window.POPSSS || { alert };
