class DashboardPage {
    selectorsList(){
        const selectors = {
            dashboardLayot: ".oxd-layout",

       }

       return selectors
}


    checkDashboardPage(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardLayot).should('be.visible')
    }


}

export default DashboardPage