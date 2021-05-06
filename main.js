import { getFullName , MAX_FULL_NAME_LENGTH} from './module_one.js';

        console.log(getFullName);



   
    document.getElementById("button_module").addEventListener("click", function() {
        document.getElementById("h1_populate_h1").innerHTML = MAX_FULL_NAME_LENGTH;
      }); 