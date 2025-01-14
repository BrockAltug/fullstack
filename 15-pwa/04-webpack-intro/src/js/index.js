// TODO: This file serves as the main entry point for Webpack to bundle all modules.
//       The import statements bring in functions from other files, which are used for DOM interactions.

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);