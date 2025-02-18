/// <reference types ="cypress" />

import { ColorTextStrong, ColorTextStandard, ColorMagenta01, SmallRadius, Separator, ColorGray10, ColorGray11, SeparatorChrome} from "./variables";
beforeEach (() => {
    cy.visit('https://www.millenniumbm.pl/pum');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    
})

describe("Sprawdzenie mapy", () => {
    const mapId = "div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi_";
    it("Sprawdzenie wyszukiwarki - wyszukanie miasta Warszawa", () => {
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__search-and-filters.bm-scroll div.mds.bm-search-input`).type("Warszawa {enter}", {delay: 500});
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).first().should("contain", "Warszawa");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).last().should("contain", "Warszawa");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).first().click();
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll div`).should("be.visible");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll div div.mds.bm-facilities-map__back-btn__wrapper`).click();
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul`).should("be.visible");




    })
    it("Sprawdzenie wyszukiwarki - wyszukanie miasta Lublin", () => {
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__search-and-filters.bm-scroll div.mds.bm-search-input`).type("lublin {enter}", {delay: 500});
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).first().should("contain", "Lublin");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).last().should("contain", "Lublin");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul li div.mds.bm-facility__mid-col p.mds`).first().click();
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll div`).should("be.visible");
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll div div.mds.bm-facilities-map__back-btn__wrapper`).click();
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll ul`).should("be.visible");
    })
    it("Sprawdzenie działania przycisków wyboru miasta", () => {
        cy.get(`${mapId} div.bm-facilities-map div.bm-facilities-map__sidebar div.mds.bm-facilities-map__list.bm-scroll.cities div.mds.bm-facilities-map__cities h2`).should("contain", "Wybierz miasto")
    })
})