

const  Navbar= () => {
    return (  
        <nav className="navbar">
            <h1>To Do List</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style ={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"

                }}>Create new Task</a>

            </div>
        </nav>

    
    );
}
 
export default Navbar;<br></br>