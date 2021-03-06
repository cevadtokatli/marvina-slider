export enum SliderType {
    Carousel,
    Flow,
    Fade
}

export interface SliderElement {
    el?: HTMLElement;
    wrapperEl?: HTMLDivElement;
    id?: string;
    sliderType?: SliderType;
    before?: (el:SliderElement, active?:boolean) => Promise<void>;
    after?: (el:SliderElement, active?:boolean) => Promise<void>;
}