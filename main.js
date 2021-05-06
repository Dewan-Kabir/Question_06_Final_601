import { getFullName , MAX_FULL_NAME_LENGTH} from './module_one.js';

console.log(getFullName);


function test_data_h1(){
    var test_data = document.getElementById('h1_populate_h1');
    test_data.innerHTML = MAX_FULL_NAME_LENGTH;
}
