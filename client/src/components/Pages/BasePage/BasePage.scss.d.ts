declare namespace BasePageScssNamespace {
  export interface IBasePageScss {
    container: string;
  }
}

declare const BasePageScssModule: BasePageScssNamespace.IBasePageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BasePageScssNamespace.IBasePageScss;
};

export = BasePageScssModule;
