import { beforeEach, describe } from "node:test";
//importujemy zmienne
import {widthArray, fontFamilyBMPArray, ColorGray11, backgroundMagentaArray, marginLeftArray, backArrayWhite, ColorMagenta01, ColorMagenta02, ColorTextStandard, fontArray, flexFlowArray, backGroundSizeArray, borderArray, ColorGray10, listStyleArray, marginAutoArray, ColorTextStrong } from "../features/variables";
import { formatDiagnosticsWithColorAndContext } from "typescript";

const { test, expect } = require('@playwright/test');

test.beforeEach('Open Home Page URL', async ({ page }) => {
    //wybranie strony 
    await page.goto('https://www.bankmillennium.pl');
    //zatwierdzenie modala cookie
    await page.locator("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    // testInfo.setTimeout(testInfo.timeout + 90_000);
    
  });
  
test.describe.configure({ mode: 'parallel' });

  test.describe("Testy Menu Business Line", () => {
    test("Sprawdzenie styli", async ({page}) => {
      await expect(page.locator("div.business-line")).toHaveCSS("background-color", "rgb(243, 243, 243)");
      await expect(page.locator("div.business-line")).toHaveCSS("margin-bottom", "30px");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("height", "50px");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div.business-line nav.wrapper")).toHaveCSS("overflow", "visible");
      await expect(page.locator("div.business-line nav.wrapper a.offset-icon.clear-button.icon--ci-menu")).toHaveCSS("display", "none");
      await expect(page.locator("div.business-line nav.wrapper a.offset-icon.clear-button.icon--ci-menu")).toBeHidden();
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line")).toHaveCSS("line-height", "50px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li.active a")).toHaveCSS("color", `${ColorMagenta01}`);
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("font-size", "14px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("display", "inline-block");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("margin-right", "20px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("text-transform", "uppercase");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("font-weight", "700");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line li").first()).toHaveCSS("line-height", "18px");
      await expect(page.locator("div.business-line nav.wrapper ul.only-mobile-logo")).toHaveCSS("display", "none");
      await expect(page.locator("div.business-line nav.wrapper ul.only-mobile-logo")).toBeHidden();
      //menu powiększanie tekstu i zmiana języka
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right")).toHaveCSS("display", "block");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right")).toHaveCSS("line-height", "50px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right")).toHaveCSS("float", "right");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__search")).toHaveCSS("display", "none");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__search")).toBeHidden();

      let elementFF = page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size");
      let fontFamily= await elementFF.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(fontFamily);
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("font-family", fontFamily);
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("font-size", "20px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("font-weight", "400");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("line-height", "20px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("height", "20px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__size")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang")).toHaveCSS("font-size", "20px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang")).toHaveCSS("display", "inline-block");
      //Sprawdzenie flagi
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("background-image", "url(\"https://www.bankmillennium.pl/dist/img/Flaga_EN@2x.png\")");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("background-size", "contain");
      const BGpositionArray = ["50% 50%", "center"];
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("background-position", "50% 50%");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("width", "35px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("height", "35px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("vertical-align", "middle");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toBeHidden();
      //przełączenie na wersję PL żeby sprawdzić wyświetlanie flagi PL
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("", "")
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("background-image", "url(\"https://www.bankmillennium.pl/dist/img/Flaga_PL@2x.png\")");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("background-size", "contain");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("background-position", "50% 50%");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("width", "35px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("height", "35px");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english")).toHaveCSS("display", "inline-block");
      await page.locator("div.business-line nav.wrapper ul.header__business-line li a").first().click();
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/");
      await expect(page).toHaveTitle("Klienci Indywidualni - Konta, pożyczki, kredyty mieszkaniowe, karty, lokaty - Bank Millennium");
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english").click()
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveTitle("Individuals - Accounts, loans, mortgage credits, cards, deposits - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/en/?languageChange=true");
      await page.waitForLoadState('domcontentloaded');
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish").click();
      await page.waitForLoadState('domcontentloaded');
  
  
      
     });
     test("Sprawdzenie działania przycisków", async ({page}) =>{
      const menuBiznesLineButton = await page.locator("div.business-line nav.wrapper ul.header__business-line li a")
      await menuBiznesLineButton.nth(1).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/prestige");
      await expect(page).toHaveTitle("Prestige - Bank Millennium")
      // await page.locator(fiut).waitFor();
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english").click()
      await expect(page).toHaveTitle("Prestige - Bank Millennium");
      await expect(page).toHaveURL("https://www.bankmillennium.pl/en/prestige-customers?languageChange=true");
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish").click()
  
      await menuBiznesLineButton.nth(2).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/bankowosc-prywatna");
      await expect(page).toHaveTitle("Bankowość Prywatna - Bank Millennium");
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english").click()
      await expect(page).toHaveTitle("Private Banking - Bank Millennium");
      await expect(page).toHaveURL("https://www.bankmillennium.pl/en/private-banking?languageChange=true");
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish").click()
  
      
  
      await menuBiznesLineButton.nth(3).click();
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/biznes");
      await expect(page).toHaveTitle("Biznes - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english").click()
      await expect(page).toHaveTitle("Biznes - Bank Millennium");
      await expect(page).toHaveURL("https://www.bankmillennium.pl/en/business?languageChange=true");
      await page.waitForLoadState('domcontentloaded');
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--polish").click()
  
      await page.waitForLoadState("networkidle")
      await menuBiznesLineButton.nth(4).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/przedsiebiorstwa");
      await page.waitForLoadState("domcontentloaded")
      await expect(page).toHaveTitle("Przedsiębiorstwa - Bank Millennium");
      await page.locator("div.business-line nav.wrapper ul.header__business-line--right li.business-line__lang a.business-line__lang--english").click()
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveTitle("Corporate - Bank Millennium");
      await page.waitForLoadState("domcontentloaded")
      await expect(page).toHaveURL("https://www.bankmillennium.pl/en/corporate?languageChange=true");
     });  
  })
  test.describe("Testy top-menu", () => {
    test("Test top menu - style - kontener", async ({page}) => {
      //kontener
      await expect(page.locator("div#navi")).toHaveCSS("width", "1840px");
      await expect(page.locator("div#navi")).toHaveCSS("margin-bottom", "30px");
      await expect(page.locator("div#navi")).toHaveCSS("height", "53px");
      await expect(page.locator("div#navi")).toHaveCSS("overflow", "visible");
      await expect(page.locator("div#navi")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div#navi")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("div#navi")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("div#navi")).toHaveCSS("box-sizing", "border-box");  
     })
     test("Test top menu - style - logo banku", async ({page}) => {
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("width", "220px");
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("height", "53px");
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("background-image", "url(\"https://www.bankmillennium.pl/dist/img/Logo@2x.png\")");
      
      let elementBG = page.locator("div#navi a.header__logo");
      let backGround= await elementBG.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-size');
      });
      expect(backGroundSizeArray).toContain(backGround);
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("background-size", backGround);

      
      
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div#navi a.header__logo")).toHaveCSS("color", `${ColorMagenta01}`);
     })
     test("Test top menu - style - wyszukiwarka i buttony", async ({page}) => {
      //kontener
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article")).toHaveCSS("display", "flex");
      let elementFlexF = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article");
      let flexflow= await elementFlexF.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
      });
      expect(flexFlowArray).toContain(flexflow);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article")).toHaveCSS("flex-flow", flexflow);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article")).toHaveCSS("width", "1510px");
      //wyszukiwarka
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search")).toHaveCSS("flex", "1 1 auto");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("max-width", "380px");
      
      let elementML = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label");
      let marginLeft= await elementML.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('margin-left');
      });
      expect(marginLeftArray).toContain(marginLeft);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("margin-left", marginLeft);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("color", `${ColorTextStandard}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("padding-left", "36px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("width", "380px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("resize", "none");
      let elementInput = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input");
      let fontFamilyInput= await elementInput.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(fontFamilyInput);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("font-family", fontFamilyInput);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("border", "1px solid rgb(211, 211, 211)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("border-radius", "3px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("height", "53px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("padding", "19px 19px 18px 36px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input")).toHaveCSS("background-color", "rgb(255, 255, 255)");
      //button - magenta
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("margin-left", "10px");
      let elementBGSecond = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')");
      let backGroundSecond= await elementBGSecond.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background');
      });
      expect(backArrayWhite).toContain(backGroundSecond);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("background", backGroundSecond);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("border", "2px solid rgb(189, 0, 79)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("color", `${ColorMagenta01}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("height", "52px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("clear", "both");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("padding", "17px 20px 18px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("border-radius", "3px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("display", "flex");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("align-items", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("justify-content", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("text-align", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("vertical-align", "middle");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("text-transform", "uppercase");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("line-height", "16px");
      let elementFF = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')");
      let fontFamily= await elementFF.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(fontFamily);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("font-family", fontFamily);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')")).toHaveCSS("line-height", "16px");
      //hover
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ')").hover()
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ'):hover")).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a:has-text('POŻYCZ GOTÓWKĘ'):hover")).toHaveCSS("border", "2px solid rgb(189, 0, 79)");
    
      //button blue - login
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("padding-left", "50px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("margin-left", "10px");
      let backgroundBlueElement = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger");
      let backgroundBlue= await backgroundBlueElement.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background');
      });
      let backgroundBlueArray = ["rgb(28, 92, 173) none repeat scroll 0% 0% / auto padding-box border-box", "rgb(28, 92, 173)"]
      expect(backgroundBlueArray).toContain(backgroundBlue);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("background", backgroundBlue);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("border", "2px solid rgb(28, 92, 173)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("height", "52px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("clear", "both");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("padding", "17px 20px 18px 50px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("border-radius", "3px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("display", "flex");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("align-items", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("justify-content", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("text-align", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("vertical-align", "middle");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("text-transform", "uppercase");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger")).toHaveCSS("line-height", "16px");
    
    });
    test("Sprawdzenie działana wyszukiwarki", async ({page}) => {
      const searchPlaceholder = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input").getAttribute("placeholder");
      await expect(searchPlaceholder).toEqual("Wpisz, czego szukasz");
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input").fill("Konto");
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article form.header__search label input").press('Enter');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/wyniki-wyszukiwania?q=Konto");
      await expect(page).toHaveTitle("Wyniki wyszukiwania - Bank Millennium")
      // await expect(page.locator("table.gsc-search-box tr td.gsc-input input")).toHaveText("konto");
      await page.waitForLoadState("domcontentloaded");
      await expect(page.locator("div.gsc-expansionArea table")).toHaveCount(10);
      await expect(page.locator("div.gsc-cursor div")).toHaveCount(10);
      await page.waitForLoadState("domcontentloaded");
      await page.locator("div.gsc-results-wrapper-nooverlay.gsc-results-wrapper-visible  div.gsc-tabsArea div").nth(3).click();
      await expect(page.locator("div.gsc-expansionArea table.gsc-table-result div.gs-title.gsc-table-cell-thumbnail.gsc-thumbnail-left a").first()).toHaveText("Bankowość Prywatna - Bank Millennium")



    })
  });
  test.describe("Sprawdzenie modala logowania", () => {
    test.beforeEach("Włączenie modala", async ({page}) => {
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger").click();
    })
    test("Sprawdzenie kontenera modala", async ({page}) => {
      await expect(page.locator("div#dialog-msg")).toHaveCSS("overflow", "visible");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("height", "393px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("padding", "10px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("width", "834px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("transition", "padding 0.3s, width 0.3s, height 0.3s, max-height 0.3s");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.17) -5px 9px 24px 0px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("border-radius", "10px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("position", "absolute");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("top", "-10px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("right", "0px");
      await expect(page.locator("div#dialog-msg")).toHaveCSS("margin", "30px");
      let dialogBackground = page.locator("div#dialog-msg")
      let dialogBackgroundvalue= await dialogBackground.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background');
      });
      await expect(page.locator("div#dialog-msg")).toHaveCSS("background", dialogBackgroundvalue);
    })
    test("Sprawdzenie styli przycisku zamknij okno", async ({page}) => {
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("padding", "2px 1px");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("font-size", "15px");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("position", "absolute");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("right", "20px");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("top", "20px");
      const elementFontFamilyBMP = page.locator("div#dialog-msg a.icon--f-close");
      let fontFamilyBMP= await elementFontFamilyBMP.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      const fontFamilyBMPArray = ["\"bmp-icon !important\"", "bmp-icon", "\"bmp-icon\""];
      expect(fontFamilyBMPArray).toContain(fontFamilyBMP);
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("font-family", fontFamilyBMP);
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("font-style", "normal");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("font-variant", "normal");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("text-transform", "none");
      await expect(page.locator("div#dialog-msg a.icon--f-close")).toHaveCSS("line-height", "15px");
    })
    test("Sprawdzenie styli tytułu", async ({page}) => {
      const elementModalTitleFont = page.locator("div#dialog-msg p#dialog-title");
      const modalTitleFont = await elementModalTitleFont.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(modalTitleFont);
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("font-family", modalTitleFont);
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("font-size", "28px");
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("font-weight", "300");
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("line-height", "30px");
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("color", `${ColorGray10}`);
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("margin", "0px 0px 0px -10px");
      await expect(page.locator("div#dialog-msg p#dialog-title")).toHaveCSS("border-bottom", "1px solid rgb(237, 237, 237)");
    });
    test("Sprawdzenie kontenera formularza", async ({page}) => {
      await expect(page.locator("div#dialog-msg form").first()).toHaveCSS("padding", "50px 40px 45px 110px");
      await expect(page.locator("div#dialog-msg form").first()).toHaveCSS("font-family", "Roboto");
      await expect(page.locator("div#dialog-msg form").first()).toHaveCSS("position", "relative");
    });
    test("Sprawdzenie stylu label", async ({page}) => {
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("font-size", "15px");
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("line-height", "24px");
      await expect(page.locator("div#dialog-msg form label")).toHaveCSS("margin-bottom", "2px");
    });
    test("Sprawdzenie stylu tooltipa", async ({page}) => {
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("display", "block");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("margin", "0px 0px 0px 10px");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("font-weight", "400");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("position", "absolute");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("top", "50px");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("left", "172px");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("font-family", "Roboto");
      await expect(page.locator("div#dialog-msg wc-tooltip.login__tooltip")).toHaveCSS("color", `${ColorGray10}`);
    });
    test("Style 'Nie pamiętam millekodu'", async ({page}) => {
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("top", "50px");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("left", "210px");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("width", "210px");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("display", "block");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("text-align", "right");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("font-size", "14px");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("position", "absolute");
      await expect(page.locator("div#dialog-msg a.forgotten-millekod")).toHaveCSS("color", `${ColorMagenta01}`);
    });
    test("Sprawdzenie inputa", async ({page}) => {
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("width", "310px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("height", "53px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("margin-right", "10px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("resize", "none");
      const elementModalInputFont = page.locator("div#dialog-msg p#dialog-title");
      const modalInputFont= await elementModalInputFont.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(modalInputFont);
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("font-family", modalInputFont);
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("border", "1px solid rgb(193, 193, 193)");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("border-radius", "3px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("padding", "19px 19px 18px 16px");
      await expect(page.locator("div#dialog-msg div input")).toHaveCSS("display", "block");
    })
    test("Sprawdzenie styli buttona - DALEJ", async ({page}) => {
      const elementModalButton = page.locator("div#dialog-msg div button.bmp-btn");
      const modalButtonFont= await elementModalButton.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontArray).toContain(modalButtonFont);
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("font-family", modalButtonFont);
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("text-transform", "uppercase");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("font-size", "15px");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("line-height", "14px");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("padding", "5px 20px");
      
      const elementBackgroundMagentaButton = page.locator("div#dialog-msg div button.bmp-btn");
      const backgroundMagentaButton = await elementBackgroundMagentaButton.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background");
      })
      expect(backgroundMagentaArray).toContain(backgroundMagentaButton)
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("background", backgroundMagentaButton);
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("border", "2px solid rgb(189, 0, 79)");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("height", "52px");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("clear", "both");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("border-radius", "3px");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("display", "flex");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("align-items", "center");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("justify-content", "center");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("text-align", "center");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("vertical-align", "middle");
      await expect(page.locator("div#dialog-msg div button.bmp-btn")).toHaveCSS("cursor", "pointer");
    })
    test("Sprawdzenie styli newsów", async ({page}) => {
      await expect(page.locator("div#dialog-msg ul.news")).toHaveCSS("padding", "0px 40px 0px 110px");
      await expect(page.locator("div#dialog-msg ul.news")).toHaveCSS("height", "70px");
      await expect(page.locator("div#dialog-msg ul.news")).toHaveCSS("display", "flex");
      const elementListStyleNews = page.locator("div#dialog-msg ul.news");
      const ListStyleNews = await elementListStyleNews.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("list-style");
      })
      expect(listStyleArray).toContain(ListStyleNews)
      await expect(page.locator("div#dialog-msg ul.news")).toHaveCSS("list-style", ListStyleNews);
    })
    test("Sprawdzenie styli pierwszego newsa", async ({page}) => {
      await expect(page.locator("div#dialog-msg ul.news li").first()).toHaveCSS("flex", "1 1 calc(50% - 40.5px)");
      await expect(page.locator("div#dialog-msg ul.news li").first()).toHaveCSS("color", `${ColorGray10}`);
      await expect(page.locator("div#dialog-msg ul.news li").first()).toHaveCSS("font-weight", "400");
      //nagłówek
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("display", "flex");
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("height", "23px");
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("margin-bottom", "10px");
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("color", `${ColorMagenta01}`);
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("font-size", "15px");
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("line-height", "21px");
      await expect(page.locator("div#dialog-msg ul.news li p.top").first()).toHaveCSS("font-weight", "400");
      //ikona
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("font-size", "23px");
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("line-height", "23px");
      let elementFontFamilyNewsBMP = page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first();
      let fontFamilyNewsBMP= await elementFontFamilyNewsBMP.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('font-family');
      });
      expect(fontFamilyBMPArray).toContain(fontFamilyNewsBMP);
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("font-family", fontFamilyNewsBMP);
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("font-style", "normal");
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("font-weight", "400");
      await expect(page.locator("div#dialog-msg ul.news li p.top i.icon--f-news").first()).toHaveCSS("font-variant", "normal");
      //tekst
      await expect(page.locator("div#dialog-msg ul.news li p").nth(1)).toHaveCSS("font-size", "15px");
      await expect(page.locator("div#dialog-msg ul.news li p").nth(1)).toHaveCSS("line-height", "21px");
      await expect(page.locator("div#dialog-msg ul.news li p").nth(1)).toHaveCSS("color", `${ColorGray10}`);
      await expect(page.locator("div#dialog-msg ul.news li p").nth(1)).toHaveCSS("font-weight", "400");
      //separator
      await expect(page.locator("div#dialog-msg ul.news li.sep")).toHaveCSS("flex", "0 0 81px");
      await expect(page.locator("div#dialog-msg ul.news li.sep")).toHaveCSS("position", "relative");
    })
  })  //funkcjonalności
  test.describe("Sprawdzenie funkcjonalności modala", async () => {
    test.beforeEach("Włączenie modala", async ({page}) => {
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_HEADER_BUTTONS_ div.journal-content-article a.bmp-btn.bmp-btn--blue.modal-trigger").click();
    })
    test("Zamknięcie modala", async ({page}) => {
      await expect(page.locator("div#dialog-msg")).toBeVisible();
      await page.locator("div#dialog-msg a.icon--f-close").click();
      await expect(page.locator("div#dialog-msg")).toBeHidden();
    })
    test("Wpisanie millekodu retail i wciśnięcie przycisku dalej", async ({page}) => {
      let millekod = "12415624";
      await page.locator("div input#mc").fill(millekod);
      await page.locator("div button.bmp-btn").click();
      await page.waitForLoadState('domcontentloaded');
      // await expect(page).toContainUrl("https://login.bankmillennium.pl/retail/login")
      // await expect(page).toHaveURL("https://login.bankmillennium.pl/retail/login?clientAssertion=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNaWxsZW5ldFJldGFpbCIsImV4cCI6MTczNjUwNzI1NCwic3RhdGUiOiJmNWNmMzg3Zi02ZWJiLTQxMzMtYjE0Ni03M2ViNTNhMzA0YzUiLCJzY29wZSI6IkxvZ2luIHBzZDJjb25zZW50cyByZXRhaWwiLCJyZXNwb25zZV9jb2RlIjoiQ29kZSIsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vd3d3LmJhbmttaWxsZW5uaXVtLnBsL29zb2Jpc3RlL3N0YXJ0L3Nlc3Npb24iLCJjb2RlX2NoYWxsZW5nZV9tZXRob2QiOiJTMjU2IiwiY29kZV9jaGFsbGVuZ2UiOiI4Q1JLaUhvYkhzSF9kZmstTnRyZjk0UWgxUVRaeVBYSVlQUzBUSUx6WVhNPSJ9.rLccLQlxlx5hm-Zj6a2SYeZiWcJA-0dKUhUV5IRTGToJokxaM7cBH9331WrHR_MnAqXB7as2s92k9chvQ1YNbLqFBuMKTq_6uhModFT9yoE21WjYsMdlUSP83O8r1dd1vFk0Rc8-oHTFCtIkoA89TGz0AfbSus2AgLK9Q-lkQLk6loVnVIP_5yyGr_Oxivz9CRxn8qMekaazGUqiv2YWeB5ks8sRPJbOk-f9eRBSKKYDGDetn19sq_863FxvKXtBD21qOr0mdLYsd9YZysEa0pyVW9OZCjc8uug-8ByWvTV1d7xEFxFw3CLVGZmVs3GuvZJE_codO7EWCKvp7JnjeQ&customer=12415624&language=pl-PL");
      await page.waitForLoadState("networkidle");
      await expect(page).toHaveURL(new RegExp("^https://login.bankmillennium.pl/retail/login"));
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveTitle("Bank Millennium");
      // await page.locator('button[aria-label="Zmień język na en"]').click();
      // await expect(page).toHavaURL("https://login.bankmillennium.pl/retail/login/");
    })
    test("Wpisanie millekodu korpo", async ({page}) => {
      const millekodCorpo = "05722533";
      const login = "hdmarcinr"
      await page.locator("div input#mc").fill(millekodCorpo);
      await page.locator("div button.bmp-btn").click();
      await page.waitForLoadState("domcontentloaded");
      await expect(page).toHaveURL("https://www.bankmillennium.pl/firmy/LoginStepOne?millekod=05722533&defaultClientType=RETAIL&language=pl_PL");
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveTitle("Millenet dla Przedsiębiorstw - ");
      await expect(page.locator("div.field div.value").first()).toHaveText(millekodCorpo);
      await page.locator("div.field div.value input#UserLogin").fill(login);
      await page.locator("div.actionGroup.midGroup a#login-proceed").click();
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/firmy/LoginStepTwo");
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveTitle("Millenet dla Przedsiębiorstw - ");
      await expect(page.locator("div.field div.value").first()).toHaveText(millekodCorpo);
      await expect(page.locator("div.field div.value").nth(1)).toHaveText(login);
      await expect(page.locator("div.field div.value").nth(2)).toBeVisible();
      await expect(page.locator("div.field div.value").nth(3)).toBeVisible();
    })  
  })
  test.describe("Testy styli Main Menu", () => {
    test("Sprawdzenie kontenera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ div.navbar__con.wrapper")).toHaveCSS("max-height", "92px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ div.navbar__con.wrapper")).toHaveCSS("overflow", "hidden");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ div.navbar__con.wrapper")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ div.navbar__con.wrapper")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ div.navbar__con.wrapper")).toHaveCSS("padding", "0px");
    });
    test("Sprawdzenie listy", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul")).toHaveCSS("margin", "29px 0px 26px 10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul")).toHaveCSS("display", "flex");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul")).toHaveCSS("justify-content", "center");
      const elementMainMenuFF = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul");
      const MainMenuFlexFlow= await elementMainMenuFF.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
      });

      expect(flexFlowArray).toContain(MainMenuFlexFlow);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul")).toHaveCSS("flex-flow", MainMenuFlexFlow);
    })
    test("Sprawdzenie elementu listy", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li").first()).toHaveCSS("padding", "10px 35px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li").first()).toHaveCSS("flex", "0 0 auto");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li").first()).toHaveCSS("color", ColorGray10);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li").first()).toHaveCSS("font-weight", "400");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").first()).toHaveCSS("font-size", "17px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").first()).toHaveCSS("line-height", "15px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").first()).toHaveCSS("color", ColorGray10);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").first()).toHaveCSS("font-weight", "700");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").first()).toHaveCSS("white-space", "nowrap");
    })
  })
  test.describe("Test funkcjonalności Main Menu", () => {
    test("Sprawdzenie działania buttonów", async ({page}) => {
      await page.waitForLoadState('domcontentloaded');
      await page.getByRole('link', { name: 'Konta', exact: true }).click()
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/konta-osobiste");
      await expect(page).toHaveTitle("Konta bankowe – wybierz najlepsze konto dla siebie - Bank Millennium")

      await page.getByRole('link', { name: 'Karty', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/karty-platnicze");
      await expect(page).toHaveTitle("Karty płatnicze: karta kredytowa i debetowa – zobacz ofertę - Bank Millennium")

      await page.getByRole('link', { name: 'Kredyty', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/pozyczki");
      await expect(page).toHaveTitle("Kredyty i pożyczki - Bank Millennium")

      await page.getByRole('link', { name: 'Oszczędności', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/oszczednosci-i-inwestycje#produkty-oszczednosciowe");
      await expect(page).toHaveTitle("Oszczędności i inwestycje - Bank Millennium")

      await page.getByRole('link', { name: 'Inwestycje', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/oszczednosci-i-inwestycje#produkty-strukturyzowane-i-laczone");
      await expect(page).toHaveTitle("Oszczędności i inwestycje - Bank Millennium")
      await page.waitForLoadState('domcontentloaded');

      await page.getByRole('link', { name: 'Ubezpieczenia', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/ubezpieczenia");
      await expect(page).toHaveTitle("Ubezpieczenia - Produkty - Bank Millennium");

      await page.getByRole('link', { name: 'Bankowość elektroniczna', exact: true }).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/bankowosc-elektroniczna");   
      await expect(page).toHaveTitle("Bankowość elektroniczna - Klienci Indywidualni - Bank Millennium");

      await page.getByRole('link', { name: 'Wsparcie', exact: true }).click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/pierwszykrokonline");
      await expect(page).toHaveTitle("Pierwszy krok online - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
      
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_MAIN_MENU_ ul li a").last().click()
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/kontakt");
      await expect(page).toHaveTitle("Kontakt - Klienci Indywidualni - Bank Millennium");
    });
  })
  test.describe("Testy styli main visual", () => {
    test("Sprawdzenie kontenera", async ({page}) => {
      const elementMarginMainVisual = page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper");
      const MarginMainVisual = await elementMarginMainVisual.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("margin")
      })
      expect(marginAutoArray).toContain(MarginMainVisual);
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper")).toHaveCSS("margin", MarginMainVisual);
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper")).toHaveCSS("max-width", "1760px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper")).toHaveCSS("padding", "0px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper")).toHaveCSS("box-sizing", "border-box");
    })
    test("Przycisk play/stop", async ({page}) => {
      await page.waitForLoadState('domcontentloaded');
      await page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button").click();
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("position", "absolute");
      await page.waitForLoadState('domcontentloaded');
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("height", "24px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("bottom", "197px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("left", "-50px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("z-index", "2");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start")).toHaveCSS("margin-left", "880px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start svg.pause")).toHaveCSS("width", "24px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start svg.pause")).toHaveCSS("height", "24px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button.offset-md-7.offset-lg-6.icon-button--start svg.pause")).toHaveCSS("fill", "rgb(255, 255, 255)");
    });
    test("Sprawdzenie styli kafelka", async ({page}) => {
      await expect(page.locator("div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("top", "475px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("margin-top", "5px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("padding-right", "0px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("position", "absolute");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("z-index", "1");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("padding", "0px 0px 0px 20px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("margin-bottom", "20px");
      await expect(page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper div.bmp-mv__navi.col-md-12.navi__top")).toHaveCSS("box-sizing", "border-box");
    });
    test("Sprawdzenie kontenera styli ekranów", async ({page}) => {
      await expect(page.locator("ol.bmp-mv__stage")).toHaveCSS("margin", "5px 0px 0px");
      await expect(page.locator("ol.bmp-mv__stage")).toHaveCSS("margin-bottom", "0px");
      await expect(page.locator("ol.bmp-mv__stage")).toHaveCSS("border-radius", "10px");
      await expect(page.locator("ol.bmp-mv__stage")).toHaveCSS("display", "flex");
      await expect(page.locator("ol.bmp-mv__stage")).toHaveCSS("width", "1760px");
    });
  });
  test.describe("Sprawdzenie funkcjonalności main visual", () => {
    // test.beforeEach("Zatrzymanie rotowania bannerów", async ({page}) => {
    //   await page.locator("div#p_p_id_targetedcontentportlet_WAR_targetedcontentportlet_INSTANCE_DtiYbrGM0HGP_ section.bmp-mv.wrapper a.icon-button").click();
    // });
    
    test("Przeklikanie kafelków", async ({page}) => {
      await page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button").click();
      await page.locator("div#p_p_id_pl_bm_portlet_target_content_TargetedContentPortlet_INSTANCE_2oRJUiAFLS6l_ section.bmp-mv.wrapper a.icon-button").click();
      await expect(page.locator("li.screen picture.image").first()).toBeVisible();
      await page.waitForLoadState('domcontentloaded');

      const secondButton = page.locator("div.bmp-mv__navi.col-md-12 ol li").locator("nth=5")
      await secondButton.waitFor();
      await page.locator("div.bmp-mv__navi.col-md-12 ol li").locator("nth=5").click();
      await expect(page.locator("li.screen picture.image").locator("nth=1")).toBeVisible();
      await page.waitForLoadState('domcontentloaded');

      await page.locator("div.bmp-mv__navi.col-md-12 ol li").locator("nth=6").click();
      await expect(page.locator("li.screen picture.image").locator("nth=2")).toBeVisible();
      await page.waitForLoadState('domcontentloaded');

      await page.locator("div.bmp-mv__navi.col-md-12 ol li").locator("nth=7").click();
      await expect(page.locator("li.screen picture.image").locator("nth=3")).toBeVisible();
      await page.waitForLoadState('domcontentloaded');
  //   let tab = page.locator("div.bmp-mv__navi.col-md-12.navi__top ol.boxes li");
  //   let picture = page.locator("ol.bmp-mv__stage li picture");
  //   let MVcount = 4;
  //   for(let i = 0; i <= MVcount; i++) {
  //     if(tab.hasAttribute("active")){
  //       await expect(picture.nth(i)).toBeVisible();
  //       return
  //     } else{
  //       await tab.nth(i).click();
  //       await expect(picture.nth(i)).toBeVisible();
  //     }
  //   }
  //   });

    })
  })
  test.describe("Sprawdzenie styli komponentu needs", () => {
    test("Sprawdzenie styli kontenera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs")).toHaveCSS("overflow", "visible");
    });
    test("Sprawdzenie styli background", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("background-image", "url(\"https://www.bankmillennium.pl/documents/10184/26658187/Portal_RD_needs_icons_dobry_start.png/88160414-20fd-4a0e-9078-edeb696be887\")");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("background-position", "calc(100% - 140px) 0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("background-size", "auto 500px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp")).toHaveCSS("width", "1760px");
    })
    test("Sprwadzenie styli headera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp h2")).toHaveCSS("margin-bottom", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp h2")).toHaveCSS("font-weight", "300");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp h2")).toHaveCSS("font-size", "53px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp h2")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp h2")).toHaveCSS("line-height", "60px");
    });
    test("Sprawdzenie kontenera listy - lewa strona", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("padding", "0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("min-height", "1px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("float", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("width", "440px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3")).toHaveCSS("box-sizing", "border-box");
    });
    test("Sprawdzenie styli listy", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3 ul")).toHaveCSS("margin-right", "30px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3 ul")).toHaveCSS("margin-top", "50px");
    });
    test("Sprawdzenie styli elementu listy", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3 ul li").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.col-xl-3.col-md-3.col-xl-3 ul li").first()).toHaveCSS("clear", "both");
    })
    test("Sprawdzenie kontenera prawej strony", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("float", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("min-height", "1px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("padding-left", "10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("padding-right", "10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("width", "1320px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")).toHaveCSS("box-sizing", "border-box");
    });
    test("Sprwadzenie pojedyńczego elementu prawej strony - kontener", async ({page}) => {
      // await page.waitForLoadState('domcontentloaded');

      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(kokos).toHaveCSS("z-index", "auto");
      const elementNeedsTab = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first();
      const widthArray = ["392.328px", "392.333px", "392.328125px"];
      const NeedsTab= await elementNeedsTab.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
      });

      expect(widthArray).toContain(NeedsTab);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("width", NeedsTab);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("opacity", "1");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("margin-right", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("text-align", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("float", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("padding", "6px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first()).toHaveCSS("transition", "height 1.8s cubic-bezier(0.19, 1, 0.22, 1)");
    });
    test("Sprawdzenie grafik na pojedyńczy elemencie", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      // await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").locator("nth=1")).toHaveCSS("background-position", "top center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("top", "0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("position", "absolute");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("left", "0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("right", "0px");
      const elementNeedsTab = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated").first();
      const widthArray = ["392.328px", "392.333px", "392.328125px"];
      const NeedsTab= await elementNeedsTab.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
      });

      expect(widthArray).toContain(NeedsTab);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("width", NeedsTab);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("overflow", "hidden");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("height", "440px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__topImg").first()).toBeVisible();

      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toBeVisible();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("background-color", "rgb(51, 51, 51)")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("overflow", "hidden")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("border-radius", "10px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("height", "262px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("background-repeat", "no-repeat")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("background-position", "50% 50%")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("background-size", "cover")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("position", "relative")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("top", "45px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__bg").first()).toHaveCSS("z-index", "-10")

    });
    test("Sprawdzenie kontenera na teksty", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("padding", "40px 20px 20px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("font-size", "16px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("line-height", "24px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("position", "absolute")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("z-index", "3")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("top", "205px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("border-radius", "10px")
      // await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("width", "calc(100% - 34px - 12px)")
      const elementNeedsTabTekst = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first();
      const widthArrayTekst = ["346.328px", "346.328125px", "346.333px"];
      const NeedsTabTekst= await elementNeedsTabTekst.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
      });

      expect(widthArrayTekst).toContain(NeedsTabTekst);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("width", NeedsTabTekst)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("margin", "0px 17px")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("box-sizing", "border-box")
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text").first()).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.1) 6px 14px 30px 0px")
    });
    test("Sprwdzenie nagłowka kafelka", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text h3").first()).toHaveCSS("font-size", "28px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text h3").first()).toHaveCSS("line-height", "31px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text h3").first()).toHaveCSS("margin-bottom", "30px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text h3").first()).toHaveCSS("margin-left", "10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text h3").first()).toHaveCSS("margin-right", "10px");
    });
    test("Sprwdzenie paragrafu kafelka", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text p p").locator("nth=0")).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text p p").locator("nth=0")).toHaveCSS("line-height", "24px");
      // await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text p p").locator("nth=0")).toHaveCSS("margin-left", "10px");
      // await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text p p").locator("nth=0")).toHaveCSS("margin-right", "10px");
    });
    test("Sprawdzenie przycisku kafelka", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("margin-top", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("text-align", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("text-transform", "uppercase");
      const elementBackgroundMagentaButtonNeeds = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first();
      const backgroundMagentaButtonNeeds = await elementBackgroundMagentaButtonNeeds.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background");
      })
      expect(backgroundMagentaArray).toContain(backgroundMagentaButtonNeeds)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("background", backgroundMagentaButtonNeeds);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("border", "2px solid rgb(189, 0, 79)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__text a").first()).toHaveCSS("height", "52px");
      
    });
    test("Sprawdzenie noty prawnej", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal").first()).toHaveCSS("text-align", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span").first()).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("text-align", "center");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("font-size", "14px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("color", `${ColorTextStandard}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("cursor", "pointer");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("margin-top", "20px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9 div.animated div.bmp-pbn__legal span wc-tooltip.legalNote__title").first()).toHaveCSS("line-height", "10px");  
    });

  })
  test.describe("Sprawdzenie funkcjonalności needs", () => {
    test("Przeklikanie listy po lewej stronie", async ({page}) => {
      const kokos = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_mfqEGXXcrtUW_ div#needs div.needsApp div.needsApp__product-container.col-xl-9.col-md-9")
      await kokos.scrollIntoViewIfNeeded();
      const liElementCount = await page.locator("ul.needsApp__menu li").count();
      const tab = page.locator("ul.needsApp__menu li");
      for(let i=0; i < liElementCount; i++) {
        await tab.nth(i).click();
        let pictures = page.locator("div.animated.bounceInUp.bmp-pbn__container div.bmp-pbn__topImg");
        await page.waitForLoadState('domcontentloaded');
        let picturesCount = await page.locator("div.animated.bounceInUp.bmp-pbn__container div.bmp-pbn__topImg").count();
        for(let j=0;j < picturesCount; j++){
          await page.waitForLoadState('domcontentloaded');
          console.log(picturesCount);
          await pictures.nth(j).focus();
        }
      }
    })
  })
  test.describe("Sprawdzenie styli special offer", () => {
    test("Sprawdzenie styli kontenera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("margin-bottom", "115px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("margin-top", "55px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers")).toHaveCSS("overflow", "visible");
    });
    test("Sprwadzenie styli headera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers h2")).toHaveCSS("margin-bottom", "80px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers h2")).toHaveCSS("font-weight", "300");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers h2")).toHaveCSS("font-size", "53px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers h2")).toHaveCSS("color", `${ColorGray11}`);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers h2")).toHaveCSS("line-height", "60px");
    });
    test("Sprawdzenie kontenera pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("margin-left", "0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("margin-top", "67px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("float", "left");
      const elementWidthSpecialOffer = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first();
      let widthSpecialOffer = await elementWidthSpecialOffer.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("width");
      })
      const widthMarginArray = ["570px", "569.984px", ]
      // console.log(widthSpecialOffer);
      // console.log(typeof(widthSpecialOffer));
      // let widthNumber = Number(widthSpecialOffer);
      // console.log(typeof(widthNumber));
      expect(widthMarginArray).toContain(widthSpecialOffer)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("width", widthSpecialOffer);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("margin", "67px 10px 0px 0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox").first()).toHaveCSS("text-align", "center");
    });
    test("Sprawdzenie środka kontenera pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox").first()).toHaveCSS("border-radius", "10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox").first()).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox").first()).toHaveCSS("padding", "40px 40px 64px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox").first()).toHaveCSS("position", "relative");
    });
    test("Sprawdzenie grafiki pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head img").first()).toHaveCSS("width", "180px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head img").first()).toHaveCSS("display", "block");
      const elementMarginSpecialOffer = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head img").first();
      const marginSpecialOffer = await elementMarginSpecialOffer.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("margin");
      })
      const marginSOArray = ["0px 155px", "0px auto", "0px 155px 0px 154.984px", "0px 50% 50%"];
      expect(marginSOArray).toContain(marginSpecialOffer)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head img").first()).toHaveCSS("margin", marginSpecialOffer);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head img").first()).toBeVisible();
    });
    test("Sprawdzenie nagłowka pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head div.spProductBox__title h3").first()).toHaveCSS("margin-top", "35px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head div.spProductBox__title h3").first()).toHaveCSS("font-size", "28px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head div.spProductBox__title h3").first()).toHaveCSS("line-height", "28px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head div.spProductBox__title h3").first()).toHaveCSS("font-weight", "300");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__head div.spProductBox__title h3").first()).toHaveCSS("color", `${ColorGray11}`);
    });
    test("Sprawdzenie opisów pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__desc").first()).toHaveCSS("margin", "25px 0px 40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__desc").first()).toHaveCSS("font-size", "16px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__desc").first()).toHaveCSS("line-height", "24px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__desc p").first()).toHaveCSS("line-height", "24px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox div.spProductBox__desc p").first()).toHaveCSS("font-size", "16px");
    });
    test("Sprawdzenie buttona pierwszego kafelka", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first()).toHaveCSS("text-transform", "uppercase");
      const elementBackgroundMagentaSpecialOFfer = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first();
      const backgroundMagentaSpecialOffer = await elementBackgroundMagentaSpecialOFfer.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background");
      })

      expect(backgroundMagentaArray).toContain(backgroundMagentaSpecialOffer)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first()).toHaveCSS("background", backgroundMagentaSpecialOffer);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first()).toHaveCSS("border", "2px solid rgb(189, 0, 79)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first()).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first()).toHaveCSS("height", "52px");


    })
  })
  test.describe("Test funkcjonalności", () => {
    test("Przeklikanie przycisków", async ({page}) => {
      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").first().click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/produkty-oszczednosciowe/aukcje");
      await expect(page).toHaveTitle("Lokata Aukcje - Lokaty - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
      await page.goBack();

      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").nth(1).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/konta-osobiste/lubietopolecam");
      await expect(page).toHaveTitle("Lubię to polecam - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
      await page.goBack(); 

      await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_c6nvuNtNN1WY_ section.wrapper.bmp-special-offers wc-spproductbox div.spProductBox a.spProductBox__btn").nth(2).click();
      await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/produkty-oszczednosciowe/lokaty/happy-hours");
      await expect(page).toHaveTitle("Happy Hours - Lokaty - Bank Millennium");
      await page.waitForLoadState('domcontentloaded');
    })
  })
  test.describe("Sprawdzenie App banner", () => {
    test("Sprwdzenie styli kontenera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("padding-top", "180px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("overflow", "hidden");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper")).toHaveCSS("box-sizing", "border-box");
    });
    test("Sprawdzenie kontentu", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("background-image", "url(\"https://www.bankmillennium.pl/documents/10184/26610621/2406_imageFullHD.png/abc7a044-c0c5-81d2-3134-bea07930fb91?t=1718278088943\")");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("background-position-y", "50%");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("background-color", "rgb(0, 0, 0)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("background-repeat", "no-repeat");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("background-position", "100% 50%");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("border-radius", "10px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content")).toHaveCSS("transition", "all");
    });
    test("Sprawdzenie headera", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("font-size", "53px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("padding", "100px 0px 0px 100px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("line-height", "60px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("text-align", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("min-height", "1px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("float", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("width", "880px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content h2")).toHaveCSS("box-sizing", "border-box");
    })
    test("Sprawdzenie opisu", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("clear", "both");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("padding", "30px 100px 0px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("font-size", "17px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("line-height", "24px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("font-weight", "300");


      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("position", "relative");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("min-height", "1px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("float", "left");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("width", "880px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc p")).toHaveCSS("font-size", "23px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc p")).toHaveCSS("line-height", "30px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc p")).toHaveCSS("font-weight", "300");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content div.col-md-6.col-xs-12.bmp-app-banner__desc p")).toHaveCSS("color", "rgb(255, 255, 255)");
    });
    test("Sprawdzenie styli buttonów", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links")).toHaveCSS("padding", "100px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links")).toHaveCSS("display", "block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links")).toHaveCSS("width", "1760px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links")).toHaveCSS("clear", "both");
    });
    test("Sprawdzenie pierwszego elementu listy", async ({page}) => {
      await expect (page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li").first()).toHaveCSS("display", "inline-block");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li").first()).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li").first()).toHaveCSS("margin-right", "30px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li").first()).toHaveCSS("font-weight", "400");
      let elementBackgroundAppBanner = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a").first();
      let backgroundAppBanner = await elementBackgroundAppBanner.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background");
      })
      const backgroundAppBannerArray = ["none", "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"];
      expect(backgroundAppBannerArray).toContain(backgroundAppBanner)
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a").first()).toHaveCSS("background", backgroundAppBanner);
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a").first()).toHaveCSS("border", "2px solid rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a").first()).toHaveCSS("color", "rgb(255, 255, 255)");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a").first()).toHaveCSS("height", "52px");
    });
    test("Sprawdzenie drugiego przycisku", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").first()).toHaveCSS("width", "115px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").first()).toHaveCSS("height", "29px");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").first()).toHaveCSS("vertical-align", "middle");
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").first()).toHaveAttribute("src", "https://www.bankmillennium.pl/documents/10184/26610621/appStores1_%402x-22px.png/eb2e791e-50d3-494f-b1b7-335b3ee21120?t=1524236603203");
    });
    test("Sprawdzenie trzeciego przycisku", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").nth(1)).toHaveAttribute("src", "https://www.bankmillennium.pl/documents/10184/26610621/appStores2_%402x-22px.png/48cd0a2e-ba9c-4294-963a-298fb796ca9e?t=1524236602417");
    });
    test("Sprawdzenie czwartego przycisku", async ({page}) => {
      await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").nth(2)).toHaveAttribute("src", "https://www.bankmillennium.pl/documents/10184/26610621/AppBaner2_Badge.png/f8956373-a910-880c-b193-20fa2c75a7fc?t=1608122942493");
    })

  })
  // test.describe("Sprawdzenie działania buttonów", () => {
  //   test("Przeklikanie buttonów", async ({page}) => {
  //     await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_UhhHSnOotsm0_ section.bmp-app-banner.wrapper div.bmp-app-banner__content ul.bmp-app-banner__links li a picture img").first().click();
  //     await page.waitForLoadState('domcontentloaded');
  //     await page.waitForLoadState('networkidle');
  //     await expect(page).toHaveURL("https://apps.apple.com/pl/app/bank-millennium/id412646128");
  //     await page.waitForLoadState('domcontentloaded');
  //     await expect(page).toHaveTitle("Bank Millennium on the App Store");
  //   })
  // })
  test.describe("Test footer", () => {
    test("Test styli kontenera", async ({page}) => {
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons")).toHaveCSS("max-width", "1840px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons")).toHaveCSS("padding-left", "40px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons")).toHaveCSS("padding-right", "40px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons")).toHaveCSS("overflow", "visible");
    });
    test("Testy styli footer-top - kontener", async ({page}) => {
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row")).toHaveCSS("line-height", "52px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row")).toHaveCSS("padding", "24px 0px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row")).toHaveCSS("margin-top", "100px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row")).toHaveCSS("border-top", "1px solid rgb(237, 237, 237)");
    });
    test("Testy styli footer-top - telefony", async ({page}) => {
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("display", "flex");
      const elementFooterFF = page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel");
      const footerFlexFlow= await elementFooterFF.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
      });

      expect(flexFlowArray).toContain(footerFlexFlow);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("flex-flow", footerFlexFlow);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("position", "relative");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("min-height", "1px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("padding-left", "10px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("padding-right", "10px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("float", "left");
      let elementFooterTopWidthRight = page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel");
    let footerTopWidthRight= await elementFooterTopWidthRight.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
    });
    const FooterTopWidthArrayRight = ["586.667px", "586.656px", "586.65625px"]
      expect(FooterTopWidthArrayRight).toContain(footerTopWidthRight);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("width", footerTopWidthRight);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-3.col-lg-4.footer__top--tel")).toHaveCSS("box-sizing", "border-box");
    });
    test("Sprawdzenie styli linków buttonów", async ({page}) => {
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("justify-content", "flex-end");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("display", "flex");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("text-align", "right");
      const elementFooterFFtwo = page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links");
      const footerFlexFlowtwo= await elementFooterFFtwo.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
      });

      expect(flexFlowArray).toContain(footerFlexFlowtwo);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("flex-flow", footerFlexFlowtwo);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("position", "relative");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("min-height", "1px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("padding-left", "10px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("padding-right", "10px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("float", "left");
      let elementFooterTopWidthTwo = page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links");
      let footerTopWidthTwo= await elementFooterTopWidthTwo.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
    });
    const FooterTopWidthArrayTwo = ["1173.328125px", "1173.33px"]
      expect(FooterTopWidthArrayTwo).toContain(footerTopWidthTwo);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("width", footerTopWidthTwo);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")).toHaveCSS("box-sizing", "border-box");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li").first()).toHaveCSS("flex", "0 0 auto");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li").first()).toHaveCSS("font-weight", "400");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li").first()).toHaveCSS("color", ColorGray10);
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a").first()).toHaveCSS("padding-left","52px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a").first()).toHaveCSS("position","relative");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a").first()).toHaveCSS("margin-left","35px");
      // await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a:hover").first()).toHaveCSS("text-decoration","underline");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("width","42px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("height","42px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("top","-13px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("position","absolute");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("left","0px");
      await expect(page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a i").first()).toHaveCSS("background-image","url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22bmp-i-marker-footer-Warstwa_1%22%20viewBox%3D%220%200%2035%2035%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cstyle%3E.st0%7Bfill%3A%23bd004f%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22m17.6%2017.7l-3.4-7.9c-1-2.4-2.5-3.4-3.7-3.7-0.6-0.1-1.3-0.1-1.9-0.1%200.6%200%201.2%200.2%201.8%200.5%200.9%200.6%201.4%201.9%201.2%203.7l-1.1%207.9c-0.1%201-0.4%202.6-0.4%202.6h1.5s0.1-1.2%200.2-2.3l1-7.7%203.4%208.1c0.3%200.9%200.9%201.6%201.6%202.2l4-10.3%201%208.6c0.1%200.6%200.1%201.4%200.1%201.4h2s-0.2-1-0.3-1.9l-1.2-8.8c0-0.4-0.1-1.1-0.1-1.1h-2.4c0%200.4-0.1%200.8-0.3%201.1l-3%207.7z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22m17%202c-1.8%200-3.6%200.4-5.2%201.1-0.5%200.2-0.8%200.8-0.6%201.3s0.8%200.7%201.3%200.6h0.1c5.6-2.4%2012.1%200.1%2014.5%205.7%200.6%201.3%200.9%202.8%200.9%204.3-0.1%201.7-0.6%203.3-1.3%204.8-0.9%201.9-2%203.7-3.3%205.4-1.9%202.4-4%204.6-6.4%206.4-2.4-1.9-4.6-4.1-6.5-6.6-1.2-1.7-2.3-3.5-3.2-5.4-0.8-1.3-1.2-3-1.3-4.6%200-2.3%200.7-4.5%202-6.3%200.3-0.5%200.1-1.1-0.4-1.4-0.4-0.2-0.9-0.1-1.2%200.2-1.6%202.2-2.4%204.8-2.4%207.5%200.1%202%200.6%203.9%201.5%205.6%201%202%202.1%203.9%203.4%205.7%202.1%202.8%204.5%205.2%207.3%207.3%200.5%200.4%201.1%200.4%201.6%200%202.7-2.1%205.1-4.5%207.2-7.2%201.3-1.8%202.5-3.7%203.4-5.7%200.9-1.8%201.4-3.7%201.6-5.7%200-7.2-5.8-13-13-13z%22%2F%3E%3C%2Fsvg%3E\")");
    })

  });
  // test.describe.only("Testy funkcjonalności footer top", () => {
  //   test("Przeklinie buttonów", async ({browser}) => {
      
  //     // await page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li").locator("nth=0").click()
  //     // await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/oddzialy-i-bankomaty");
  //     // await expect(page).toHaveTitle("Znajdź nasz bankomat, wpłatomat lub oddział w pobliżu Ciebie - Bank Millennium");
      
  //     // await page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links li a").nth(1).click()
  //     // await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/kontakt/formularz-kontaktu");
  //     // await expect(page).toHaveTitle("Formularz kontaktowy - O Banku - Bank Millennium");
  //     const context = await browser.newContext();
  //     const page = await context.newPage();
  //     await page.goto("https://www.bankmillennium.pl")
  //     const kokoss = page.locator("ul.footer__top--links li").first()
  //     const kokosz = page.locator("footer.sc-footer.wrapper.chat-button-dock.f-buttons div.footer__top.row ul.col-md-9.col-lg-8.footer__top--links")
  //     await kokosz.scrollIntoViewIfNeeded();

  //     const [newPage] = await Promise.all(
  //       [
  //         context.waitForEvent("page"),
  //         kokoss.click()
  //       ]
  //     )
  //     await expect(newPage).toHaveURL("https://www.bankmillennium.pl/o-banku/oddzialy-i-bankomaty");
  //   })
  // })
test.describe("Test footer middle", () => {
  test("Test styli kontenera", async ({page}) => {
    await expect(page.locator("div.footer__middle.row")).toHaveCSS("border-top", "1px solid rgb(237, 237, 237)")
    await expect(page.locator("div.footer__middle.row")).toHaveCSS("padding", "38px 0px")
    await expect(page.locator("div.footer__middle.row")).toHaveCSS("display", "block")
  });
  test("Sprawdzenie styli kolumn", async ({page}) => {
    //kontener
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("position", "relative");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("min-height", "1px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("padding-left", "10px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("padding-right", "10px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("float", "left");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("width", "440px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3").first()).toHaveCSS("box-sizing", "border-box");
    //title
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("font-size", "17px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("line-height", "17px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("display", "block");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("color", ColorTextStrong);
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("margin-bottom", "15px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title").first()).toHaveCSS("font-weight", "700");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title span.middle__title__h3").first()).toHaveCSS("display", "inline-block");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title span.middle__title__h3").first()).toHaveCSS("font-size", "17px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title span.middle__title__h3").first()).toHaveCSS("line-height", "17px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 strong.middle__title span.middle__title__h3").first()).toHaveCSS("font-weight", "700");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 ul.collapse__list li a").first()).toHaveCSS("font-size", "16px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 ul.collapse__list li a").first()).toHaveCSS("line-height", "30px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 ul.collapse__list li a").first()).toHaveCSS("color", ColorTextStandard);
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3 div.column__collapse").nth(1)).toHaveCSS("margin-top", "52px");
  });
  test("Sprawdzenie styli kolumny - Kursy wymiany walut", async ({page}) => {
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("position", "relative");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("min-height", "1px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("padding-left", "10px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("padding-right", "10px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("float", "right");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("width", "440px");
    await expect(page.locator("div.footer__middle.row div.col-xs-12.col-md-4.col-lg-3.right").first()).toHaveCSS("box-sizing", "border-box");
  })
})
test.describe("Testy funkcjonalne footer middle", () => {
  test("Przeklikanie linków", async ({page}) => {
    const footerLinkFirstColumn = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_MIDDLE_COL1_ li a");
    const footerLinkSecondColumn = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_MIDDLE_COL2_ li a");
    const footerLinkThirdColumn = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_MIDDLE_COL3_ li a");
    const footerLinkFourthColumn = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_WC_FOOTER_QUOTATIONS_ div.journal-content-article  table.exchange-rates__table a");
    await footerLinkFirstColumn.first().click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/wniosek-o-konto-osobiste?ca_btn=14&nr=btn_ca_14&portalId=713");
    await expect(page).toHaveTitle("Wniosek o Konto Millennium 360° - Bank Millennium");
    await page.goBack();

    await footerLinkFirstColumn.nth(1).click();
    await page.locator("div.sc-btn-modal__content.content--width-auto a:has-text('WYPEŁNIJ WNIOSEK')").click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/wniosek-o-pozyczke-online?affiliatedId=713");
    await expect(page).toHaveTitle("Wniosek o pożyczkę gotówkową online - Bank Millennium")
    await page.goBack();

    await footerLinkFirstColumn.nth(2).click()
    await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/kontakt-z-doradca/karty-kredytowe");
    await expect(page).toHaveTitle("Karty kredytowe - Kontakt z Doradcą - Bank Millennium")
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_KBCbPtHhqcio_")).toBeVisible();

    await footerLinkFirstColumn.nth(3).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/kontakt-z-doradca/pozyczka-gotowkowa");
    await expect(page).toHaveTitle("Pożyczka Gotówkowa - Kontakt z Doradcą - Bank Millennium");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BFz2zaZylo8p_")).toBeVisible();
    await (page).goBack();

    await footerLinkFirstColumn.nth(4).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/kontakt-z-doradca/kredyt-hipoteczny");
    await expect(page).toHaveTitle("Kredyt Hipoteczny - Kontakt z Doradcą - Bank Millennium");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_gu2FBpjfffdU_")).toBeVisible();
    await (page).goBack();

    await footerLinkFirstColumn.nth(5).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/kontakt-z-doradca/karty-kredytowe");
    await expect(page).toHaveTitle("Karty kredytowe - Kontakt z Doradcą - Bank Millennium");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_KBCbPtHhqcio_")).toBeVisible();
    await (page).goBack();

    await footerLinkSecondColumn.first().click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/kim-jestesmy");
    await expect(page).toHaveTitle("Kim jesteśmy - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(1).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/kariera");
    await expect(page).toHaveTitle("Kariera - Bank Millennium");

    await footerLinkSecondColumn.nth(2).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/wladze-banku-i-lad-korporacyjny");
    await expect(page).toHaveTitle("Władze banku i ład korporacyjny - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(3).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/centrum-prasowe");
    await expect(page).toHaveTitle("Centrum prasowe - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(4).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/relacje-inwestorskie");
    await expect(page).toHaveTitle("Relacje inwestorskie - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(5).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/serwis-ekonomiczny");
    await expect(page).toHaveTitle("Serwis ekonomiczny - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(6).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/marze-walutowe-dla-kart");
    await expect(page).toHaveTitle("Marże walutowe dla kart - Bank Millennium");

    await footerLinkSecondColumn.nth(7).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/informacje-wymagane-prawem");
    await expect(page).toHaveTitle("Informacje wymagane prawem - Bank Millennium");

    await footerLinkSecondColumn.nth(8).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/nieruchomosci-millennium");
    await expect(page).toHaveTitle("Nieruchomości Millennium - O Banku - Bank Millennium");

    await footerLinkSecondColumn.nth(9).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/franczyza");
    await expect(page).toHaveTitle("Franczyza - Bank Millennium");

    await footerLinkThirdColumn.first().click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/esg");
    await expect(page).toHaveTitle("ESG - O Banku - Bank Millennium");

    await footerLinkThirdColumn.nth(1).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/fundacja");
    await expect(page).toHaveTitle("Fundacja - Bank Millennium");

    await footerLinkThirdColumn.nth(2).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/centrum-prasowe/mecenat-kultury");
    await expect(page).toHaveTitle("Mecenat nad kulturą - O Banku - Bank Millennium");

    await footerLinkThirdColumn.nth(3).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/o-banku/mifid");
    await expect(page).toHaveTitle("MiFID - O Banku - Bank Millennium");

    await footerLinkThirdColumn.nth(4).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/o-banku/fatca");
    await expect(page).toHaveTitle("FATCA - Bank Millennium");

    await footerLinkThirdColumn.nth(5).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/o-banku/crs");
    await expect(page).toHaveTitle("Podatki – pytania i odpowiedzi - Bank Millennium - Bank Millennium");

    await footerLinkThirdColumn.nth(6).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/o-banku/gwarancje-bfg");
    await expect(page).toHaveTitle("Gwarancje BFG - O Banku - Bank Millennium");

    await footerLinkThirdColumn.nth(7).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/klienci-indywidualni/psd2");
    await expect(page).toHaveTitle("Co warto wiedzieć o PSD2 - Bank Millennium");

    await footerLinkThirdColumn.nth(8).click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/o-banku/wskazniki-referencyjne");
    await expect(page).toHaveTitle("Wskaźniki referencyjne - Bank Millennium");

    await footerLinkFourthColumn.click();
    await expect(page).toHaveURL("https://www.bankmillennium.pl/o-banku/serwis-ekonomiczny/kursy-walut");
    await expect(page).toHaveTitle("Aktualny kurs walut – sprawdź po ile jest EUR, USD, CHF i inne - Bank Millennium");
  });
  // test("Sprawdzenie daty kursów walut", async ({page}) => {
  //   const fullDate = new Date();
  //   const day = fullDate.getDate();
  //   const month = fullDate.getMonth() + 1;
  //   const year = fullDate.getFullYear();
  //   const todayDate = `${day}.${month}.${year}`;
  //   console.log(todayDate);
  // })
})
test.describe("Testy styli footer bottom", () => {
  test("Sprawdzenie styli kontenera", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row")).toHaveCSS("min-height", "40px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row")).toHaveCSS("border-top", "1px solid rgb(237, 237, 237)");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row")).toHaveCSS("padding", "26px 0px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row")).toHaveCSS("margin", "0px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row")).toHaveCSS("display", "block");
  });
  test("Testy styli lewej strony", async ({page}) => {
    // let kokos = await page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5");
    // let kyky= await kokos.evaluate((el) => {
    //   return window.getComputedStyle(el).getPropertyValue('width');
    // });
    // // let kykyNumber = kyky * 1;
    // let kykyNumber = kyky * 1;
    // let job = parseInt(kyky, "10");
    // console.log(kyky);
    // console.log(typeof(kyky) + "   string");
    // console.log(typeof(kykyNumber) + "      number");
    // console.log(kykyNumber);
    // console.log(typeof(job) + "    number");
    // console.log(job);



    // await expect(kykyNumber).toBeCloseTo(job);
    let elementFooterBottomWidth = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5");
    let footerBottomWidth= await elementFooterBottomWidth.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
    });
    const FooterBottomWidthArray = ["733.328px", "733.333px", "733.328125px", "733.328px"]
      expect(FooterBottomWidthArray).toContain(footerBottomWidth);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("width", footerBottomWidth);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("box-sizing", "border-box");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("float", "left");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("padding-right", "10px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("padding-left", "10px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("min-height", "1px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5")).toHaveCSS("position", "relative");
  })
  test("Sprawdzenie styli listy", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links")).toHaveCSS("display", "flex");
    let elementFlexFlowFooter = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links");
    let flexflowFooter= await elementFlexFlowFooter.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
    });
      expect(flexFlowArray).toContain(flexflowFooter);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links")).toHaveCSS("flex-flow", flexflowFooter);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links")).toHaveCSS("line-height", "40px");
  });
  test("Sprawdzenie styli elementu listy", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li").first()).toHaveCSS("flex", "0 0 auto");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li").first()).toHaveCSS("color", ColorGray10);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li").first()).toHaveCSS("font-weight", "400");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li a").first()).toHaveCSS("padding-left", "0px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li a").first()).toHaveCSS("font-size", "16px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li a").first()).toHaveCSS("line-height", "20px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-5 ul.footer__bottom--links li a").first()).toHaveCSS("color", ColorGray10);
  });
  test("Sprawdzenie styli prawej strony", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("box-sizing", "border-box");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("float", "left");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("padding-right", "10px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("padding-left", "10px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("min-height", "1px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("position", "relative");
    let elementFooterBottomWidthRight = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7");
    let footerBottomWidthRight= await elementFooterBottomWidthRight.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('width');
    });
    const FooterBottomWidthArrayRight = ["1026.66px", "1026.65625px", "1026.65px"]
      expect(FooterBottomWidthArrayRight).toContain(footerBottomWidthRight);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7")).toHaveCSS("width", footerBottomWidthRight);
  });
  test("Sprawdzenie styli bottom copy", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy")).toHaveCSS("padding-right", "250px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy")).toHaveCSS("line-height", "40px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy")).toHaveCSS("text-align", "right");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__bic")).toHaveCSS("font-size", "16px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__bic")).toHaveCSS("line-height", "20px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__bic")).toHaveCSS("color", "rgb(115, 115, 115)");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__text")).toHaveCSS("color", "rgb(115, 115, 115)");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__text")).toHaveCSS("font-size", "16px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__text")).toHaveCSS("padding-left", "30px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 div.footer__bottom--copy span.copy__text")).toHaveCSS("line-height", "20px");
    
  })
  test("Sprawdzenie styli ikon", async ({page}) => {
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("display", "flex");
    let elementFlexFlowFooterRight = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links");
    let flexflowFooterRight= await elementFlexFlowFooterRight.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('flex-flow');
    });
      expect(flexFlowArray).toContain(flexflowFooterRight);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("flex-flow", flexflowFooterRight);
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, -19)");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("line-height", "40px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("position", "absolute");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("right", "10px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links")).toHaveCSS("top", "20px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li").first()).toHaveCSS("flex", "0 0 auto");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("padding-left", "0px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("width", "37px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("height", "37px");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("background-color", "rgb(27, 38, 112)");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("display", "inline-block");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("overflow", "hidden");
    await expect(page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a").first()).toHaveCSS("margin-left", "10px");
  })
  test("Sprawdzenie wyświetlania ikon na linkach", async ({page}) => {
    const footerBottomLink = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a i");
    const footerBottomLinkImg = page.locator("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_SC_FOOTER_BOTTOM_ div.footer__bottom.row div.col-xs-12.col-md-6.col-lg-7 ul.footer__bottom--icon-links li a img");

    await expect((footerBottomLink).first()).toHaveCSS("background-image", "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2045%2045%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22m22.5%2024.3c-3.5%200-6.4-2.9-6.4-6.4s2.9-6.4%206.4-6.4%206.4%202.9%206.4%206.4-2.9%206.4-6.4%206.4m10.1-12.8l3.8-3.8-3.9-3.9-3.8%203.8-0.2-0.1c-1.8-1.1-3.9-1.7-6.1-1.7-6.6%200-12%205.4-12%2012s5.4%2012%2012%2012%2012-5.4%2012-12c0-2.2-0.6-4.3-1.7-6.2l-0.1-0.1z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m22.5%2035.5c-3.9%200-7.5-1.2-10.6-3.6l-3.5%204.4c4.1%203.1%208.9%204.8%2014.1%204.8%205.1%200%2010-1.6%2014-4.8l-3.5-4.4c-3%202.3-6.6%203.6-10.5%203.6%22%20fill%3D%22%23dc2865%22%2F%3E%3C%2Fsvg%3E\")")
    await expect((footerBottomLink).first()).toBeVisible();
    await expect((footerBottomLinkImg).first()).toHaveAttribute("src", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' viewBox='0 0 1200 1227' fill='none'%3E%3Cpath d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z' fill='white'/%3E%3C/svg%3E")
    await expect((footerBottomLinkImg).first()).toBeVisible();
    await expect((footerBottomLink).nth(2)).toHaveCSS("background-image", "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22m186.4%20142.4c0%2019-15.3%2034.5-34.2%2034.5s-34.2-15.4-34.2-34.5c0-19%2015.3-34.5%2034.2-34.5s34.2%2015.5%2034.2%2034.5zm-5%2058.9h-57.8v186.8h57.8v-186.8zm92.4%200h-55.4v186.8h55.4v-98c0-26.3%2012.1-41.9%2035.2-41.9%2021.3%200%2031.5%2015%2031.5%2041.9v98h57.5v-118.3c0-50-28.3-74.2-68-74.2-39.6%200-56.3%2030.9-56.3%2030.9v-25.2h0.1z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E\")")
    await expect((footerBottomLink).nth(2)).toBeVisible();
    await expect((footerBottomLink).last()).toHaveCSS("background-image", "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20d%3D%22m186.4%20142.4c0%2019-15.3%2034.5-34.2%2034.5s-34.2-15.4-34.2-34.5c0-19%2015.3-34.5%2034.2-34.5s34.2%2015.5%2034.2%2034.5zm-5%2058.9h-57.8v186.8h57.8v-186.8zm92.4%200h-55.4v186.8h55.4v-98c0-26.3%2012.1-41.9%2035.2-41.9%2021.3%200%2031.5%2015%2031.5%2041.9v98h57.5v-118.3c0-50-28.3-74.2-68-74.2-39.6%200-56.3%2030.9-56.3%2030.9v-25.2h0.1z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E\")")
    await expect((footerBottomLink).last()).toBeVisible();
  })
})
    
    
    

      


      
    



   



