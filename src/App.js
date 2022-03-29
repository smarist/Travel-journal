
import './index.css';
import Nav from "../src/components/nav";
import Content from "../src/components/content";
import data from "./data"

export default function App() {
  const journal = data.map(function (item){
    return (
      <Content
      {...item}
      />
    )
  })
  return (
    <div>
        <Nav/>
        <section>
          {journal}
        </section>
        
    </div>
    
  );
}


