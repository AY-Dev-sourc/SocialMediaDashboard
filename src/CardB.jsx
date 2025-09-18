

export default function CardB({Description,Icon,IconAlt,Number,Arrow,ArrowAlt,Rating,classRating}){

    return(
        <>
            <div className="CardB">
                <div className='CardBIntro'>
                    <p>{Description}</p>
                    <figure>
                        <img src={Icon} alt={IconAlt} />
                    </figure>
                </div>
                <div className='CardBInfo'>
                    <p>{Number}</p>
                    <div className="dataB">
                        <figure>
                            <img src={Arrow} alt={ArrowAlt} />
                        </figure>
                        <p className={classRating}>{Rating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}