/* new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
    ]
}).render(document.getElementById("wrapper")); */

new gridjs.Grid({
    columns: ['Nombre del Equipo', 'Acrónimo', 'País del Equipo', 'Seed de Liga'],
    server: {
        url: 'http://localhost:8082/msi2023',
        then: data => data.map(equipo =>
            [equipo.nombreEquipo, equipo.acronimo, equipo.paisEquipo, equipo.seed]
        )
    }
}).render(document.getElementById("wrapper"));