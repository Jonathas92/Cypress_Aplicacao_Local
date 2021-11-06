///<reference types="cypress"/>
///<reference types="@bahmutov/cy-api"/>

context('Classes endpoint', () => {
    //Request URL: http://localhost:3333/classes
    //Request Method: POST
    //Status Code: 201 Created
    it('POST - Cadastrar um novo provessor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Teste Agilizei",
                "avatar":"https://pickaface.net/gallery/avatar/unr_fakeeliot_181127_1929_w34iu.png",
                "whatsapp":"21 999999999",
                "bio":"teste agilizei",
                "subject":"Geografia",
                "cost":15,
                "schedule":[
                  {
                    "week_day":0,
                    "from":"10:00",
                    "to":"11:00"
                  }
                ]
              }
        }).then((response) =>{
            expect(response.status).to.eq(201)

            expect(response.duration).lt(30)

        })
    });
});


