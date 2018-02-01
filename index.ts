import { SPComponentLoader } from '@microsoft/sp-loader';
import { CreateJsomContext, ExecuteJsomQuery, JsomContext } from "jsom-ctx";

export default async function initJsom(url: string): Promise<JsomContext> {
    await SPComponentLoader.loadScript('/_layouts/15/init.js', { globalExportsName: '$_global_init' });
    await SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', { globalExportsName: 'Sys' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', { globalExportsName: 'SP' });
    await SPComponentLoader.loadScript('/_layouts/15/SP.js', { globalExportsName: 'SP' });
    return await CreateJsomContext(url);
}

export { ExecuteJsomQuery };
