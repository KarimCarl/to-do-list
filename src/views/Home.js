import React, { useState } from "react";
import NavBar from "../component/NavBar";
import ToDoList from "../component/ToDoList";
import Footer from "../component/Footer";
import AddTodo from "../component/AddTodo";
function Home(){
    const [todos, setTodos] = useState([
        {
            "id": 1,
            "title":" learn react",
            "Description":"introduction  to react "
        },
        {
            "id": 2,
            "title": "Go to the market",
            "Description": "Buy some groceries and fruits for my granny"
        },
        {
            "id": 2,
            "title": "Go to the gym",
            "Description": "Do a 2 hr body workout"
        }
    ])
    return(
       <div>
        <div>
            <NavBar />
        </div>
        <div>
            <AddTodo />
            <ToDoList todos={todos} />
        </div>
        <div>
            <Footer />
        </div>
        </div>
    );
}
export default Home;