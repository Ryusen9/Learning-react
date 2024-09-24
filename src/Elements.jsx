function Elements(){
    const background = {backgroundImage: "url(./public/1117424.png)"}
    const rickRoll = function(){
        location.href = "https://youtu.be/dQw4w9WgXcQ?si=O_IrSadd4GDWYdwm";
    }
    return(
        <div className="hero-container h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col gap-3" style={background}>
            <div className="image-container">
                <img src="./public/mikasa.png" alt="" className="w-72" />
            </div>
            <div className="text-center text-white font-medium backdrop-blur-sm py-5 px-4 rounded-xl border flex flex-col gap-4">
                <p className="text-4xl">Welcome to AniZone</p>
                <p className="text-lg">The ultimate anime streaming destination</p>
                <button className="bg-rose-400 py-3 rounded-xl w-40 mx-auto" onClick={rickRoll}>Get Started</button>
            </div>
        </div>
    );
}

export default Elements;