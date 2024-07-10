const submit = document.getElementById("submit")
const employees = document.getElementById("employees")
const employeeList = document.getElementById("employeeList")
const form =document.querySelector('form')

form.addEventListener('submit',(e) => {
  e.preventDefault()
const formData = new FormData(form)
const firstname = formData.get('firstname')
const lastname = formData.get('lastname')
const email = formData.get('email')
const date = formData.get('hire_date')
const photoFile = formData.get('photo')

const employeeItem = document.createElement('tr');


const photoCell = document.createElement('td')
const photoImg = document.createElement('img')
const photoURL = URL.createObjectURL(photoFile)
photoImg.src = photoURL
photoCell.appendChild(photoImg)
photoImg.width = 50;
photoImg.height = 50;

const firstnameCell = document.createElement('td')
firstnameCell.textContent = firstname

const lastnameCell = document.createElement('td')
lastnameCell.textContent = lastname

const emailCell = document.createElement('td')
emailCell.textContent = email
    
const dateCell = document.createElement('td')
dateCell.textContent = date

const actionsCell = document.createElement('td');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'delete';
deleteButton.addEventListener('click', () => {
  employeeList.removeChild(employeeItem);
});
actionsCell.appendChild(deleteButton);

employeeItem.appendChild(photoCell)
employeeItem.appendChild(firstnameCell)
employeeItem.appendChild(lastnameCell)
employeeItem.appendChild(emailCell)
employeeItem.appendChild(dateCell)
employeeItem.appendChild(actionsCell);
  
employeeList.appendChild(employeeItem)


});