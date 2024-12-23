
import React from 'react';


class Profile extends React.Component {
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
       
        return (
            <div className="profile">
                <div className="profileP">
                    <h1>Персональні данні</h1>
                    <h3>ПІБ</h3>
                </div>
                <div className ="profileN">
                <h1>Данні за місцем начання(роботи)</h1>
                <h3>Підрозділ</h3>
                <h3>Група</h3>
                <h3>Форма Навчання</h3>
                <h3>Курс Навчання</h3>
                <h3>Спеціальність</h3>
                <h3>Статус</h3>

                </div>
                <div className="profileC">
                    <h1>Контактні данні</h1>
                </div>
            </div>
        );
    }
}

export default Profile;
