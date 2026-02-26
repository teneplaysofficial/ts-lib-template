import { defineConfig } from 'tsdown';

export default defineConfig([
  /**
   * CLI Build
   */
  {
    name: 'CLI',
    entry: {
      cli: './bin/index.ts',
    },
    platform: 'node',
    format: ['esm'],
    dts: false,
    minify: true,
    clean: true,
    outExtensions() {
      return {
        js: '.js',
      };
    },
    banner: {
      js: '#!/usr/bin/env node',
    },
  },

  /**
   * Library Build
   */
  {
    name: 'Library',
    entry: './lib/index.ts',
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    exports: true,
  },
]);
