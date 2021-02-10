import { createContext } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as langBR } from './langBR.json';

const LanguageContext = createContext(langBR);

export default LanguageContext;
