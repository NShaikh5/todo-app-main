import TodoList from '../components/todos/TodoList';
import LoginPage from './login';

const TODOS = [{
    id: 't1',
    title: 'title',
    description: 'description'
}]

function HomePage(props) {
    return (
        // <TodoList todos={props.todos} /> 
        <LoginPage/>
    )
}

export async function getStaticProps() {
    // fetch data from an API

    // const response = await fetch('http://localhost:5000/api/todos', {
    //     headers: {
    //         'x-auth-token': token
    //     }
    // })

    // const todos = await response.json();
    
    return {
        // props: {
        //     todos: todos.map((todo) => ({
        //         id: todo._id.toString(),
        //         title: todo.title,
        //         description: todo.description,
        //     }))
        // },
        // revalidate: 1, // make call for new data after 1 seconds

        props: {
            todos: TODOS
        }
    }
}

export default HomePage;