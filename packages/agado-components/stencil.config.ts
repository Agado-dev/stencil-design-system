import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'agado-components',
  globalStyle: 'src/styles/design-tokens.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },

    angularOutputTarget({
      componentCorePackage: '@agado/components',
      outputType: 'standalone',
      directivesProxyFile: '../angular-components/projects/components/src/lib/proxies.ts',
      directivesArrayFile: '../angular-components/projects/components/src/lib/index.ts',
    }),
    vueOutputTarget({
      proxiesFile: '../vue-components/src/vue.components.ts',
      componentCorePackage: '@agado/components',
      includeImportCustomElements: true,
    }),
    reactOutputTarget({
      outDir: '../react-components/src/lib',
      esModules: true,
      stencilPackageName: '@agado/components',
    }),

    {
      type: 'docs-readme',
    },

    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
