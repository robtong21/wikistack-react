import axios from 'axios';
import store from './store'

// actions
const LOAD_PAGES = 'LOAD_PAGES';
const ADD_PAGE = 'ADD_PAGE';

// action creators
export const addPage = (page) => ({
    type: ADD_PAGE,
    page
})

export const loadPages = (pages) => ({
  type: LOAD_PAGES,
  pages
})

export const pages = (pages = [], action) => {
  switch(action.type) {
    case LOAD_PAGES:
      return action.pages;
    case ADD_PAGE:
      // return [...pages, action.page];
      return pages.concat(action.page);
    default: return pages
  }
}

//dispatchers
export const postPage = newWikiPage => dispatch => {
    axios.post('/api/wiki', newWikiPage)
    .then(res => res.data)
    .then(page => {
      // console.log(page)
      dispatch(addPage(page))
    })
}

export const getAllPages = () => dispatch => {
    axios.get('/api/wiki')
    .then(res => res.data)
    .then(pages => {
      dispatch(loadPages(pages))
    })
}

