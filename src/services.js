const SERIVCE_URL = 'https://api.github.com/repos/angular/angular.js/issues';

const getData = (service = '') => fetch(`${SERIVCE_URL}${service}`).then((data) => data.json());

export default getData;
