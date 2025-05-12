export const searchElements = {
    search: 'input[data-testid="search-form-input"]',
    btnStartSearch: 'button[data-testid="search-form-button"]',
    searchSugtestion: 'a[data-testid="suggestions-link"]',
    btnClose: '[id="close"]',
    
}
class SearchElements{
    get search() {
        return searchElements.search
    }
    get btnStartSearch() {
        return searchElements.btnStartSearch
    }
    get searchSugtestion() {
        return searchElements.searchSugtestion
    }
    get btnClose() {
        return searchElements.btnClose
    }
}
export default new SearchElements()