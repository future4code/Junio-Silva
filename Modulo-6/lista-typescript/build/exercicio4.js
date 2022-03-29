var SECTION;
(function (SECTION) {
    SECTION["MARKETING"] = "marketing";
    SECTION["VENDAS"] = "vendas";
    SECTION["FINANCEIRO"] = "financeiro";
})(SECTION || (SECTION = {}));
const employeeList = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
];
function employeeFilter(employees) {
    return employees.filter((item) => { return item.setor === SECTION.MARKETING && item.presencial === true; });
}
console.table(employeeFilter(employeeList));
//# sourceMappingURL=exercicio4.js.map