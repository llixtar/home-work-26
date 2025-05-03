import { handleButtonClick } from './handleButtonClick.js';
import { trackMousePosition } from './trackMousePosition.js';
import { setupEventDelegation } from './setupEventDelegation.js';

// ============   1   ============
console.log('\n#1. Відстежування кліку на кнопку та виведення повідомлення.')
handleButtonClick('myButton', 'Button clicked!');

// ============   2   ============
console.log('\n#2. Розробка функції відстеження позиції курсору миші.')
trackMousePosition();

// ============   3   ============
console.log('\n#3. Реалізація делегування подій для відстеження кліків на елементах списку.')
setupEventDelegation('#testList');
