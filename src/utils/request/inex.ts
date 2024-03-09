import { ProxySingletonMode } from "../util";
import { RequestFn } from "./request";

export const service = new ProxySingletonMode(RequestFn, { protocol: 'http' ,domain: '127.0.0.1', port: 3000 }).instance
