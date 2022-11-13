import React,{useState} from "react";
import { Tabs } from "../Tabs/Tabs";
import { ITab } from "../Tabs/Tabs";
import Mobileport from "../Mobilport/Mobileport";
import Botport from "../Botport/Botport";
import Webport from "../Webport/Webport";



export default function Portfolio(){
    
    const tabs:ITab[] =[
        {id: '1', label: 'Web app'},
        {id: '2', label: 'Mobile app'},
        {id: '3', label: 'Bot'}
    ]

   
    const [selected, setSelected] = useState(tabs[0].id)
    const handleTabClick = (id:string | number)=>{
        setSelected(id)
        
    }
    return(
                 <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
                <h1 className="section-title-01">Работы</h1>
                <h2 className="section-title-02">Работы</h2>
                    <Tabs tabs={tabs} selectedId={selected} onClick={handleTabClick}/>
                    {selected === tabs[0].id && (
                            <Webport/>
                        )}
                        {selected === tabs[1].id && (
                            <Mobileport/>
                        )}
                        {selected === tabs[2].id && (
                            <Botport/>
                        )}
                
            </div>
            </section>
        
    )
}