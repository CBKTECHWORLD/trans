import React, { useState } from "react";
import VisaInfoPage from "../components/travel/visa";

const Travel: React.FC = () => {
    // const [activeTab, setActiveTab] = useState<"visa" | "passport">("visa");

    return (
        // <div className="bg-blue-700" style={{ display: "flex bg-white" }}>
        //     <div style={{ width: "200px", borderRight: "1px solid #eee", padding: "1rem 0" }}>
        //         <button
                   
        //             style={{ display: "block", width: "100%", padding: "1rem", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
        //             onClick={() => setActiveTab("visa")}
        //         >
        //             Visa Information
        //         </button>
        //         {/* <button
        //             style={{ display: "block", width: "100%", padding: "1rem", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
        //             onClick={() => setActiveTab("passport")}
        //         >
        //             Passport Information
        //         </button> */}
        //     </div>
        //     <div style={{ flex: 1, padding: "2rem" }}>
        //         {activeTab === "visa" && <VisaInfoPage />}
        //         {/* {activeTab === "passport" && <div>Passport page content goes here.</div>} */}
        //     </div>
        // </div>
        <div>
            <VisaInfoPage />
        </div>
    );
};

export default Travel;