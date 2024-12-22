import React from 'react';

class Inp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true, // Спочатку таблиця відкрита
        };
    }

    render() {
        const tableData = [
            { id: 1, name: "Економіка і організація виробництва", department: "економічної кібернетики ФММ", credits: 4, totalHours: 120, hours1: 72, hours2: 36, hours3: 36, hours4: "--", hours5: 48 },
            { id: 2, name: "Іноземна мова професійного спрямування-2", department: "англійської мови технічного спрямування №2 ФЛ", credits: 3, totalHours: 90, hours1: 54, hours2: "--", hours3: 54, hours4: "--", hours5: 36 },
            { id: 3, name: "Охорона праці та цивільний захист", department: "охорони праці, промислової та цивільної безпеки ІЕЕ", credits: 4, totalHours: 120, hours1: 72, hours2: 36, hours3: 28, hours4: 8, hours5: 48 },
            { id: 4, name: "Дипломне проектування", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 6, totalHours: 180, hours1: "--", hours2: "--", hours3: "--", hours4: "--", hours5: 180 },
            { id: 5, name: "Дослідження операцій", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4.5, totalHours: 135, hours1: 72, hours2: 36, hours3: 36, hours4: "--", hours5: 63 },
            { id: 6, name: "Курсова робота з програмування мікрокомп’ютерних систем обміну даних", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 1, totalHours: 30, hours1: "--", hours2: "--", hours3: "--", hours4: "--", hours5: 30 },
            { id: 7, name: "Моделювання глобальних мереж", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 3, totalHours: 90, hours1: 36, hours2: 27, hours3: "--", hours4: 9, hours5: 54 },
            { id: 8, name: "Переддипломна практика", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 6, totalHours: 180, hours1: "--", hours2: "--", hours3: "--", hours4: "--", hours5: 180 },
            { id: 9, name: "Програмування мікрокомп’ютерних систем обміну даних-1", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 3, totalHours: 90, hours1: 36, hours2: 18, hours3: "--", hours4: 18, hours5: 54 },
            { id: 10, name: "Розподілені системи", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 5.5, totalHours: 165, hours1: 81, hours2: 45, hours3: "--", hours4: 36, hours5: 84 },
            // додати інші рядки за потреби
        ];

        return (
            <div className="Inp">
                <h1>Таблиця з дисциплінами</h1>
                <table>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Найменування кредитного модулю</th>
                            <th>Назва кафедри</th>
                            <th>Обсяг дисциплін</th>
                            <th>Аудиторні години</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.department}</td>
                                <td>{row.credits}</td>
                                <td>
                                    {row.hours1}, {row.hours2}, {row.hours3}, {row.hours4}, {row.hours5}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Inp;
