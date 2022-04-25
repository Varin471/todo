//  import module
import React, {useState , useEffect } from "react"
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// style
import '../style/App.css'
import '../style/style'
import { header , box , listcontainer , view } from '../style/style' 

// component
import List from './list';

function Content(){

    
    // state
    const [name,setName] = useState("");
    const [list,setList] = useState([]);
    const [value, setValue] = useState(new Date());


    // clock
    useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  },[]);



  // event 
  const submitData=(e)=>{

    const empty = [" ", "  ","   ","    ","     ","      "];
      e.preventDefault();

      if(!name){  // error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'โปรดใส่ชื่อเรื่องก่อน!'
          });
      }
      else if(list.length >=5){ // limit
        Swal.fire({
          icon: 'warning',
          title: 'ที่เก็บข้อมูลบันทึกเต็มแล้ว',
          text: 'โปรดเลือกรายการที่บันทึกบางอันแล้วลบออก!'
        });
        return false;
      } else if(name === empty.indexOf('0')){
            return false
      }
      else{   //create
        const symbol = ["• "];
        const newItem = {
          id:uuidv4(),
          title : name,
          symbol: symbol
        };
        setList([...list,newItem])
        setName('')
      };
  };


  // delete
  const removeItem=(id)=>{
      const result = list.filter((item)=>item.id !== id);
      setList(result);
  };

  // reset 
  const reset = ()=>{
        
    Swal.fire({
      title: 'คุณต้องการลบการบันทึกทั้งหมดหรือไม่?',
      text: "ถ้าคุณต้องการกดปุ่มใช่",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33FF00',
      cancelButtonColor: '#FF0033',
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ไม่'
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'สำเร็จ',
          'โปรแกรมทำการลบข้อมูลทั้งหมดเรียบร้อย',
          'success'
        );

        const delete_data = list.filter((item)=>{
          return !item
        });
        setList(delete_data);

      };})};


    return(
        <>

        <section style={{marginTop: '60px'}}></section>

        <div className="container">
            <div className="row g-4">
                <div className="col-lg-8 text-center"  style={box}><br /><br />

                    {/* clock */}
                    <div align="center">
                        <Clock value={value} />
                    </div>

        {/* frame */}
          <div style={view}>
            <h1 style={header}>โปรแกรมบันทึกข้อความ</h1><br/>
                <form className="form-group" onSubmit={submitData}>
                    <div>
                        <input type="text" placeholder="โปรดใส่ชื่อที่จะบันทีก" onChange={(e)=>setName(e.target.value)} value={name} style={{width: '15rem'}}/><br/>
                        <button type="submit" className="btn btn-primary mt-3">บันทึกข้อมูล</button>
                        <button type="reset" className="btn btn-danger mt-3 ms-1" onClick={reset}>ลบข้อมูล</button>
                    </div>
                </form>
            </div>
        </div>

        {/* note */}
        <div className="col-lg-4 text-center">
            <div style={listcontainer}>
              {list.map((data,index)=>{
                  return <List key={index} {...data} removeItem={removeItem}/>
              })}
            </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Content;