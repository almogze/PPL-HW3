import { concat } from "ramda";
import { expect } from 'chai';
import { makeVarDecl, makeVarRef, parseL21 } from '../ex3/L21-ast';
import { isEnv, makeExtEnv, applyEnv, theGlobalEnv, globalEnvAddBinding, makeEmptyStore, isStore, theStore, extendStore, Store, applyStore } from '../ex3/L21-env-store';
import { makeClosure } from '../ex3/L21-value-store';
import { evalParse, evalProgram } from '../ex3/L21-eval-store';
import { makeOk, bind, isFailure } from '../shared/result';

const s: Store = makeEmptyStore()
const s1 = extendStore(s, 1);
const s2 = extendStore(s1, "a");

console.log(applyStore(s2, 1));


