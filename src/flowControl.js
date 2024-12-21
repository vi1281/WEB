import React from 'react';

class FlowControl extends React.Component {
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
                        flowControl
                    </h1>
                );
            }
}

export default FlowControl;