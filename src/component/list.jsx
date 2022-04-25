// style
import { datetime , nametitle , listitem , delete_button } from "../style/style";

const List=({id , title , removeItem, symbol})=>{

    // set date and time
    const now = new Date();
    const objdate={
        day: 0,
        month: 0,
        year:0,
        hour: 0,
        minutes: 0
    };

    const date = [
        objdate.day = now.getDate(),
        objdate.month = now.getMonth()+1,
        objdate.year = now.getFullYear()
    ];

    const time = [
        objdate.hour = now.getHours(),
        objdate.minutes = now.getMinutes()
    ];

    // render
    const Showdate = `- ${date.join('/')}`; 
    const Showtime = `${time[0]}:${time[1]} นาที`;

    return(

        <>

        <div className="container">
            <div className="shadow-lg" style={listitem}>
                <h5 className="title" style={nametitle}>{symbol} {title} </h5> <span style={datetime} className="datetime"> {Showdate} &nbsp; &nbsp;{Showtime} </span>
            <div className="button-container">
                <h4 onClick={()=>removeItem(id)} className="btn" style={delete_button} >ลบ</h4>
            </div>  
            </div>
        </div>
        
        </>
        
    );
};

export default List