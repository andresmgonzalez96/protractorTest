
import { async } from 'q';
import { SearchCruisePage } from '../page_objects/cruise/searchCruise_page';

describe('Cruise', () => {

  it('find a cruise for position', () => {
      let searchCruiseServices = new SearchCruisePage();
      searchCruiseServices.get("https://www.carnival.com/cruise-search");
      searchCruiseServices.selectCruise(1);
      
      expect (searchCruiseServices.getCruiseName("CARNIVAL CONQUEST")).toContain("CARNIVAL CONQUEST");
  });


});