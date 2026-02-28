function ProductCard({name,price,inStock,emoji}){
  return(
    <div style = {styles.card}>
       <div style={styles.emojiBox}>{emoji}</div>
      <h2 style = {styles.name}>{name}</h2>
      <p style = {styles.price}>₹{price}</p>
      <span style = {{...styles.badge, backgroundColor: inStock ? "#308e33" : "#ac3930"}} >{inStock ? "✅ Available" : "❌ Sold Out"}</span>
    </div>
  )
}

const styles = {
  card:{
    border: "1px solid #e1e1e1",
    borderRadius: "16px",
    padding: "20px",
    width: "180px",
    height:"250px",
    textAlign: "center",
    fontFamily: "Arial",
    boxShadow: "2px 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#140c12"
  },
  emojiBox: {
  fontSize: "60px",
  margin: "10px 0"
  },

  name:{
    fontSize: "16px",
    margin: "10px 0 4px"
  },
  price:{
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ddc5c5",
    margin: "4px 0"
  },
  badge:{display: "inline-block",
    padding: "4px 12px",
    borderRadius: "20px",
    color: "white",
    fontSize: "13px",
    marginTop: "8px"
  }
};

export default ProductCard