import React from 'react';
import { db } from '../firebase'; // Импортируем конфиг Firebase
import { doc, getDoc } from 'firebase/firestore';  // Импортируем doc и getDoc

class Atest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            personalInfo: {
                a1: "",
                a2: "",
                a3: "",
                a4: "",
                a5: "",
                a6: "",
                a7: "",
                a8: "",
                a9: "",
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
        const { a1, a2, a3, a4, a5, a6, a7, a8, a9, } = this.state.personalInfo;
        
        return (
            <div className="Atest">
                <h1>Результати атестації</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Дисципліна</th>
                            <th>Викладач</th>
                            <th>Атестація</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>Передача голосу та відео ІР мережею (VоІР, ІРТV)</td>
                            <td>Астраханцев А. А.</td>
                            <td>{a1 || ""}</td>
                        </tr>
                        <tr>
                            <td>Економіка і організація виробництва</td>
                            <td>Шостак І. В.</td>
                            <td>{a2 || ""}</td>
                        </tr>
                        <tr>
                            <td>Охорона праці та цивільний захист</td>
                            <td>Землянська О. В.</td>
                            <td>{a3 || ""}</td>
                        </tr>
                        <tr>
                            <td>Іноземна мова професійного спрямування-2. Практичний курс іноземної мови для професійного спілкування ІІ</td>
                            <td>Голуб Т. П.</td>
                            <td>{a4 || ""}</td>
                        </tr>
                        <tr>
                            <td>Технології розробки web-орієнтованих систем</td>
                            <td>Суліма С. В.</td>
                            <td>{a5 || ""}</td>
                        </tr>
                        <tr>
                            <td>Програмування мікрокомп’ютерних систем обміну даних-1</td>
                            <td>Могильний С. Б.</td>
                            <td>{a6 || ""}</td>
                        </tr>
                        <tr>
                            <td>Планування та оптимізація мереж рухомого зв’язку</td>
                            <td>Босий Б. І.</td>
                            <td>{a7 || ""}</td>
                        </tr>
                        <tr>
                            <td>Курсова робота з програмування мікрокомп’ютерних систем обміну даних</td>
                            <td>Могильний С. Б.</td>
                            <td>{a8 || ""}</td>
                        </tr>
                        <tr>
                            <td>Дослідження операцій</td>
                            <td>Скулиш М. А.</td>
                            <td>{a9 || ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Atest;