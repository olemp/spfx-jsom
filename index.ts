import { SPComponentLoader } from '@microsoft/sp-loader';
import { CreateJsomContext, ExecuteJsomQuery, JsomContext } from "jsom-ctx";

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
export default async function initSpxJsom(url: string, { loadPublishing, loadTaxonomy }: ISpfxJsomOptions = {}): Promise<ISpfxJsomContext> {
    await SPComponentLoader.loadScript('/_layouts/15/init.js', { globalExportsName: '$_global_init' });
    await SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', { globalExportsName: 'Sys' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', { globalExportsName: 'SP' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.js', { globalExportsName: 'SP' });
    if (loadTaxonomy) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Taxonomy.js', { globalExportsName: 'SP' });
    }
    if (loadPublishing) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Publishing.js', { globalExportsName: 'SP' });
    }
    const jsomContext = await CreateJsomContext(url);
    if (loadTaxonomy) {
        const taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(jsomContext.clientContext);
        const defaultTermStore = taxSession.getDefaultSiteCollectionTermStore();
        return { jsomContext, defaultTermStore };
    }
    return { jsomContext };
}

export { ExecuteJsomQuery, JsomContext };
