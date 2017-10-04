import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { ModuleWithProviders, InjectionToken, ApplicationRef } from '@angular/core';
import { PrebootReplayOptions } from '../common';
import { EventReplayer } from './event.replayer';
export declare function eventReplayerFactory(appRef: ApplicationRef, replayer: EventReplayer, opts: PrebootReplayOptions): () => void;
export declare const PREBOOT_REPLAY_OPTIONS: InjectionToken<PrebootReplayOptions>;
export declare class BrowserPrebootModule {
    static replayEvents(opts?: PrebootReplayOptions): ModuleWithProviders;
}
