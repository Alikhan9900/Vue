import { configure } from "vee-validate";
import { i18n } from "./i18n";

export function setupValidation() {
  configure({
    validateOnInput: true,
    generateMessage: (ctx) => {
      const t = i18n.global.t;
      const rule = ctx.rule?.name || "default";
      return t(`validation.${rule}`, { field: ctx.field });
    },
  });
}
