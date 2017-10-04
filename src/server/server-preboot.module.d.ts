import { InjectionToken, ModuleWithProviders, RendererFactory2 } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { PrebootRecordOptions } from '../common';
export declare function loadPrebootFactory(state: PlatformState, rendererFactory: RendererFactory2, opts: PrebootRecordOptions): () => void;
export declare const PREBOOT_RECORD_OPTIONS: InjectionToken<PrebootRecordOptions>;
export declare class ServerPrebootModule {
    static recordEvents(opts?: PrebootRecordOptions): ModuleWithProviders;
}
export declare function addInlineCodeToDocument(inlineCode: string, doc: Document, rendererFactory: RendererFactory2): void;
