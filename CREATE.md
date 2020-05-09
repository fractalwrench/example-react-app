The following (high-level steps) should be taken to setup a new React app which has all the useful defaults setup.

If you are pulling the repository from GitHub, you should run `npm install` before running anything as this will fetch the required `node_module` dependencies.

1. Run [Create React App](https://github.com/facebook/create-react-app)
2. Verify that the project works with `npm start`, `npm test`, and `npm run build`
3. Create a new repository on GitHub, and push the newly created project
4. Setup Continuous Integration to run your tests each time you push by using [GitHub Actions](https://github.com/fractalwrench/example-react-app/actions/new), and accepting the default. A green tick will appear on commits which are successful, and a red cross will appear if tests fail to run successfully
5. Create a pull request each time you want to make a change, and make sure the tests pass before merging your branch to master

