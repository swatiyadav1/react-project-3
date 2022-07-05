import React from "react"


export default function MemeForm(){

const [meme,setMeme] = React.useState(
    {
        topText : "",
        bottomText: "",
        randomImage : "https://i.imgflip.com/345v97.jpg"
    }
);

const [allMemes,setallMemes]=React.useState([]);

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setallMemes(data.data.memes))
},[])


    function getMemeImage(){
        const memesArray = allMemes.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);

        const url = memesArray[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }));

    }
return(
<main>
    <form className="form">
        <input type="text" placeholder="top text" className="form--input" />
        <input type="text" placeholder="bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>Get a new MEME image</button>
    </form>
    <img src={meme.randomImage} className="meme--image" alt="not load"/>
</main>


)


}