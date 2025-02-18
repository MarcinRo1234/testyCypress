/// <reference types ="cypress" />

// const { beforeEach } = require("mocha")
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/rachunki-maklerskie/');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
  })

  describe("Sprwdzenie strony Rachnki Maklerskie", () => {
    it("Sprawdzenie styli kontenera", () => {
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-wrapper").as("hubContainer");
        cy.get("@hubContainer").should("have.css", "padding-left", "30px");
        cy.get("@hubContainer").should("have.css", "padding-right", "30px");
        cy.get("@hubContainer").should("have.css", "max-width", "1600px");
        cy.get("@hubContainer").should("have.css", "margin").should("be.oneOf", ["0px 130px", "auto"]);
    });
    it("Sprawdzenie styli nagłówka", () => {
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB h1.mds.bm-title--small.bm-hub-tiles-group__header").as("hubHeader");
        cy.get("@hubHeader").should("have.css", "margin-bottom", "4px");
        cy.get("@hubHeader").should("have.css", "font-weight", "700");
        cy.get("@hubHeader").should("have.css", "color", "rgb(46, 46, 46)");
        cy.get("@hubHeader").should("have.css", "text-transform", "none");
        cy.get("@hubHeader").should("have.css", "font-size", "24px");
        cy.get("@hubHeader").should("have.css", "line-height", "32px");
        cy.get("@hubHeader").should("have.css", "width", "1600px");
        cy.get("@hubHeader").should("have.css", "margin", "0px 0px 4px");
    });
    it("Sprawdzenie styli kafelka", () => {
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6").first().as("hubKafelLayout");
        cy.get("@hubKafelLayout").should("have.css", "width", "790px");
        cy.get("@hubKafelLayout").should("have.css", "margin", "0px");
        cy.get("@hubKafelLayout").should("have.css", "line-height", "24px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div").as("hubKafel");
        cy.get("@hubKafel").should("have.css", "box-sizing", "border-box");
        cy.get("@hubKafel").should("have.css", "display", "flex");
        cy.get("@hubKafel").should("have.css", "flex-direction", "column");
        cy.get("@hubKafel").should("have.css", "justify-content", "space-between");
        cy.get("@hubKafel").should("have.css", "width", "790px");
        cy.get("@hubKafel").should("have.css", "padding", "32px");
        cy.get("@hubKafel").should("have.css", "background").should("be.oneOf", ["rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box","rgb(255, 255, 255)"]);
        cy.get("@hubKafel").should("have.css", "border").should("be.oneOf", ["1px solid rgb(211, 211, 211)", "1.33333px solid rgb(211, 211, 211)"]);
        cy.get("@hubKafel").should("have.css", "border-radius", "10px");
        cy.get("@hubKafel").should("have.css", "margin-top", "20px");
        cy.get("@hubKafel").should("have.css", "opacity", "1");
        cy.get("@hubKafel").should("have.css", "height", "351px");
        cy.get("@hubKafel").should("have.css", "scale", "1");
        cy.get("@hubKafel").should("have.css", "border-width").should("be.oneOf", ["1px", "1.33333px"]);
        cy.get("@hubKafel").should("have.css", "margin", "20px 0px 0px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__top").as("hubKafelTop");
        cy.get("@hubKafelTop").should("have.css", "margin", "0px");
        cy.get("@hubKafelTop").should("have.css", "display", "grid");
        cy.get("@hubKafelTop").should("have.css", "grid-template-rows", "92px 108px");
        cy.get("@hubKafelTop").should("have.css", "grid-template-columns").should("be.oneOf", ["434.391px 289.609px", "434.4px 289.6px", "434px 289.333px"]);
        cy.get("@hubKafelTop").should("have.css", "grid-template-areas", '"heading image" "content image"');
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__top div.bm-hub-tiles__heading ").as("hubKafelTop-heading");
        cy.get("@hubKafelTop-heading").should("have.css", "grid-area", "heading");
        cy.get("@hubKafelTop-heading").should("have.css", "position", "relative");
        cy.get("@hubKafelTop-heading").should("have.css", "display", "flex");
        cy.get("@hubKafelTop-heading").should("have.css", "padding", "46px 0px 0px");
        cy.get("@hubKafelTop-heading").should("have.css", "margin", "0px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__top div.bm-hub-tiles__image").as("hubKafelTop-image");
        cy.get("@hubKafelTop-image").should("have.css", "grid-area", "image");
        cy.get("@hubKafelTop-image").should("have.css", "display", "flex");
        cy.get("@hubKafelTop-image").should("have.css", "justify-content", "flex-end");
        cy.get("@hubKafelTop-image").should("have.css", "padding", "0px 0px 0px 32px");
        cy.get("@hubKafelTop-image").should("have.css", "margin", "0px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__top div.bm-hub-tiles__image picture img").as("hubKafelTop-image-foto");
        cy.get("@hubKafelTop-image-foto").should("have.css", "max-width", "200px");
        cy.get("@hubKafelTop-image-foto").should("be.visible");
        cy.get("@hubKafelTop-image-foto").should("have.css", "min-width", "134px");
        cy.get("@hubKafelTop-image-foto").should("have.css", "width", "200px");
        cy.get("@hubKafelTop-image-foto").should("have.css", "height", "200px");
        cy.get("@hubKafelTop-image-foto").should("have.css", "margin", "0px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__top div.bm-hub-tiles__content ul.mds.bm-list li").first().as("hubKafelTop-listElementFirst");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "position", "relative");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "padding", "0px 0px 0px 18px");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "margin", "0px 0px 16px");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "font-size", "16px");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "line-height", "22px");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "font-weight", "400");
        cy.get("@hubKafelTop-listElementFirst").should("have.css", "color", "rgb(115, 115, 115)");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__bottom").should("have.css", "margin-top", "36px");
        cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__bottom div.mds.bm-button-group.bm-button-group--block").as("hubKafelBottom-button");
        cy.get("@hubKafelBottom-button").should("have.css", "display", "flex");
        cy.get("@hubKafelBottom-button").should("have.css", "gap", "12px");
        cy.get("@hubKafelBottom-button").should("have.css", "align-items", "center");
        });
        it("Srawdzenie przycisków", () => {
            cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__bottom div.mds.bm-button-group.bm-button-group--block wc-button").first().click();
            cy.url().should("include", "/rachunki-maklerskie/rachunek-indywidualny")
            cy.go("back");
            cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_XWs4KMUJQ0iB div.mds.bm-hub-tiles__wrapper.bm-col-d-6 div.bm-hub-tiles__bottom div.mds.bm-button-group.bm-button-group--block wc-button").eq(1).click();
            cy.url().should("include", "/rachunki-maklerskie/rachunek-prestige")

        })
        
  })

