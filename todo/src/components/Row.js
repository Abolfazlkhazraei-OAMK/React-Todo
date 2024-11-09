import React from "react";


export default function Row({item,deleteTask}) {
    return (
        <div>
            <li key={item.id}>{item.description}
                
            </li>
            <button type='button' className='button' onClick={() => deleteTask(item.id)}>
                <span className="button__text"></span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width={512} viewBox="0 0 512 512" height={512} className="svg"><title />
                <path style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}}
                  d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" /><line y2={112} y1={112} x2={432} x1={80}
                  style={{stroke: '#323232', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 32}} />
                  <path style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} 
                  d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" /><line y2={400} y1={176} x2={256} x1={256} 
                  style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} />
                  <line y2={400} y1={176} x2={192} x1={184} style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} />
                  <line y2={400} y1={176} x2={320} x1={328} style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} /></svg>
                </span>
                Delete
            </button>
        </div>  
    );
}
