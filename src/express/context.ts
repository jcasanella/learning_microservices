import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

export default class Context {
  static _bindings = new WeakMap<Request, Context>();
  
  public traceId = uuidv4();
   
  constructor () {}
    
  static bind (req: Request) : void {
    const ctx = new Context();
    Context._bindings.set(req, ctx);
  }
    
  static get (req: Request) : Context | null {
    return Context._bindings.get(req) || null;
  }
}