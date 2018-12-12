const initialState = {
  cover: "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
  title: "React.js for the Visual Learner",
  author: "Mike Mangialardi",
  link: "https://leanpub.com/reactjsforthevisuallearner"
};

function BooksApp(state = initialState, action) {
  return state
}

export default BooksApp;

