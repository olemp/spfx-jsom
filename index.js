"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_loader_1 = require("@microsoft/sp-loader");
var jsom_ctx_1 = require("jsom-ctx");
exports.ExecuteJsomQuery = jsom_ctx_1.ExecuteJsomQuery;
exports.JsomContext = jsom_ctx_1.JsomContext;
/**
 * Initialize JSOM context for SharePoint Framework
 *
 * @param {string} url Url
 * @param {ISpfxJsomOptions} options Options
 */
function initSpxJsom(url, _a) {
    var _b = _a === void 0 ? {} : _a, loadPublishing = _b.loadPublishing, loadTaxonomy = _b.loadTaxonomy;
    return __awaiter(this, void 0, void 0, function () {
        var jsomContext, taxSession, defaultTermStore;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/init.js', { globalExportsName: '$_global_init' })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', { globalExportsName: 'Sys' })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', { globalExportsName: 'SP' })];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/SP.js', { globalExportsName: 'SP' })];
                case 4:
                    _c.sent();
                    if (!loadTaxonomy) return [3 /*break*/, 6];
                    return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/SP.Taxonomy.js', { globalExportsName: 'SP' })];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    if (!loadPublishing) return [3 /*break*/, 8];
                    return [4 /*yield*/, sp_loader_1.SPComponentLoader.loadScript('/_layouts/15/SP.Publishing.js', { globalExportsName: 'SP' })];
                case 7:
                    _c.sent();
                    _c.label = 8;
                case 8: return [4 /*yield*/, jsom_ctx_1.CreateJsomContext(url)];
                case 9:
                    jsomContext = _c.sent();
                    if (loadTaxonomy) {
                        taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(jsomContext.clientContext);
                        defaultTermStore = taxSession.getDefaultSiteCollectionTermStore();
                        return [2 /*return*/, { jsomContext: jsomContext, defaultTermStore: defaultTermStore }];
                    }
                    return [2 /*return*/, { jsomContext: jsomContext }];
            }
        });
    });
}
exports.default = initSpxJsom;
//# sourceMappingURL=index.js.map