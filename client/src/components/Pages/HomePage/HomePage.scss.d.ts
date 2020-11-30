declare namespace HomePageScssNamespace {
  export interface IHomePageScss {
    head: string;
    home: string;
    title: string;
  }
}

declare const HomePageScssModule: HomePageScssNamespace.IHomePageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageScssNamespace.IHomePageScss;
};

export = HomePageScssModule;
