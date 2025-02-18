/// <reference types ="cypress" />

// const { beforeEach } = require("mocha")
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/ikze/');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
  })


describe("Komponent Banner_2023", () => {
    const bannerId="div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_I64iv1QdLvgO";
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get(`${bannerId} div.mds.bm-col-d-12`).should("have.css", "width", "1600px");
      cy.get(`${bannerId} div.mds.bm-col-d-12`).should("have.css", "height", "460px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img`).should("have.css", "width").should((width) => {
        //  ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(731, 732);
      });
      cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img`).should("have.css", "height", "460px");
      cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img`).should("be.visible");
    })
    it("Sprawdzenie czcionek", () => {
      cy.get(`${bannerId} div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1`).should("have.css", "font-size", "28px");
      cy.get(`${bannerId} div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1`).should("have.css", "font-family", "Roboto");
      cy.get(`${bannerId} div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1`).should("have.css", "Margin", "0px 0px 20px");
      cy.get(`${bannerId} div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1`).should("have.css", "color", "rgb(46, 46, 46)"); 
    });
    it("Sprawdzenie listy", () => {
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0`).should("have.css", "margin", "0px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "position", "relative");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "padding", "0px 0px 0px 18px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "margin", "0px 0px 16px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "font-size", "16px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "line-height", "22px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "font-weight", "400");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "color", "rgb(115, 115, 115)");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).first().should("have.css", "font-family", "Roboto");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "position", "relative");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "padding", "0px 0px 0px 18px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "margin", "0px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "font-size", "16px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "line-height", "22px");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "font-weight", "400");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "color", "rgb(115, 115, 115)");
        cy.get(`${bannerId} article.mds.bm-container.bm-container__wider.bm-banner__wrapper div.mds.bm-banner div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 div.mds.bm-banner__info__content ul.mds.bm-list.mb-0 li`).last().should("have.css", "font-family", "Roboto");
        
      })
  
  }
)
describe("Komponent Article_2023", () => {
  const articleId = "div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Nh0IsaGordID"
  it("Sprawdzenie wymiarów komponentów", () => {
    cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
    cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "height").should((height) => {
      //  ensure the unit is in pixels
      expect(height).to.include('px')
      // get Number value and assert "381.15625px"
      expect(parseInt(height, 10)).to.be.within(381, 382);
    })
  })
  it("Sprawdzenie wymiarów grafiki", () => {
    cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("be.visible");
    cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("have.css", "width").should((width) => {
      //  ensure the unit is in pixels
      expect(width).to.include('px')
      // get Number value and assert "381.15625px"
      expect(parseInt(width, 10)).to.be.within(519, 520);
    });
    cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("have.css", "height").should((height) => {
      //  ensure the unit is in pixels
      expect(height).to.include('px')
      // get Number value and assert "381.15625px"
      expect(parseInt(height, 10)).to.be.within(381, 382);
    });
    cy.get(`${articleId} picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img`).should("be.visible");
  })
  it("Sprawdzenie styli - czcionki, wielkości czcionek, kolor czcionek, marginesów", () => {
  cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-size", "24px");
  cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "color", "rgb(46, 46, 46)");
  cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "color", "rgb(115, 115, 115)");
  cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-size", "16px");
  cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "margin", "20px 0px");
})
})
describe("Sprawdzenie komponentu ICON_BOX", () => {
  const iconBoxId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_J6ZV7kLC47cB_";
  it("Sprawdzenie kontenera", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top`).should("have.css", "width", "1600px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top`).should("have.css", "text-align", "center");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top`).should("have.css", "margin", "0px");
  });
  it("Sprawdzenie nagłówka", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "padding-bottom", "4px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "font-weight", "700");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "text-transform", "none");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "font-size", "24px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "line-height", "32px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box-group__top h2`).should("have.css", "overflow-wrap", "break-word");
  })
  it("Sprawdzenie pierwszego kafelka - kontenera", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "flex-grow", "0");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "flex-basis", "auto");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "width", "385px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "max-width", "none");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "box-sizing", "border-box");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "line-height", "24px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).first().should("have.css", "transition", "max-height 2s");
 
    
    
    
  })
  it("Sprawdzenie pierwszego kafelka - zawartość", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "height").should((height) => {
      expect(height).to.include('px');
      expect(parseInt(height, 10)).to.be.within(196, 198);
    });
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "align-items", "center");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "box-sizing", "border-box");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "display", "flex");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "flex-direction", "column");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "padding", "32px 24px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "border").should("be.oneOf", ["1px solid rgb(211, 211, 211)", "1.33333px solid rgb(211, 211, 211)"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "border-radius", "10px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "word-break", "break-word");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "margin-top", "20px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "opacity", "1");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "scale", "1");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "overflow", "hidden");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "border-width").should("be.oneOf", ["1px", "1.33333px"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).first().should("have.css", "transition", "scale 0.4s cubic-bezier(0, 0, 0, 1) 0.3s, max-height 0.6s linear, opacity 0.4s cubic-bezier(0, 0, 0, 1) 0.3s");
  })
  it("Sprawdzenie pierwszego kafelka - ikonka", () => {
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("have.css", "width", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("have.css", "display", "flex");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("have.css", "min-width", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("have.css", "height", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("have.css", "text-align", "center");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).first().should("be.visible");
    
  })
  it("Sprawdzenie pierwszego kafelka - nagłówek", () => {
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "font-weight", "700");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "font-size", "16px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "line-height", "22px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(46, 46, 46)", "rgb(46, 46, 46)"]);
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).first().should("have.css", "margin-top", "20px");
    
  })
  it("Sprawdzenie pierwszego kafelka - button", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).first().should("have.css", "height").should((height) => {
      //  ensure the unit is in pixels
      expect(height).to.include('px')
      // get Number value and assert "381.15625px"
      expect(parseInt(height, 10)).to.be.within(39, 41);
    });
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).first().should("have.css", "display", "flex");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).first().should("have.css", "align-items", "flex-end");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().should("have.css", "font-weight", "700");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().should("have.css", "font-size", "16px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().should("have.css", "line-height", "22px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", "rgb(189, 0, 79)"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a span`).first().contains("Więcej");
  
  })
  it("Sprawdzenie pierwszego kafelka - button - klinięcie", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).first().click();
    cy.get("dialog.mds.bm-modal.bm-modal-col-d-4").should("be.visible");

  })
  //ostatni kafelek
  it("Sprawdzenie ostatniego kafelka - kontenera", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "flex-grow", "0");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "flex-basis", "auto");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "width", "385px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "max-width", "none");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "box-sizing", "border-box");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "line-height", "24px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3`).last().should("have.css", "transition", "max-height 2s");
 
    
    
    
  })
  it("Sprawdzenie ostatniego kafelka - zawartość", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "height").should((height) => {
      expect(height).to.include('px');
      expect(parseInt(height, 10)).to.be.within(196, 198);
    });;
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "align-items", "center");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "box-sizing", "border-box");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "display", "flex");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "flex-direction", "column");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "padding", "32px 24px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "border").should("be.oneOf", ["1px solid rgb(211, 211, 211)" ,"1.33333px solid rgb(211, 211, 211)"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "border-radius", "10px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "word-break", "break-word");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "margin-top", "20px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "opacity", "1");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "scale", "1");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "overflow", "hidden");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "border-width").should("be.oneOf", ["1px", "1.33333px"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 section.mds.bm-icon-box--center.bm-icon-box`).last().should("have.css", "transition", "scale 0.4s cubic-bezier(0, 0, 0, 1) 0.3s, max-height 0.6s linear, opacity 0.4s cubic-bezier(0, 0, 0, 1) 0.3s");
  })
  it("Sprawdzenie ostatniego kafelka - ikonka", () => {
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("have.css", "width", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("have.css", "display", "flex");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("have.css", "min-width", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("have.css", "height", "48px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("have.css", "text-align", "center");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__img__wrapper`).last().should("be.visible");
    
  })
  it("Sprawdzenie ostatniego kafelka - nagłówek", () => {
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "font-weight", "700");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "font-size", "16px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "line-height", "22px");
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(46, 46, 46)", "rgb(46, 46, 46)"]);
    cy.get(`${iconBoxId}  article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 h3`).last().should("have.css", "margin-top", "20px");
    
  })
  it("Sprawdzenie ostatniego kafelka - button", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).last().should("have.css", "height").should((height) => {
      expect(height).to.include('px');
      expect(parseInt(height, 10)).to.be.within(39, 42);
    });;
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).last().should("have.css", "display", "flex");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link`).last().should("have.css", "align-items", "flex-end");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().should("have.css", "font-weight", "700");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().should("have.css", "font-size", "16px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().should("have.css", "line-height", "22px");
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", "rgb(189, 0, 79)"]);
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a span`).first().contains("Więcej");
  
  })
  it("Sprawdzenie ostatniego kafelka - button - klinięcie", () => {
    cy.get(`${iconBoxId} article.mds.bm-container.bm-container__wider.bm-icon-box-group.bm-icon-box-group--centered div.mds.bm-icon-box__wrapper.bm-col-d-3 div.mds.bm-icon-box__link a`).last().click();
    cy.get("dialog.mds.bm-modal.bm-modal-col-d-4").should("be.visible");

  })
})
describe("Srawdzenie komponentu TAB ARTICLE_2023 - Jak to działa", () => {
  const tabArticleId = "div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_l3FyumOQCEnH"
  it("Sprawdzenie kontenera", () => {
    // cy.get(`${tabArticleId} `).should("have.css", "", "");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "max-width", "1600px");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "margin").should("be.oneOf", ["0px 160px 48px", "0px auto 48px"]);
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);;
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "column-gap", "20px");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "line-height", "24px");
  })
  it("Sprawdzenie wnętrza kontenera", () => {
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-grow", "0");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
      expect(width).to.include('px');
      expect(parseInt(width, 10)).to.be.within(1059, 1060);
    });
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin").should("be.oneOf", ["0px 0px 0px 270px", "0px 0px 0px calc(16.6667% + 3.33333px)", "0px 0px 0px 269.979px"]);
  })
  it("Sprawdzenie nagłówka", () => {
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "margin-bottom", "24px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "text-transform", "none");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-size", "24px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "line-height", "32px");
  })
  it("Sprawdzenie nagłowków tabów", () => {
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "position", "relative");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "justify-content", "center");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "gap", "32px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "margin-bottom", "16px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "overflow-x", "auto");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "overflow-y", "hidden");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "scrollbar-width", "none");
  })
  it("Sprawdzenie nagłówków tabów - active", () => {
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "border-bottom").should("be.oneOf", ["2px solid rgb(255, 255, 255)", "1.33333px solid rgb(255, 255, 255)"]);;
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "outline").should("be.oneOf", ["rgb(189, 0, 79) none 0px","rgb(189, 0, 79) 0px"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "line-height", "22px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", 'rgb(189, 0, 79)']);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "letter-spacing", "0");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "padding", "16px 0px 14px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "max-height", "76px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 section.mds.bm-tab-article__panel`).should("be.visible");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab`).last().click();
    cy.wait(10000);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).as("activeTab");

  
    cy.wait(10000);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "outline").should("be.oneOf", ["rgb(189, 0, 79) none 0px" ,"rgb(189, 0, 79) 0px"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "line-height", "22px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", "rgb(189, 0, 79)"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "letter-spacing", "0");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "padding", "16px 0px 14px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "max-height", "76px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 section.mds.bm-tab-article__panel`).should("be.visible");

    
  })
})
describe("Srawdzenie komponentu TAB ARTICLE_2023 - Jak założyć rachunek IKZE", () => {
  const tabArticleId = "div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mEPNyfJvHrHE"
  it("Sprawdzenie kontenera", () => {
    // cy.get(`${tabArticleId} `).should("have.css", "", "");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "max-width", "1600px");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "margin").should("be.oneOf", ["0px 160px 48px", "0px auto 48px"]);
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);;
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "column-gap", "20px");
    cy.get(`${tabArticleId} div.mds.bm-container`).should("have.css", "line-height", "24px");
  })
  it("Sprawdzenie wnętrza kontenera", () => {
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-grow", "0");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
      expect(width).to.include('px');
      expect(parseInt(width, 10)).to.be.within(1059, 1060);
    });
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
    cy.get(`${tabArticleId} article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin").should("be.oneOf", ["0px 0px 0px 270px", "0px 0px 0px calc(16.6667% + 3.33333px)", "0px 0px 0px 269.979px"]);
  })
  it("Sprawdzenie nagłówka", () => {
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "margin-bottom", "24px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "text-transform", "none");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-size", "24px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "line-height", "32px");
  })
  it("Sprawdzenie nagłowków tabów", () => {
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "position", "relative");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "justify-content", "center");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "gap", "32px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "margin-bottom", "16px");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "overflow-x", "auto");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "overflow-y", "hidden");
    cy.get(`${tabArticleId} div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist`).should("have.css", "scrollbar-width", "none");
  })
  it("Sprawdzenie nagłówków tabów - active", () => {
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "border-bottom").should("be.oneOf", ["2px solid rgb(255, 255, 255)", "1.33333px solid rgb(255, 255, 255)"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "outline").should("be.oneOf", ["rgb(189, 0, 79) none 0px","rgb(189, 0, 79) 0px"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "line-height", "22px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", 'rgb(189, 0, 79)']);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "letter-spacing", "0");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "padding", "16px 0px 14px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "max-height", "76px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 section.mds.bm-tab-article__panel`).should("be.visible");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab`).last().click();
    cy.wait(10000);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).as("activeTab");

  
    cy.wait(10000);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "outline").should("be.oneOf", ["rgb(189, 0, 79) none 0px" ,"rgb(189, 0, 79) 0px"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "color", "rgb(189, 0, 79)");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "line-height", "22px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(189, 0, 79)", "rgb(189, 0, 79)"]);
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "letter-spacing", "0");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "padding", "16px 0px 14px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "font-weight", "700");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "max-height", "76px");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 div.mds.bm-tab-group__tablist button.mds.bm-tab-group__tab.bm-tab-group__tab--active`).should("have.css", "display", "flex");
    cy.get(`${tabArticleId}  div.mds.bm-container article.mds.bm-tab-article.bm-col-d-8.bm-offset-d-2 section.mds.bm-tab-article__panel`).should("be.visible");

    
  })
})
describe("Sprawdzenie komponentu TAB_TABLE-2023", () => {
  const tabTableId = "div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Cq4awlEyYH8B";
  it("Sprawdzenie kontenera", () => {
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "max-width", "1600px");
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "margin").should("be.oneOf", ["0px 160px 48px", "0px auto 48px"]);;
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "display", "flex");
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);;
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "column-gap", "20px");
    cy.get(`${tabTableId} div.mds.bm-container`).should("have.css", "line-height", "24px");
  })
  it("Sprawdzenie środka kontenera", () => {  
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-grow", "0");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
      expect(width).to.include('px');
      expect(parseInt(width, 10)).to.be.within(1059, 1060);
    });
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin-left").should((marginLeft) => {
      expect(marginLeft).to.include('px');
      expect(parseInt(marginLeft, 10)).to.be.within(269, 270);
    });
  })
  it("Sprawdzenie nagłowka", () => {
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "margin", "0px 0px 24px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "font-weight", "700");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "text-transform", "none");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "font-size", "24px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "line-height", "32px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq h2`).should("have.css", "overflow-wrap", "break-word");
  })
  it("Sprawdzenie listy", () => {
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "display", "flex");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "align-items", "center");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "width").should((width) => {
      expect(width).to.include('px');
      expect(parseInt(width, 10)).to.be.within(1059, 1060);
    });
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "padding", "20px 0px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "line-height", "normal");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "color", "rgb(115, 115, 115)");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "border").should("be.oneOf", ["0px none rgb(115, 115, 115)", "0px rgb(115, 115, 115)"]);
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "cursor", "pointer");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label`).first().should("have.css", "margin", "0px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li`).first().should("have.length.at.least", 1);
  })
  it("Sprawdzenie elementów listy - nagłówek", () => {
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "font-weight", "700");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "color", "rgb(46, 46, 46)");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "flex", "1 1 auto");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-align", "left");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "margin-top", "1px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "font-size", "16px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "line-height", "22px");
    cy.get(`${tabTableId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(46, 46, 46)", "rgb(46, 46, 46)"]);
  })
 
})
describe("Sprawdzenie komponentu FAQ_2023", () => {
  const faqId = "div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_NQvDy9f44FrD";
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
    });
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
    });
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
    cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "text-decoration").should("be.oneOf", ["none solid rgb(115, 115, 115)", "rgb(115, 115, 115)"]);; 
    cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "color", "rgb(115, 115, 115)"); 
    cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "margin", "0px"); 
    cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "overflow-wrap", "break-word"); 
    cy.get(`${faqId} div.mds.bm-container div.bm-col-d-8.bm-offset-d-2 div.mds.bm-faq ul li div.bm-faq-item__content div.bm-faq-item__content__inner p`).first().should("have.css", "box-sizing", "border-box"); 
  



  })
})


      