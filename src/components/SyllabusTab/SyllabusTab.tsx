import React, { useState } from 'react'
import styles from './SyllabusTab.module.css'
import { TabPanel, TabView } from 'primereact/tabview'
import { PrimeReactProvider } from 'primereact/api';

interface SyllabusTabProps {
    tab1Prop?: string;
    tab2Prop?: string;
    tab3Prop?: string;
    tab4Prop?: string;
    isShowTab4?: boolean;
}

export default function SyllabusTab( {tab1Prop, tab2Prop, tab3Prop, tab4Prop, isShowTab4}: SyllabusTabProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabChange = (e:any) => {
        setActiveIndex(e.index);
    };

    return (
        <PrimeReactProvider>
            <div className={styles.container}>
                <TabView  activeIndex={activeIndex} onTabChange={handleTabChange}>
                    <TabPanel header={tab1Prop || "General"} headerClassName={activeIndex !== 0 ? styles.inactive : ''}>
                        {/* <p>Nội dung 1 ở đây nhen</p> */}
                    </TabPanel>

                    <TabPanel header={tab2Prop || "Outline"} headerClassName={activeIndex !== 1 ? styles.inactive : ''}>
                        {/* <p>Nội dung 2 ở đây nhen</p> */}
                    </TabPanel>

                    <TabPanel header={tab3Prop || "Outline"} headerClassName={activeIndex !== 2 ? styles.inactive : ''}>
                        {/* <p>Nội dung 3 ở đây nhen</p> */}
                    </TabPanel>

                    {isShowTab4 &&
                        <TabPanel header={tab4Prop || "Training Material"} headerClassName={activeIndex!== 3? styles.inactive : ''}>
                            {/* <p>Nội dung 4 ở đây nhen</p> */}
                        </TabPanel>
                    }

                </TabView>
            </div>
        </PrimeReactProvider>
    )
}
