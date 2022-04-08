/*import useCalculator from "../../src/hooks/useCalculator";

describe('Addition', () => {
    it('Does not do much!', () => {
        expect(useCalculator().addition('2', '2')).to.equal("4")
    })
  })
  
describe('Substraction', () => {
    it('Does not do much!', () => {
        expect(useCalculator().substraction('2', '2')).to.equal("0")
    })
  })
  
describe('Square', () => {
    it('Does not do much!', () => {
        expect(useCalculator().square('2')).to.equal("4")
    })
  })
  
describe('Division', () => {
    it('Does not do much!', () => {
        expect(useCalculator().division('2', '2')).to.equal("1")
    })
  })
  
describe('Modulo', () => {
    it('Does not do much!', () => {
        expect(useCalculator().modulo('618', '54')).to.equal("24")
    })
  })
  */
describe("Calculator", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
      cy.contains("C").click();
    });
    it("Test substraction", () => {
        cy.visit("http://localhost:3000");
        cy.contains("3").click();
        cy.contains("-").click();
        cy.contains("1").click();
        cy.contains("=").click();
        cy.get(".result").contains("2");
      });
  });
  