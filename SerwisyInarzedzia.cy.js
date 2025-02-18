/// <reference types ="cypress" />
import { ColorTextStrong, ColorTextStandard, ColorMagenta01, SmallRadius} from "./variables";
// const { beforeEach } = require("mocha")
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/serwisy-i-narzedzia/');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
})

  describe("Komponent ARTICLE_2023 - Serwis transakcyjny", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_QKo04YZbnqfh_";
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("have.css", "width").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(519, 520);
      });
      cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
      cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("be.visible");
    })
    it("Sprawdzenie czcionek", () => {
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-size", "24px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "color", "rgb(46, 46, 46)");
  
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "color", "rgb(115, 115, 115)");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-size", "16px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "margin", "20px 0px");
    })
    it("Sprawdzenie listy i poszczególnych punktów", () => {
  
    cy.get(`${articleId} ul.mds.bm-list`).should("have.css", "margin", "0px 0px 20px");
    cy.get(`${articleId} ul.mds.bm-list li`).first().should("have.css", "padding", "0px 0px 0px 18px")
    cy.get(`${articleId} ul.mds.bm-list li`).first().should("have.css", "margin", "0px 0px 16px")
  
    })
    it("Checking-button", () => {
      cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-button-group wc-button-link`).click();
    })
  })
  describe("Komponent ARTICLE_2023 - Serwis informacyjny", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_p7eBbMJM0UNA_";
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${articleId} picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "width").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(519, 520);
      });
      cy.get(`${articleId} picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
      cy.get(`${articleId} picture.bm-col-d-4.mds.desktop-only img`).should("be.visible");
    })
    it("Sprawdzenie czcionek", () => {
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-size", "24px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "color", "rgb(46, 46, 46)");
  
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "color", "rgb(115, 115, 115)");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-size", "16px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "margin", "20px 0px");
    })
    it("Sprawdzenie listy i poszczególnych punktów", () => {
  
    cy.get(`${articleId} ul.mds.bm-list`).should("have.css", "margin", "0px 0px 20px");
    cy.get(`${articleId} ul.mds.bm-list li`).first().should("have.css", "padding", "0px 0px 0px 18px")
    cy.get(`${articleId} ul.mds.bm-list li`).first().should("have.css", "margin", "0px 0px 16px")
  
    })
    it("Checking-button", () => {
      cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-button-group wc-button-link`).click();
    })
  })
  describe("Komponent PROMO_BOX_2023", () => {
    const promoBoxId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_sbZjhK6mKFar_"
    it("Sprawdzenie wymiarów kontenera", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "max-width", "1600px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "margin").should("be.oneOf", ["0px auto 48px", "0px 160px 48px"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "display", "flex");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "column-gap", "20px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "box-sizing", "border-box");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand`).should("have.css", "line-height").should("be.oneOf", ["1.5", "24px"]);
    })
    it("Srawdzenie nagłówka", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "flex-grow", "0");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "flex-basis", "auto");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "width", "1195px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "min-width", "0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "box-sizing", "border-box");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "font-weight", "700");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "color", "rgb(46, 46, 46)");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "text-transform", "none");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "font-size", "24px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "line-height", "32px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "text-align", "center");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "margin-left", "202.5px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "margin-right", "202.5px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "overflow-wrap", "break-word");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand h2`).should("have.css", "font-family", "Roboto");
    })
    it("Sprawdzenie środka kontenera", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "flex-grow", "0");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "flex-basis", "auto");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "width", "1195px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "min-width", "0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "box-sizing", "border-box");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "margin-top", "24px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "display", "grid");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "grid-template-columns", ).should("be.oneOf", ["repeat(3, 1fr)", "385px 385px 385px"]);;
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "grid-gap", "20px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "margin").should("be.oneOf", ["0px auto", "24px 202.5px 0px", "24px auto 0px"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible`).should("have.css", "padding", "0px");
    })
    it("Sprawdzenie elementów listy", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "margin", "0px"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "box-sizing", "border-box"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "color", "rgb(115, 115, 115)"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "font-weight", "400"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "margin", "0px"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).first().should("have.css", "margin", "0px");
      
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "margin", "0px"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "box-sizing", "border-box"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "color", "rgb(115, 115, 115)"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "font-weight", "400"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "margin", "0px"); 
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li`).last().should("have.css", "margin", "0px"); 
    })
    it("Sprawdzenie wmiarów pierwszego kafelka", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "border").should("be.oneOf", ["1px solid rgb(223, 223, 223)", "1.33333px solid rgb(223, 223, 223)"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "border-radius", "10px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "position", "relative");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "padding-bottom", "115px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "height").should((height) => {
              //  ensure the unit is in pixels
      expect(height).to.include('px')
      // get Number value and assert "381.15625px"
      expect(parseInt(height, 10)).to.be.within(512, 513);
      });
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box`).first().should("have.css", "overflow", "hidden");
      
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img`).first().should("have.css", "width").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(382, 383);
      });
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img`).first().should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(258, 260);
      });
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img`).last().should("have.css", "width").should((width) => {
        expect(width).to.include('px');
        expect(parseInt(width, 10)).to.be.within(382, 383);
      })
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img`).last().should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(258, 260);
      });
    })   
    it("Sprawdzenie kontenera na tekst", () => {
      cy.get(`${promoBoxId}  div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content`).first().should("have.css", "padding", "0px 32px")
      cy.get(`${promoBoxId}  div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content`).first().should("have.css", "margin", "0px")
      cy.get(`${promoBoxId}  div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${promoBoxId}  div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content`).first().should("have.css", "outline").should("be.oneOf", ["rgb(115, 115, 115) none 0px", "0", "rgb(115, 115, 115) 0px"]);
    })
    it("Sprawdzenie nagłowka tekstu", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "font-weight", "700");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "color", "rgb(46, 46, 46)");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "text-transform", "none");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "font-size", "20px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "line-height", "26px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "margin", "24px 0px 20px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "overflow-wrap", "break-word");
    })
    it("Sprawdzenie tekstu", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content p`).first().should("have.css", "overflow-wrap", "break-word");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content p`).first().should("have.css", "font-weight", "400");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "font-size", "20px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "line-height", "26px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "text-decoration").should("be.oneOf", ["none", "none solid rgb(46, 46, 46)", `${ColorTextStrong}`]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__content h3`).first().should("have.css", "color", "rgb(46, 46, 46)");
    })
    it("Sprawdzenie styli przycisku", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "padding", "0px 32px 32px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "position", "absolute");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "bottom", "0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "left", "0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "right", "0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns`).first().should("have.css", "margin", "0px");

      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button`).first().should("have.css", "margin", "32px 0px 0px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button`).first().should("have.css", "width").should((width) => {
        expect(width).to.include('px');
        expect(parseInt(width, 10)).to.be.within(318, 319)
      });
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button`).first().should("have.css", "display", "inline-block");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button`).first().should("have.css", "font-family", "Roboto");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button`).first().should("have.css", "text-decoration", ).should("be.oneOf", ["none", "none solid rgb(115, 115, 115)", `${ColorTextStandard}`]);

      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(318, 319);
      });;
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "background-color").should("be.oneOf", ["transparent", "rgba(0, 0, 0, 0)"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "color", "rgb(189, 0, 79)");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "border").should("be.oneOf", ["2px solid rgb(189, 0, 79)", "1px solid rgb(189, 0, 79)", "1,33333px solid rgb(189, 0, 79)", "1.33333px solid rgb(189, 0, 79)"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "white-space", "nowrap");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "position", "relative");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "font-weight", "700");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "font-size", "16px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "overflow", "hidden");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "transition").should("be.oneOf", ["all .4s", "0.4s"]);
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "height", "51px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "padding", "0px 24px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "display", "flex");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "align-items", "center");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "justify-content", "center");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "border-radius", "4px");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "text-transform", "uppercase");
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().should("have.css", "cursor", "pointer");
    })
    it("Sprawdzenie czy przyciski działają i czy pojawiają się modale", () => {
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).first().click();
      // cy.wait(10000)
      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8").should("be.visible");
      cy.get("button.bm-modal__close").click()
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).eq(1).click();
      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8").should("be.visible");
      cy.get("button.bm-modal__close").click()
      cy.get(`${promoBoxId} div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li article.mds.bm-promo-box section.bm-promo-box__btns wc-button button`).last().click();
      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8").should("be.visible");
    })
 
    
  })
  describe("Komponent HINT_ICON_2023", () => {
    const hintIconId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_O1BjPJL4n3m6_";
    it("Sprawdzenie wymiarów kontenera", () => { 
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "max-width", "1600px");
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "margin").should("be.oneOf", ["0px auto 48px", "0px 160px 48px"]);
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "display", "flex");
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "column-gap", "20px");
      cy.get(`${hintIconId} article.mds.bm-container`).should("have.css", "line-height", "24px");
    })
    it("Sprawdzenie pozycjonowania kontenera", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });;
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin-left").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(269, 270);
      });;
    })
    it("Sprawdzenie środka kontenera", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "border").should("be.oneOf", ["1.33333px solid rgb(211, 211, 211)", "1px solid rgb(211, 211, 211)"]);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "background-color", "rgb(249, 249, 249)");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "border-radius", "10px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "padding", "32px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "margin", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "box-sizing", "border-box");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon`).should("have.css", "line-height", "24px");
    })
    it("Sprawdzenie środka kontenera - zawartość", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content`).should("have.css", "display", "flex");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content`).should("have.css", "margin", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content`).should("have.css", "box-sizing", "border-box");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content`).should("have.css", "line-height", "24px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content`).should("have.css", "transition", "0.6s ease-out");
    })
    it("Sprawdzenie ikony", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "width", "48px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "min-width", "48px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "height", "48px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "margin-right", "24px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "box-sizing", "border-box");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper`).should("have.css", "line-height", "24px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper img`).should("be.visible");
    })
    it("Sprawdzenie kontenera na treści", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer`).should("have.css", "display", "flex"); 
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer`).should("have.css", "align-items", "center"); 
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer`).should("have.css", "min-height", "48px"); 
    })
    it ("Sprawdzenie pozycjonowania treści", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner`).should("have.css", "display", "flex"); 
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner`).should("have.css", "flex-direction", "column"); 
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner`).should("have.css", "gap", "8px"); 
    })
    it("Sprawdzenie nagłowka", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold`).should("have.css", "margin-bottom", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold`).should("have.css", "font-weight", "700");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold`).should("have.css", "color", `${ColorTextStrong}`);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold`).should("have.css", "line-height", "22px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold`).should("have.css", "font-size", "16px");  
    })
    it("Sprawdzenie tekstu", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p`).first().should("have.css", "font-size", "16px");  
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p`).first().should("have.css", "line-height", "22px");  
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p`).first().should("have.css", "color", `${ColorTextStrong}`);  
    })
    it("Sprawdzenie linku - style", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(61, 62);
      });
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "padding-left", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "padding-right", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "color", `${ColorMagenta01}`);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "height", "20px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "padding", "0px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "text-transform", "none");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "text-align", "left");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "border").should("be.oneOf", ["0px none rgb(189, 0, 79)", "none", "0px rgb(189, 0, 79)"]);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "background-color").should("be.oneOf", ["transparent", "rgba(0, 0, 0, 0)"]);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "transition").should("be.oneOf", ["opacity .3s ease-out", "opacity 0.3s ease-out"]);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "display", "flex");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "text-decoration").should("be.oneOf", ["none !important", "none solid rgb(189, 0, 79)", `${ColorMagenta01}`]);
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "align-items", "center");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "justify-content", "center");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "white-space", "nowrap");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "cursor", "pointer");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "white-space", "nowrap");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "position", "relative");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "font-weight", "700");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "font-size", "16px");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "overflow", "hidden");
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).should("have.css", "border-radius", `${SmallRadius}`);
    })
    it("Sprawdzenie działania linka", () => {
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner a`).click();
      cy.url().should("include", "/serwisy-i-narzedzia/informacje-dla-akcjonariuszy")
    })
  })
  describe("Sprawdzenie komponentu FAQ_2023", () => {
    const faqId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_wl7zBhc5Uuyf_";
    it("Sprawdzenie kontenera", () => {  
      cy.get(`${faqId} div.mds.bm-container`).should("have.css", "max-width", "1600px");
      cy.get(`${faqId} div.mds.bm-container`).should("have.css", "display", "flex");
      cy.get(`${faqId} div.mds.bm-container`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);
      cy.get(`${faqId} div.mds.bm-container`).should("have.css", "column-gap", "20px");
      cy.get(`${faqId} div.mds.bm-container`).should("have.css", "line-height", "24px");
    });
    it("Sprawdzenie pozycji kontenera", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-grow", "0");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
        expect(width).to.include('px');
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });;
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin-left").should((marginLeft) => {
        expect(marginLeft).to.include('px');
        expect(parseInt(marginLeft, 10)).to.be.within(269, 270);
      });
    })
    it("Sprawdzenie nagłowka", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "margin", "0px 0px 24px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "font-weight", "700");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "color", "rgb(46, 46, 46)");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "text-transform", "none");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "font-size", "24px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "line-height", "32px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "overflow-wrap", "break-word");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "font-family", "Roboto");  
    })
    it("Sprawdzenie listy", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul`).should("have.css", "list-style").should("be.oneOf", ["outside none none", "none"])
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul`).should("have.css", "margin", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul`).should("have.css", "padding", "0px");
    })
    it("Sprawdzenie elementów listy", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li`).first().should("have.css", "margin", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li`).first().should("have.css", "border-top").should("be.oneOf", ["1px solid rgb(223, 223, 223)" ,"1.33333px solid rgb(223, 223, 223)"]);
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li`).first().should("have.length.at.least", 1);
    })
    it("Sprawdzenie nagłowków elementów listy", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "display", "flex");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "align-items", "center");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "width").should((width) => {
        expect(width).to.include('px');
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });;
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "padding", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "line-height", "normal");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "color", "rgb(115, 115, 115)");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "background").should("be.oneOf", ["rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "none"]);
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "border").should("be.oneOf", ["0px none rgb(115, 115, 115)", "0px rgb(115, 115, 115)"]);;
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "cursor", "pointer");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "margin", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "font-weight", "700");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "text-transform", "none");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "font-size", "28px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3`).first().should("have.css", "line-height", "normal");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "display", "flex");
      // Poniżej kontener nagłowka
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "display", "flex");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "align-items", "center");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "width").should((width) => {
        expect(width).to.include('px');
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "padding", "20px 0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "line-height", "normal");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "color", "rgb(115, 115, 115)");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "border").should("be.oneOf", ["0px none rgb(115, 115, 115)", "0px rgb(115, 115, 115)"]);;
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "cursor", "pointer");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "background").should("be.oneOf", ["rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "none"]);
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "margin", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label`).first().should("have.css", "font-size", "28px");
      //Sprawdzenie tekstu
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "flex", "1 1 auto");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-align", "left");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "color", "rgb(115, 115, 115)");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "margin-top", "1px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "font-size", "16px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "line-height", "22px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "font-weight", "400");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(115, 115, 115)", "rgb(115, 115, 115)"]);
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "margin", "1px 0px 0px");
      //Sprawdzenie chevrona
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.bm-faq-item__header-chevron`).first().should("have.css", "margin-left", "20px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.bm-faq-item__header-chevron`).first().should("have.css", "height", "24px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.bm-faq-item__header-chevron`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.bm-faq-item__header-chevron i`).first().should("be.visible");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li h3 label span.bm-faq-item__header-chevron i`).first().click();
  
    })
    it("Zawartość elementu listy", () => {
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "transition", "opacity 0.4s cubic-bezier(0.5, 0, 0.7, 0.3), max-height 0.3s cubic-bezier(0.5, 0.15, 0, 1)");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "opacity", "0");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "max-height", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "position", "relative");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "padding", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "overflow", "hidden");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content`).first().should("have.css", "box-sizing", "border-box");
  
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner`).first().should("have.css", "margin", "0px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner`).first().should("have.css", "padding-top", "16px");
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner`).first().should("have.css", "padding-bottom").should((paddingBottom) => {
        expect(paddingBottom).to.include('px');
        expect(parseInt(paddingBottom, 10)).to.be.within(40, 42);
      });
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner`).first().should("have.css", "box-sizing", "border-box");
  
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "font-size", "16px"); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "line-height", "22px"); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "font-weight", "400"); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(115, 115, 115)", "rgb(115, 115, 115)"]);
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "color", "rgb(115, 115, 115)"); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "margin").should("be.oneOf", ["0px", "0px 0px 20px"]); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "overflow-wrap", "break-word"); 
      cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "box-sizing", "border-box"); 
    
  
  
  
    })
  })



