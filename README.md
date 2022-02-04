# Secret Family Recipes

## ☝️ **Pitch**

- The Problem: Handwritten recipes are hard to keep organized and easy to access
- Solving the Problem: Secret Family Recipes provides a user friendly interface to digitally store and access family recipes.
- Mission Statement: keep your family recipes alive – preserve your secret recipes in a secure place

## ✅  **MVP**

1. `user` can sign-up / create an account by providing a unique `username(email)` and a `password`. 
2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. Authenticated `user` can Create, Update and Delete a `recipe` object. At a minimum, each `recipe` must have the following properties: 
        - Id: int or string? (something unique)
        - recipeName: string
        - Source: string
        - Serves: string
        - Prep Time: int
        - Cook Time: int
        - Ingredients: array
        - Instructions: array
        - Image: img

4. Authenticated `user` can view a list of created `recipes`.  A `recipe` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `email` and `password`.

### Heroku (frontend)

Deployed Url: https://secret-family-recipes-04.herokuapp.com/
