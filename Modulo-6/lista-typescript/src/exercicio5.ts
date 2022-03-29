// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

type person = 
{
    name: string, 
    email: string, 
    role: "user" | "admin" }

    const listPerson: Array<person> = 
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 



function adminFilterEmail (list: Array<person>): string[] {

    const filteredEmail: Array<person> = list.filter((person)=>{
        if(person.role === "admin"){return person.email}
    })

    let emails : string[] = []

    for(let i=0; i <= filteredEmail.length-1; i++) {
        emails.push(filteredEmail[i].email) 
    } 
     
    return emails
}

//FUNCIONOU ;D
console.log(adminFilterEmail(listPerson))