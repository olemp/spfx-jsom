import { SPComponentLoader } from '@microsoft/sp-loader';
import { CreateJsomContext, ExecuteJsomQuery, JsomContext } from "jsom-ctx";

export interface ISpfxJsomOptions {
    loadPublishing?: boolean;
    loadTaxonomy?: boolean;
}

export default async function initSpxJsom(url: string, options: ISpfxJsomOptions = {}): Promise<JsomContext> {
    await SPComponentLoader.loadScript('/_layouts/15/init.js', { globalExportsName: '$_global_init' });
    await SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', { globalExportsName: 'Sys' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', { globalExportsName: 'SP' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.js', { globalExportsName: 'SP' });
    if (options.loadTaxonomy) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Taxonomy.js', { globalExportsName: 'SP.Taxonomy' });
    }
    if (options.loadPublishing) {
        await SPComponentLoader.loadScript('/_layouts/15/SP.Publishing.js', { globalExportsName: 'SP.Publishing' });
    }
    const jsomContext = await CreateJsomContext(url);
    return jsomContext;
}

export { ExecuteJsomQuery, JsomContext };
