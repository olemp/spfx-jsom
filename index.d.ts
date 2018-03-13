import { ExecuteJsomQuery, JsomContext } from "jsom-ctx";
export interface ISpfxJsomOptions {
    loadPublishing?: boolean;
    loadTaxonomy?: boolean;
}
export default function initSpxJsom(url: string, options?: ISpfxJsomOptions): Promise<JsomContext>;
export { ExecuteJsomQuery, JsomContext };
