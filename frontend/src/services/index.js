import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? //? (baseURL = 'here should be your production endpoint')
    (baseURL = "https://outbreakprojectih.herokuapp.com")
  : (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async user => {
    return await service.post("/signup", user);
  },
  logIn: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  shareArticle: async () => {
    return await service.post("/user-feed");
  },
  postArticle: async article => {
    return await service.post("/postArticle", article);
  },
  likeArticle: async article => {
    return await service.post("/likeArticle", article)
  }

  // handleUpload (theFile) { //the one that saves to cloudinary
  //   console.log('file in service: ', theFile)
  //   return service.post('/upload-image', theFile)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // },

  // saveNewThing (newThing) { // The one that saves to your database
  //   console.log('new thing is: ', newThing)
  //   return service.post('/things/create', newThing)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // },

  // getAllImages: async () => {
  //   return await service.get
  // }
};

export default actions;
