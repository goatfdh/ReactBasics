function ProfileCard(){
  return (
    <div style = {styles.card}>
      <img
        src = "https://i.pravatar.cc/100"
        alt = "avatar"
        style = {styles.avatar}
      />

      <h2 style = {styles.name}>Soumya</h2>

      <p style = {styles.job}>College Student</p>

     

    </div>
    
  );
}

const styles = {
  card:{ 
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "20px",
    width: "400px",
    height:"600px",
    textAlign: "center",
    fontFamily: "Arial",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
  },
  avatar:{ 
    borderRadius: "50%",
    width: "80px",
    height: "80px"
  },
  name:{
    margin: "10px 0 4px",
    fontSize: "18px"
  },
  job:{
    color: "gray",
    fontSize: "14px"}
}

export default ProfileCard