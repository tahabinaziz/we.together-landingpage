const Vorteile =(props)=>{
    return(
        <>
<div className="flex grid-cols-2 gap-8 mt-4">
  <div className="col-span-1 flex justify-center items-center">
    <p className="text-5xl text-primary font-bold font-noto">{props.number}</p>
  </div>
  <div className="col-span-1">
    <p className="mb-2 text-lg font-semibold font-sans text-textColor">{props.text1}</p>
    <p className="text-base text-left text- font-sans text-textColor">{props.text2}</p>
  </div>
</div>

        </>
    )
}

export default Vorteile;