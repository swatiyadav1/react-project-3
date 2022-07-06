import React from "react"
import memesData from "../memesData.js"
import "../style.css"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
const [meme,setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "https://i.imgflip.com/30b1gx.jpg"
});

const [allMemeImages,setAllMemeImages]= React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }
    
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
           [name]:value
        }))
    }
    
    return (
        <main>
     
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt=""/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}
            </h2>
            </div>
        </main>
    )
}