import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

function Layout() {
    return <>
        <div className={styles['']}>

        </div>
        <div>
            <Outlet />
        </div>
    </>
}

export default Layout;