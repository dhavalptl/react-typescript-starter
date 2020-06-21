/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="webpack-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

  
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}