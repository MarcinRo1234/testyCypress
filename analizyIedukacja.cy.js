/// <reference types ="cypress" />

import { ColorTextStrong, ColorTextStandard, ColorMagenta01, SmallRadius, Separator, ColorGray10, ColorGray11, SeparatorChrome} from "./variables";
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/analizy-i-edukacja');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
})
describe("Komponent ARTICLE_2023 - Analizy i komentarze", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_5IPR8bRhCL0M_";
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "width").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(519, 520);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("be.visible");
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
    it("Checking-button", () => {
      cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-button-group wc-button-link`).click();
      cy.url().should("include", "https://www.millenniumbm.pl/analizy-i-edukacja/analizy-komentarze");
    //   cy.get("section.wrapper.page-404").should("not.be.visible")
    })
  })
  describe("Komponent ARTICLE_2023 - Program wsparcia pokrycia analitycznego GPW", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_YwroFNUrMuJq_";
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "width").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(519, 520);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("be.visible");
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
  })
  describe("Komponent HINT_ICON_2023", () => {
    const hintIconId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Sm8LqfOdY261_";
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
      cy.url().should("include", "https://www.millenniumbm.pl/analizy-i-edukacja/zespol")
    })
  })  
  describe("Komponent Article 2023", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_NEKZr4Yy7UFH_"
    it("Sprawdzenie wymiarów komponentów", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "width", "1600px");
      cy.get(`${articleId} article.mds.bm-article.bm-container`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("be.visible");
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(519, 520);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("have.css", "height").should((height) => {
        // ensure the unit is in pixels
        expect(height).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(height, 10)).to.be.within(381, 382);
      });
      cy.get(`${articleId} article.mds.bm-article.bm-container picture.bm-col-d-4.mds.desktop-only img`).should("be.visible");
    })
    it("Sprawdzenie styli - czcionki, wielkości czcionek, kolor czcionek, marginesów", () => {
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-size", "24px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "color", "rgb(46, 46, 46)");

    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);;
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "color", "rgb(115, 115, 115)");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-size", "16px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "margin", "20px 0px");
  })
})
