import react, { useState } from "react";

const MyButton = () => {

    const [data,setData] = useState(true);
const Show = () =>{
 
    setData(false);
    if(data == true){
        alert("😇")
    }
    else{
        alert("Sad😥")
        setData(true);

    }
}

    return(

<center>
        <div>
 
 <button  onClick={Show}>Click me</button>



</div>
</center>
    )

}

export default MyButton;