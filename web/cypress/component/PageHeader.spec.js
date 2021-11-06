/// <reference types="cypress"/>

import React  from 'react'

import PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader componet', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/PageHeader/styles.css'
    it('dever ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "Bootcamp Agilizei"

        mount(
            <Router>
                <PageHeader
                title={title}
                description={description}
                /> 
            </ Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        // find e children para procurar o elemento de forma avançada pelo própiro cypress
        // cy.get('.page-header').as('header')
        // cy.get('@header').find('strong').as('title')
        // cy.get('@header').children('p').as ('description')



        cy.get('strong').as('title')
        cy.get('p').as('description')
        cy.get('.page-header').as('header')

        cy.get('@title').should('have.text', title)
        cy.get('@description').should('have.text', description)

        //validação do css.
        cy.get('@header').then(($elemento) => {
            //cy.log($elemento.css('background-color')) -- para descobrir a cor. O $elemento é a sintaxe de um abiblioteca jay querey
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
            //Interessante para verificar a responsividade.
            expect($elemento.css('flex-direction')).to.be.equal('column')
        })

        
    });
});