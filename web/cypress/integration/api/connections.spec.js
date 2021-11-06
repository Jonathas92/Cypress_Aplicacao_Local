///<reference types="cypress"/>
///<reference types="@bahmutov/cy-api"/>

context('Connections endpoint', () => {
    it('GET - Obter total de conexões realizadas', () => {
        //http://localhost:3333/connections
        //get
        //200
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            //informar o log na execução do cypress que é o console.log
            //console.log(response)
            //Para verificar se o retorno do status code é 200
            expect(response.status).to.eq(200)

            //Asserção para verificar se o tempo do request é menor que 20 segumdos
            expect(response.duration).lessThan(20)
            //abraviação do lessThan que é o lt
            expect(response.duration).lt(20)

            //Asserção para verificar se o retorno é igual a 5. No caso o to have propery é verificar que tenha a palavra total
            // to.br.a(number) verificar que retorna sempre um número.
            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            //outra forma de fazer a asserção acima
            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5})

            //Content-Type: application/json; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')

        })
    });
});