// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface savePageOutput {
    filename: string
    width: number
    height: number
    hoverSelector: string
  }

  interface Chainable {
    /**
     * Creates an accurate image from the current page using
     * an external Cyclope image service
     * @param outputImageFilename string Output PNG filename to save
     * @alias cyclope
     */
    clope(outputImageFilename: string): Chainable<void>
    /**
     * Creates an accurate image from the current page using
     * an external Cyclope image service
     * @param outputImageFilename Output PNG filename to save
     * @alias clope
     */
    cyclope(outputImageFilename: string): Chainable<void>

    /**
     * Saved the current page DOM snapshot as a folder or a zip file
     * @param outputFolderOrZipFile String Output folder or zip file to save
     */
    savePage(outputFolderOrZipFile: string): Chainable<savePageOutput>
  }
}