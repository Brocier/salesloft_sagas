import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore.js'

import SplashPage from './components/SplashPage.js'

import UserPage from './components/users/UserPage.js'
import NewUserForm from './components/users/NewUserForm.js'
import EditUserForm from './components/users/EditUserForm.js'
import UserProfile from './components/users/UserProfile.js'

import CityPage from './components/cities/CityPage.js'
import NewCityForm from './components/cities/NewCityForm.js'
import EditCityForm from './components/cities/EditCityForm.js'
import CityProfile from './components/cities/CityProfile.js'

import PostPage from './components/posts/PostPage.js'
import NewPostForm from './components/posts/NewPostForm.js'
import EditPostForm from './components/posts/EditPostForm.js'
import PostShow from './components/posts/PostShow.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>

    <ConnectedRouter history={history}>
      <div>

        <Route exact path="/" component={SplashPage}/>

        <Route exact path="/cities" component={CityPage}/>
        <Route exact path="/cities/new" component={NewCityForm}/>
        <Route exact path="/cities/:cityId/edit" component={EditCityForm}/>
        <Route exact path="/cities/:cityId/show" component={CityProfile}/>

        <Route exact path="/cities/:cityId/posts/new" component={NewPostForm}/>
        <Route exact path="/cities/:cityId/posts/" component={PostPage}/>
        <Route
          exact
          path="/cities/:cityId/posts/:postId/edit"
          component={EditPostForm}/>
        <Route exact path="/cities/:cityId/posts/:postId/show" component={PostShow}/>

        <Route exact path="/users" component={UserPage}/>
        <Route exact path="/users/new" component={NewUserForm}/>
        <Route exact path="/users/:userId/edit" component={EditUserForm}/>
        <Route exact path="/users/:userId/show" component={UserProfile}/>

      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root