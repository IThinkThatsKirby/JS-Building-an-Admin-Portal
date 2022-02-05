async function main(){

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root');

    let li = document.createElement('li')
    li.textContent = book.title

    let input = document.createElement('input')
    input.value = book.quantity

    let but = document.createElement('button')
    but.textContent = 'Save'

    but.addEventListener('click',()=>{fetch('http://localhost:3001/updateBook',{
        method: "PATCH",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            id: book.id,
            quantity: input.value
        }),
        
    })
    })

    root.append(li,input,but)
}

main();