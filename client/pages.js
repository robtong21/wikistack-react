import axios from 'axios';
import store from './store'

// actions
const LOAD_PAGES = 'LOAD_PAGES';
const ADD_PAGE = 'ADD_PAGE';

// action creators
export const addPage = ({name, email, title, content, status, tags}) => ({
    type: ADD_PAGE,
    name,
    email,
    title,
    content,
    status,
    tags
})

export const loadPages = (pages) => ({
  type: LOAD_PAGES,
  pages
})

// reducers
// export const page = (state = {}, action) => {
//   switch(action.type) {
//     case ADD_PAGE:
//       return {
//         name: action.name,
//         email: action.email,
//         title: action.title,
//         content: action.content,
//         status: action.status,
//         tags: action.tags
//       }
//     default: return state
//   }
// }

export const pages = (pages = [], action) => {
  switch(action.type) {
    case LOAD_PAGES:
      return action.pages;
    case ADD_PAGE:
      return [action.page, ...pages];
    default: return pages
  }
}

//dispatchers
export const postPage = newWikiPage => dispatch => {
    axios.post('/api/wiki', newWikiPage)
    .then(res => res.data)
    .then(page => {
      console.log(page)
      // const newPage = getState().pages.concat([page]);
      // const newPage = pages.concat([page]);
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

