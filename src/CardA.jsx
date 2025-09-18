

export default function CardB({Icon,IconAlt,Name,Number,Arrow,ArrowAlt,Rating,className,classRating}){

    return(
        <>
            <div className={className}>
                <div className="CardHead">
                    <figure className="image">
                        <img src={Icon} alt={IconAlt} />
                    </figure>
                    <p className="CardName">
                        {Name}
                    </p>
                </div>
                <p className='Number'>{Number}</p>
                <p className='Description'>FOLLOWERS</p>
                <div className='Data'>
                    <figure>
                        <img src={Arrow} alt={ArrowAlt} />
                    </figure>
                    <p className={classRating}>{Rating}</p>
                </div>
                
            </div>
        </>
    )
}