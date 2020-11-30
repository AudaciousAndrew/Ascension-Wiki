declare module "*.scss";
declare module "*.png";
declare module "*.svg" {
  const src: string;
  export default src;
}
