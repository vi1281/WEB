import React from 'react';

class Contact extends React.Component {
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
                        Контакти
                    </h1>
                );
            }
}

export default Contact;
