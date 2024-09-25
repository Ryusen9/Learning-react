import profile from '../public/mikasa.png'
function Card(){
    return(
        <div className="card flex flex-col items-center justify-center gap-4 w-[300px] py-4 px-5 border-2 rounded-md my-3 mx-3 shadow-xl">
            <img src={profile} alt="" className="w-52 rounded-full shadow-lg"/>
            <p className='text-3xl font-semibold'>Mikasa Ackerman</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque excepturi sint officia aliquid, itaque quaerat voluptatem officiis, adipisci unde id rerum, autem expedita alias tenetur illum accusamus fugiat possimus!</p>
            <button className='bg-rose-500 py-2 px-4 rounded-md text-white'>Learn More</button>
        </div>
    )
}

export default Card;