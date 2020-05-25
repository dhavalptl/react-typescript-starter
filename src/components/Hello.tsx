import React from 'react';

interface Props {
    title: string;
}

const Hello: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <header>Hello {title} !</header>
        </div>
    );
};

export default Hello;
