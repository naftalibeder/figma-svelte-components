import { PluginOption } from "vite";

// CSS variables are pulled from https://www.figma.com/plugin-docs/css-variables/#frequently-used-tokens.
// Also see https://www.figma.com/webpack-artifacts/assets/figma_app-bea28a285a1c0049.min.css.br.

export function injectFigmaCss(): PluginOption {
  let config;

  return {
    name: "injectFigmaCss",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async transform(code, id) {
      const isDev = config.command === "serve";
      if (isDev && id.endsWith(".ts")) {
        return withInjectedFigmaStyle(code);
      } else {
        return code;
      }
    },
  };
}

const withInjectedFigmaStyle = async (code: string) => {
  const styleElem = `
  const style = document.createElement("style");
  style.innerHTML = \`
    :root {
      --figma-color-bg: #ffffff;
      --figma-color-bg-brand: #0d99ff;
      --figma-color-bg-brand-hover: #007be5;
      --figma-color-bg-brand-pressed: #007be5;
      --figma-color-bg-brand-secondary: #0768cf;
      --figma-color-bg-brand-tertiary: #e5f4ff;
      --figma-color-bg-component: #9747ff;
      --figma-color-bg-component-hover: #8638e5;
      --figma-color-bg-component-pressed: #8638e5;
      --figma-color-bg-component-secondary: #7c2bda;
      --figma-color-bg-component-tertiary: #f1e5ff;
      --figma-color-bg-danger: #f24822;
      --figma-color-bg-danger-hover: #dc3412;
      --figma-color-bg-danger-pressed: #dc3412;
      --figma-color-bg-danger-secondary: #bd2915;
      --figma-color-bg-danger-tertiary: #ffe2e0;
      --figma-color-bg-disabled: #d9d9d9;
      --figma-color-bg-disabled-secondary: #b3b3b3;
      --figma-color-bg-hover: #f5f5f5;
      --figma-color-bg-inverse: #2c2c2c;
      --figma-color-bg-onselected: #bde3ff;
      --figma-color-bg-onselected-hover: #bde3ff;
      --figma-color-bg-onselected-pressed: #bde3ff;
      --figma-color-bg-pressed: #f5f5f5;
      --figma-color-bg-secondary: #f5f5f5;
      --figma-color-bg-selected: #e5f4ff;
      --figma-color-bg-selected-hover: #bde3ff;
      --figma-color-bg-selected-pressed: #bde3ff;
      --figma-color-bg-selected-secondary: #f2f9ff;
      --figma-color-bg-selected-strong: #0d99ff;
      --figma-color-bg-selected-tertiary: #f2f9ff;
      --figma-color-bg-success: #14ae5c;
      --figma-color-bg-success-hover: #009951;
      --figma-color-bg-success-pressed: #009951;
      --figma-color-bg-success-secondary: #008043;
      --figma-color-bg-success-tertiary: #cff7d3;
      --figma-color-bg-tertiary: #e6e6e6;
      --figma-color-bg-warning: #ffcd29;
      --figma-color-bg-warning-hover: #ffc21a;
      --figma-color-bg-warning-pressed: #ffc21a;
      --figma-color-bg-warning-secondary: #fab815;
      --figma-color-bg-warning-tertiary: #fff1c2;
      --figma-color-border: #e6e6e6;
      --figma-color-border-brand: #bde3ff;
      --figma-color-border-brand-strong: #007be5;
      --figma-color-border-component: #e4ccff;
      --figma-color-border-component-hover: #9747ff;
      --figma-color-border-component-strong: #8638e5;
      --figma-color-border-danger: #ffc7c2;
      --figma-color-border-danger-strong: #dc3412;
      --figma-color-border-disabled: #e6e6e6;
      --figma-color-border-disabled-strong: #0000004d;
      --figma-color-border-onbrand: #007be5;
      --figma-color-border-onbrand-strong: #ffffff;
      --figma-color-border-oncomponent: #8638e5;
      --figma-color-border-oncomponent-strong: #ffffff;
      --figma-color-border-ondanger: #dc3412;
      --figma-color-border-ondanger-strong: #ffffff;
      --figma-color-border-onselected: #bde3ff;
      --figma-color-border-onselected-strong: #000000e5;
      --figma-color-border-onsuccess: #009951;
      --figma-color-border-onsuccess-strong: #ffffff;
      --figma-color-border-onwarning: #fab815;
      --figma-color-border-onwarning-strong: #000000e5;
      --figma-color-border-selected: #0d99ff;
      --figma-color-border-selected-strong: #007be5;
      --figma-color-border-strong: #2c2c2c;
      --figma-color-border-success: #aff4c6;
      --figma-color-border-success-strong: #009951;
      --figma-color-border-warning: #ffe8a3;
      --figma-color-border-warning-strong: #b86200;
      --figma-color-icon: #000000e5;
      --figma-color-icon-brand: #007be5;
      --figma-color-icon-brand-pressed: #0768cf;
      --figma-color-icon-brand-secondary: #80caff;
      --figma-color-icon-brand-tertiary: #bde3ff;
      --figma-color-icon-component: #8638e5;
      --figma-color-icon-component-pressed: #7c2bda;
      --figma-color-icon-component-secondary: #c5b2dc;
      --figma-color-icon-component-tertiary: #c5b2dc;
      --figma-color-icon-danger: #f24822;
      --figma-color-icon-danger-hover: #bd2915;
      --figma-color-icon-danger-pressed: #bd2915;
      --figma-color-icon-danger-secondary: #f24822;
      --figma-color-icon-danger-secondary-hover: #f24822;
      --figma-color-icon-danger-tertiary: #f24822;
      --figma-color-icon-disabled: #0000004d;
      --figma-color-icon-hover: #000000e5;
      --figma-color-icon-onbrand: #ffffff;
      --figma-color-icon-onbrand-secondary: #ffffffcc;
      --figma-color-icon-onbrand-tertiary: #ffffff66;
      --figma-color-icon-oncomponent: #ffffff;
      --figma-color-icon-oncomponent-secondary: #ffffffcc;
      --figma-color-icon-oncomponent-tertiary: #ffffff66;
      --figma-color-icon-ondanger: #ffffff;
      --figma-color-icon-ondanger-secondary: #ffffffcc;
      --figma-color-icon-ondanger-tertiary: #ffffff66;
      --figma-color-icon-ondisabled: #ffffff;
      --figma-color-icon-oninverse: #ffffffe5;
      --figma-color-icon-onselected: #000000e5;
      --figma-color-icon-onselected-secondary: #00000080;
      --figma-color-icon-onselected-strong: #ffffff;
      --figma-color-icon-onselected-tertiary: #0000004d;
      --figma-color-icon-onsuccess: #ffffff;
      --figma-color-icon-onsuccess-secondary: #ffffffcc;
      --figma-color-icon-onsuccess-tertiary: #ffffff66;
      --figma-color-icon-onwarning: #000000e5;
      --figma-color-icon-onwarning-secondary: #ffffffcc;
      --figma-color-icon-onwarning-tertiary: #ffffff66;
      --figma-color-icon-pressed: #007be5;
      --figma-color-icon-secondary: #00000080;
      --figma-color-icon-secondary-hover: #000000e5;
      --figma-color-icon-selected: #007be5;
      --figma-color-icon-selected-secondary: #007be5;
      --figma-color-icon-selected-tertiary: #007be5;
      --figma-color-icon-success: #14ae5c;
      --figma-color-icon-success-pressed: #008043;
      --figma-color-icon-success-secondary: #14ae5c;
      --figma-color-icon-success-tertiary: #14ae5c;
      --figma-color-icon-tertiary: #0000004d;
      --figma-color-icon-tertiary-hover: #000000e5;
      --figma-color-icon-warning: #ffcd29;
      --figma-color-icon-warning-pressed: #b86200;
      --figma-color-icon-warning-secondary: #ffcd29;
      --figma-color-icon-warning-tertiary: #ffcd29;
      --figma-color-text: #000000e5;
      --figma-color-text-brand: #007be5;
      --figma-color-text-brand-secondary: #007be5;
      --figma-color-text-brand-tertiary: #007be5;
      --figma-color-text-component: #8638e5;
      --figma-color-text-component-pressed: #7c2bda;
      --figma-color-text-component-secondary: #c5b2dc;
      --figma-color-text-component-tertiary: #c5b2dc;
      --figma-color-text-danger: #dc3412;
      --figma-color-text-danger-secondary: #dc3412;
      --figma-color-text-danger-tertiary: #dc3412;
      --figma-color-text-disabled: #0000004d;
      --figma-color-text-hover: #000000e5;
      --figma-color-text-onbrand: #ffffff;
      --figma-color-text-onbrand-secondary: #ffffffcc;
      --figma-color-text-onbrand-tertiary: #ffffff66;
      --figma-color-text-oncomponent: #ffffff;
      --figma-color-text-oncomponent-secondary: #ffffffcc;
      --figma-color-text-oncomponent-tertiary: #ffffff66;
      --figma-color-text-ondanger: #ffffff;
      --figma-color-text-ondanger-secondary: #ffffffcc;
      --figma-color-text-ondanger-tertiary: #ffffff66;
      --figma-color-text-ondisabled: #ffffff;
      --figma-color-text-oninverse: #ffffffe5;
      --figma-color-text-onselected: #000000e5;
      --figma-color-text-onselected-secondary: #00000080;
      --figma-color-text-onselected-strong: #ffffff;
      --figma-color-text-onselected-tertiary: #0000004d;
      --figma-color-text-onsuccess: #ffffff;
      --figma-color-text-onsuccess-secondary: #ffffffcc;
      --figma-color-text-onsuccess-tertiary: #ffffff66;
      --figma-color-text-onwarning: #000000e5;
      --figma-color-text-onwarning-secondary: #00000080;
      --figma-color-text-onwarning-tertiary: #0000004d;
      --figma-color-text-secondary: #00000080;
      --figma-color-text-secondary-hover: #000000e5;
      --figma-color-text-selected: #007be5;
      --figma-color-text-selected-secondary: #007be5;
      --figma-color-text-selected-tertiary: #007be5;
      --figma-color-text-success: #009951;
      --figma-color-text-success-secondary: #009951;
      --figma-color-text-success-tertiary: #009951;
      --figma-color-text-tertiary: #0000004d;
      --figma-color-text-tertiary-hover: #000000e5;
      --figma-color-text-warning: #b86200;
      --figma-color-text-warning-secondary: #b86200;
      --figma-color-text-warning-tertiary: #b86200;
    }
  \`;
  document.head.appendChild(style);
  `;
  return styleElem + code;
};
