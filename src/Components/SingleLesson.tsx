export default function SingleLesson(props: any){
    return(
    <>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white py-4 sm:py-5 px-4 pr-4 sm:pr-6 rounded-2xl gap-3 sm:gap-0">
            <span className="flex items-center gap-3 sm:gap-4">
                <img
                    src="/images/SingleCourse/chepter.svg"
                    alt=""
                    className="w-8 h-8 sm:w-auto sm:h-auto"
                />
                <p className="text-[18px] sm:text-[23px] font-semibold">
                    {props.lessonName}
                </p>
            </span>
            <p className="text-[16px] sm:text-[21px] font-semibold">
                lesson {props.lessonNumber}
            </p>
        </div>
    </>
    )
}
