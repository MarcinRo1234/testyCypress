/// <reference types ="cypress" />

import { ColorTextStrong, ColorTextStandard, ColorMagenta01, SmallRadius, Separator, ColorGray10, ColorGray11, SeparatorChrome} from "./variables";
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/emitenci-i-akcjonariusze');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
})

  describe("Komponent ARTICLE_2023 - Serwis informacyjny", () => {
    const articleId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_PIR2ZqG4R1yT_";
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
    cy.get(`${articleId} article.mds.bm-article.bm-container div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-size", "24px");
    cy.get(`${articleId} article.mds.bm-article.bm-container div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} article.mds.bm-article.bm-container div.mds.bm-article__content.bm-col-d-4 h2`).should("have.css", "color", "rgb(46, 46, 46)");
  
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-family").should("be.oneOf", ["Roboto, sans-serif", '"Roboto", sans-serif']);
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "color", "rgb(115, 115, 115)");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "font-size", "16px");
    cy.get(`${articleId} div.mds.bm-article__content.bm-col-d-4 div.bm-article__description`).should("have.css", "margin", "20px 0px");
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
  describe("Sprawdzenie komponentu FAQ_2023", () => {
    const faqId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_QmTTzM61qryI_";
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
  describe("Komponent HINT_ICON_2023", () => {
    const hintIconId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SieK6ZdPiaWp_";
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
  })
  describe("Komponent managed_files_portler", () => {
    const managedFIlesPortletId = "div#portlet_faqdocumentsportlet_WAR_managedfilesportlet_INSTANCE_oiZtj20pszVw";
    it("Sprawdzenie wymiarów kontenera", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "max-width", "1600px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "margin").should("be.oneOf", ["0px auto 48px", "0px 160px 48px"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "display", "flex");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "flex-flow", ).should("be.oneOf", ["row wrap", "row-wrap", "wrap"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "column-gap", "20px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container`).should("have.css", "line-height").should("be.oneOf", ["1.5", "24px"]);
    })
    it("Sprawdzenie środka kontenera", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-grow", "0");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "flex-basis", "auto");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      })
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "min-width", "0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "box-sizing", "border-box");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2`).should("have.css", "margin-left").should((marginLeft) => {
        // ensure the unit is in pixels
        expect(marginLeft).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(marginLeft, 10)).to.be.within(269, 270);
      });;
    })
    it("Sprawdzenie nagłówka", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "margin", '0px 0px 24px');
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-weight", "700");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "color", `${ColorTextStrong}`);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "text-transform", "none");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "font-size", "24px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "line-height", "32px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 h2`).should("have.css", "overflow-wrap", "break-word");
    })
    it("Sprawdzenie listy", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul`).should("have.css", "box-sizing", "border-box");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul`).should("have.css", "padding", "0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul`).should("have.css", "margin", "0px");
    });
    it("Sprawdzenie elementów listy", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).first().should("have.css", "box-sizing", "border-box");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).first().should("have.css", "margin", "0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).first().should("have.css", "border-top").should("be.oneOf", [`${Separator}`, `${SeparatorChrome}`]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).last().should("have.css", "box-sizing", "border-box");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).last().should("have.css", "margin", "0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).last().should("have.css", "border-top").should("be.oneOf", [`${Separator}`, `${SeparatorChrome}`]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li`).last().should("have.css", "border-bottom").should("be.oneOf", [`${Separator}`, `${SeparatorChrome}`, "0px none rgb(115, 115, 115)", "0px rgb(115, 115, 115)"]);
    })
    it("Sprawdzenie kontenera i styli nagłowka pierwszej zakładki", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "font-size", "16px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "font-weight", "700");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "cursor", "pointer");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "background").should("be.oneOf", ["none", "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "border").should("be.oneOf", ["opx", "0px none rgb(115, 115, 115)", "0px rgb(115, 115, 115)"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "color", `${ColorGray10}`);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "line-height", "normal");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label.bm-faq-item__header`).first().should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label`).first().should("have.css", "display", "flex");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "font-weight", "700");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "color", `${ColorGray11}`);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "flex", "1 1 auto");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-align", "left");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "margin-top", "1px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "line-height", "22px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.mds.bm-text.bm-faq-item__header-text`).first().should("have.css", "text-decoration").should("be.oneOf", ["none", "none solid rgb(46, 46, 46)", `${ColorGray11}`]);
      //chevron
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "background").should("be.oneOf", ["none", "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "cursor", "pointer");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "display", "inline-block");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "position", "relative");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "text-align", "center");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "width", "24px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li p label span.bm-faq-item__header-chevron i`).first().should("have.css", "height", "24px");
    })
    it("Sprawdzenie kontentu pierwszej zakładki", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content`).first().should("have.css", "transition"). should("be.oneOf", ["opacity .3s cubic-bezier(0,0,0,1), max-height 2s cubic-bezier(.5,.15,0,1)", "opacity 0.3s cubic-bezier(0, 0, 0, 1), max-height 2s cubic-bezier(0.5, 0.15, 0, 1)"]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content`).first().should("have.css", "opacity", "1");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content`).first().should("have.css", "position", "relative");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content`).first().should("have.css", "padding", "0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content`).first().should("have.css", "overflow", "hidden");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner`).first().should("have.css", "padding-top", "16px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner`).first().should("have.css", "padding-bottom", "40px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul`).first().should("have.css", "margin-bottom", "-8px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "margin-bottom", "0px");
    })
    it("Sprawdzenie pierwszego pliku - linku", () => {
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "display", "flex");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "align-items", "flex-start");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "padding", "20px 0px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "margin-right", "4px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "margin-left", "4px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "font-size", "16px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "line-height", "22px");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "font-weight", "400");
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "text-decoration").should("be.oneOf", ["none", "none solid rgb(189, 0, 79)", `${ColorMagenta01}`]);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "color", `${ColorMagenta01}`);
      cy.get(`${managedFIlesPortletId} div.portlet-body.mds.bm-container wc-accordion.mds.bm-col-d-8.bm-offset-d-2 ul li div.bm-faq-item__content__inner ul li a`).first().should("have.css", "margin-bottom", "0px");
    })

  })
  describe("Komponent HINT_ICON_2023", () => {
    const hintIconId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_tpBZx6PrSJaB_";
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
      });

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
      cy.get(`${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper i`).should("be.visible");
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

  })  