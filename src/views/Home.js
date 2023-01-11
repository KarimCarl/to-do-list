import ToDoList from "../components/To-do-list"
import NavBar from "../components/NavBar";

function Home(){
    return (
        <div> 
            <div>
                <NavBar />
            </div>

            <div> 
                <ToDoList /> 
            </div> 
        </div>   
            

    );
}

export default Home;