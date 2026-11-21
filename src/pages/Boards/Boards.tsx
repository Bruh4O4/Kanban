import { Outlet } from "react-router-dom"

function Boards(){
    return(
        <>
            <h1>Boards</h1>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Boards