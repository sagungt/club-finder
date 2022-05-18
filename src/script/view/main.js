import '../component/search-bar.js'
import '../component/club-list.js'
import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
        // fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchElement.value}`)
        //     .then(reponse => {
        //         return reponse.json()
        //     })
        //     .then(responseJson => {
        //         const club = responseJson.teams
        //         renderResult(club)
        //     })
        //     .catch(error => {
        //         fallbackResult(error)
        //     })
    };

    const renderResult = results => {
        clubListElement.clubs = results
    };

    const fallbackResult = message => {
        clubListElement.renderError(message)
    };

    searchElement.clickEvent = onButtonSearchClicked
};

export default main