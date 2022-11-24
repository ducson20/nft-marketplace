import type { App, Directive, DirectiveBinding } from "vue";

function setColor(el: HTMLElement, { value }: DirectiveBinding) {
  if (!value) {
    return;
  }
  el.style.color = value;
}

const mounted = (el: HTMLElement, binding: DirectiveBinding) => {
  setColor(el, binding);
};

const colorDirective: Directive = {
  mounted,
};

export function setupColorDirective(app: App) {
  app.directive("color", colorDirective);
}

export default colorDirective;
