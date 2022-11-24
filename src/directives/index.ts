import type { App } from "vue";

import { setupColorDirective } from "./colorExample";
import { setupRoleDirective } from "./role";

export function setupGlobDirectives(app: App) {
  setupColorDirective(app);
  setupRoleDirective(app);
}
