import { SPComponentLoader } from '@microsoft/sp-loader';
import { CreateJsomContext, ExecuteJsomQuery, JsomContext } from "jsom-ctx";

export default async function initJsom(url: string, loadTaxonomy = false, loadPublishing = false): Promise<JsomContext> {
    await SPComponentLoader.loadScript('/_layouts/15/init.js', { globalExportsName: '$_global_init' });
    await SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', { globalExportsName: 'Sys' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', { globalExportsName: 'SP' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.js', { globalExportsName: 'SP' });
    if(loadTaxonomy) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Taxonomy.js', { globalExportsName: 'SP.Taxonomy' });
    }
    if(loadPublishing) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Publishing.js', { globalExportsName: 'SP.Publishing' });
    }
    const jsomContext = await CreateJsomContext(url);
    return jsomContext;
}

export { ExecuteJsomQuery, JsomContext };
