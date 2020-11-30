declare namespace HeaderScssNamespace {
  export interface IHeaderScss {
    activeLink: string;
    header: string;
    headerRoot: string;
    icon: string;
    list: string;
    listItem: string;
    logo: string;
    navbar: string;
    title: string;
  }
}

declare const HeaderScssModule: HeaderScssNamespace.IHeaderScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderScssNamespace.IHeaderScss;
};

export = HeaderScssModule;
