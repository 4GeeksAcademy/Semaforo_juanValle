import React, { useState } from "react";
const Semaforo =()=>{
    const [color, setColor]= useState(null)

    return (

    <div className="semaforo">
      
      <div className={`luz verde ${color === 'verde' ? 'go' : ''}`} onClick={() => setColor('verde')}></div>
      <div className={`luz ambar ${color === 'ambar' ? 'cuidado' : ''}`} onClick={() => setColor('ambar')}></div>
      <div className={`luz roja ${color === 'roja' ? 'stop' : ''}`} onClick={() => setColor('roja')}></div>
    </div>

    );
}

export default Semaforo;