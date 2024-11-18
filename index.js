let adds = document.querySelector(".add")
let field = document.querySelector('.input')
let groups = document.querySelector('.group')
let msgs = document.querySelector('.msg')
let count = 0;
function createTaskDiv( taskText) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('group');
    
    let taskTextDiv = document.createElement('div');
    taskTextDiv.textContent = `  ${taskText}`;
    
    let partDiv = document.createElement('div');
    partDiv.classList.add('part');
    let checkDiv = document.createElement('input');
    checkDiv.setAttribute('type', 'checkbox');
    checkDiv.classList.add('checkbox');
    let isChecked = false;

    checkDiv.addEventListener('click', () => {
        if (!isChecked) { 
            count++;
            msgs.textContent = `You have completed ${count} task(s)`;
            isChecked = true; 
        } else { 
            count--;
            msgs.textContent = `You have completed ${count} task(s)`;
            isChecked = false; 
        }
        if (count === 0) {
            msgs.style.display = 'none';
        } 
    });
    
    
    let editEmoji = document.createElement('p');
    editEmoji.innerHTML = '&#9998;';
    editEmoji.style.marginRight = '15px';
    editEmoji.style.fontSize = '25px';
    editEmoji.addEventListener('mouseover', () => {
        editEmoji.style.fontSize = '40px'; 
    });
    
    editEmoji.addEventListener('mouseout', () => {
        editEmoji.style.fontSize = '25px'; 
    });
    editEmoji.addEventListener('click', ()=>{
        field.value = taskTextDiv.textContent;
        adds.addEventListener('click', () => {
            if (!field.value) {
                taskTextDiv.textContent = field.value;
                console.log("Task edited and updated");
                newDiv.remove();
            } else {
                alert('Invalid Task Info');
            }
        });
    });
    
    partDiv.appendChild(editEmoji);
    
    let deleteEmoji = document.createElement('p');
    deleteEmoji.innerHTML = '&#128465;';
    deleteEmoji.style.fontSize = '25px';
    deleteEmoji.addEventListener('mouseover', () => {
        deleteEmoji.style.fontSize = '40px';
    });
    
    deleteEmoji.addEventListener('mouseout', () => {
        deleteEmoji.style.fontSize = '25px'; 
    });
    deleteEmoji.addEventListener('click', ()=>{
        newDiv.remove();
    })
    partDiv.appendChild(deleteEmoji);
    newDiv.appendChild(taskTextDiv);
    newDiv.appendChild(partDiv);
    newDiv.appendChild(checkDiv);
    return newDiv;
}
// 
adds.addEventListener('click', ()=>{
    if(field.value){
        // count++;
       let newDiv = createTaskDiv(field.value);
       document.body.appendChild(newDiv);
       
        field.value = '';
    } else {
        alert('Invalid Task Info');
    }
    
})
groups.style.display = 'none';
