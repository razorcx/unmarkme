import { marked } from "marked";
import DOMPurify from "dompurify";

//https://marked.js.org/
//https://github.com/cure53/DOMPurify

export const useMarkedService = (markdown: string) => {
  const parsed = marked.parse(markdown);
  const html = DOMPurify.sanitize(parsed);
  return html;
};
