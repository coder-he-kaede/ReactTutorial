import React,{useState} from 'react'

function About() {
    const [stylesheet, setstylesheet] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [butntext, setbutntext] = useState("Enable Dark Mode");

    const togglemode = ()=>{
        if(stylesheet.color=="black"){
            setstylesheet({
                color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
    
            })
            document.body.style.backgroundColor="black";
            document.title = "Transform - Dark mode";
            setbutntext("Enable Light Mode");
        }
        else{
            setstylesheet({
                color: 'black',
        backgroundColor: 'white',
            })
            document.body.style.backgroundColor="white";

            setbutntext("Enable Dark Mode");
            setInterval(() => {
              document.title = "buy our subscription";
            }, 2000);
        }
    }
  return (
    <div className='container my-5' style={stylesheet} >
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={stylesheet}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={stylesheet}>
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={stylesheet}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={stylesheet}>
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={stylesheet}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={stylesheet}>
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<button type="button" class="btn btn-success my-3" onClick={togglemode}>{butntext}</button>
    </div>
  )
}

export default About
