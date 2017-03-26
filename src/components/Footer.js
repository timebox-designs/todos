import React from 'react';
import FilterLink from './FilterLink';

const styles = {
    list: {
        listStyle: 'none',
        paddingLeft: 0
    },

    listItem: {
        display: 'inline-block',
        marginRight: 10
    }
};

const Footer = () => (
    <ul style={styles.list}>
        <li style={styles.listItem}>
            Show:
        </li>
        <li style={styles.listItem}>
            <FilterLink filter='SHOW_ALL'>All</FilterLink>
        </li>
        <li style={styles.listItem}>
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        </li>
        <li style={styles.listItem}>
            <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
        </li>
    </ul>
);

export default Footer;