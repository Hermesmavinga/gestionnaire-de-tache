// let taskTitle = document.getElementById("taskTitle")
// let myPririoty = document.getElementById("myPriority")
// let myDescription = document.getElementById("description")
// let btnSubmit = document.getElementById("btnSubmit")
// let tbody = document.querySelector('tbody')


// btnSubmit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     let taskTitleValue = taskTitle.value
//     let myPriorityValue = myPririoty.value
//     let myDescriptionValue = myDescription.value
   

//     let newRow = document.createElement('tr')

//     let fstData = document.createElement('td')
//     let sndData = document.createElement('td')
//     let thirdData = document.createElement('td')
//     let fourthDataBtnDelete = document.createElement('button')

//     fstData.innerHTML = taskTitleValue
//     sndData.innerHTML = myPriorityValue
//     thirdData.innerHTML = myDescriptionValue
//     fourthDataBtnDelete.textContent =  'Supprimer'

//     newRow.appendChild(fstData)
//     newRow.appendChild(sndData)
//     newRow.appendChild(thirdData)
//     newRow.appendChild(fourthDataBtnDelete)

//     tbody.appendChild(newRow)

//     fourthDataBtnDelete.addEventListener('click',() =>{
//         newRow.remove()
//     })
    
//     taskTitle.value = ""
//     myDescription.value = ""
//     myPririoty.value = ""
// })


// ****************version refactorisee**********************

const taskTitle = document.getElementById("taskTitle");
const prioritySelect = document.getElementById("myPriority");
const descriptionField = document.getElementById("description");
const btnSubmit = document.getElementById("btnSubmit");
const tbody = document.querySelector("tbody");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const title = taskTitle.value.trim();
  const priority = prioritySelect.value;
  const description = descriptionField.value.trim();

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title}</td>
    <td>${priority}</td>
    <td>${description}</td>
    <td><button class="btn-delete">Supprimer</button></td>
  `;

  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => row.remove());

  tbody.appendChild(row);

  taskTitle.value = "";
  prioritySelect.value = "";
  descriptionField.value = "";
});






