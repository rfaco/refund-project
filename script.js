// Format value
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")



amount.oninput = () => {
    // remove non numeric caracters
    let value = amount.value.replace(/\D/g,"")
    
    //It changes the value into cents (150 /100 = 1.50)
    value = Number(value) /100
    // Updates the input value
    amount.value = formatCurrencyBRL(value)

}


function formatCurrencyBRL(value) {
    // Set to BRL as a default (Brazilian Real)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    
    return value
}

// Submit event
form.onsubmit = (event) => {
    event.preventDefault()
// New object with the details
const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),   
}


expenseAdd(newExpense)

}

 function expenseAdd(newExpense) {
    try {
        throw new Error ("Erro teste")
    } catch (error) {
        alert("Não foi possivel atualizar a lista de despesas.")
        console.log(error)
    }
 }