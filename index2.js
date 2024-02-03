document.addEventListener('DOMContentLoaded', function () {
    // Cache elements
    const taskList = document.getElementById('taskList');
    const taskForm = document.getElementById('taskForm');
    const newTaskInput = document.querySelector('#newTask');
    const newCostInput = document.getElementById('newCost');
    let moneyToSpend = document.getElementById('tospend')
    let newAmountText = document.getElementById('amount');
    newAmountText.value = 0;
    parseFloat(newAmountText);
    // Event listener for form submission
    taskForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addTask(newTaskInput.value, newCostInput.value);
      Number(moneyToSpend.value);

      newTaskInput.value = ''; // Clear the input field
      newCostInput.value = '';
      
      //moneyToSpend.value = parseFloat(moneyToSpend.innerText);
      console.log(`This is money ${moneyToSpend.value}`);
      
    });
    
  console.log(newTaskInput.value);
  console.log(newCostInput.value);
  
  
    // Function to add a new task
    function addTask(taskText, costText) {
      // Create new task element
    //   const taskArray = [];
      const costArray = [];
      const taskItem = document.createElement('li');
      //taskArray.push();
      costArray.push();
      taskItem.textContent = taskText;
      //const totaltem = document.createElement('input');

        console.log(taskItem);
/////////////////////////////////

      const costItem = document.createElement('li');
     
      costItem.textContent = costText;
     costArray.push(costText);
      console.log(costItem);
      console.log(costArray);
      
     newAmountText.value = parseFloat(newAmountText.value ) + parseFloat(newCostInput.value);
     console.log(`"T amount is" ${newAmountText.value}`);
      // Add checkbox for completion
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        costItem.classList.toggle('completed');
        // if (costItem.classList.style.display === "none"){   
        //   console.log(`Este esta apagado ${costItem.classList.value}`)          
        //  //(costItem.classList.toggle()){
        // newAmountText.value -= parseFloat(costItem.classList.value);  
        //if(Number(newAmountText.value) > Number(moneyToSpend.value)){

c
      })
      //costItem.classList.toggle('completed');

       // addTotal(costArray, taskForm);
      //});
  
      // Append elements to the task list
      taskItem.appendChild(checkbox);
      taskList.appendChild(taskItem);
      taskList.appendChild(costItem);
    }




    // function addTotal(arr, element){
    //     if(arr != []){
    //         summa = 0;
    //         for (let i = 0; i < arr.length; i++){
    //             summa += arr[i];
    //         }
    //         const total = document.createElement('input');
    //         total.innerText = summa;
    //         console.log(summa);
    //     }
    // }

  
    
  });
  