// import React from 'react';

// class Menu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false, // Состояние для отслеживания открытости меню
//         };
//     }

//     toggleMenu = () => {
//         this.setState((prevState) => ({
//             isOpen: !prevState.isOpen, // Переключаем состояние
//         }));
//     };
//     render(){
//         const { isOpen } = this.state;
//         const pages = ['Профіль', 'Контакти', 'ІНП','Поточний контроль','Резульати Аттестацій','Сессія','Розклад']; // Список страниц (можно передать через props)

//         return (
//             <div>
//                 <button onClick={this.toggleMenu}>Меню</button> {/* Кнопка для открытия/закрытия */}
//                 {isOpen && ( // Условный рендеринг списка
//                     <ul>
//                         {pages.map((page, index) => (
//                             <li key={index}>{page}</li> // Рендерим каждую страницу
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         );
//     }
//     }
// export default Menu
import React from 'react';


class Menu extends React.Component {
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
    };

    render() {
        const { isOpen } = this.state;
        const pages = ['Профіль', 'Контакти', 'ІНП','Поточний контроль','Резульати Аттестацій','Сессія','Розклад']; // Список страниц (можно передать через props)

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
                                    {page}
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
