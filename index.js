const TODOS_URL = 'https://jsonplaceholder.typicode.com/users'

const dataContainer = document.querySelector('#data-container')

const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElementAnchor = document.createElement('a')
    todoElementAnchor.href = '#'
    todoElementAnchor.textContent = text

    todoElement.append(todoElementAnchor)

    return todoElement
}

const getLoader = () => {
    const load = document.querySelector('#loader')
    const isloader = load.hasAttribute('hidden')
    if (isloader) {
        load.removeAttribute('hidden')
    } else {
        load.setAttribute('hidden', '')
    }
}

const getAllTodos = (() => {
    getLoader()
    const result = fetch(TODOS_URL, {
        method: 'GET',
    })
    result
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка!', error)
            }
            return response.json()
        })
        .then((todos)=>{
            todos.forEach(todo => {
                const todoHTML = createTodoElement(todo.name)
                dataContainer.append(todoHTML)                
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            getLoader()
        })
})

getAllTodos()