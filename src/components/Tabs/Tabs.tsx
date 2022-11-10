import React from "react";
import classNames from "classnames";

import './tabs.scss';

export interface ITab{
    id: string | number;
    label?: string | number;
}

export interface ITabsProps {
    className?: string ;
    tabs: ITab[];
    selectedId: string | number;
    onClick:(id: string | number) => void;
}

export const Tabs: React.FC<ITabsProps> = ({className, tabs, selectedId, onClick })=>{
    return(
        <div className={classNames('Tabs', className)}>
            {tabs && tabs.map(tab => (
                <div className={classNames('Tab',{
                    Tab__selected: tab.id === selectedId,
                })}
                key={tab.id}
                onClick={()=>onClick(tab.id)}
                >
                    <div className={classNames('Tablabel',{
                        TabLabel__selected: tab.id === selectedId,
                    })}>
                        {tab.label}
                    </div>
                </div>
            ))}
        </div>
    )
}