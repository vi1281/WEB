import React from 'react';
import { db } from '../firebase'; // Импортируем конфиг Firebase
import { doc, getDoc } from 'firebase/firestore';  // Импортируем doc и getDoc

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            personalInfo: {
                name: "",
                lvl:"",
                department: "",
                group: "",
                formOfStudy: "",
                course: "",
                specialty: "",
                status: "",
                contact: "",
            }
        };
    }

    // Получение данных из Firestore
    componentDidMount() {
        const userId = localStorage.getItem("userId");  // Получаем userId из localStorage
        if (!userId) {
            console.log("Пользователь не авторизован");
            return;
        }

        const userDocRef = doc(db, "users", userId);  // Получаем ссылку на документ пользователя

        getDoc(userDocRef)
            .then(docSnap => {
                if (docSnap.exists()) {
                    // Если документ существует, обновляем состояние
                    this.setState({ personalInfo: docSnap.data() });
                } else {
                    console.log("Документ не найден");
                }
            })
            .catch(error => {
                console.error("Ошибка при получении данных:", error);
            });
    }
    handleLogout = () => {
        localStorage.removeItem("userId"); // Удаляем userId из localStorage
        window.location.href = "/login"; // Перенаправляем пользователя на страницу логина
    };

    render() {
        const { name, department, group, formOfStudy, course, specialty, status, contact } = this.state.personalInfo;
        
        return (
            <div className="profile">
                <div className="profileP">
                    <h1>Персональні данні</h1>
                    <h3>ПІБ: {name || ""}</h3>
                </div>
                <div className="profileN">
                    <h1>Данні за місцем навчання (роботи)</h1>
                    <h3>Підрозділ: {department || ""}</h3>
                    <h3>Група: {group || ""}</h3>
                    <h3>Форма Навчання: {formOfStudy || ""}</h3>
                    <h3>Курс Навчання: {course || ""}</h3>
                    <h3>Спеціальність: {specialty || ""}</h3>
                    <h3>Статус: {status || ""}</h3>
                </div>
                <div className="profileC">
                    <h1>Контактні данні</h1>
                    <h3>Контакт: {contact || ""}</h3>
                    <button onClick={this.handleLogout} className="logout-button">Вийти</button>
                </div>
            </div>
        );
    }
}

export default Profile;