import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import SpoonacularData from '../views/SpoonacularData'
import RecipeDetails from '../views/RecipeDetails'
import UserMeals from '../views/UserMeals'
import MealPlanDetails from '../views/MealPlanDetails'
import AddMealPlan from '../views/AddMealPlan'
import UpdateMealPlan from '../views/UpdateMealPlan'
import MyRecipes from '../views/MyRecipes'
import MyRecipesCard from '../views/MyRecipesCard'


Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },

    {
      path: "/spoonacular",
      name: "spoonacular",
      component: SpoonacularData,
      meta: {
        requiresAuth: false
      }
    
    },
    {
        
      path: "/recipeDetails/:id",
      name: "recipeDetails",
      component: RecipeDetails,
      meta: {
        requiresAuth: false

      }
    },
    {
      path: "/meals",
      name: "userMeals",
      component: UserMeals,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/mealPlanDetails/:id",
      name: "mealPlanDetails",
      component: MealPlanDetails,
      meta: {
        requiresAuth: true
      }

    },

    {
      path: "/addMealPlan",
      name: "addMealPlan",
      component: AddMealPlan,
      meta: {
        requiresAuth: true
      }

    },
   
    {
      path: "/updateMealPlan/:id",
      name: "updateMealPlan",
      component: UpdateMealPlan,
      meta: {
        requiresAuth: true
      }


    },
    {
      path: "/myRecipes",
      name: "myRecipes",
      component:MyRecipes,
      meta: {
        requiresAuth: true
      }
    },


    {
      path: "/myRecipe/:id",
      name: "myRecipe",
      component:MyRecipesCard,
      meta: {
        requiresAuth: true
      }
    }
      
  ]


})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
