import { useRouter } from 'next/router';

import NewTodoForm from '../../components/todos/NewTodoForm';

function NewTodoPage() {
    //const router = useRouter()

    async function addTodoHandler(enteredTodoData) {
        console.log(enteredTodoData)
        const response = await fetch("/api/addExercise", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredTodoData)
        })

        const { errors, token } = await response.json();

        if (!errors) {
            localStorage.setItem('userToken', token)
            router.push('/activity');
        }

    }

    return (
        <NewTodoForm onAddTodo={addTodoHandler} />
    )
}

export default NewTodoPage;