// ============   1   ============
console.log('\n#1. Відстежування кліку на кнопку та виведення повідомлення.')
import { handleButtonClick } from './handleButtonClick.js';

handleButtonClick('myButton', 'Button clicked!');


// ============   2   ============
console.log('\n#2. Розробка функції відстеження позиції курсору миші.')
import { trackMousePosition } from './trackMousePosition.js';
trackMousePosition();


// ============   3   ============
console.log('\n#3. Реалізація делегування подій для відстеження кліків на елементах списку.')
import { setupEventDelegation } from './setupEventDelegation.js';
setupEventDelegation('#testList');
