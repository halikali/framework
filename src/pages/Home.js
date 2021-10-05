import { setTitle } from "../core/denge";

const Home = () => {
  const author = "ali";
  setTitle("Home Page");
  return `
            <ul>
                <li> Hello World!! -- ${author}</li>
            </ul>
        `;
};

export default Home;
