


describe('Transações', () => {


beforeEach (() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#") 

});



it('Cadastrar uma entrada', ()  => {

    criartransacao("Salário", 1500)

    cy.get("tbody tr td.description").should("have.text", "Salário")

});


it('Cadastrar uma saída', () =>{
    
    criartransacao("Viagem", -350)

    cy.get("tbody tr td.description").should("have.text", "Viagem")


});

it('EXcluir transação', () => {
    criartransacao("Salário", 1250)
    criartransacao("freelance", 50)

    cy.contains(".description", "freelance")
    .parent()
    .find('img')
    .click()

    cy.get('tbody tr').should("have.length", 1)


});

});




function criartransacao(descricao, valor){
cy.contains("Nova Transação").click()
cy.get('#description').type(descricao)
cy.get('#amount').type(valor)
cy.get('#date').type("2024-04-05")
cy.contains('button', 'Salvar').click()
}