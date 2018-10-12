import PortfolioApi from "./api/portfolioapi";

export const loadPortfolio = ({ commit }) => {
  return new PortfolioApi().fetchPortfolio(
    portfolio => {
      commit("LOAD_PORTFOLIO", portfolio);
    },
    fail => {
      alert(fail);
    }
  );
};
