# spfx-jsom
Use JSOM in SPFx with `async-await`. `spfx-jsom` takes care of loading the required SP libs.

## Install
```powershell
npm i spfx-jsom --save
```

## Import using commonjs
```javascript
import initSpfxJsom, { ExecuteJsomQuery, JsomContext } from "spfx-jsom";
```

## Sample 1 - Get all web properties
```javascript
private async getAllWebProperties() {
    try {
      const jsomCtx = await initSpfxJsom([SITE_URL]);
      const webAllProperties = jsomCtx.web.get_allProperties();
      await ExecuteJsomQuery(jsomCtx, [{ clientObject: webAllProperties }]);
      return webAllProperties.get_fieldValues();
    } catch (err) {
      throw err;
    }
  }
```
