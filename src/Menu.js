import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, // Состояние для отслеживания открытости меню
            isAuthenticated: false, // Состояние для отслеживания авторизации
        };
    }

    componentDidMount() {
        // Проверяем, авторизован ли пользователь, по данным из localStorage
        const userId = localStorage.getItem("userId");
        if (userId) {
            this.setState({ isAuthenticated: true });
        }
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen, // Переключаем состояние
        }));
    };

    render() {
        const { isOpen } = this.state; // Деструктурируем isOpen из состояния

        const pages = [
            { name: 'Контакти', path: '/Contact' },
            { name: 'ІНП', path: '/inp' },
            // { name: 'Поточний контроль', path: '/flowControl' },
            { name: 'Резульати Аттестацій', path: '/atestation' },
            { name: 'Сессія', path: '/session' },
            // { name: 'Розклад', path: '/schedule' },
        ];

        return (
            <div className="menu-container">
                <button className="menu-button" onClick={this.toggleMenu}>
                    Меню
                </button>
                {isOpen && ( // Условный рендеринг списка
                    <div className="menu-dropdown">
                        <ul className="menu-list">
                            {pages.map((page, index) => (
                                <li key={index} className="menu-item">
                                    <Link to={page.path}>{page.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;
