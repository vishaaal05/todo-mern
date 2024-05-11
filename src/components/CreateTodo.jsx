import { useState } from "react";

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value)
        }} /> <br /><br />
        <input type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value)
            
        }} /><br /><br />
        <button onClick={() => {
            app.use(express.json())
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo added")
            })
        }}>Add a todo</button>
    </div>

}