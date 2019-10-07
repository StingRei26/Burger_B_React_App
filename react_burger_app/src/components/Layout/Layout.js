import React from 'react'; 
import Aux  from '../../hoc/Aux'; // this is used to have multiple divs in one component
import styles from './Layout.module.css'; // to pull all css classes from Layouts.css
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'; 


const layout = (props) => (
   <Aux>
    <Toolbar />
    <main className={styles.content}>
        {props.children}
    </main>
</Aux>
);

export default layout; 