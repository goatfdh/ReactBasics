function AboutMe(){
  const name = "Soumya";
  const funFact = "I love coding at midnight 🌙";

  const today =  new Date().toDateString();

  const hour = new Date().getHours();
  const greeting = hour < 18 ? "Good Morning 🌞" : "Good Evening 🌙";

  return (
    <div style = {styles.container}>
      <h1>{greeting}</h1>
      <h2 style={styles.name}>My name is {name}!</h2>
      <img
      src="https://picsum.photos/200/200" 
      alt="flower"
      style={{ width: "200px", borderRadius: "600px" }}  />
      <p>📅 Today is: {today}</p>
      <p>⚡ Fun Fact: {funFact}</p>
    </div>
  );
};

const styles = {
  container:{
    fontFamily: "Arial",
    padding: "30px",
    backgroundColor: "#9da4b8",
    borderRadius: "12px",
    maxWidth: "400px",
    height:"500px",
    margin: "40px auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  },
 name:{
  color:"black",
  fontFamily:"sans"
  
 }
}

export default AboutMe