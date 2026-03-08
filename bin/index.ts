import { print } from 'echo-banner';
import pkg from '../package.json';

await print({
  pkg: {
    displayName: pkg.displayName,
    name: pkg.name,
    version: pkg.version,
  },
});
