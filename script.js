document.addEventListener('DOMContentLoaded', e => {
    const userInput = document.getElementById('userInput');
    const addBTN = document.getElementById('addBTN');
    const resultBox = document.getElementById('resultBox');


    addBTN.addEventListener('click', function () {

        const userInputValue = userInput.value;


        userInput.value = '';   // Clear the input field after adding a value ;)

        if (userInputValue !== '') {   //means if the value of input fielf is not empity execute the below..
            //create newBox element which holds (newTask),(editBTN), and (removeBTN):
            const newBox = document.createElement('div');    //STEP1
            // newBox.style.border = "1px solid black";     //STEP2
            newBox.style.padding = '20px';
            newBox.style.marginBottom = '20px';
            newBox.style.borderRadius = '5px';
            newBox.style.backgroundColor = 'white';


            resultBox.appendChild(newBox);              //STEP3
            // *************************************************
            //create newTask element:
            const newTask = document.createElement('li');  //STEP1
            newTask.textContent = userInputValue;          //STEP2
            newTask.style.color = 'black';
            newTask.style.fontFamily = 'arial';
            newTask.style.fontSize = '1.5em';
            newTask.style.listStyle = 'none';
            newTask.style.marginBottom = '10px';
            newBox.appendChild(newTask);                   //STEP3
            // *****************************************************
            //Create editBTN element:
            const editBTN = document.createElement('button');  //STEP1
            editBTN.classList = 'javaBTN'
            editBTN.textContent = 'Edit';  //STEP2
            editBTN.style.width = '80px';
            editBTN.style.height = '25px';
            editBTN.style.border = 'none';
            editBTN.style.marginRight = '10px';
            editBTN.style.marginLeft = '10px';
            newBox.appendChild(editBTN);  //STEP3
            // ********************************************************
            //Create removeBTN element:
            const removeBTN = document.createElement('button');  //STEP1
            removeBTN.classList = 'javaBTN'
            removeBTN.textContent = '❌';  //STEP2
            removeBTN.style.width = '80px';
            removeBTN.style.height = '25px';
            removeBTN.style.border = 'none';
            removeBTN.style.marginRight = '10px'
            newBox.appendChild(removeBTN);     //STEP3
            //********************************************************* 
            //Create doneBTN elemnt
            const doneBTN = document.createElement('button');    //STEP1
            doneBTN.classList = 'javaBTN'  //STEP2
            doneBTN.textContent = '✔️';
            doneBTN.style.width = '80px';
            doneBTN.style.fontWeight = 'bold';
            doneBTN.style.fontSize = '1em';
            doneBTN.style.height = '25px';
            doneBTN.style.paddingBottom = '8px'
            doneBTN.style.border = 'none';
            newBox.appendChild(doneBTN); //STEP3
            //*********************************************************
            //Add click event to removeBTN for removing the whole newBox:
            removeBTN.addEventListener('click', e => {
                newBox.remove();
            })
            //***********************************************************
            //Add click event to editBTN for editing the current newTask:
            editBTN.addEventListener('click', e => {
                let updatedTask = window.prompt('Edt task', userInputValue);
                if (updatedTask !== '') {
                    newTask.textContent = updatedTask;
                }
                else {   // after clicking edit btn if you enter an empty string the newBox will be deleted automatically ;)
                    newBox.remove()
                }
            })
            //********************************************************* 
            // Add click event to doneBTN for drowing aline over the finished task ;)
            let saryass = false;
            doneBTN.addEventListener('click', e => {
                saryass = !saryass;
                if (saryass) {     //write what ever u wanna see after the first click.
                    newTask.style.textDecoration = 'line-through';
                    newTask.style.opacity = '0.3';
                    doneBTN.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'

                    editBTN.disabled = true;  //Disable editBTN when doneBTN is clicked.

                }
                else {         //write whatever u wanna see after the second click.
                    newTask.style.opacity = '';
                    newTask.style.textDecoration = '';
                    doneBTN.style.backgroundColor = '';

                    editBTN.disabled =false; //Enable editBTN when doneBTN is clicked again. 
                }
            })
        }
    });
});



