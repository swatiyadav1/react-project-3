import React from "react"

export default function MemeForm(){

return(
<main>
    <form className="form">
        <input type="text" placeholder="top text" className="form--input" />
        <input type="text" placeholder="bottom text" className="form--input" />
        <button className="form--button">Get a new MEME image</button>
    </form>
</main>


)


}