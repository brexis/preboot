"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var inline_preboot_code_1 = require("./inline.preboot.code");
function loadPrebootFactory(state, rendererFactory, opts) {
    return function () {
        var doc = state.getDocument();
        var inlinePrebootCode = inline_preboot_code_1.getInlinePrebootCode(opts);
        addInlineCodeToDocument(inlinePrebootCode, doc, rendererFactory);
    };
}
exports.loadPrebootFactory = loadPrebootFactory;
exports.PREBOOT_RECORD_OPTIONS = new core_1.InjectionToken('PrebootRecordOptions');
// only thing this does is modify the document
var ServerPrebootModule = /** @class */ (function () {
    function ServerPrebootModule() {
    }
    ServerPrebootModule_1 = ServerPrebootModule;
    // user can override the default preboot options by passing them in here
    ServerPrebootModule.recordEvents = function (opts) {
        if (opts === void 0) { opts = { appRoot: 'app-root' }; }
        return {
            ngModule: ServerPrebootModule_1,
            providers: [
                { provide: exports.PREBOOT_RECORD_OPTIONS, useValue: opts },
                {
                    // this likely will never be injected but need something to run the
                    // factory function
                    provide: core_1.APP_BOOTSTRAP_LISTENER,
                    // generate the inline preboot code and inject it into the document
                    useFactory: loadPrebootFactory,
                    multi: true,
                    // we need access to the document and renderer
                    deps: [platform_server_1.PlatformState, core_1.RendererFactory2, exports.PREBOOT_RECORD_OPTIONS]
                }
            ]
        };
    };
    ServerPrebootModule = ServerPrebootModule_1 = __decorate([
        core_1.NgModule()
    ], ServerPrebootModule);
    return ServerPrebootModule;
    var ServerPrebootModule_1;
}());
exports.ServerPrebootModule = ServerPrebootModule;
function addInlineCodeToDocument(inlineCode, doc, rendererFactory) {
    var renderType = { id: '-1', encapsulation: core_1.ViewEncapsulation.None, styles: [], data: {} };
    var renderer = rendererFactory.createRenderer(doc, renderType);
    var script = renderer.createElement('script');
    renderer.setValue(script, inlineCode);
    renderer.insertBefore(doc.head, script, doc.head.firstChild);
}
exports.addInlineCodeToDocument = addInlineCodeToDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXByZWJvb3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLXByZWJvb3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBUXVCO0FBQ3ZCLDREQUF5RDtBQUV6RCw2REFBNkQ7QUFFN0QsNEJBQ0UsS0FBb0IsRUFDcEIsZUFBaUMsRUFDakMsSUFBMEI7SUFFMUIsTUFBTSxDQUFDO1FBQ0wsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQU0saUJBQWlCLEdBQUcsMENBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsdUJBQXVCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztBQUNKLENBQUM7QUFWRCxnREFVQztBQUVZLFFBQUEsc0JBQXNCLEdBQUcsSUFBSSxxQkFBYyxDQUF1QixzQkFBc0IsQ0FBQyxDQUFDO0FBRXZHLDhDQUE4QztBQUU5QztJQUFBO0lBeUJBLENBQUM7NEJBekJZLG1CQUFtQjtJQUU5Qix3RUFBd0U7SUFDakUsZ0NBQVksR0FBbkIsVUFBb0IsSUFBb0Q7UUFBcEQscUJBQUEsRUFBQSxTQUErQixPQUFPLEVBQUUsVUFBVSxFQUFFO1FBQ3RFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDhCQUFzQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ25EO29CQUVFLG1FQUFtRTtvQkFDbkUsbUJBQW1CO29CQUNuQixPQUFPLEVBQUUsNkJBQXNCO29CQUUvQixtRUFBbUU7b0JBQ25FLFVBQVUsRUFBRSxrQkFBa0I7b0JBRTlCLEtBQUssRUFBRSxJQUFJO29CQUVYLDhDQUE4QztvQkFDOUMsSUFBSSxFQUFFLENBQUMsK0JBQWEsRUFBRSx1QkFBZ0IsRUFBRSw4QkFBc0IsQ0FBQztpQkFDaEU7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBeEJVLG1CQUFtQjtRQUQvQixlQUFRLEVBQUU7T0FDRSxtQkFBbUIsQ0F5Qi9CO0lBQUQsMEJBQUM7O0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksa0RBQW1CO0FBMkJoQyxpQ0FBd0MsVUFBa0IsRUFBRSxHQUFhLEVBQUUsZUFBaUM7SUFDMUcsSUFBTSxVQUFVLEdBQWtCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQzVHLElBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFORCwwREFNQyJ9