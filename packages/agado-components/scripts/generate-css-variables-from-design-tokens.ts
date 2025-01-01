import fs from 'node:fs';
import { resolve } from 'node:path';
import { DESIGN_TOKENS } from '../src/styles/design.tokens';

const cssVariables = Object.entries(DESIGN_TOKENS)
  .map(([colorname, values]) => `  --color-${colorname}: ${values.value};`)

  .join('\n');
const cssVariablesInRoot = `:root {\n${cssVariables}\n}`;
fs.writeFileSync(resolve(__dirname, '../src/styles/design-tokens.css'), cssVariablesInRoot);
