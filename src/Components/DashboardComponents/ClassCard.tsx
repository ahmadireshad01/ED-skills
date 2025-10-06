export default function ClassCard(props: any){
    return(
    <>
        <div className=" w-[404px] h-[244px] rounded-3xl bg-white flex flex-col items-center">
            {/*1st child div*/}
            <div className={`relative h-[106px] bg-[${props.bg}] w-[95%] rounded-3xl mt-2`}>
                <img className="absolute top-[0%]" src={props.image} alt="" />
                <span className="absolute top-[11%] left-[4%] px-2 flex justify-center items-center w-[98px] h-[31px] rounded-2xl font-ppMori font-semibold text-[14.61px] leading-[15.09px] tracking-[0%] text-center bg-white">Start: {props.startingTime}</span>
            </div>
            {/*2nd child div*/}
            <div className="gap-1 px-4 pt-5 p-2 flex flex-col items-baseline h-fit w-full">
                <span className={`flex items-center justify-center font-ppMori font-semibold text-[12.61px] leading-[15.09px] tracking-[0] text-center w-fit px-2 h-[19px] rounded-lg bg-[${props.bg}]`}>{props.subject}</span>
                <p className=" font-interTight font-semibold text-[19.95px] leading-[40.81px] tracking-[0] text-center">{props.topic}</p>
                <div className="flex items-center justify-between w-full">
                    <div className="flex h-[35px]">
                        <img className="z-10 border rounded-3xl border-white" src={props.participants.first} alt="" />
                        <img className="z-10 ml-[-10px] border rounded-3xl border-white" src={props.participants.second} alt="" />
                        <img className="z-10 ml-[-10px] border rounded-3xl border-white" src={props.participants.third} alt="" />
                        <div className="w-[33px] h-[33px] ml-[-10px] border rounded-3xl border-white bg-black text-white flex items-center justify-center">40+</div>
                    </div>
                    <button className="w-[98px] h-[35px] shadow-[0px_0.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] font-[roboto]  text-[16.66px] leading-[35.59px] tracking-[-0.02em] ">Start</button>
                </div>
            </div> 
        </div>
    </>
    )
}