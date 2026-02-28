import { useState } from "react";

function LikeButton(){
  const[likes,setLikes] = useState(0);

  return(
    <div style={styles.container}>
      <div style = {styles.ribbon}>🎀</div>
      <h1 style={styles.title}>💖 Like Counter</h1>
      <p style={styles.count}>{likes}</p>
      <p style= {styles.label}>likes</p>
      <button style={styles.likeBtn}
        onClick={() => setLikes(likes + 1)}>❤️ Like</button>
      <button  style={{
          ...styles.resetBtn,
          opacity: likes === 0 ? 0.4 : 1,
          cursor: likes === 0 ? "not-allowed" : "pointer"
        }}
         onClick={() => setLikes(0)}
        disabled={likes === 0}> 🔄 Reset</button>
    </div>
  );
}

const styles = {
  container:{ 
    backgroundColor:"#643c61",
     textAlign: "center",
    fontFamily: "Arial",
    marginTop: "67px",
    borderRadius:"69px"
  },
  title:{
    fontSize: "78px",
    marginBottom: "5px",
    color:"#dcbfdf"
  },
  count:{
     fontSize: "80px",
    fontWeight: "bold",
    color: "#eabbcb",
    margin: "0"
  },
  label:{
    fontSize: "18px",
    color: "gray",
    marginBottom: "30px"
  },
  likeBtn:{
    backgroundColor: "#9d3457",
    color: "white",
    border: "none",
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    marginRight: "12px",
    marginBottom:"20px",
     width: "auto"
  },
  resetBtn:{
    backgroundColor: "#385360",
    color: "white",
    border: "none",
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    width: "auto"
  },

  ribbon:{
    fontSize:"50px",
    textAlign:"left",
    display:"flex",
  }
};

export default LikeButton
