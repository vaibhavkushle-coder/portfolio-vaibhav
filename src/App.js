import "./App.css";

function App(){
  return(
  
  
    <div style={{
      fontFamily:"Arial",
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-start",
      padding:"30px",
      minHeight:"100vh",
      background:"linear-gradient(135deg,#667eea,#764ba2)"

    }}>
      <div style={{
        background:"white",
        padding:"30px",
        borderRadius:"12px",
        width:"400px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.9)",
        animation:"fadeIn 0.8s ease",
        marginTop:"30px",
        marginBottom:"30px"
      }}>

      <h1 style={{ marginBottom:"5px",textAlign:"center"}}>👋Hi,I'm Vaibhav</h1>
      <p style={{marginBottom:"20px",textAlign:"center",color:"gray"}}>Web Developer (React)</p>

<h2 style={{marginBottom:"10px"}}>💻Skills</h2>

<div>
  <span style={{background:"#eee",padding:"5px 10px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px",display:"inline-block"}}>HTML</span>
  <span style={{background:"#eee",padding:"5px 10px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px",display:"inline-block"}}>CSS</span>
  <span style={{background:"#eee",padding:"5px 10px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px",display:"inline-block"}}>JavaScript</span>
  <span style={{background:"#eee",padding:"5px 10px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px",display:"inline-block"}}>React</span>
</div>

      <h2 style={{marginBottom:"10px"}}>🚀Projects</h2>



      <div style={{
        background:"#f9f9f9",                             
        padding:"15px",
        borderRadius:"10px",
        marginBottom:"15px",
        transition:"0.3s"
      }}
        onMouseEnter={(e)=>
        e.currentTarget.style.transform="scale(1.03)"}
        onMouseLeave={(e)=>
        e.currentTarget.style.transform="scale(1)"}>

          <h3>🧮Calculator App</h3>
          <p>React Calculator with operator validation and decimals</p>

          <p style={{
            fontSize:"14px",
            color:"gray",
          }}>Features: Add, Subtract, Multiply, Divide, Backspace, Error handling</p>

          <a
          href="https://calculetor-indol.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color:"blue",
            textDecoration:"none",
            fontWeight:"bold",
            cursor:"pointer"
          }}
          onMouseEnter={(e)=>e.target.style.color="darkblue"}
          onMouseLeave={(e)=>e.target.style.color="blue"}>
          🔗Live Demo
          </a>
          </div>



          <div style={{
             background:"#f9f9f9",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"15px",
            transition:"0.3s"
          }}
           onMouseEnter={(e)=>
        e.currentTarget.style.transform="scale(1.03)"}
        onMouseLeave={(e)=>
        e.currentTarget.style.transform="scale(1)"}>
            <h3>🌤️Weather App</h3>
            <p>real-time weather app using OpenWeatherMap API</p>
            <p style={{fontSize:"14px",color:"gray",}}>Features: Search city, Temperature, Weather conditions, Error handiling</p>
            <a
            href="https://weather-app-gold-rho-76.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color:"blue",
              textDecoration:"none",
              fontWeight:"bold",
              cursor:"pointer"
            }}
            onMouseEnter={(e)=>e.target.style.color="darkblue"}
            onMouseLeave={(e)=>e.target.style.color="blue"}>
            🔗Live Demo
            </a>
          </div>


          

          <div style={{
            background:"#f9f9f9",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"15px",
            transition:"0.3s"
          }}
           onMouseEnter={(e)=>
        e.currentTarget.style.transform="scale(1.03)"}
        onMouseLeave={(e)=>
        e.currentTarget.style.transform="scale(1)"}>

        <h3>📝Todo App</h3>
        <p>React Todo App with LocalStorage, Filter,Search</p>

        <p style={{fontSize:"14px",color:"gray",}}>Features: Add, Edit, Delete, filter, Search, LocalStorage</p>

<p style={{fontSize:"13px",color:"red",fontWeight:"bold"}}>More projects coming soon...</p>

        <a href="https://todo-app-gilt-ten-99.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color:"blue",
          textDecoration:"none",
          fontWeight:"bold",
          cursor:"pointer"
        }}
        onMouseEnter={(e)=>e.target.style.color="darkblue"}
        onMouseLeave={(e)=>e.target.style.color="blue"}
        >
          🔗Live Demo
        </a>
      </div>

      

      <h2>📞 Contact</h2>
      <p style={{color:"gray"}}>Email: rajakushle111@gmail.com</p>

    </div>
    </div>
  );
}
export default App;