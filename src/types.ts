export interface Company {
  name: string;
}
export type CompanyInfo = {
  name: string;
  links: Array<string>;
};

export enum Mode {
  OPENAI = "OPENAI",
  GROQ = "GROQ",
}
