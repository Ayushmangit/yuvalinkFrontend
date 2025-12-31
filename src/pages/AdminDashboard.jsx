import {useEffect,useRef,useState} from "react"
import SideBar from "../components/SideBar";
import StatsPanel from "../components/StatsPanel";
import Chat from "../components/Chat";
import NewsFeed from "../components/NewsFeed";
export default function AdminDashboard(){
    const images = [
        "/d1.jpg","/d3.jpg","/d4.jpg","/d5.jpg","/d6.jpg"
    ];
    const[index,setIndex]=useState(0);
    const [activeBg, setActiveBg] = useState(images[0]);
    const [sidebarOpen,setSidebarOpen]=useState(false);
    const [showAllFeed,setShowAllFeed] = useState(false);
    const [chatOpen,setChatOpen]=useState(false);
    // const cardRefs = useRef([]);
    const next =()=>{
        setIndex((prev) =>{
          const newIndex = (prev +1)% images.length;
        setActiveBg(images[newIndex]);
        return newIndex;
        })
        
    };
    const prev=()=>{
        setIndex((index) =>{
        const newIndex =index ===0?images.length -1:index -1;
        setIndex(newIndex);
        setActiveBg (images[newIndex]); 
        return newIndex;});
    };
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries )=> {
    //             entries.forEach((entry) => {
    //                 if(entry.isIntersecting){
    //                      const index = cardRefs.current.indexOf(entry.target);
    //                      if(index !== -1){
    //                         setActiveBg(images[index])
    //                      }
    //                     }
    //                 }
    //             );
    //         },
    //         {threshold: 0.6}
    //     );
    //         cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    //         return () => { observer.disconnect(); };
    //     }, []);
    return (
        <>
    <div className ="relative h-screen bg-cover bg-center transition-all duration-700"
    style={{backgroundImage: `url(${activeBg})`}}>
        <div className ="absolute inset-0 bg-gradient-to-r from-bblack/40 to-black/20"></div>
        <button className="fixed top-2 left-2 z-[60] w-[50px] h-[44px] flex items-center justify-enter bg-[#1F3347] rounded-xl backdrop-blur-md"
         onClick={() => {
         setSidebarOpen(true)}}>
            <i className ="bi bi-list fs-1 "></i>
            </button>
        <div className="relative z-10 flex items-center jsutify-center h-full">
            <div className="bg-[#1F33457]/90 backdrop-blur-md px-12 py-6 rounded-2xl">
                 <h1 className="text-4xl font-bold text-white">Yuvalink</h1>
            </div>
            </div>
            </div>

        <div className="w-full h-[80vh] bg-[#1F3347]"></div> 
        <div className ="relative mx-auto -mt-[60vh] w-[72%] bg-white rounded-2xl shadow-2xl p-6 z-10">
            <div className="relative max-w-[1100px] mx-auto h-[300px] p-8">
                <button  onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2
                 w-12 h-12 rounded-full
                 bg-black/40 backdrop-blur-md
                 flex items-center justify-center
                 text-white text-2xl hover:scale-110 transition">
                <i className="bi bi-arrow-left"></i>
                </button>
                <img src={images[index]} 
                className="w-full h-full object-contain rounded-[20%]"
                alt="carousel"/>
                <button onClick={next}
                 className="absolute right-4 top-1/2 -translate-y-1/2
                 w-12 h-12 rounded-full
                 bg-black/40 backdrop-blur-md
                 flex items-center justify-center
                 text-white text-2xl hover:scale-110 transition" >
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
    {/* <div classNAme="live-feed-header">
        <h3>Live Disaster Feed</h3>
        <button className="view-all-btn"
        onClick={() => setShowAllFeed(true)}>
            View All
        </button>
    </div> */}
    <NewsFeed onViewAll={()=>setShowAllFeed(true)}/>   
        {/* <div className="image-card-section">
            {images.map((img, index) => (
                <div key ={index}
                ref ={(el) => (cardRefs.current[index] = el)}
                className ="image-card"
                    onClick={() => setActiveBg (img)}>
                    <img src={img} alt="backgriund option"/>
                    </div>
            ))}
                    
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
         <StatsPanel/>
        <Chat
        expanded={chatOpen}
        onExpand={()=>setChatOpen(true)}
        onClose={()=>setChatOpen(false)}
        />
        </div>
        </div>
         <SideBar 
            isOpen={sidebarOpen}
            onClose ={()=>setSidebarOpen(false)}
            onOpenNews={()=>{
                setShowAllFeed(true);
                setSidebarOpen (false);
            }}
            onChatClick={()=> setChatOpen(true)}
            />
        <section className="bg-[#1F3347] py-20 px-[12%] text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#2b5c8a]">About YuvaLink</h2>
            <p className="text-lg leading-relaxed text-white max-w-5xl mx-auto"> Yuvalink is a comprehensive volunteer mangement platform dedicated to connecting passionate individuals with meaningful disaster relief and community service opportunites across India.We believe in the power of collective action and coordinate volunteers with the skills needed to make real impact during critical times.</p>
        </section>

        <footer className="bg-[#183a55] py-10 text-center">
            <div className="flex justify-center gap-10 text-white text-base mb-5">
                <span className="cursor-pointer hover:underline">Privacy Policy</span>
                <span className="cursor-pointer hover:underline">Terms of Service</span>
                <span className="cursor-pointer hover:underline">Contact Us</span>
                <span className="cursor-pointer hover:underline">Partner Sites</span>
            </div>
        <p className="text-white/70 text-sm">
            2025 YuvaLink.ALL rights reserved.
        </p>
        </footer>

        {showAllFeed&&(
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center">
                <div className="w-[85%] max-w-[1200px] bg-white rounded-3xl p-6">
                    <div className="flex justify-between items-ccenter mb-5">
                        <h2 className="text-xl font-bold">Live Disaster Feeds</h2>
                        <button className="text-2xl text-gray-500 hover:text-black" onClick={()=>setShowAllFeed(false)}><i className="bi bi-x fs-3"></i></button>
                    </div>
                 <div className="grid grid-cold-1 md:grid-cols-3 gap-6">
                    {[1,2,3,4,5,6].map((_, i) => (
                        <div key={i}
                        className="bg-white rounded-2xl border border-black
                       p-5 shadow-md hover:-translate-y-1
                       transition cursor-pointer">
                            <h4 className="font-bold text-lg mb-2">Earthquake-Uttarakhand</h4>
                            <p className="text-gray-600 mb-3">Magnitude 5.1 earthquake detected</p>
                            <span className="text-sm text-gray-500">USGS * 6 mins ago</span>
                            <div className="flex justify-end mt-4">
                                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm hover:translate-x-1 transition">Activate</button>
                            </div>
                        </div>
                    ))}
                 </div>
                </div>
            </div>
        )}
         </>

    );

}