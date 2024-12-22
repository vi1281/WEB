import React from 'react';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: [
                { id: 1, subject: "Курсова робота з основи теорії інформаційно-комунікаційних мереж", examType: "залік", date: "Не визначен деканатом", teacher: "-", time: "-" },
                { id: 2, subject: "Дослідження операцій", examType: "Екзамен", date: "2025-01-14 10:00:00", teacher: "Скулиш Марія Анатоліївна", time: "-" },
                { id: 3, subject: "Програмування мікрокомп'ютерних систем обміну даних-1", examType: "Екзамен", date: "2025-01-10 10:00:00", teacher: "Могильний Сергій Борисович", time: "-" },
                { id: 4, subject: "Технології розробки web-орієнтованих систем", examType: "залік", date: "2024-12-30 08:30:00", teacher: "Суліма Світлана Валеріївна", time: "-" },
                { id: 5, subject: "Курсова робота з програмування мікрокомп'ютерних систем обміну даних", examType: "Курсова робота", date: "2024-12-26 12:20:00", teacher: "Могильний Сергій Борисович", time: "-" },
                { id: 6, subject: "Сенсорні мережі", examType: "залік", date: "2024-12-25 16:10:00", teacher: "Кононова Ірина Віталіївна", time: "-" },
                { id: 7, subject: "Передача голосу та відео IP мережею (VoIP, IPTV)", examType: "залік", date: "2024-12-25 10:25:00", teacher: "Астраханцев Андрій Анатолійович", time: "-" },
                { id: 8, subject: "Економіка і організація виробництва", examType: "залік", date: "2024-12-25 09:00:00", teacher: "Дученко Марина Михайлівна", time: "-" },
                { id: 9, subject: "Охорона праці та цивільний захист", examType: "залік", date: "2024-12-23 09:00:00", teacher: "Землянська Олена Василівна", time: "-" }
            ]
        };
    }

    render() {
        const { sessions } = this.state;

        return (
            <div className="Session">
                <h1>Розклад сесії</h1>
                <table>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Назва дисципліни</th>
                            <th>Тип іспиту</th>
                            <th>Дата і час</th>
                            <th>Викладач</th>
                            <th>Час</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions.map((session) => (
                            <tr key={session.id}>
                                <td>{session.id}</td>
                                <td>{session.subject}</td>
                                <td>{session.examType}</td>
                                <td>{session.date}</td>
                                <td>{session.teacher}</td>
                                <td>{session.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Session;
