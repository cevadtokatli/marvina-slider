import {SliderElement} from "./slider-element";

export interface BeforeCallback {
    (current?:SliderElement, next?:SliderElement): Promise<void>;
}

export interface AfterCallback {
    (current?:SliderElement, prev?:SliderElement): Promise<void>;
}

export interface Callbacks {
    before?: BeforeCallback;
    after?: AfterCallback;
}