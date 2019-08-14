/// <reference types="sharepoint" />
import { ExecuteJsomQuery, JsomContext } from "jsom-ctx";
export interface ISpfxJsomOptions {
    loadPublishing?: boolean;
    loadTaxonomy?: boolean;
}
export interface ISpfxJsomContext {
    jsomContext: JsomContext;
    defaultTermStore?: SP.Taxonomy.TermStore;
}
/**
 * Initialize JSOM context for SharePoint Framework
 *
 * @param {string} url Url
 * @param {ISpfxJsomOptions} options Options
 */
export default function initSpxJsom(url: string, { loadPublishing, loadTaxonomy }?: ISpfxJsomOptions): Promise<ISpfxJsomContext>;
export { ExecuteJsomQuery, JsomContext };
