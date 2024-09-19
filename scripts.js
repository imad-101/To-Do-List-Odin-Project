const taskDiv = document.querySelector('.tasks');
const input = document.querySelector('input');
const button = document.querySelector('#add-btn');


button.addEventListener('click', createContent);

function createContent() {

  if(input.value == ""){
    alert('Please Enter Something')
  }
  else{

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const img = document.createElement('img');
    img.src = "Images/unchecked.png";
    img.classList.add('img-unck');
    taskContainer.appendChild(img);

    const li = document.createElement('li');
    li.textContent = input.value;
    taskContainer.appendChild(li);

    const cross = document.createElement('span');
    cross.textContent = 'X';
    cross.classList.add('delete-btn');
    taskContainer.appendChild(cross);

    taskDiv.appendChild(taskContainer);

    li.addEventListener('click' , function(){
      li.classList.toggle('li-class2')
      if(img.src.includes("unchecked.png")){
        img.src = "Images/checked.png"
      }
      else{
        img.src = "Images/unchecked.png"
      }
    })

    cross.addEventListener('click', function(){
      taskContainer.removeChild(li)
      taskContainer.removeChild(cross)
      taskContainer.removeChild(img)
      taskDiv.removeChild(taskContainer)
      
    })

    input.value = '';
    
  }
   }
   
