import React from 'react';

class Inp extends React.Component {
    constructor(props) {
                super(props);
                this.state = {
                    isOpen: false, // Состояние для отслеживания открытости меню
                };
            }
                toggleMenu = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen, // Переключаем состояние
        }));
        
            }
            render() {
                return (
                    <h1>
                        Inp
                    </h1>
                );
            }
}

export default Inp;