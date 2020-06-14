import React from 'react';
import styles from './Hello.module.css';

interface Props {
    title: string;
}

const Hello: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <header className={styles.test}>Hello {title} !</header>
        </div>
    );
};

export default Hello;
