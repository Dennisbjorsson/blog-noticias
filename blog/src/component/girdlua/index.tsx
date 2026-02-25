import { artigos } from "@/types//types";
import CardLua from "../cardLua";
import styles from "./gridLua.module.css";


type Props = {                  

    lua: artigos[];
}


const GridLua = ({ lua }: Props) => {

   return(
     
     <section className={styles.grid}>
        {lua.map((post) => (

          <CardLua key={post.slug} lua={post} />
                ))}

            
            </section>
        

        )
}

export default GridLua;