
const addBtn = document.getElementById('add');


const updateLSdata = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes =[];
    textAreaData.forEach((note) =>{
        return notes.push(note.value);
        
    })
    localStorage.setItem('notes', JSON.stringify(notes))
}

const addNewNotes = (text = '') =>{
const note = document.createElement('div');

note.classList.add('note');

const htmlData =`
<div class="operation">
<button class="edit"> <i class="fa-regular fa-pen-to-square"></i></button>
<button class="delete"><i class="fa-regular fa-trash-can"></i></button>
</div>
<div class="main ${ text ? "" : "hidden"}"></div> 
<textarea class="${ text ? "hidden" : ""}"></textarea>    `;
note.insertAdjacentHTML('afterbegin' , htmlData);

// getting the references

const editBtn = note.querySelector('.edit');
const delBtn = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textArea = note.querySelector('textarea');

// deleting the note

delBtn.addEventListener('click',() => {
    note.remove();
    updateLSdata();
});

// toggle using edit btn

textArea.value = text;
mainDiv.innerHTML = text;


editBtn.addEventListener('click' , () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
   
})

textArea.addEventListener('change', (event) =>{
const myValue = event.target.value; 
mainDiv.innerHTML = myValue;
updateLSdata();
})





document.body.appendChild(note);
}
// geting back data from local storage

const notes = JSON.parse(localStorage.getItem('notes' , ));

if(notes){notes.forEach((notes) => addNewNotes(notes))}

addBtn.addEventListener('click' , () => addNewNotes() );
