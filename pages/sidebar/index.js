import { useRouter } from "next/router";

import NewTodoForm from "@/components/todos/NewTodoForm";
import TodoItem from "@/components/todos/TodoItem";

function Sidebar() {
    const router = useRouter();

    async function handleAddUser(userData) {
        const response = await fetch("http://localhost:5000/api/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        const { errors, token } = await response.json();

        if (!errors) {
            localStorage.setItem('userToken', token)
            router.push('/');
        }
    }

    return <Sidebar onAddUser={handleAddUser} />
}

export default Sidebar;