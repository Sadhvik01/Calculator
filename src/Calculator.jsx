
import React, {useState} from "react";
function Calculator (){

    const [user,setUser] = useState(" ");
    const calculator = (e) =>{
          setUser(user + e.target.value);
    }

    const del = (e) =>{
           setUser(user.slice(0, -1));
    }
    const Ac = (e)=>{
        setUser(" ");
    }
    const equal = (e) =>{
        setUser(eval(user));
    }
    return (
    <div className="container">
        <div className="sub-container">
            
            <div>
                <input type="text" placeholder="0" value={user}/>
           </div>
           <form>
        
             <div>
                <input type="button" value="AC" onClick={Ac}/>
                <input type="button" value="DEL" onClick={del} />  
                <input type="button" value="%" onClick={calculator}/>
                <input type="button" value="/" onClick={calculator}/>
             </div>
             <div>
             <input  type="button" value="7" onClick={calculator}/>
             <input  type="button" value="8" onClick={calculator}/>
             <input type="button" value="9" onClick={calculator}/>
             <input type="button" value="*" onClick={calculator}/>
             </div>
             <div>
             <input type="button" value="4" onClick={calculator}/>
             <input type="button" value="5" onClick={calculator}/>
             <input type="button" value="6" onClick={calculator}/>
             <input type="button" value="-" onClick={calculator}/>
             </div>
             <div>
             <input type="button" value="1" onClick={calculator}/>
             <input type="button" value="2" onClick={calculator}/>
             <input type="button" value="3" onClick={calculator}/>
             <input type="button" value="+" onClick={calculator}/>
             </div>
             <div>
             <input type="button" value="00" onClick={calculator}/>
             <input type="button" value="0" onClick={calculator}/>
             <input type="button" value="." onClick={calculator}/>
             <input type="button" value="=" onClick={equal}/>
             </div>
        </form>
        
                 
        </div>

    </div>
    );

};
export default Calculator;