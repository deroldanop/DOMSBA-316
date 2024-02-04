document.addEventListener('DOMContentLoaded', function () {
    // Cache elements
    const appBlock = document.getElementById('app');
  const taskList = document.getElementById('taskList');
  const taskForm = document.getElementById('taskForm');
  let moneyToSpend = document.getElementById('tospend')
  let newAmountText = document.querySelector('#amount');
  let notEnoughMoneyText = document.getElementById('not-enough-money');
  newAmountText.value = 0;
  // Event listener for form submission
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = taskForm.firstElementChild;
    const newCost = taskForm.children[1];

    addTask(newTask.value, newCost.value);


    newCost.value.array.forEach(element => {
      
    });

    newTask.value = ''; // Clear the input field
    newCost.value = '';

    //moneyToSpend.value = parseFloat(moneyToSpend.innerText);
    console.log(`This is money ${moneyToSpend.value}`);

  });


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

    const costItem = document.createElement('li');

    costItem.textContent = costText;
    costArray.push(costText);
    console.log(costItem);
    console.log(costArray);

    newAmountText.value = parseFloat(newAmountText.value) + parseFloat(costText);
    console.log(`"T amount is" ${newAmountText.value}`);
    // Add checkbox for completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function (event) {

      costItem.classList.toggle('completed');
      const cost =
        event.target.parentElement.parentElement.lastElementChild.textContent;
      if (event.target.checked) {
        newAmountText.value = parseFloat(newAmountText.value) - parseFloat(cost);
      } else {
        newAmountText.value = parseFloat(newAmountText.value) + parseFloat(cost);
      }
      calculateBalance();
      // if (costItem.classList.style.display === "none"){
      //   console.log(`Este esta apagado ${costItem.classList.value}`)
      //  //(costItem.classList.toggle()){
      // newAmountText.value -= parseFloat(costItem.classList.value);
      //if(Number(newAmountText.value) > Number(moneyToSpend.value)){

    })
    calculateBalance();
    //costItem.classList.toggle('completed');

    // addTotal(costArray, taskForm);
    //});

    // Append elements to the task list
    taskItem.appendChild(checkbox);
    taskList.appendChild(taskItem);
    taskList.appendChild(costItem);
  }

  moneyToSpend.addEventListener('change', function (event) {
    calculateBalance();
  });

  function calculateBalance() {
    if(Number(newAmountText.value) > Number(moneyToSpend.value)){
      appBlock.style.backgroundColor = "red";
      notEnoughMoneyText.style.display = "block";
    } else {
      appBlock.style.backgroundColor = "#41dc0d";
      notEnoughMoneyText.style.display = "none";
    }
  }



});

  
  
  