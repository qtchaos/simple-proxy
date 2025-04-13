import { join } from "path";
import pkg from "./package.json";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  noPublicDir: true,
  srcDir: "./src",
  compatibilityDate: '2025-04-13',
  runtimeConfig: {
    version: pkg.version
  },
  alias: {
    "@": join(__dirname, "src")
  }
});
