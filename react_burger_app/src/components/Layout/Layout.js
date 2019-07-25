import React from 'react'; 
import Aux  from '../../hoc/Aux'; // this is used to have multiple divs in one component
import styles from './Layout.css'; // to pull all css classes from Layouts.css
import './Layout.css';


const layout = (props) => (
   <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
        {props.children}
    </main>
</Aux>
);

export default layout; 