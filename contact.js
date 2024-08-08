const form = document.getElementById('form');

const con = document.getElementById('container');

form.addEventListener('submit', async (e) => {
    //to stop the form from refreshing and submitting by default
    e.preventDefault();

    const title = document.getElementById('name').value;
    const body = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const userId = document.getElementById('date').value;

    if(!title || !body || !phoneNumber || !userId){
        console.log('all fields are required')
        return
    }

    const newElem = document.createElement('h1')
    newElem.innerText = 'loading....'
    con.appendChild(newElem)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({title, body, phoneNumber, userId}),
    })

    const data = await res.json()
    console.log(data);

    form.reset()
    con.removeChild(newElem)

});


const btn= document.getElementById('navLinks');
 function showMenu(){
    navLinks.style.right= "0"
 }

 function hideMenu(){
    navLinks.style.right= "-200px"
 }