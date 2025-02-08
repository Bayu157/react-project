 import Gambar from "../assets/Img/Shangri-La-FrontierV1_.jpg"

export default function SeriesCard() {
    return (
        <div className="relative size-76 max-w-xs max-h-full overflow-hidden rounded-2xl shadow-lg group">
            <img src={Gambar} alt="" className=" transition-transform group-hover:scale-105 duration-400"/>
            <div className="absolute flex items-end bg-gradient-to-t from-black/60 tc">
                <div className="p-4 w-full text white"></div>
            </div>
        </div>
    )
};