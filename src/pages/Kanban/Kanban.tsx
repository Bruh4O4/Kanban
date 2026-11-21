import { Outlet } from "react-router-dom"

function Kanban(){
    return(
        <>
            <h1>Kanban</h1>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Kanban