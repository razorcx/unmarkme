// For Node.js
import TurndownService from "turndown";

export const useTurndownService = () => {
  var turndownService = new TurndownService();
  
  return turndownService;
};
