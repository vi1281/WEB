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
            // Обов’язкові компоненти циклу загальної підготовки
            { id: 1, name: "Економіка і організація виробництва", department: "економічної кібернетики ФММ", credits: 4, totalHours: 120,status: "Основний" },
            { id: 2, name: "Іноземна мова професійного спрямування-2. Практичний курс іноземної мови для професійного спілкування ІІ", department: "англійської мови технічного спрямування №2 ФЛ", credits: 3, totalHours: 90,status: "Основний" },
            { id: 3, name: "Охорона праці та цивільний захист", department: "охорони праці, промислової та цивільної безпеки ІЕЕ", credits: 4, totalHours: 120,status: "Основний" },
            { id: 4, name: "Дипломне проектування", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 6, totalHours: 180,status: "Основний" },
            { id: 5, name: "Дослідження операцій", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4.5, totalHours: 135,status: "Основний" },
            { id: 6, name: "Курсова робота з програмування мікрокомп’ютерних систем обміну даних", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 1, totalHours: 30,status: "Основний" },
            { id: 7, name: "Моделювання глобальних мереж", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 3, totalHours: 90,status: "Основний" },
            { id: 8, name: "Переддипломна практика", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 6, totalHours: 180,status: "Основний" },
            { id: 9, name: "Програмування мікрокомп’ютерних систем обміну даних-1", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 3, totalHours: 90,status: "Основний" },
            { id: 10, name: "Розподілені системи", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 5.5, totalHours: 165,status: "Основний" },
            // Вибіркові компоненти циклу професійної підготовки
            { id: 11, name: "Маршрутизація в мережах зв`язку", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 12, name: "Основи програмування мовою Рythоn", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120 },
            { id: 13, name: "Передача голосу та відео ІР мережею (VоІР, ІРТV)", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 14, name: "Планування та оптимізація мереж рухомого зв’язку", department: "телекомунікацій ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 15, name: "Сенсорні мережі", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 16, name: "Супутникові інформаційні системи", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 17, name: "Технології розробки wеb-орієнтованих систем", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },
            { id: 18, name: "Планування та оптимізаціямереж рухомого звязку", department: "інформаційних технологій в телекомунікаціях ІТС", credits: 4, totalHours: 120,status: "Вибіркова" },

        ];
        const filteredDataOsn = tableData.filter(row => row.status === "Основний");
        const filteredDataV = tableData.filter(row => row.status === "Вибіркова"); 

        return (
            <div className="Inp">
                <h1>Таблиця з дисциплінами</h1>
                <h2>Обов’язкові</h2>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Найменування кредитного модулю</th>
                            <th>Назва кафедри</th>
                            <th>Обсяг дисциплін</th>
                            <th>Аудиторні години</th>
                        </tr>
                    </thead>
                    <tbody>
        {filteredDataOsn.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.department}</td>
            <td>{row.credits}</td>
            <td>{row.totalHours}</td>
          </tr>
        ))}
      </tbody>
                </table>
                <h2>Вибіркові</h2>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Найменування кредитного модулю</th>
                            <th>Назва кафедри</th>
                            <th>Обсяг дисциплін</th>
                            <th>Аудиторні години</th>
                            
                        </tr>
                    </thead>
                    <tbody>
        {filteredDataV.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.department}</td>
            <td>{row.credits}</td>
            <td>{row.totalHours}</td>
          </tr>
        ))}
      </tbody>
                </table>
            </div>
        );
    }
}

export default Inp;
