import React from "react";
import { useState } from "react";

function Form() {
    const state = useState(0);
    console.log(state)
    const [form, setForm] = useState({
        name: '',
        age: 0
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value

            //name: 'bob'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit clicked')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    placeholder="enter name"
                    onChange={handleChange}
                ></input>
                <input
                    type="number"
                    value={form.age}
                    name="age"
                    placeholder="enter age"
                    onChange={handleChange}
                ></input>

                <input type ="submit" value="submit form"></input>
            </form>
        </div>
    )
}
export default Form;