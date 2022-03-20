//EXERCICIO 3
//Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

//RESPOSTA:

const addTask = () => {
    const taskList =  { tarefas: ["Lavar a louça", "Fazer compras"]}
    const newTask = process.argv[2]

    taskList.tarefas.push(newTask)
    console.log("Tarefa adicionada com sucesso !")
    console.table(taskList)
}
addTask()