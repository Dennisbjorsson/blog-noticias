import { lua } from "@/libis/luaPage/luaPage";
import { tesla } from "@/libis/tesla";
import { dispositivo } from "@/libis/dispositivo";
import GridLua from "@/component/girdlua"; 
import Title from "@/component/title";
import GridTesla from "@/component/gridTesla";
import GridDispositivo from "@/component/gridDispositivo";


export default function Home() {
  return (
    <main>
      <Title title="Notícias" />
      <GridLua lua={lua} />
      <GridTesla blog={tesla} />
      <GridDispositivo dispositivo={dispositivo} />
    
    </main>
  );
}