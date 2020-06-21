import React from 'react';
import styles from './Hello.module.css';

interface HelloProps {
    title: string;
}

const Hello: React.FC<HelloProps> = ({ title }: HelloProps) => {
    return (
        <div>
            <header className={styles.test}>Welcome to app {title} !</header>
        </div>
    );
};

export default Hello;
