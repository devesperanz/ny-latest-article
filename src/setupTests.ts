import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// @ts-expect-error: import.meta is not standard in Node.js
globalThis.import = { meta: { env: {} } };

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
